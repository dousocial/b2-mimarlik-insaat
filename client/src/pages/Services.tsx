import { useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  Layout,
  Home,
  Building2,
  Box,
  ChevronRight,
  X,
  Send,
  MessageCircle,
  User,
  Mail,
  FileText,
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
      title: "B² Mimarlık & İnşaat | Hizmetler",
      description:
        "Mimari tasarımdan anahtar teslim inşaata kadar her aşamada profesyonel hizmetler.",
    },
    brandNav: "B² Mimarlık",
    brand: "B² Mimarlık & İnşaat",
    tagline: "İki Çizgi, Tek İmza",
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
    header: {
      title: "Bütüncül Çözümler",
      subtitle:
        "Mimari tasarımdan anahtar teslim inşaata kadar her aşamada profesyonel hizmet sunuyoruz.",
    },
    tabs: [
      { id: "mimari", label: "Mimari Tasarım", icon: Layout },
      { id: "ic-mimari", label: "İç Mimari Tasarım", icon: Home },
      { id: "insaat", label: "Anahtar Teslim İnşaat", icon: Building2 },
      { id: "gorsellestirme", label: "3D Görselleştirme", icon: Box },
    ],
    content: {
      mimari: {
        eyebrow: "Hizmetlerimiz",
        title: "Mimari Tasarım",
        text:
          "Konsept tasarımından uygulama projelerine kadar vizyonunuzu mekâna dönüştürüyoruz. Sürdürülebilir ve estetik çözümlerle, uzun ömürlü ve işlevsel yapılar tasarlıyoruz.",
      },
      ic: {
        title: "İç Mimari Tasarım",
        text:
          "Yaşam ve çalışma alanlarını fonksiyonellik, estetik ve kullanıcı deneyimini merkeze alarak tasarlıyoruz. Malzeme, renk ve aydınlatma seçimleriyle zamansız iç mekânlar oluşturuyoruz.",
        image: "/images/icmimari.png",
      },
      insaat: {
        title: "Anahtar Teslim İnşaat",
        text:
          "Projeleri fikir aşamasından teslimine kadar tek elden planlıyor, uyguluyor ve yönetiyoruz. Zaman, maliyet ve kalite kontrolünü bütüncül şekilde sağlıyoruz.",
        image: "/images/project-1.jpg",
      },
      gorsel: {
        title: "3D Görselleştirme",
        text:
          "Mekânı hayata geçmeden önce deneyimleyebilmeniz için yüksek detaylı 3D görselleştirme sunuyoruz. Bu sayede karar süreçleri hızlanır ve revizyonlar erken aşamada yapılır.",
      },
    },
    contact: {
      title: "Hızlı İletişim",
      text: "Projeniz hakkında detaylı bilgi almak için bizimle iletişime geçin.",
      formTitle: "Teklif Formu",
      name: "Adınız Soyadınız",
      email: "E-posta Adresiniz",
      note: "Projeniz hakkında kısa bir not...",
      submit: "Teklifi Gönder",
      whatsapp: "WhatsApp Destek",
      whatsappHint: "Hemen Yanıt Alın",
      cta: "Bizimle iletişime geçin",
    },
    contactSection: {
      address: "Denizli, Türkiye",
    },
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
      title: "B² Architecture & Construction | Services",
      description:
        "Professional services from architectural design to turnkey construction.",
    },
    brandNav: "B² Architecture",
    brand: "B² Architecture & Construction",
    tagline: "Two Lines, One Signature",
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
    header: {
      title: "Integrated Solutions",
      subtitle:
        "We deliver professional services across every phase, from design to turnkey delivery.",
    },
    tabs: [
      { id: "mimari", label: "Architectural Design", icon: Layout },
      { id: "ic-mimari", label: "Interior Architecture", icon: Home },
      { id: "insaat", label: "Turnkey Construction", icon: Building2 },
      { id: "gorsellestirme", label: "3D Visualization", icon: Box },
    ],
    content: {
      mimari: {
        eyebrow: "Our Services",
        title: "Architectural Design",
        text:
          "From concept to construction documentation, we transform vision into space with sustainable and functional solutions.",
      },
      ic: {
        title: "Interior Architecture",
        text:
          "We design living and working spaces around function, aesthetics, and user experience, crafting timeless interiors.",
        image: "/images/icmimari.png",
      },
      insaat: {
        title: "Turnkey Construction",
        text:
          "We plan, execute, and manage projects end-to-end with rigorous time, cost, and quality control.",
        image: "/images/project-1.jpg",
      },
      gorsel: {
        title: "3D Visualization",
        text:
          "High-detail visualization helps you experience spaces early, accelerating decisions and enabling early revisions.",
      },
    },
    contact: {
      title: "Quick Contact",
      text: "Reach out to discuss your project and get tailored guidance.",
      formTitle: "Request Form",
      name: "Full Name",
      email: "Email Address",
      note: "A short note about your project...",
      submit: "Send Request",
      whatsapp: "WhatsApp Support",
      whatsappHint: "Fast Response",
      cta: "Contact Us",
    },
    contactSection: {
      address: "Denizli, Turkey",
    },
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

export default function Services() {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "tr";
    const stored = localStorage.getItem("lang");
    if (stored === "tr" || stored === "en") return stored;
    return "tr";
  });
  const [activeTab, setActiveTab] = useState("mimari");
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openContact = () => setIsModalOpen(true);
  const closeContact = () => setIsModalOpen(false);

  const phoneDisplay = "90 555 838 67 22";
  const phoneDial = phoneDisplay.replace(/\s+/g, "");
  const whatsappLink = `https://wa.me/${phoneDial}?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.`;
  const mimariVideo = "/images/video/3dgorsel.mov";
  const gorselVideo = "/images/video/3d.mp4";

  const renderContent = () => {
    if (activeTab === "mimari") {
      return (
        <div className="flex flex-col lg:flex-row items-center gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex-1 max-w-xl space-y-6 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
              {t.content.mimari.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
              {t.content.mimari.title}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.content.mimari.text}
            </p>
            <Button
              onClick={openContact}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              {t.contact.cta}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-muted/50">
              <video
                className="w-full h-full object-cover"
                src={mimariVideo}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "ic-mimari") {
      return (
        <div className="relative h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{ backgroundImage: `url(${t.content.ic.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-center items-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-white max-w-4xl">
              {t.content.ic.title}
            </h2>
            <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
              {t.content.ic.text}
            </p>
            <div className="pt-2">
              <button
                onClick={openContact}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-7 py-3 rounded-full hover:bg-white hover:text-primary transition-all"
              >
                {t.contact.cta}
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "insaat") {
      return (
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 animate-in fade-in slide-in-from-right-4 duration-700">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
              {t.content.insaat.title}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.content.insaat.text}
            </p>
            <button
              onClick={openContact}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-full hover:bg-accent/90 transition-all shadow-lg"
            >
              {t.contact.cta}
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[380px]">
              <img
                src={t.content.insaat.image}
                alt={t.content.insaat.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center gap-10 animate-in fade-in zoom-in-95 duration-700">
        <div className="w-full relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-primary shadow-2xl">
          <video
            className="w-full h-full object-cover opacity-85"
            src={gorselVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-semibold text-primary">{t.content.gorsel.title}</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {t.content.gorsel.text}
          </p>
          <button
            onClick={openContact}
            className="bg-primary text-primary-foreground px-9 py-3 rounded-full hover:bg-primary/90 transition-all shadow-xl"
          >
            {t.contact.cta}
          </button>
        </div>
      </div>
    );
  };

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
            <a href="/services" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
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
                      <a href="/services" target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors">
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
                      <Button asChild className="ml-auto bg-accent hover:bg-accent/90 text-accent-foreground">
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
            <Button asChild className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="/#contact">{t.nav.cta}</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 lg:py-24">
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            {t.header.title}
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            {t.header.subtitle}
          </p>
        </header>

        <div className="flex justify-center mb-12">
          <nav className="flex flex-nowrap items-center gap-2 bg-card/70 backdrop-blur-md p-2 rounded-2xl shadow-sm border border-border/60 overflow-x-auto">
            {t.tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-5 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-card text-primary shadow-md ring-1 ring-border/60 scale-[1.02]"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className="flex-shrink-0" />
                  <span className="text-sm md:text-base">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <section className="bg-card/95 rounded-[32px] p-6 md:p-12 shadow-sm border border-border/60 min-h-[520px] flex items-center justify-center relative overflow-hidden">
          <div className="w-full z-10">{renderContent()}</div>
        </section>
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeContact}
          />

          <div className="relative bg-card w-full max-w-4xl rounded-[28px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 max-h-[90vh] overflow-y-auto">
            <div className="bg-primary md:w-2/5 p-8 text-primary-foreground flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">{t.contact.title}</h3>
                <p className="text-primary-foreground/80 text-base leading-relaxed">
                  {t.contact.text}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors group"
                >
                  <div className="bg-emerald-500 p-3 rounded-full">
                    <MessageCircle size={22} fill="white" />
                  </div>
                  <div>
                    <div className="font-semibold">{t.contact.whatsapp}</div>
                    <div className="text-xs text-primary-foreground/70">{t.contact.whatsappHint}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex-1 p-8 md:p-10 relative">
              <button
                onClick={closeContact}
                className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-primary">{t.contact.formTitle}</h4>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      placeholder={t.contact.name}
                      className="w-full pl-12 pr-4 py-4 bg-muted/60 border border-border/60 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="email"
                      placeholder={t.contact.email}
                      className="w-full pl-12 pr-4 py-4 bg-muted/60 border border-border/60 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 text-muted-foreground" size={18} />
                    <textarea
                      rows={3}
                      placeholder={t.contact.note}
                      className="w-full pl-12 pr-4 py-4 bg-muted/60 border border-border/60 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
                    />
                  </div>
                  <button className="w-full bg-accent text-accent-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 shadow-lg transition-all active:scale-[0.98]">
                    <Send size={18} />
                    {t.contact.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
