import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Building2, Palette, Hammer, Lightbulb, Mail, Phone, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useLocation } from "wouter";

/**
 * b² Mimarlık & İnşaat - Satış Hunisi Websitesi
 * Tasarım Felsefesi: Minimalist Raffinement
 * - Asimetrik layout, diagonal dividers, bakır aksent çizgiler
 * - Playfair Display başlıklar (zarafet), Inter body (okunabilirlik)
 * - Bol whitespace, profesyonel ve güven odaklı
 */

export default function Home() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [activeService, setActiveService] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const services = [
    {
      icon: Palette,
      title: "Mimari Tasarım",
      description: "Konsept tasarımından projelendirmeye kadar, vizyonunuzu mekânlara dönüştürüyoruz.",
    },
    {
      icon: Building2,
      title: "İç Mimari Tasarım",
      description: "Fonksiyonellik ve estetik mükemmelliğin birleştiği iç mekan çözümleri.",
    },
    {
      icon: Hammer,
      title: "Anahtar Teslim İnşaat",
      description: "Temelden çatıya, tüm süreci tek elden yönetip garantili sonuçlar sunuyoruz.",
    },
    {
      icon: Lightbulb,
      title: "3D Görselleştirme",
      description: "Projenizi hayata geçirmeden önce detaylı 3D görseller ile görün.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "İhtiyaç Analizi",
      description: "Projenizin gereksinimlerini derinlemesine analiz ediyoruz.",
    },
    {
      number: "02",
      title: "Konsept Tasarım",
      description: "Yaratıcı fikirler ve uygulanabilir çözümler geliştiriyoruz.",
    },
    {
      number: "03",
      title: "Projelendirme",
      description: "Detaylı teknik çizimler ve uygulama planları hazırlıyoruz.",
    },
    {
      number: "04",
      title: "Uygulama",
      description: "Şantiye yönetimi ve kalite kontrolü ile projeyi hayata geçiriyoruz.",
    },
    {
      number: "05",
      title: "Teslim & Sonrası",
      description: "Proje teslimi ve uzun vadeli destek sağlıyoruz.",
    },
  ];

  const founders = [
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
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      company: "Teknoloji Şirketi",
      text: "b² Mimarlık ekibi, ofis tasarımında hayal ettiğimiz her detayı gerçekleştirdi. Profesyonellik ve yaratıcılık mükemmel bir şekilde birleştirilmişti.",
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
  ];

  const projects = [
    {
      title: "Modern Ofis Fit-Out",
      location: "İstanbul",
      year: 2024,
      area: "2500 m²",
      services: "Tasarım, İç Mimari, Uygulama",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vfzoHZmUVWjaWXJmj9o67r/sandbox/i2WddQ6dy1MHiAL9rQlBl8-img-3_1771263281000_na1fn_aW50ZXJpb3ItZGVzaWduLWZpdG91dA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdmZ6b0habXVWV2phV1hKbWo5bzY3ci9zYW5kYm94L2kyV2RkUTZkeTFNSGlBTDlyUWxCbDgtaW1nLTNfMTc3MTI2MzI4MTAwMF9uYTFmbl9hVzUwWlhKcGIzSXRaR1Z6YVdkdUxXWnBkRzkxZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ieFBXNBhTkYn~kVbOZFG-8RlxF~wohrfdrdk9szPMjb5lIOBN21Dsvobp8035vFcDmCAUnDgTx~SolQsv-jATVbVEpVb4yyctawgArDJYL9BBV4shDFWnhvqwWU9yf3LACKtBVeopKBeUS4UWXLham0XG9Q-xVTbxKkGMFYeXcvtb0iphOidY7EbVrUVhtmzvluKt5Q~KH1qzuWQFg18OpDkMcv0c1UNCiSm~2LDmeoIOyXUNx54~YnnWWqeBJ8nbkrpYDRtmkub3NNmGttx~oszhUEEY0wb6xneCwPcgr2PZHQ8U0LJz~aISX~MdVBI~moPEie86zDAsz7Aul9wMw__",
    },
    {
      title: "Konut Kompleksi",
      location: "Denizli",
      year: 2023,
      area: "15000 m²",
      services: "Mimari Tasarım, Anahtar Teslim İnşaat",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vfzoHZmUVWjaWXJmj9o67r/sandbox/i2WddQ6dy1MHiAL9rQlBl8-img-2_1771263280000_na1fn_bW9kZXJuLWFyY2hpdGVjdHVyZS1leHRlcmlvcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdmZ6b0habXVWV2phV1hKbWo5bzY3ci9zYW5kYm94L2kyV2RkUTZkeTFNSGlBTDlyUWxCbDgtaW1nLTJfMTc3MTI2MzI4MDAwMF9uYTFmbl9iVzlrWlhKdUxXRnlZMmhwZEdWamRIVnlaUzFsZUhSbGNtbHZjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PhRIxML~CY5XWecep2BBVqKxvrOBGl4X20sAncGOPtuXigzgHB8zR48n4igl-~Qxw6P~ifShz~gBOKkEmSzlCr860DvddFmdUAqprYsiyK3kK1ONDEAVBaVhc85XenMrUNnmy84Hmjid9JarppmWKmEi~96mlrXsTt9wT94YderQ6EGVYStmmysZAoesOz8mwQ7sHZbShJ94Kwz2gwGMz8FOlV2oVKDqNEbvzNbloVnY0Hm5s9hRwrael8B8GGtyneIhI5U35piJfPqa3bEA5W07jNHOZGs44rL45bRUykT~KB5-Uo~bsE-qSmbtGDOyPci18MIEIpI7wVqQ8i884g__",
    },
  ];

  const blogPosts = [
    {
      title: "2025 Mimarlık Trendleri",
      excerpt: "Sürdürülebilir tasarım, akıllı binalar ve biofiliğin artan önemi...",
      date: "16 Şubat 2025",
    },
    {
      title: "Fit-Out Projelerinde Başarı Faktörleri",
      excerpt: "Zamanlama, bütçe ve iletişim: başarılı fit-out projelerin temel taşları...",
      date: "10 Şubat 2025",
    },
    {
      title: "Anahtar Teslim İnşaatın Avantajları",
      excerpt: "Tek bir sorumlu, net sonuçlar ve garantili kalite...",
      date: "5 Şubat 2025",
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Lütfen tüm zorunlu alanları doldurunuz");
      return;
    }

    try {
      // Placeholder: Backend entegrasyonu için hazır
      toast.success("Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch (error) {
      toast.error("Mesaj gönderilirken bir hata oluştu");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">b²</span>
            </div>
            <span className="font-bold text-lg text-primary">b² Mimarlık</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hakkimizda" className="text-sm hover:text-accent transition-colors">Hakkımızda</a>
            <a href="#projeler" className="text-sm hover:text-accent transition-colors">Projeler</a>
            <a href="#hizmetler" className="text-sm hover:text-accent transition-colors">Hizmetler</a>
            <a href="#blog" className="text-sm hover:text-accent transition-colors">Blog</a>
            <a href="#iletisim" className="text-sm hover:text-accent transition-colors">İletişim</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
            İletişime Geç
          </Button>
        </div>
      </nav>

      {/* Left Accent Line */}
      <div className="fixed left-0 top-0 w-1 h-full bg-gradient-to-b from-accent via-accent to-accent/30"></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="space-y-4">
                <p className="text-accent font-semibold text-sm tracking-wide uppercase">İki Çizgi, Tek İmza</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Mimarlık ve Mühendisliğin Kesişimi
                </h1>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                  b² Mimarlık & İnşaat, tasarım ve uygulamayı tek çatı altında buluşturarak, bütüncül ve uygulanabilir çözümler üretir.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
                  Proje Başlat <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" onClick={() => document.getElementById("hakkimizda")?.scrollIntoView({ behavior: "smooth" })}>
                  Daha Fazla Bilgi
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-full animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/vfzoHZmUVWjaWXJmj9o67r/sandbox/i2WddQ6dy1MHiAL9rQlBl8-img-1_1771263280000_na1fn_aGVyby1tb2Rlcm4tb2ZmaWNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdmZ6b0habXVWV2phV1hKbWo5bzY3ci9zYW5kYm94L2kyV2RkUTZkeTFNSGlBTDlyUWxCbDgtaW1nLTFfMTc3MTI2MzI4MDAwMF9uYTFmbl9hR1Z5YnkxdGIyUmxjbTR0YjJabWFXTmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=X7Vb5QOy3iWvp6YW9kQW64of65ZCGRerER4Y4ItNlkQaonwwaywKxlfMlNDsjjPRMn30CGEE~zuCAHD-TVtxq-DnYnLtU~BLV1GxYxGNZlqYMb~05CuPAPA-wGFxPRukbd-5uJMr8xJ7YNiXZC5YAokWI~kbgeFfdO7u5qcvfd9Zbu1q0qVTJ96ELdYack6lP33QNJMCzVG3dQqntZHzznmu8-~Q91qbinl2AtIfbm8i5E7o4iHlXEg4eM9Dxg3VJ7fj5yokKYqRtptPkM4b2vlFa37GCMZbFFKoJv2q00B~nxM44EfPOk2kZwiapcPFumByn~oHr3XKlCN~z3RqIQ__"
                alt="Modern Office"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-primary">Hakkımızda</h2>
              <p className="text-foreground/70 leading-relaxed">
                b² Mimarlık & İnşaat, iki farklı disiplinin ortak aklından doğan bir tasarım ve yapım ofisidir. Mimari tasarım ile mühendislik ve saha deneyimini bir araya getiren firma, her projede dengeli, uygulanabilir ve karakterli mekânlar üretmeyi hedefler.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Kurucu ortakların farklı uzmanlık alanlarından gelen tecrübeleri, projelerin hem tasarım hem de uygulama süreçlerinde güçlü ve bütüncül çözümler sunmasını sağlar.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground">Tasarımdan anahtar teslim uygulamaya kadar tüm süreci tek elden yönetim</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground">Mimarlık ve mühendisliğin dengesini sağlayan bütüncül yaklaşım</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground">Müşterilerine güvenilir ve net sonuçlar sunan profesyonel ekip</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/vfzoHZmUVWjaWXJmj9o67r/sandbox/i2WddQ6dy1MHiAL9rQlBl8-img-2_1771263280000_na1fn_bW9kZXJuLWFyY2hpdGVjdHVyZS1leHRlcmlvcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdmZ6b0habXVWV2phV1hKbWo5bzY3ci9zYW5kYm94L2kyV2RkUTZkeTFNSGlBTDlyUWxCbDgtaW1nLTJfMTc3MTI2MzI4MDAwMF9uYTFmbl9iVzlrWlhKdUxXRnlZMmhwZEdWamRIVnlaUzFsZUhSbGNtbHZjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PhRIxML~CY5XWecep2BBVqKxvrOBGl4X20sAncGOPtuXigzgHB8zR48n4igl-~Qxw6P~ifShz~gBOKkEmSzlCr860DvddFmdUAqprYsiyK3kK1ONDEAVBaVhc85XenMrUNnmy84Hmjid9JarppmWKmEi~96mlrXsTt9wT94YderQ6EGVYStmmysZAoesOz8mwQ7sHZbShJ94Kwz2gwGMz8FOlV2oVKDqNEbvzNbloVnY0Hm5s9hRwrael8B8GGtyneIhI5U35piJfPqa3bEA5W07jNHOZGs44rL45bRUykT~KB5-Uo~bsE-qSmbtGDOyPci18MIEIpI7wVqQ8i884g__"
                alt="Modern Architecture"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">Hizmetlerimiz</p>
            <h2 className="text-4xl font-bold text-primary">Bütüncül Çözümler</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Mimari tasarımdan anahtar teslim inşaata kadar, her aşamada profesyonel hizmet sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 bg-white rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 text-accent group-hover:text-white" />
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
      <section id="projeler" className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">Tamamlanan Projeler</p>
            <h2 className="text-4xl font-bold text-primary">Portfolio</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Başarıyla tamamladığımız projeler ve müşteri hikayeleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.services}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-primary mb-3">{project.title}</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p><strong>Lokasyon:</strong> {project.location}</p>
                    <p><strong>Yıl:</strong> {project.year}</p>
                    <p><strong>Alan:</strong> {project.area}</p>
                    <p><strong>Hizmetler:</strong> {project.services}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="surec" className="py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">Çalışma Süreci</p>
            <h2 className="text-4xl font-bold text-primary">Adım Adım Yol Haritası</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Projenizin başından sonuna kadar takip ettiğimiz sistematik süreç
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div
                  className="p-6 bg-white rounded-lg border-2 border-border hover:border-accent hover:bg-accent/5 transition-all cursor-pointer text-center"
                  onMouseEnter={() => setActiveProcess(idx)}
                >
                  <div className="text-3xl font-bold text-accent mb-2">{step.number}</div>
                  <h3 className="text-sm font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-xs text-foreground/60 hidden md:block">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-accent/5 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold text-primary mb-4">{processSteps[activeProcess].title}</h3>
            <p className="text-foreground/70 leading-relaxed">{processSteps[activeProcess].description}</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">Müşteri Yorumları</p>
            <h2 className="text-4xl font-bold text-primary">Başarı Hikayeleri</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-all">
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
          <div className="text-center mb-16 space-y-4">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">Blog & İçerik</p>
            <h2 className="text-4xl font-bold text-primary">Son Yazılar</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Mimarlık, tasarım ve inşaat sektörü hakkında güncel bilgiler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer">
                <p className="text-sm text-accent mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                <a href="#" className="text-accent font-semibold hover:text-accent/80 transition-colors">
                  Devamını Oku →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">Kurucu Ortaklar</p>
            <h2 className="text-4xl font-bold text-primary">Deneyim ve Uzmanlık</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, idx) => (
              <div key={idx} className="space-y-4">
                <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-24 h-24 text-accent/30" />
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
      <section id="iletisim" className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/vfzoHZmUVWjaWXJmj9o67r/sandbox/i2WddQ6dy1MHiAL9rQlBl8-img-5_1771263278000_na1fn_YWJzdHJhY3QtYXJjaGl0ZWN0dXJlLXBhdHRlcm4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdmZ6b0habXVWV2phV1hKbWo5bzY3ci9zYW5kYm94L2kyV2RkUTZkeTFNSGlBTDlyUWxCbDgtaW1nLTVfMTc3MTI2MzI3ODAwMF9uYTFmbl9ZV0p6ZEhKaFkzUXRZWEpqYUdsMFpXTjBkWEpsTFhCaGRIUmxjbTQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IrxOAazbn5aH0SwAWYJOmbDDGEkwUu~nNEyvcwFCci3aKmgy8Q-4kHHbFKIY3gdiOzf6ilrCQVuOoRpzyFVE5FywJ1mJrC0QrO3IHzQpLUQJqEY0pc9c3B~rFBvSvuu2rPkXGfOiy01mB8p6dnQGdmtKuNkiBaeKJFixYhshD1dO7xPJOmvjqXl7Fpitewp-~WiSu8cc3EcqA2V6rnN9HRvamxvJMex~EJGBeW3fkwRX970AYfmfOK1P2IkyexDqIRffKYWgUxc2A6OMbuVVcAMQZR4d8N58YDcUiLpN4psUXuRUiigvEz9Dj1ylhdak5~V2AeRo8iFnFUPVnEA2HA__"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Bize Ulaşın</h2>
                <p className="text-white/80">
                  Projeniz hakkında konuşmak için bize yazın veya arayın. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Adres</p>
                    <p className="text-white/80">Denizli, Türkiye</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-white/80">+90 555 838 67 22</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">E-posta</p>
                    <p className="text-white/80">info@bkare-mimarlik.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-4 bg-white/10 backdrop-blur p-8 rounded-lg">
              <div>
                <label className="block text-sm font-semibold mb-2">Ad Soyad *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
                  placeholder="Adınızı girin"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">E-posta *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
                  placeholder="E-posta adresiniz"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Telefon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
                  placeholder="Telefon numaranız"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Proje Türü</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-accent"
                >
                  <option value="">Seçiniz...</option>
                  <option value="mimari">Mimari Tasarım</option>
                  <option value="ic-mimari">İç Mimari Tasarım</option>
                  <option value="insaat">Anahtar Teslim İnşaat</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Mesaj *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent h-32 resize-none"
                  placeholder="Projeniz hakkında bilgi verin..."
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold" type="submit">
                Mesaj Gönder
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
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-xs">b²</span>
                </div>
                <span className="font-bold text-primary">b² Mimarlık & İnşaat</span>
              </div>
              <p className="text-sm text-foreground/60">İki Çizgi, Tek İmza</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">Hızlı Linkler</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#hakkimizda" className="hover:text-accent transition-colors">Hakkımızda</a></li>
                <li><a href="#projeler" className="hover:text-accent transition-colors">Projeler</a></li>
                <li><a href="#blog" className="hover:text-accent transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">İletişim</h4>
              <p className="text-sm text-foreground/60">Denizli, Türkiye</p>
              <p className="text-sm text-foreground/60">info@bkare-mimarlik.com</p>
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
            <p>&copy; 2025 b² Mimarlık & İnşaat. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
