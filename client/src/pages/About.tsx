import { useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  Check,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type Lang = "tr" | "en";

const CONTENT = {
  tr: {
    meta: {
      title: "B² Mimarlık & İnşaat | Hakkımızda",
      description:
        "B² Mimarlık & İnşaat; mimari tasarım, iç mimari ve anahtar teslim uygulamayı tek çatı altında birleştiren tasarım ve yapım ofisidir.",
    },
    brandNav: "B² Mimarlık",
    brand: "B² Mimarlık & İnşaat",
    tagline: "İki Çizgi, Tek İmza",
    contactSection: {
      address: "Denizli, Türkiye",
    },
    nav: {
      about: "Hakkımızda",
      projects: "Projeler",
      services: "Hizmetler",
      blog: "Blog",
      contact: "İletişim",
      cta: "İletişime Geç",
      themeAria: "Temayı değiştir",
      langAria: "Dili değiştir",
    },
    hero: {
      eyebrow: "Kurumsal Kimlik",
      title: "Hakkımızda.",
      lead:
        "Mimari tasarım ile mühendislik ve saha deneyimini bir araya getiren denge.",
      detail:
        "B² Mimarlık & İnşaat olarak mimari tasarımın estetik gücünü, mühendisliğin teknik doğruluğunu ve saha deneyiminin gerçekliğini aynı potada buluşturuyoruz. Fikir aşamasından anahtar teslim sürecine kadar tüm adımları bütüncül bir yaklaşımla ele alıyor, detaylara verdiğimiz önemle projeleri nitelikli sonuçlara dönüştürüyoruz. Amacımız yalnızca yapı üretmek değil; dengeli, zamansız ve kullanıcı odaklı yaşam alanları oluşturarak her projede değer üreten bir iş ortağı olmaktır.",
    },
    story: {
      title: "Biz Kimiz?",
      p1:
        "B² Mimarlık & İnşaat, iki farklı disiplinin ortak aklından doğan bir tasarım ve yapım ofisidir. Her projede dengeli, uygulanabilir ve karakterli mekânlar üretmeyi hedefler.",
      p2:
        "Kurucu ortakların farklı uzmanlık alanlarından gelen tecrübeleri, projelerin hem tasarım hem de uygulama süreçlerinde güçlü ve bütüncül çözümler sunmasını sağlar.",
      cta: "Projelerimizi İnceleyin",
    },
    tabs: {
      hikaye:
        "B² Mimarlık & İnşaat, sektörde edinilen yıllara dayanan saha tecrübesi ile mimari bakış açısının birleşmesiyle kuruldu. Kurulduğumuz günden bu yana hedefimiz yalnızca yapılar inşa etmek değil; insanların içinde yaşamaktan keyif aldığı, estetik değeri yüksek ve uzun yıllar değerini koruyan mekânlar üretmek oldu. Her projeye özgün bir yaklaşım geliştirerek, tasarım sürecinden uygulamaya kadar tüm aşamaları titizlikle yönetiyor ve kalıcı izler bırakan yapılar ortaya koyuyoruz.",
      vizyon:
        "Geleceğin şehirlerini ve yaşam alanlarını tasarlarken yenilikçi düşünceyi, sürdürülebilirliği ve çevreye duyarlı mimari anlayışı merkezimize alıyoruz. Amacımız, yalnızca bugünün ihtiyaçlarına cevap veren değil; yarının beklentilerini de öngören çözümler geliştirerek sektörde yön veren, güven duyulan ve ilham veren bir marka olmaktır. Teknolojiyi, tasarımı ve mühendisliği bir araya getirerek her projede fark yaratan bir yaklaşım benimsiyoruz.",
      misyon:
        "Misyonumuz; kalite, güven ve şeffaflık ilkelerini her projenin temelinde konumlandırarak müşterilerimize uçtan uca kusursuz bir süreç sunmaktır. Tasarım, mühendislik ve uygulama aşamalarını koordineli şekilde yönetirken; zamanında teslim, doğru maliyet yönetimi ve yüksek işçilik standardını önceliklendiriyoruz. Her ölçekte projede sürdürülebilir, fonksiyonel ve estetik çözümler üreterek müşterilerimizin beklentilerini aşmayı hedefliyoruz.",
    },
    values: [
      {
        title: "Tek Elden Yönetim",
        desc:
          "Tasarımından anahtar teslim uygulamaya kadar tüm süreci eksiksiz ve profesyonelce yönetiyoruz.",
      },
      {
        title: "Bütüncül Yaklaşım",
        desc:
          "Mimarlık ve mühendisliğin kusursuz dengesini sağlayarak estetik ve fonksiyonu birleştiriyoruz.",
      },
      {
        title: "Profesyonel Ekip",
        desc:
          "Müşterilere güvenilir ve her detayı düşünülmüş net sonuçlar sunan uzman kadro.",
      },
    ],
    footer: {
      quickLinks: "Hızlı Linkler",
      contact: "İletişim",
      rights: "Tüm hakları saklıdır.",
      links: {
        about: "Hakkımızda",
        projects: "Projeler",
        blog: "Blog",
      },
    },
  },
  en: {
    meta: {
      title: "B² Architecture & Construction | About",
      description:
        "B² Architecture & Construction unifies architectural design, interior architecture, and turnkey delivery under one roof.",
    },
    brandNav: "B² Architecture",
    brand: "B² Architecture & Construction",
    tagline: "Two Lines, One Signature",
    contactSection: {
      address: "Denizli, Turkey",
    },
    nav: {
      about: "About",
      projects: "Projects",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      cta: "Get in Touch",
      themeAria: "Toggle theme",
      langAria: "Switch language",
    },
    hero: {
      eyebrow: "Corporate Identity",
      title: "About Us.",
      lead:
        "The balance that unites architectural design with engineering and site experience.",
      detail: "",
    },
    story: {
      title: "Who We Are",
      p1:
        "B² Architecture & Construction is a design-and-build studio born from the collaboration of two disciplines, aiming for balanced, buildable, and distinctive spaces.",
      p2:
        "The founders’ complementary expertise enables strong, integrated solutions across both design and execution.",
      cta: "View Our Projects",
    },
    tabs: {
      hikaye:
        "B² Architecture & Construction was founded by bringing years of individual experience under one roof. Our aim is to create livable, aesthetic, and lasting spaces.",
      vizyon:
        "To lead the industry with sustainable, innovative, and human-centered architectural solutions for future cities and living spaces.",
      misyon:
        "To combine engineering rigor with aesthetics and functionality by understanding client needs in depth.",
    },
    values: [
      {
        title: "Single-Point Delivery",
        desc:
          "We manage the full journey from design to turnkey execution with clear, professional control.",
      },
      {
        title: "Holistic Approach",
        desc:
          "We merge architecture and engineering to deliver refined aesthetics and functionality together.",
      },
      {
        title: "Expert Team",
        desc:
          "A reliable team focused on clear outcomes and thoughtful details.",
      },
    ],
    footer: {
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved.",
      links: {
        about: "About",
        projects: "Projects",
        blog: "Blog",
      },
    },
  },
} as const;

const TABS: Array<{ id: "hikaye" | "vizyon" | "misyon"; label: string }> = [
  { id: "hikaye", label: "Hikayemiz" },
  { id: "vizyon", label: "Vizyonumuz" },
  { id: "misyon", label: "Misyonumuz" },
];

export default function About() {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "tr";
    const stored = localStorage.getItem("lang");
    if (stored === "tr" || stored === "en") return stored;
    return "tr";
  });
  const [activeTab, setActiveTab] = useState<"hikaye" | "vizyon" | "misyon">(
    "hikaye"
  );
  const t = CONTENT[lang];

  useEffect(() => {
    if (typeof document === "undefined") return;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute("content", value);
      }
    };
    setMeta('meta[name="description"]', t.meta.description);
  }, [lang, t.meta]);

  const gridStyle = useMemo(() => {
    const gridColor =
      theme === "dark" ? "rgba(224,224,224,0.1)" : "rgba(65,68,67,0.16)";
    return {
      backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
      backgroundSize: "44px 44px",
    } as CSSProperties;
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20" style={gridStyle} />

      <nav className="sticky top-0 z-50 border-b border-border/60 bg-card/70 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60 animate-in">
        <div className="container flex items-center justify-between h-16">
          <a href="/#top" className="flex items-center gap-2">
            <img
              src="/images/b2logo.png"
              alt={t.brand}
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg text-primary">{t.brandNav}</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/about" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
              {t.nav.about}
            </a>
            <a href="/#projects" className="text-sm hover:text-accent transition-colors">{t.nav.projects}</a>
            <a
              href="/services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              {t.nav.services}
            </a>
            <a href="/#blog" className="text-sm hover:text-accent transition-colors">{t.nav.blog}</a>
            <a href="/#contact" className="text-sm hover:text-accent transition-colors">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-primary shadow-sm transition-all hover:shadow-md hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </SheetTrigger>
                <SheetContent side="left" className="w-[85vw] max-w-sm">
                  <SheetHeader className="border-b border-border/60">
                    <SheetTitle className="flex items-center gap-3">
                      <img
                        src="/images/b2logo.png"
                        alt={t.brand}
                        className="h-8 w-8 object-contain"
                      />
                      <span className="text-primary">{t.brandNav}</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-2 p-4 text-base">
                    <SheetClose asChild>
                      <a href="/about" target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors">
                        {t.nav.about}
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="/#projects" className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors">
                        {t.nav.projects}
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a
                        href="/services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors"
                      >
                        {t.nav.services}
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="/#blog" className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors">
                        {t.nav.blog}
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="/#contact" className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors">
                        {t.nav.contact}
                      </a>
                    </SheetClose>
                  </div>
                  <div className="mt-auto border-t border-border/60 p-4 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleTheme?.()}
                      aria-label={t.nav.themeAria}
                      aria-pressed={theme === "dark"}
                      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-all hover:shadow-md hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
                      {theme === "dark" ? (
                        <Sun className="relative h-5 w-5" />
                      ) : (
                        <Moon className="relative h-5 w-5" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                      aria-label={t.nav.langAria}
                      className="group relative inline-flex h-10 px-3 items-center justify-center rounded-full border border-border bg-card text-primary text-xs font-semibold uppercase tracking-wider shadow-sm transition-all hover:shadow-md hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
                      <span className="relative">{lang === "tr" ? "EN" : "TR"}</span>
                    </button>
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="ml-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <a href="/#contact">{t.nav.cta}</a>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <button
              type="button"
              onClick={() => toggleTheme?.()}
              aria-label={t.nav.themeAria}
              aria-pressed={theme === "dark"}
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-primary shadow-sm transition-all hover:shadow-md hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
              {theme === "dark" ? (
                <Sun className="relative h-5 w-5" />
              ) : (
                <Moon className="relative h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              aria-label={t.nav.langAria}
              className="group relative inline-flex h-10 px-3 items-center justify-center rounded-full border border-border bg-card/80 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm transition-all hover:shadow-md hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
              <span className="relative">{lang === "tr" ? "EN" : "TR"}</span>
            </button>
            <Button
              asChild
              className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="/#contact">{t.nav.cta}</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 flex flex-col justify-start pt-6">
            <span className="text-muted-foreground font-medium tracking-[0.25em] text-xs uppercase mb-4">
              {t.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight tracking-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10">
              {t.hero.lead}
            </p>
            {t.hero.detail && (
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                {t.hero.detail}
              </p>
            )}
          </div>

          <div className="lg:w-2/3 relative">
            <div className="w-full h-[360px] lg:h-[520px] bg-muted/60 relative overflow-hidden group">
              <img
                src="/images/about.jpg"
                alt={t.story.title}
                className="w-full h-full object-cover grayscale-[12%] group-hover:scale-[1.02] transition-transform duration-[1400ms] ease-out"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
            </div>

            <div className="relative -mt-16 lg:-mt-24 lg:-ml-20 bg-card/95 dark:bg-card/90 p-8 md:p-10 shadow-2xl border border-border/60 w-full lg:w-4/5 z-20 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                {t.story.title}
              </h2>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-5">
                {t.story.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-7">
                {t.story.p2}
              </p>
              <Button asChild variant="ghost" className="group px-0 text-primary hover:text-accent">
                <a href="/#projects">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                    {t.story.cta}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-28 w-full max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap gap-8 border-b border-border/60 mb-8 justify-center">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-base font-semibold tracking-wide transition-all relative ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[140px] text-foreground/70 text-base md:text-lg leading-relaxed font-light animate-in fade-in slide-in-from-bottom-2 duration-500">
            {activeTab === "hikaye" && <p>{t.tabs.hikaye}</p>}
            {activeTab === "vizyon" && <p>{t.tabs.vizyon}</p>}
            {activeTab === "misyon" && <p>{t.tabs.misyon}</p>}
          </div>
        </div>

        <div className="mt-16 lg:mt-20 grid md:grid-cols-3 gap-6">
          {t.values.map((item, index) => (
            <div
              key={index}
              className="group border border-border/60 bg-card/80 p-7 hover:bg-card transition-colors duration-300 shadow-sm"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-primary text-primary-foreground mb-5">
                <Check size={18} strokeWidth={2.5} />
              </div>
              <h3 className="text-primary text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 bg-primary/5 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/images/b2logo.png"
                  alt={t.brand}
                  className="h-7 w-7 object-contain"
                />
                <span className="font-bold text-primary">{t.brand}</span>
              </div>
              <p className="text-sm text-foreground/60">{t.tagline}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {t.footer.links.about}
                  </a>
                </li>
                <li><a href="/#projects" className="hover:text-accent transition-colors">{t.footer.links.projects}</a></li>
                <li><a href="/#blog" className="hover:text-accent transition-colors">{t.footer.links.blog}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">{t.footer.contact}</h4>
              <p className="text-sm text-foreground/60">{t.contactSection.address}</p>
              <a
                href="mailto:info@bkare-mimarlik.com"
                className="text-sm text-foreground/60 hover:text-accent transition-colors inline-block"
              >
                info@bkare-mimarlik.com
              </a>
              <div className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/bkaremimarlik.tr/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61588390105053" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/bkare-mimarlik/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.586zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.955.771-1.703 1.956-1.703 1.184 0 1.915.748 1.94 1.703 0 .946-.756 1.704-1.981 1.704zm1.581 11.019H3.757V9.724h3.161v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2025 {t.brand}. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
