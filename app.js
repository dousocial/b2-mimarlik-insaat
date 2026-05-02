const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const icons = {
  init() {
    if (window.lucide) window.lucide.createIcons();
  }
};

function initNavbar() {
  const header = $(".site-header");
  const update = () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled", y > 24);
    header?.classList.toggle("compact", y > 160);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });

  const menu = $("#mobileMenu");
  $$(".hamburger").forEach((btn) => btn.addEventListener("click", () => {
    menu?.classList.add("open");
    document.body.classList.add("menu-open");
  }));
  $$(".close-menu, .mobile-menu a").forEach((el) => el.addEventListener("click", () => {
    menu?.classList.remove("open");
    document.body.classList.remove("menu-open");
  }));
}

function initModals() {
  const openModal = (id) => {
    const modal = $(id);
    if (!modal) return;
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    if (id === "#videoModal") {
      const cta = $(".video-cta", modal);
      cta?.classList.remove("show");
      window.setTimeout(() => cta?.classList.add("show"), 4500);
    }
  };
  const closeModal = (modal) => {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  };
  window.openModal = openModal;

  $$("[data-modal]").forEach((btn) => btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(btn.dataset.modal);
  }));
  $$(".modal").forEach((modal) => {
    $$(".close, .modal-backdrop", modal).forEach((el) => el.addEventListener("click", () => closeModal(modal)));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") $$(".modal.open").forEach(closeModal);
  });
}

function initSmoothLinks() {
  $$("[data-scroll]").forEach((el) => el.addEventListener("click", (e) => {
    const target = $(el.dataset.scroll);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (target.matches(".contact-form, form")) {
      window.setTimeout(() => target.classList.add("highlight"), 650);
      window.setTimeout(() => target.classList.remove("highlight"), 2000);
    }
  }));
}

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: .14 });
  $$(".reveal").forEach((el) => io.observe(el));
}

function initCounters() {
  const counters = $$("[data-count]");
  const run = (el) => {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1700;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) run(entry.target);
    });
  }, { threshold: .45 });
  counters.forEach((el) => io.observe(el));
}

function initHeroIndex() {
  const index = $(".page-index");
  if (!index) return;
  const buttons = $$("button[data-target]", index);
  const sections = buttons.map((btn) => $(btn.dataset.target)).filter(Boolean);
  const fill = $(".progress-fill", index);
  buttons.forEach((btn) => btn.addEventListener("click", () => $(btn.dataset.target)?.scrollIntoView({ behavior: "smooth" })));
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const percent = max ? Math.min(window.scrollY / max, 1) * 100 : 0;
    if (fill) fill.style.setProperty("--progress", `${percent}%`);
    let active = 0;
    sections.forEach((section, i) => {
      if (window.scrollY + innerHeight * .45 >= section.offsetTop) active = i;
    });
    buttons.forEach((btn, i) => btn.classList.toggle("active", i === active));
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initProcessHome() {
  const wrap = $("[data-process-home]");
  if (!wrap) return;
  const image = $(".process-image", wrap);
  const panel = $(".step-panel", wrap);
  const steps = $$(".step-item", wrap);
  const data = [
    {
      img: "assets/process-analysis.jpg",
      text: "İşlev programı, kullanıcı profili, bütçe ve zaman hedeflerinin birlikte netleştiği analiz aşaması.",
      time: "3-5 gün",
      output: "İhtiyaç programı, metraj, kapsam raporu"
    },
    {
      img: "assets/process-design.jpg",
      text: "Yaratıcı fikirler, uygulanabilir konseptler ve mekansal kararlar geliştirilir.",
      time: "2-4 hafta",
      output: "Konsept paftaları, 3D görseller, ilk malzeme kararları"
    },
    {
      img: "assets/process-implementation.jpg",
      text: "Detaylı teknik çizimler, uygulama planları, metraj ve saha hazırlıkları tamamlanır.",
      time: "6-16 hafta",
      output: "Uygulama projesi, iş programı, kontrol listeleri"
    },
    {
      img: "assets/process-delivery.jpg",
      text: "Şantiye yönetimi, kalite kontrol, proje teslimi ve uzun vadeli destek sağlanır.",
      time: "Proje kapsamına göre",
      output: "Saha raporları, teslim dosyası, satış sonrası destek"
    }
  ];
  let activeIndex = -1;
  const setActive = (i, open = false) => {
    if (i === activeIndex && panel?.classList.contains("open") === open) return;
    activeIndex = i;
    steps.forEach((step, idx) => step.classList.toggle("active", idx === i));
    if (image && image.getAttribute("src") !== data[i].img) {
      image.classList.add("is-changing");
      window.setTimeout(() => {
        image.src = data[i].img;
        image.onload = () => image.classList.remove("is-changing");
      }, 160);
    }
    if (panel) {
      panel.innerHTML = `<h3>${steps[i].querySelector("h3").textContent}</h3><p>${data[i].text}</p><dl><div><dt>Ortalama Süre</dt><dd>${data[i].time}</dd></div><div><dt>Müşteri Ne Alır?</dt><dd>${data[i].output}</dd></div></dl>`;
      panel.classList.toggle("open", open);
    }
  };
  const updateFromScroll = () => {
    const start = wrap.offsetTop;
    const end = start + wrap.offsetHeight - innerHeight;
    const raw = (scrollY - start + innerHeight * .18) / Math.max(end - start, 1);
    const progress = Math.min(Math.max(raw, 0), 1);
    const index = Math.min(steps.length - 1, Math.max(0, Math.floor(progress * steps.length)));
    setActive(index, panel?.classList.contains("open"));
  };
  steps.forEach((step, i) => step.addEventListener("click", () => {
    const target = wrap.offsetTop + ((wrap.offsetHeight - innerHeight) * (i / Math.max(steps.length - 1, 1)));
    window.scrollTo({ top: target, behavior: "smooth" });
    setActive(i, true);
  }));
  window.addEventListener("scroll", updateFromScroll, { passive: true });
  window.addEventListener("resize", updateFromScroll);
  setActive(0);
  updateFromScroll();
}

function initSlider() {
  $$("[data-slider]").forEach((slider) => {
    const row = $("[data-slider-row]", slider);
    $$("[data-slide]", slider).forEach((btn) => btn.addEventListener("click", () => {
      const dir = btn.dataset.slide === "next" ? 1 : -1;
      row?.scrollBy({ left: dir * 320, behavior: "smooth" });
    }));
  });
}

function initProjectFilters() {
  const grid = $("#projectGrid");
  if (!grid) return;
  const cards = $$(".project-card[data-category]", grid);
  const tabs = $$("[data-filter]");
  const setFilter = (filter) => {
    tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === filter));
    cards.forEach((card) => {
      const ok = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden-soft", !ok);
    });
    const url = new URL(location.href);
    filter === "all" ? url.searchParams.delete("category") : url.searchParams.set("category", filter);
    history.replaceState(null, "", url);
  };
  tabs.forEach((tab) => tab.addEventListener("click", () => setFilter(tab.dataset.filter)));
  const params = new URLSearchParams(location.search);
  setFilter(params.get("category") || "all");

  const sortBtn = $("#sortBtn");
  const sortMenu = $("#sortMenu");
  sortBtn?.addEventListener("click", () => sortMenu?.classList.toggle("open"));
  $$("[data-sort]").forEach((btn) => btn.addEventListener("click", () => {
    const key = btn.dataset.sort;
    const sorted = cards.sort((a, b) => Number(b.dataset[key] || 0) - Number(a.dataset[key] || 0));
    sorted.forEach((card) => grid.appendChild(card));
    sortMenu?.classList.remove("open");
  }));
}

function initSidePanels() {
  $$("[data-panel-open]").forEach((btn) => btn.addEventListener("click", () => {
    $(btn.dataset.panelOpen)?.classList.add("open");
    document.body.classList.add("panel-open");
  }));
  $$(".side-panel").forEach((panel) => {
    $$(".panel-backdrop, .close", panel).forEach((el) => el.addEventListener("click", () => {
      panel.classList.remove("open");
      document.body.classList.remove("panel-open");
    }));
  });
}

function initAccordions() {
  $$(".acc-trigger").forEach((btn) => btn.addEventListener("click", () => {
    btn.closest(".acc-item")?.classList.toggle("open");
  }));
}

function initTimeline() {
  const nodes = $$(".timeline-node, .process-stage");
  if (!nodes.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: .42 });
  nodes.forEach((node) => io.observe(node));
  $$("[data-stage-target]").forEach((btn) => btn.addEventListener("click", () => {
    $(btn.dataset.stageTarget)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }));
}

function initBlog() {
  const cards = $$(".blog-card[data-category]");
  if (!cards.length) return;
  const search = $("#blogSearch");
  const tabs = $$("[data-blog-filter]");
  const apply = (category = $(".tab.active")?.dataset.blogFilter || "all") => {
    const q = (search?.value || "").toLowerCase();
    tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.blogFilter === category));
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const okCat = category === "all" || card.dataset.category === category;
      const okText = !q || text.includes(q);
      card.style.display = okCat && okText ? "" : "none";
    });
    const url = new URL(location.href);
    category === "all" ? url.searchParams.delete("category") : url.searchParams.set("category", category);
    history.replaceState(null, "", url);
  };
  tabs.forEach((tab) => tab.addEventListener("click", () => apply(tab.dataset.blogFilter)));
  search?.addEventListener("input", () => apply());
  search?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") apply();
  });
  apply(new URLSearchParams(location.search).get("category") || "all");

  const newsletter = $("#newsletterForm");
  newsletter?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("input", newsletter);
    const status = $(".form-status", newsletter);
    const value = input?.value.trim() || "";
    if (!value) status.textContent = "Lütfen e-posta adresinizi girin.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) status.textContent = "Geçerli bir e-posta adresi girin.";
    else status.textContent = "Aboneliğiniz başarıyla alındı.";
  });
}

function initForms() {
  $$("form[data-enhanced-form]").forEach((form) => {
    const submit = $("[type='submit']", form);
    const status = $(".form-status", form);
    const validate = () => {
      const fields = $$("[required]", form);
      const ok = fields.every((field) => field.type === "checkbox" ? field.checked : field.value.trim());
      if (submit) submit.disabled = !ok;
      return ok;
    };
    form.addEventListener("input", validate);
    form.addEventListener("change", validate);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate()) {
        if (status) status.textContent = "Lütfen zorunlu alanları tamamlayın.";
        return;
      }
      submit.textContent = "Gönderiliyor...";
      window.setTimeout(() => {
        submit.textContent = submit.dataset.done || "Mesaj Gönder";
        if (status) status.textContent = "Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.";
        form.reset();
        validate();
      }, 900);
    });
    $$("input[type='tel']", form).forEach((input) => input.addEventListener("input", () => {
      const digits = input.value.replace(/\D/g, "").slice(0, 11);
      const p = digits.padEnd(11, "_");
      input.value = `${p[0] || "0"} (${p.slice(1, 4)}) ${p.slice(4, 7)} ${p.slice(7, 9)} ${p.slice(9, 11)}`.replace(/_/g, "");
    }));
    validate();
  });
}

function initZoraPortfolio() {
  const wrap = $("[data-zora-carousel]");
  if (!wrap) return;
  const viewport = $(".zora-carousel-viewport", wrap);
  const step = () => Math.min(520, Math.max(260, innerWidth * .72));
  $("[data-zora-next]", wrap)?.addEventListener("click", () => {
    viewport?.classList.add("is-manual");
    viewport?.scrollBy({ left: step(), behavior: "smooth" });
  });
  $("[data-zora-prev]", wrap)?.addEventListener("click", () => {
    viewport?.classList.add("is-manual");
    viewport?.scrollBy({ left: -step(), behavior: "smooth" });
  });

  const lightbox = $("#zoraLightbox");
  const image = $("img", lightbox);
  const close = () => {
    lightbox?.classList.remove("open");
    document.body.classList.remove("modal-open");
  };
  $$("[data-lightbox]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!lightbox || !image) return;
      image.src = button.dataset.lightbox;
      lightbox.classList.add("open");
      document.body.classList.add("modal-open");
    });
  });
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.closest("[data-lightbox-close]")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox?.classList.contains("open")) close();
  });
}

function initParallax() {
  const els = $$("[data-parallax]");
  if (!els.length) return;
  if (innerWidth < 681) return;
  const update = () => {
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top - innerHeight / 2) * -.025;
      el.style.setProperty("--parallax", `${offset}px`);
      const img = $("img", el);
      if (img) img.style.transform = `translateY(${offset}px) scale(1.05)`;
    });
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  $$(".hero").forEach((hero) => hero.addEventListener("mousemove", (e) => {
    const img = $(".hero-media img", hero);
    if (!img || innerWidth < 900) return;
    const x = (e.clientX / innerWidth - .5) * 10;
    const y = (e.clientY / innerHeight - .5) * 8;
    img.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  icons.init();
  initNavbar();
  initModals();
  initSmoothLinks();
  initReveal();
  initCounters();
  initHeroIndex();
  initProcessHome();
  initSlider();
  initProjectFilters();
  initSidePanels();
  initAccordions();
  initTimeline();
  initBlog();
  initForms();
  initZoraPortfolio();
  initParallax();
});
