# CodeSnip | Yeni Nesil Kod ve Prompt Yöneticisi

<p align="center">
  <img src="https://img.shields.io/badge/Sürüm-26Q3.5%20Geliştirme-00ADB5?style=for-the-badge" alt="26Q3.5 geliştirme sürümü">
  <img src="https://img.shields.io/badge/Geliştirme%20Altyapısı-Electron-47848F?style=for-the-badge" alt="Electron">
  <img src="https://img.shields.io/badge/Lisans-MIT-green?style=for-the-badge" alt="MIT Lisansı">
</p>

<p align="center">
  <a href="README_tr.md">
    <img src="https://img.shields.io/badge/Dil-Türkçe-red?style=for-the-badge" alt="Türkçe">
  </a>
  <a href="README.md">
    <img src="https://img.shields.io/badge/Language-English-blue?style=for-the-badge" alt="English">
  </a>
</p>

<p align="center">
  Kod parçacıklarını, terminal komutlarını ve yapay zekâ promptlarını yönetmek için modern, hızlı ve çevrimdışı çalışabilen bir masaüstü uygulaması.
</p>

<p align="center">
  <img width="1920" alt="CodeSnip uygulama önizlemesi" src="https://github.com/user-attachments/assets/1e01968b-ef57-46bb-a8e7-743f0b2e65e5">
</p>

---

## Genel Bakış

**CodeSnip**, geliştiricilerin ve yapay zekâ meraklılarının kod parçacıklarını, terminal komutlarını ve promptlarını düzenli bir şekilde saklayıp yeniden kullanabilmeleri için geliştirilmiş Electron tabanlı bir masaüstü uygulamasıdır.

Kategoriler oluşturabilir, içeriklerinizi anında arayabilir, kodlarınızı tek tıklamayla kopyalayabilir ve Base64 ile kodlanmış veriler üzerinden parçacıklarınızı paylaşabilirsiniz. CodeSnip, uygulama verilerinizi yerel olarak saklayarak koleksiyonunuzun cihazınızda kalmasını sağlar.

## Özellikler

- **Kod Parçacığı Yönetimi:** Yeniden kullanılabilir kodlarınızı düzenleyin ve yönetin.
- **Spotlight Araması:** Sezgisel arama arayüzüyle içeriklerinizi hızla bulun.
- **Hızlı İşlemler:** Desteklenen kısayollarla kod parçacıkları ekleyin ve içeriklerinize erişin.
- **Kod Paylaşımı:** Base64 kodlamasıyla kod parçacığı verilerinizi paylaşın.
- **Çok Dilli Arayüz:** Türkçe, İngilizce ve İspanyolca dil desteği.
- **Kategori Yönetimi:** Kod parçacıklarınızı kategorilere ayırarak düzenli tutun.
- **Yerel Depolama:** Koleksiyonunuzu kendi cihazınızda saklayın.
- **Çevrimdışı Kullanım:** Temel işlevler internet bağlantısı gerektirmeden çalışacak şekilde tasarlanmıştır.
- **Liquid Glass Arayüzü:** Sadelik ve kullanılabilirliğe odaklanan modern bir masaüstü deneyimi.

> [!NOTE]
> CodeSnip, yerel veri depolama ve çevrimdışı kullanım için tasarlanmıştır. Varsa harici kaynaklara bağlı özellikler internet bağlantısı gerektirebilir.

## Kurulum

### Gereksinimler

- [Node.js](https://nodejs.org/) v18 veya üzeri
- npm
- Git

### 1. Depoyu klonlayın

```bash
git clone https://github.com/CodeSnip-DevTeam/CodeSnip.git
```

### 2. Proje klasörüne girin

```bash
cd CodeSnip
```

### 3. Bağımlılıkları yükleyin

```bash
npm install
```

### 4. Uygulamanın dağıtım sürümünü oluşturun

```bash
npm run dist
```

> [!TIP]
> Derleme komutu başarısız olursa `package.json` dosyasındaki `scripts` bölümünü kontrol edin ve gerekli bağımlılıkların yüklü olduğundan emin olun.

## Ekran Görüntüleri

<p align="center">
  <img width="1920" alt="CodeSnip ekran görüntüsü 1" src="https://github.com/user-attachments/assets/e31ec191-3f60-4b64-9a4b-7a8306fd653d">
  <br><br>
  <img width="1920" alt="CodeSnip ekran görüntüsü 2" src="https://github.com/user-attachments/assets/83036436-5c32-43c4-aa88-24eea23bbb24">
</p>

## Klavye Kısayolları

| Kısayol | Açıklama |
|---|---|
| `Ctrl + Shift + S` | Uygulamayı öne getirir ve arka planda çalışırken bile Spotlight aramasını açar. |
| `Ctrl + Space` | Uygulama etkinken Spotlight aramasını açar veya kapatır. |
| `Esc` | Açık Spotlight arama panelini kapatır. |
| `Space` | Seçili arama sonucu için Quick Look önizleme panelini açar. |
| `Yukarı / Aşağı Ok` | Spotlight arama sonuçları arasında gezinir. |
| `Enter` | Seçili kodu ana arama çubuğuna aktarır veya desteklenen hızlı ekleme işlemini tetikler. |

> [!NOTE]
> Kısayolların kullanılabilirliği, uygulamanın mevcut durumuna ve işletim sistemine bağlı olabilir.

## Kullanılan Teknolojiler

- [Electron](https://www.electronjs.org/)
- JavaScript
- HTML5
- CSS3
- [Node.js](https://nodejs.org/)

## Yol Haritası

- [x] **v1.0** — İlk sürüm
- [x] **v1.1** — Hata düzeltmeleri ve favoriler özelliği
- [x] **26Q2 (v2.0)** — Spotlight, kod paylaşımı ve yeniden tasarlanan Liquid Glass arayüzü
  - [x] **26Q2.5** — JSON dışa aktarma/İçe aktarma, Spotlight iyileştirmeleri ve sürüm adlandırmasının güncellenmesi
- [x] **26Q3** — Linux desteği, görünüm iyileştirmeleri, özelleştirme ve kategori yönetimi
  - [x] **26Q3.1** — Kritik hata düzeltmeleri
- [ ] **26Q3.5** — Önemli hata düzeltmeleri, İspanyolca dil desteği, açık tema iyileştirmeleri ve görsel yenileme
- [ ] **26Q4** — Uygulama optimizasyonu ve Slackware ile Gentoo dâhil genişletilmiş macOS/Linux desteği
- [ ] **27Q1** — Eklenti sistemi ve kod önizleme

> [!NOTE]
> Yol haritası, mevcut geliştirme planlarını yansıtır ve önceliklere göre değişebilir. İlgili sürüm yayımlanana kadar özellikler yayımlanmış kabul edilmez.

## Katkıda Bulunma

Katkılarınızı, hata bildirimlerinizi ve önerilerinizi bekliyoruz.

### Hata bildirme

1. Aynı sorunun daha önce bildirilmediğinden emin olmak için mevcut [Issues](https://github.com/CodeSnip-DevTeam/CodeSnip/issues) kayıtlarını kontrol edin.
2. Yeni bir issue oluşturun.
3. Sorunu ve yeniden oluşturmak için gereken adımları açıkça belirtin.

### Koda katkıda bulunma

1. Depoyu fork edin.
2. Yeni bir özellik dalı oluşturun:

   ```bash
   git checkout -b feature/ozelliginiz
   ```

3. Değişikliklerinizi yapın ve test edin.
4. Değişikliklerinizi commit edin:

   ```bash
   git add .
   git commit -m "Degisikliklerinizi aciklayin"
   ```

5. Dalınızı uzak depoya gönderin:

   ```bash
   git push origin feature/ozelliginiz
   ```

6. Bir pull request oluşturun.

## Lisans

CodeSnip, [MIT Lisansı](LICENSE) altında dağıtılmaktadır.

## Geliştirici

**Mustafa Selim AYDENİZ**

---

<p align="center">
  Kodlarınızı her zaman elinizin altında tutmanız için geliştirildi.
</p>
