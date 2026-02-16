# b² Mimarlık & İnşaat - Web Tasarım Felsefesi

## Seçilen Tasarım Yaklaşımı: "Minimalist Raffinement"

### Design Movement
**Bauhaus Modernism** ile **Contemporary Minimalism**'in kesişimi. İşlevsellik ve estetik mükemmelliğin birlikte hareket ettiği, her detayın amaca hizmet ettiği bir tasarım dili.

### Core Principles
1. **Bütünlük ve Denge**: İki çizgi, tek imza - simetrik olmayan ama dengeli bir görsel hiyerarşi
2. **Boşluk Tasarımı**: Bol whitespace, nefes alan sayfalar, hiçbir şey gereksiz değil
3. **Teknik Zarafet**: Mimarlık ve mühendisliğin kesişim noktasını yansıtan, geometrik ama sıcak detaylar
4. **Güven ve Profesyonellik**: Her element, firmanın deneyim ve uzmanlığını iletir

### Color Philosophy
- **Primary**: Koyu Gri-Mavi (#2C3E50) - Stabilite, profesyonellik, güven
- **Accent**: Sıcak Bakır/Tostopaz (#D4A574) - Yaratıcılık, tasarım, insani dokunuş
- **Background**: Neredeyse Beyaz (#F8F9FA) - Temizlik, açıklık, modern
- **Text**: Koyu Gri (#1A1A1A) - Okunabilirlik, profesyonellik

**Duygusal İçerik**: Gri-mavi güven ve stabiliteyi temsil ederken, bakır aksent yaratıcılık ve tasarımın sıcaklığını ekler. İki renk arasındaki diyalog, firmanın "iki disiplinin ortak aklı" konseptini görselleştirir.

### Layout Paradigm
- **Asimetrik Grid**: Standart 12-column grid yerine, 3-2-1 oranlarında asimetrik bölümler
- **Diagonal Dividers**: Bölümler arasında hafif diagonal kesimler, mimarlık ve dinamizm hissi
- **Sidebar Accent**: Solda dar bir bakır çizgi, sayfayı "imzalayan" bir detay
- **Vertical Rhythm**: 8px base unit, tutarlı spacing

### Signature Elements
1. **Diagonal Dividers**: Bölümler arasında 8-12° açılı SVG dividerler (mimarlık planlarının dinamizmi)
2. **Bakır Accent Line**: Her sayfanın sol kenarında ince, kesintisiz bir bakır çizgi
3. **Geometric Shapes**: Minimal geometric patterns (üçgen, kare) sayfalarda vurgu noktaları olarak

### Interaction Philosophy
- **Subtle Hover Effects**: Opacity ve hafif scale değişimleri, hiçbir zaman agresif
- **Smooth Transitions**: Tüm animasyonlar 300-400ms, easing: ease-in-out
- **Micro-interactions**: Butonlara basıldığında hafif bir "basılma" hissi, scroll sırasında fade-in efektleri
- **No Distractions**: Animasyonlar içeriği destekler, asla dikkat dağıtmaz

### Animation Guidelines
- **Page Load**: Fade-in + slight slide-up (200ms) - yumuşak giriş
- **Scroll Reveal**: Elementler scroll sırasında fade-in + 20px slide-up (300ms)
- **Hover States**: 
  - Butonlar: opacity 0.8 + subtle scale (1.02)
  - Kartlar: shadow deepening + slight lift (2px)
- **CTA Buttons**: Pulse-like glow effect on hover (bakır renk)

### Typography System
- **Display Font**: "Playfair Display" (serif) - Başlıklar, h1-h2, bold weight (700)
  - Kullanım: Sayfa başlıkları, ana mesajlar, firma adı
  - Karakteri: Zarafetli, modern, mimarlık ve tasarımı çağrıştırır
  
- **Body Font**: "Inter" (sans-serif) - Gövde metni, h3-h6, regular (400) ve medium (500)
  - Kullanım: Açıklayıcı metinler, liste öğeleri, form alanları
  - Karakteri: Okunabilir, profesyonel, nötr

- **Hierarchy**:
  - h1: 48px, Playfair Display, 700, letter-spacing: -1px
  - h2: 36px, Playfair Display, 700, letter-spacing: -0.5px
  - h3: 24px, Inter, 600
  - Body: 16px, Inter, 400, line-height: 1.6
  - Caption: 14px, Inter, 400, color: muted-foreground

### Visual Assets Strategy
- **Hero Section**: Custom generated image (minimalist architecture, modern office, clean lines)
- **Project Showcase**: Real project photos (3-6 güçlü görsel per proje)
- **Process Section**: Minimal geometric illustrations (5 adım, her biri bir ikon)
- **Team Section**: Professional headshots (Burcu ve Ahmet)
- **Background Patterns**: Subtle geometric SVG patterns (diagonal lines, minimal shapes)

---

## Tasarım Kararları Rehberi

**Şüphe Durumunda Sor**: "Bu seçim minimalist raffinement felsefesini güçlendiriyor mu, yoksa zayıflatıyor mu?"

- ✅ Bol whitespace, temiz layout, geometrik detaylar → Güçlendiriyor
- ✅ Bakır aksent, asimetrik grid, diagonal dividers → Güçlendiriyor
- ❌ Çok renkli, merkezi layout, fazla animasyon → Zayıflatıyor
- ❌ Standart grid, uniform rounded corners, purple gradients → Zayıflatıyor
