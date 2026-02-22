import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Mail, Phone, MapPin, Star, Moon, Sun, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";
import { ArchitectureIcon } from "@/components/icons/ArchitectureIcon";
import { InteriorIcon } from "@/components/icons/InteriorIcon";
import { ConstructionIcon } from "@/components/icons/ConstructionIcon";
import { VisualizationIcon } from "@/components/icons/VisualizationIcon";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

/**
 * B² Architecture & Construction - Sales Funnel Website
 * Design Philosophy: Minimalist Refinement
 * - Asymmetric layout, diagonal dividers, copper accent lines
 * - Playfair Display for headings (elegance), Inter for body (readability)
 * - Generous whitespace, professional and trust-focused
 */

type Lang = "tr" | "en";

const CONTENT = {
  en: {
    meta: {
      title:
        "B² Architecture & Construction | Two Lines, One Signature - Architecture & Construction in Denizli",
      description:
        "B² Architecture & Construction is a professional design-and-build studio in Denizli offering architectural design, interior architecture, and turnkey construction services.",
      keywords:
        "architecture, interior architecture, construction, design, Denizli, turnkey, fit-out",
      ogTitle: "B² Architecture & Construction | Two Lines, One Signature",
      ogDescription:
        "Professional design-and-build services that bring architecture and construction together under one roof.",
      ogLocale: "en_US",
      twitterTitle: "B² Architecture & Construction",
      twitterDescription:
        "Architecture, interior architecture, and turnkey construction services in Denizli",
    },
    brandShort: "B²",
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
    hero: {
      eyebrow: "Two Lines, One Signature",
      title: "Where Architecture Meets Engineering",
      description:
        "B² Architecture & Construction brings design and delivery under one roof, producing cohesive and buildable solutions.",
      primaryCta: "Start a Project",
      secondaryCta: "Learn More",
    },
    about: {
      title: "About Us",
      p1: "B² Architecture & Construction is a design-and-build studio born from the collaboration of two disciplines. By combining architectural design with engineering and site experience, we aim to deliver balanced, buildable, and distinctive spaces in every project.",
      p2: "The founders’ complementary expertise allows us to provide strong, integrated solutions across both design and execution.",
      bullets: [
        "End-to-end delivery from design to turnkey construction",
        "A holistic approach balancing architecture and engineering",
        "A professional team focused on clear, reliable outcomes",
      ],
    },
    servicesSection: {
      eyebrow: "Our Services",
      title: "Integrated Solutions",
      description:
        "From architectural design to turnkey construction, we deliver professional service at every stage.",
    },
    services: [
      {
        icon: ArchitectureIcon,
        title: "Architectural Design",
        description:
          "From concept to full project documentation, we translate your vision into buildable spaces.",
      },
      {
        icon: InteriorIcon,
        title: "Interior Architecture",
        description:
          "Interior solutions that merge function and aesthetics for everyday use.",
      },
      {
        icon: ConstructionIcon,
        title: "Turnkey Construction",
        description:
          "From foundation to finish, we manage the whole process and deliver guaranteed results.",
      },
      {
        icon: VisualizationIcon,
        title: "3D Visualization",
        description: "See your project in high-detail 3D before it is built.",
      },
    ],
    projectsSection: {
      eyebrow: "Completed Projects",
      title: "Portfolio",
      description:
        "A selection of projects and client stories we have delivered successfully",
      labels: {
        location: "Location",
        year: "Year",
        area: "Area",
        services: "Services",
      },
    },
    projects: [
      {
        title: "Modern Office Fit-Out",
        location: "Istanbul",
        year: 2024,
        area: "2500 m²",
        services: "Design, Interior Architecture, Build",
        image: "/images/project-1.jpg",
      },
      {
        title: "Residential Complex",
        location: "Denizli",
        year: 2023,
        area: "15000 m²",
        services: "Architectural Design, Turnkey Construction",
        image: "/images/project-2.jpg",
      },
    ],
    processSection: {
      eyebrow: "Process",
      title: "Step-by-Step Roadmap",
      description: "A systematic path we follow from start to finish",
    },
    processSteps: [
      {
        number: "01",
        title: "Needs Analysis",
        summary: "We define the project requirements in depth.",
        description:
          "We align on program, user profile, budget, and timeline. We survey the existing space, compile the needs program, quantities, and scope, and document them. These outputs become the shared reference for design decisions and the build plan.",
      },
      {
        number: "02",
        title: "Concept Design",
        summary: "We develop creative, buildable concepts.",
        description: "We develop creative, buildable concepts.",
      },
      {
        number: "03",
        title: "Project Documentation",
        summary: "We prepare detailed drawings and implementation plans.",
        description: "We prepare detailed drawings and implementation plans.",
      },
      {
        number: "04",
        title: "Execution",
        summary: "We deliver with site management and quality control.",
        description: "We deliver with site management and quality control.",
      },
      {
        number: "05",
        title: "Handover & Aftercare",
        summary: "We complete the handover and provide long-term support.",
        description: "We complete the handover and provide long-term support.",
      },
    ],
    testimonialsSection: {
      eyebrow: "Client Testimonials",
      title: "Success Stories",
    },
    testimonials: [
      {
        name: "Ahmet Yılmaz",
        company: "Technology Company",
        text: "The B² team delivered every detail we imagined for our office design. Professionalism and creativity were perfectly balanced.",
        rating: 5,
      },
      {
        name: "Zeynep Kaya",
        company: "Retail Brand",
        text: "Thanks to their turnkey service, project management was simple. We received reliable, clear results from start to finish.",
        rating: 5,
      },
      {
        name: "Mehmet Demir",
        company: "Construction Company",
        text: "Their balanced approach between architecture and engineering significantly improved the quality of our projects.",
        rating: 5,
      },
    ],
    blogSection: {
      eyebrow: "Insights & Journal",
      title: "Latest Articles",
      description:
        "Up-to-date insights on architecture, design, and construction",
      readMore: "Read More →",
    },
    blogPosts: [
      {
        title: "2025 Architecture Trends",
        excerpt:
          "Sustainable design, smart buildings, and the rising importance of biophilia...",
        date: "Feb 16, 2025",
      },
      {
        title: "Success Factors in Fit-Out Projects",
        excerpt:
          "Scheduling, budget, and communication: the pillars of successful fit-outs...",
        date: "Feb 10, 2025",
      },
      {
        title: "Advantages of Turnkey Construction",
        excerpt: "One accountable partner, clear outcomes, and guaranteed quality...",
        date: "Feb 5, 2025",
      },
    ],
    teamSection: {
      eyebrow: "Founding Partners",
      title: "Experience & Expertise",
    },
    founders: [
      {
        name: "Burcu ÇETİN",
        role: "Architect / Interior Designer",
        bio: "Graduate of Ozyegin University, Faculty of Architecture. With four years of experience in Istanbul, she has taken active roles in corporate projects for Trendyol, Turkish Airlines, and others.",
      },
      {
        name: "Ahmet Buğra KORALAY",
        role: "Contractor / Project Manager",
        bio: "Graduate of Celal Bayar University, Faculty of Engineering. With experience in the steel industry, he leads on-site management and client relations.",
      },
    ],
    contactSection: {
      title: "Contact Us",
      description:
        "Reach out to discuss your project. We will get back to you shortly.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      address: "Denizli, Turkey",
      form: {
        nameLabel: "Full Name *",
        emailLabel: "Email *",
        phoneLabel: "Phone",
        projectTypeLabel: "Project Type",
        messageLabel: "Message *",
        namePlaceholder: "Enter your name",
        emailPlaceholder: "Your email address",
        phonePlaceholder: "Your phone number",
        projectTypePlaceholder: "Select...",
        projectTypeOptions: [
          { value: "architecture", label: "Architectural Design" },
          { value: "interior", label: "Interior Architecture" },
          { value: "construction", label: "Turnkey Construction" },
          { value: "other", label: "Other" },
        ],
        messagePlaceholder: "Tell us about your project...",
        submit: "Send Proposal",
        sending: "Sending...",
      },
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
    toast: {
      required: "Please fill in all required fields",
      success:
        "Your proposal request has been sent. We will get back to you shortly.",
      error: "There was an error sending your request",
      unconfigured: "Email service is not configured.",
      sendFailed: "We could not send your request right now. Please try again.",
      messageMin: "Please enter at least 10 characters for your message.",
      mailOpened: "Your email app has been opened.",
    },
  },
  tr: {
    meta: {
      title:
        "B² Mimarlık & İnşaat | İki Çizgi, Tek İmza - Denizli Mimarlık & İnşaat",
      description:
        "B² Mimarlık & İnşaat, Denizli'de mimari tasarım, iç mimari ve anahtar teslim inşaat hizmetleri sunan profesyonel bir tasarım ve yapım ofisidir.",
      keywords:
        "mimarlık, iç mimari, inşaat, tasarım, Denizli, anahtar teslim, fit-out",
      ogTitle: "B² Mimarlık & İnşaat | İki Çizgi, Tek İmza",
      ogDescription:
        "Tasarım ve uygulamayı tek çatı altında buluşturan profesyonel mimarlık ve inşaat hizmetleri.",
      ogLocale: "tr_TR",
      twitterTitle: "B² Mimarlık & İnşaat",
      twitterDescription:
        "Denizli'de mimarlık, iç mimari ve anahtar teslim inşaat hizmetleri",
    },
    brandShort: "B²",
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
      themeAria: "Tema değiştir",
      langAria: "Dil değiştir",
    },
    hero: {
      eyebrow: "İki Çizgi, Tek İmza",
      title: "Mimarlık ve Mühendisliğin Kesişimi",
      description:
        "B² Mimarlık & İnşaat, tasarım ve uygulamayı tek çatı altında buluşturarak, bütüncül ve uygulanabilir çözümler üretir.",
      primaryCta: "Proje Başlat",
      secondaryCta: "Daha Fazla Bilgi",
    },
    about: {
      title: "Hakkımızda",
      p1: "B² Mimarlık & İnşaat, iki farklı disiplinin ortak aklından doğan bir tasarım ve yapım ofisidir. Mimari tasarım ile mühendislik ve saha deneyimini bir araya getiren firma, her projede dengeli, uygulanabilir ve karakterli mekânlar üretmeyi hedefler.",
      p2: "Kurucu ortakların farklı uzmanlık alanlarından gelen tecrübeleri, projelerin hem tasarım hem de uygulama süreçlerinde güçlü ve bütüncül çözümler sunmasını sağlar.",
      bullets: [
        "Tasarımdan anahtar teslim uygulamaya kadar tüm süreci tek elden yönetim",
        "Mimarlık ve mühendisliğin dengesini sağlayan bütüncül yaklaşım",
        "Müşterilerine güvenilir ve net sonuçlar sunan profesyonel ekip",
      ],
    },
    servicesSection: {
      eyebrow: "Hizmetlerimiz",
      title: "Bütüncül Çözümler",
      description:
        "Mimari tasarımdan anahtar teslim inşaata kadar, her aşamada profesyonel hizmet sunuyoruz.",
    },
    services: [
      {
        icon: ArchitectureIcon,
        title: "Mimari Tasarım",
        description:
          "Konsept tasarımından projelendirmeye kadar, vizyonunuzu mekânlara dönüştürüyoruz.",
      },
      {
        icon: InteriorIcon,
        title: "İç Mimari Tasarım",
        description:
          "Fonksiyonellik ve estetik mükemmelliğin birleştiği iç mekan çözümleri.",
      },
      {
        icon: ConstructionIcon,
        title: "Anahtar Teslim İnşaat",
        description:
          "Temelden çatıya, tüm süreci tek elden yönetip garantili sonuçlar sunuyoruz.",
      },
      {
        icon: VisualizationIcon,
        title: "3D Görselleştirme",
        description:
          "Projenizi hayata geçirmeden önce detaylı 3D görseller ile görün.",
      },
    ],
    projectsSection: {
      eyebrow: "Tamamlanan Projeler",
      title: "Portfolio",
      description: "Başarıyla tamamladığımız projeler ve müşteri hikayeleri",
      labels: {
        location: "Lokasyon",
        year: "Yıl",
        area: "Alan",
        services: "Hizmetler",
      },
    },
    projects: [
      {
        title: "Modern Ofis Fit-Out",
        location: "İstanbul",
        year: 2024,
        area: "2500 m²",
        services: "Tasarım, İç Mimari, Uygulama",
        image: "/images/project-1.jpg",
      },
      {
        title: "Konut Kompleksi",
        location: "Denizli",
        year: 2023,
        area: "15000 m²",
        services: "Mimari Tasarım, Anahtar Teslim İnşaat",
        image: "/images/project-2.jpg",
      },
    ],
    processSection: {
      eyebrow: "Çalışma Süreci",
      title: "Adım Adım Yol Haritası",
      description:
        "Projenizin başından sonuna kadar takip ettiğimiz sistematik süreç",
    },
    processSteps: [
      {
        number: "01",
        title: "İhtiyaç Analizi",
        summary: "Projenizin gereksinimlerini derinlemesine analiz ediyoruz.",
        description:
          "İşlev programı, kullanıcı profili, bütçe ve zaman hedeflerini birlikte netleştiriyoruz. Mevcut alanın ölçüm ve yerinde keşfini yapıp ihtiyaç programı, metraj ve kapsamı raporluyoruz. Bu çıktılar, tasarım kararları ve uygulama planı için ortak referans olur.",
      },
      {
        number: "02",
        title: "Konsept Tasarım",
        summary: "Yaratıcı fikirler ve uygulanabilir çözümler geliştiriyoruz.",
        description: "Yaratıcı fikirler ve uygulanabilir çözümler geliştiriyoruz.",
      },
      {
        number: "03",
        title: "Projelendirme",
        summary: "Detaylı teknik çizimler ve uygulama planları hazırlıyoruz.",
        description: "Detaylı teknik çizimler ve uygulama planları hazırlıyoruz.",
      },
      {
        number: "04",
        title: "Uygulama",
        summary:
          "Şantiye yönetimi ve kalite kontrolü ile projeyi hayata geçiriyoruz.",
        description:
          "Şantiye yönetimi ve kalite kontrolü ile projeyi hayata geçiriyoruz.",
      },
      {
        number: "05",
        title: "Teslim & Sonrası",
        summary: "Proje teslimi ve uzun vadeli destek sağlıyoruz.",
        description: "Proje teslimi ve uzun vadeli destek sağlıyoruz.",
      },
    ],
    testimonialsSection: {
      eyebrow: "Müşteri Yorumları",
      title: "Başarı Hikayeleri",
    },
    testimonials: [
      {
        name: "Ahmet Yılmaz",
        company: "Teknoloji Şirketi",
        text: "B² Mimarlık ekibi, ofis tasarımında hayal ettiğimiz her detayı gerçekleştirdi. Profesyonellik ve yaratıcılık mükemmel bir şekilde birleştirilmişti.",
        rating: 5,
      },
      {
        name: "Zeynep Kaya",
        company: "Perakende Markası",
        text: "Anahtar teslim hizmetleri sayesinde proje yönetimi çok basit oldu. Başından sonuna kadar güvenilir ve net sonuçlar aldık.",
        rating: 5,
      },
      {
        name: "Mehmet Demir",
        company: "İnşaat Şirketi",
        text: "Mimarlık ve mühendislik dengesini sağlayan yaklaşımları, projelerimizin kalitesini önemli ölçüde artırdı.",
        rating: 5,
      },
    ],
    blogSection: {
      eyebrow: "Blog & İçerik",
      title: "Son Yazılar",
      description:
        "Mimarlık, tasarım ve inşaat sektörü hakkında güncel bilgiler",
      readMore: "Devamını Oku →",
    },
    blogPosts: [
      {
        title: "2025 Mimarlık Trendleri",
        excerpt:
          "Sürdürülebilir tasarım, akıllı binalar ve biofiliğin artan önemi...",
        date: "16 Şubat 2025",
      },
      {
        title: "Fit-Out Projelerinde Başarı Faktörleri",
        excerpt:
          "Zamanlama, bütçe ve iletişim: başarılı fit-out projelerin temel taşları...",
        date: "10 Şubat 2025",
      },
      {
        title: "Anahtar Teslim İnşaatın Avantajları",
        excerpt: "Tek bir sorumlu, net sonuçlar ve garantili kalite...",
        date: "5 Şubat 2025",
      },
    ],
    teamSection: {
      eyebrow: "Kurucu Ortaklar",
      title: "Deneyim ve Uzmanlık",
    },
    founders: [
      {
        name: "Burcu ÇETİN",
        role: "Mimar / İç Mimar",
        bio: "Özyeğin Üniversitesi Mimarlık Fakültesi mezunu. İstanbul'da 4 yıllık deneyim ile Trendyol, THY ve kurumsal projelerde aktif rol almıştır.",
      },
      {
        name: "Ahmet Buğra KORALAY",
        role: "Müteahhit / Proje Yöneticisi",
        bio: "Celal Bayar Üniversitesi Mühendislik Fakültesi mezunu. Demir-çelik sektöründe edindiği tecrübe ile saha yönetimi ve müşteri ilişkilerini yönetmektedir.",
      },
    ],
    contactSection: {
      title: "Bize Ulaşın",
      description:
        "Projeniz hakkında konuşmak için bize yazın veya arayın. En kısa sürede sizinle iletişime geçeceğiz.",
      addressLabel: "Adres",
      phoneLabel: "Telefon",
      emailLabel: "E-posta",
      address: "Denizli, Türkiye",
      form: {
        nameLabel: "Ad Soyad *",
        emailLabel: "E-posta *",
        phoneLabel: "Telefon",
        projectTypeLabel: "Proje Türü",
        messageLabel: "Mesaj *",
        namePlaceholder: "Adınızı girin",
        emailPlaceholder: "E-posta adresiniz",
        phonePlaceholder: "Telefon numaranız",
        projectTypePlaceholder: "Seçiniz...",
        projectTypeOptions: [
          { value: "architecture", label: "Mimari Tasarım" },
          { value: "interior", label: "İç Mimari Tasarım" },
          { value: "construction", label: "Anahtar Teslim İnşaat" },
          { value: "other", label: "Diğer" },
        ],
        messagePlaceholder: "Projeniz hakkında bilgi verin...",
        submit: "Teklif Gönder",
        sending: "Gönderiliyor...",
      },
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
    toast: {
      required: "Lütfen tüm zorunlu alanları doldurunuz",
      success:
        "Teklif talebiniz gönderildi! En kısa sürede sizinle iletişime geçeceğiz.",
      error: "Talep gönderilirken bir hata oluştu",
      unconfigured: "E-posta servisi yapılandırılmamış.",
      sendFailed: "Talebiniz şu anda gönderilemedi. Lütfen tekrar deneyin.",
      messageMin: "Mesajınız en az 10 karakter olmalıdır.",
      mailOpened: "E-posta uygulamanız açıldı.",
    },
  },
} as const;

export default function Home() {
  // Auth is currently unused on the marketing page.
  const { theme, toggleTheme } = useTheme();
  const heroWebglRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "tr";
    const stored = localStorage.getItem("lang");
    if (stored === "tr" || stored === "en") return stored;
    return "tr";
  });
  const t = CONTENT[lang];
  const [activeService, setActiveService] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const services = t.services;
  const processSteps = t.processSteps;
  const founders = t.founders;
  const testimonials = t.testimonials;
  const projects = t.projects;
  const blogPosts = t.blogPosts;
  const phoneDisplay = "90 555 838 67 22";
  const phoneDial = phoneDisplay.replace(/\s+/g, "");

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
    setMeta('meta[name="keywords"]', t.meta.keywords);
    setMeta('meta[property="og:title"]', t.meta.ogTitle);
    setMeta('meta[property="og:description"]', t.meta.ogDescription);
    setMeta('meta[property="og:locale"]', t.meta.ogLocale);
    setMeta('meta[name="twitter:title"]', t.meta.twitterTitle);
    setMeta('meta[name="twitter:description"]', t.meta.twitterDescription);
  }, [lang, t.meta]);

  useEffect(() => {
    const container = heroWebglRef.current;
    const section = heroSectionRef.current;
    if (!container || !section || typeof window === "undefined") return;

    const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (coarsePointer.matches || reducedMotion.matches) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2, 220, 220);
    const loader = new THREE.TextureLoader();

    let colorReady = false;
    let depthReady = false;

    const colorSrc =
      theme === "dark" ? "/images/evdark.png" : "/images/evlight.png";
    const depthSrc =
      theme === "dark" ? "/images/evdarkdepth.png" : "/images/evlightdepth.png";

    const markReady = () => {
      section.classList.add("hero-webgl--ready");
    };

    const colorTex = loader.load(colorSrc, () => {
      colorReady = true;
      if (depthReady) {
        resize();
        markReady();
      }
    });
    const depthTex = loader.load(depthSrc, () => {
      depthReady = true;
      if (colorReady) {
        resize();
        markReady();
      }
    });
    colorTex.colorSpace = THREE.SRGBColorSpace;
    depthTex.colorSpace = THREE.NoColorSpace;
    colorTex.wrapS = colorTex.wrapT = THREE.ClampToEdgeWrapping;
    depthTex.wrapS = depthTex.wrapT = THREE.ClampToEdgeWrapping;
    depthTex.minFilter = THREE.LinearFilter;
    depthTex.magFilter = THREE.LinearFilter;
    depthTex.generateMipmaps = false;

    const uniforms = {
      uImage: { value: colorTex },
      uDepth: { value: depthTex },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uIntensity: { value: 0.08 },
      uDepthScale: { value: 0.18 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        uniform sampler2D uDepth;
        uniform float uDepthScale;

        void main() {
          vUv = uv;
          float depth = texture2D(uDepth, uv).r;
          vec3 displaced = position + normal * (depth - 0.5) * uDepthScale;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uImage;
        uniform sampler2D uDepth;
        uniform vec2 uMouse;
        uniform float uIntensity;

        void main() {
          float depth = texture2D(uDepth, vUv).r;
          vec2 shift = uMouse * (depth - 0.5) * uIntensity;
          vec2 uv = clamp(vUv + shift, 0.001, 0.999);
          vec4 color = texture2D(uImage, uv);
          gl_FragColor = color;
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const target = new THREE.Vector2(0, 0);
    const current = new THREE.Vector2(0, 0);
    let frame = 0;

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      renderer.setSize(width, height);

      const image = colorTex.image as HTMLImageElement | undefined;
      if (!image || !image.width || !image.height) return;

      const imageAspect = image.width / image.height;
      const containerAspect = width / height;
      if (imageAspect > containerAspect) {
        const scale = imageAspect / containerAspect;
        colorTex.repeat.set(1 / scale, 1);
        colorTex.offset.set((1 - 1 / scale) / 2, 0);
        depthTex.repeat.set(1 / scale, 1);
        depthTex.offset.set((1 - 1 / scale) / 2, 0);
      } else {
        const scale = containerAspect / imageAspect;
        colorTex.repeat.set(1, 1 / scale);
        colorTex.offset.set(0, (1 - 1 / scale) / 2);
        depthTex.repeat.set(1, 1 / scale);
        depthTex.offset.set(0, (1 - 1 / scale) / 2);
      }
      colorTex.needsUpdate = true;
      depthTex.needsUpdate = true;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      target.set((x - 0.5) * 2, (0.5 - y) * 2);
    };

    const handlePointerLeave = () => {
      target.set(0, 0);
    };

    const animate = () => {
      current.lerp(target, 0.08);
      uniforms.uMouse.value.copy(current);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
    };

    resize();
    animate();

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      section.classList.remove("hero-webgl--ready");
      geometry.dispose();
      material.dispose();
      colorTex.dispose();
      depthTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t.toast.required);
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error(t.toast.messageMin);
      return;
    }

    try {
      setIsSubmitting(true);
      const projectLabel =
        t.contactSection.form.projectTypeOptions.find(
          (option) => option.value === formData.projectType
        )?.label || formData.projectType || "-";
      const subject = `${t.brand} - ${t.contactSection.form.submit}`;
      const bodyLines = [
        `Name: ${formData.name.trim()}`,
        `Email: ${formData.email.trim()}`,
        `Phone: ${formData.phone.trim() || "-"}`,
        `Project Type: ${projectLabel}`,
        "",
        "Message:",
        formData.message.trim(),
      ];
      const mailto = `mailto:info@bkare-mimarlik.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      window.location.href = mailto;
      toast.success(t.toast.mailOpened);
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch (error) {
      toast.error(t.toast.error);
    } finally {
      setTimeout(() => setIsSubmitting(false), 300);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-card/70 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60 animate-in">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/images/b2logo.png"
              alt={t.brand}
              className="h-16 w-16 object-contain"
            />
            <span className="font-bold text-lg text-primary">{t.brandNav}</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              {t.nav.about}
            </a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">{t.nav.projects}</a>
            <a
              href="/services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              {t.nav.services}
            </a>
            <a href="#blog" className="text-sm hover:text-accent transition-colors">{t.nav.blog}</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">{t.nav.contact}</a>
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
                      <a
                        href="/about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors"
                      >
                        {t.nav.about}
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#projects" className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors">
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
                      <a href="#blog" className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors">
                        {t.nav.blog}
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors">
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
                        className="ml-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        {t.nav.cta}
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
              className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </nav>

      {/* Left Accent Line */}
      <div className="fixed left-0 top-0 w-1 h-full bg-gradient-to-b from-accent via-accent to-accent/30 animate-pulse-glow"></div>

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative pt-20 pb-32 min-h-[72vh] lg:min-h-[78vh] overflow-hidden hero-webgl">
        <div ref={heroWebglRef} className="hero-webgl__canvas" aria-hidden="true"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="hero-text-panel space-y-4">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase">{t.hero.eyebrow}</p>
              <h1
                className="hero-title text-5xl lg:text-6xl font-bold text-primary leading-tight"
                data-text={t.hero.title}
              >
                {t.hero.title}
              </h1>
              <p
                className="hero-description text-lg text-foreground/70 leading-relaxed"
                data-text={t.hero.description}
              >
                {t.hero.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
                {t.hero.primaryCta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                {t.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <svg className="absolute bottom-0 left-0 w-full h-24 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1 animate-in slide-in-from-left-4 duration-700">
              <h2 className="text-4xl font-bold text-primary">{t.about.title}</h2>
              <p className="text-foreground/70 leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                {t.about.p2}
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground">{t.about.bullets[0]}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground">{t.about.bullets[1]}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground">{t.about.bullets[2]}</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="group mt-6 w-fit border-primary/30 text-primary hover:bg-primary/5"
              >
                <a href="/about" target="_blank" rel="noopener noreferrer">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em]">Daha Fazla</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            <div className="order-1 lg:order-2 animate-in slide-in-from-right-4 duration-700">
              <img
                src="/images/about.jpg"
                alt="Modern Living Room Interior"
                className="w-full h-96 object-cover rounded-lg shadow-xl animate-float-soft palette-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-in">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">{t.servicesSection.eyebrow}</p>
            <h2 className="text-4xl font-bold text-primary">{t.servicesSection.title}</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {t.servicesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer hover-lift animate-in"
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-in">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">{t.projectsSection.eyebrow}</p>
            <h2 className="text-4xl font-bold text-primary">{t.projectsSection.title}</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {t.projectsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              return (
              <div key={idx} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all hover-lift animate-in">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 palette-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-primary-foreground">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.services}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-lg font-bold text-primary mb-3">{project.title}</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p><strong>{t.projectsSection.labels.location}:</strong> {project.location}</p>
                    <p><strong>{t.projectsSection.labels.year}:</strong> {project.year}</p>
                    <p><strong>{t.projectsSection.labels.area}:</strong> {project.area}</p>
                    <p><strong>{t.projectsSection.labels.services}:</strong> {project.services}</p>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-in">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">{t.processSection.eyebrow}</p>
            <h2 className="text-4xl font-bold text-primary">{t.processSection.title}</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {t.processSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative h-full">
                <div
                  className="min-h-[170px] h-full p-6 bg-card rounded-lg border-2 border-border hover:border-accent hover:bg-accent/5 transition-all cursor-pointer text-center flex flex-col items-center justify-start gap-2 hover-lift animate-in"
                  onMouseEnter={() => setActiveProcess(idx)}
                >
                  <div className="text-3xl font-bold text-accent mb-2">{step.number}</div>
                  <h3 className="text-sm font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-xs text-foreground/60 hidden md:block line-clamp-2">{step.summary}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>

          <div key={activeProcess} className="mt-12 p-8 bg-accent/5 rounded-lg border border-accent/20 animate-in">
            <h3 className="text-2xl font-bold text-primary mb-4">{processSteps[activeProcess].title}</h3>
            <p className="text-foreground/70 leading-relaxed">{processSteps[activeProcess].description}</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-in">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">{t.testimonialsSection.eyebrow}</p>
            <h2 className="text-4xl font-bold text-primary">{t.testimonialsSection.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-card rounded-lg border border-border hover:border-accent transition-all hover-lift animate-in">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed mb-4">{testimonial.text}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-in">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">{t.blogSection.eyebrow}</p>
            <h2 className="text-4xl font-bold text-primary">{t.blogSection.title}</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {t.blogSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer hover-lift animate-in">
                <p className="text-sm text-accent mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                <a href="#" className="text-accent font-semibold hover:text-accent/80 transition-colors">
                  {t.blogSection.readMore}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4 animate-in">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">{t.teamSection.eyebrow}</p>
            <h2 className="text-4xl font-bold text-primary">{t.teamSection.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, idx) => (
              <div key={idx} className="space-y-4 hover-lift animate-in">
                <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-24 h-24 text-accent/30 animate-float-soft" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{founder.name}</h3>
                <p className="text-accent font-semibold text-sm">{founder.role}</p>
                <p className="text-foreground/70 leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://media.altphotos.com/cache/images/2018/01/30/05/752/facade-geometric-lines.jpg"
            alt="Architectural Pattern"
            className="w-full h-full object-cover palette-image"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-in">
              <div>
                <h2 className="text-4xl font-bold mb-4">{t.contactSection.title}</h2>
                <p className="text-primary-foreground/80">
                  {t.contactSection.description}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t.contactSection.addressLabel}</p>
                    <p className="text-primary-foreground/80">{t.contactSection.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t.contactSection.phoneLabel}</p>
                    <a
                      href={`tel:${phoneDial}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t.contactSection.emailLabel}</p>
                    <a
                      href="mailto:info@bkare-mimarlik.com"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      info@bkare-mimarlik.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-4 bg-primary-foreground/10 backdrop-blur p-8 rounded-lg animate-in">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold mb-2">{t.contactSection.form.nameLabel}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  minLength={2}
                  className="w-full px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent"
                  placeholder={t.contactSection.form.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold mb-2">{t.contactSection.form.emailLabel}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent"
                  placeholder={t.contactSection.form.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold mb-2">{t.contactSection.form.phoneLabel}</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent"
                  placeholder={t.contactSection.form.phonePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="contact-project-type" className="block text-sm font-semibold mb-2">{t.contactSection.form.projectTypeLabel}</label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground focus:outline-none focus:border-accent"
                >
                  <option value="">{t.contactSection.form.projectTypePlaceholder}</option>
                  {t.contactSection.form.projectTypeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold mb-2">{t.contactSection.form.messageLabel}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  minLength={10}
                  className="w-full px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent h-32 resize-none"
                  placeholder={t.contactSection.form.messagePlaceholder}
                />
              </div>
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? t.contactSection.form.sending : t.contactSection.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#projects" className="hover:text-accent transition-colors">{t.footer.links.projects}</a></li>
                <li><a href="#blog" className="hover:text-accent transition-colors">{t.footer.links.blog}</a></li>
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
