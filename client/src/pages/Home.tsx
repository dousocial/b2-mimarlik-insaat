import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Zap, Building2, Palette, Hammer, Lightbulb } from "lucide-react";
import { useState } from "react";

/**
 * b² Mimarlık & İnşaat - Satış Hunisi Websitesi
 * Tasarım Felsefesi: Minimalist Raffinement
 * - Asimetrik layout, diagonal dividers, bakır aksent çizgiler
 * - Playfair Display başlıklar (zarafet), Inter body (okunabilirlik)
 * - Bol whitespace, profesyonel ve güven odaklı
 */

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);

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
            <a href="#hizmetler" className="text-sm hover:text-accent transition-colors">Hizmetler</a>
            <a href="#surec" className="text-sm hover:text-accent transition-colors">Süreç</a>
            <a href="#iletisim" className="text-sm hover:text-accent transition-colors">İletişim</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white">İletişime Geç</Button>
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
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Proje Başlat <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
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
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          />
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

      {/* Process Section */}
      <section id="surec" className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">Çalışma Süreci</p>
            <h2 className="text-4xl font-bold text-primary">Adım Adım Yol Haritası</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Projenizin başından sonuna kadar takip ettiğimiz sistematik süreç.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div
                  className="p-6 bg-background rounded-lg border-2 border-border hover:border-accent hover:bg-accent/5 transition-all cursor-pointer text-center"
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

          {/* Process Detail */}
          <div className="mt-12 p-8 bg-accent/5 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold text-primary mb-4">{processSteps[activeProcess].title}</h3>
            <p className="text-foreground/70 leading-relaxed">{processSteps[activeProcess].description}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-background">
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

      {/* CTA Section */}
      <section id="iletisim" className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/vfzoHZmUVWjaWXJmj9o67r/sandbox/i2WddQ6dy1MHiAL9rQlBl8-img-5_1771263278000_na1fn_YWJzdHJhY3QtYXJjaGl0ZWN0dXJlLXBhdHRlcm4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdmZ6b0habXVWV2phV1hKbWo5bzY3ci9zYW5kYm94L2kyV2RkUTZkeTFNSGlBTDlyUWxCbDgtaW1nLTVfMTc3MTI2MzI3ODAwMF9uYTFmbl9ZV0p6ZEhKaFkzUXRZWEpqYUdsMFpXTjBkWEpsTFhCaGRIUmxjbTQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IrxOAazbn5aH0SwAWYJOmbDDGEkwUu~nNEyvcwFCci3aKmgy8Q-4kHHbFKIY3gdiOzf6ilrCQVuOoRpzyFVE5FywJ1mJrC0QrO3IHzQpLUQJqEY0pc9c3B~rFBvSvuu2rPkXGfOiy01mB8p6dnQGdmtKuNkiBaeKJFixYhshD1dO7xPJOmvjqXl7Fpitewp-~WiSu8cc3EcqA2V6rnN9HRvamxvJMex~EJGBeW3fkwRX970AYfmfOK1P2IkyexDqIRffKYWgUxc2A6OMbuVVcAMQZR4d8N58YDcUiLpN4psUXuRUiigvEz9Dj1ylhdak5~V2AeRo8iFnFUPVnEA2HA__"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold">Projenizi Başlatmaya Hazır mısınız?</h2>
            <p className="text-lg text-white/80">
              b² Mimarlık & İnşaat ile vizyonunuzu gerçeğe dönüştürün. Hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                İletişime Geç <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Telefon: +90 (555) XXX XX XX
              </Button>
            </div>
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
                <li><a href="#hizmetler" className="hover:text-accent transition-colors">Hizmetler</a></li>
                <li><a href="#surec" className="hover:text-accent transition-colors">Süreç</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">İletişim</h4>
              <p className="text-sm text-foreground/60">Denizli, Türkiye</p>
              <p className="text-sm text-foreground/60">info@b2mimarlik.com</p>
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
