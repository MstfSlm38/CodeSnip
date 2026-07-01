# CodeSnip — Yeni Nesil Kod ve İstemi Yöneticisi

<p align="center">
  <img src="https://img.shields.io/badge/Version-26Q2.5-00adb5?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Built%20With-Electron-47848F?style=for-the-badge" alt="Electron">
</p>

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/Dil-T%C3%BCrk%C3%A7e-red?style=flat-flat" alt="TR"></a>
  <a href="README_en.md"><img src="https://img.shields.io/badge/Language-English-blue?style=flat-flat" alt="EN"></a>
</p>

<p align="center">
  Modern, hızlı ve tamamen çevrimdışı çalışan bir masaüstü kod ve AI prompt yöneticisi.<br>
  Kod parçalarını, terminal komutlarını ve prompt'larınızı tek bir uygulamada düzenleyin, arayın ve paylaşın.
</p>

---

## Hakkında

CodeSnip; geliştiriciler, tasarımcılar ve yapay zekâ ile çalışan kullanıcılar için geliştirilmiş modern bir Electron uygulamasıdır.
Kod parçalarını kategorilere ayırabilir, anında arayabilir, tek tıkla kopyalayabilir ve Base64 tabanlı paylaşım bağlantıları oluşturabilirsiniz.
Tüm veriler cihazınızda saklanır ve uygulama internet bağlantısı gerektirmeden çalışır.

> [!NOTE]
> Uygulama tamamen çevrimdışı çalıştığı için verileriniz güvendedir.

---

## Özellikler

- Liquid Glass (Buzlu Cam) kullanıcı arayüzü
- Global Spotlight arama (`Ctrl + Space`)
- Base64 tabanlı paylaşım sistemi
- Türkçe ve İngilizce dil desteği
- Tamamen çevrimdışı çalışma
- Yerel veri depolama
- Hazır kategori sistemi
- Hızlı arama ve filtreleme
- Electron tabanlı masaüstü uygulaması

---

## Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm

### 1- Depoyu klonlayın

```bash
git clone https://github.com/MstfSlm38/CodeSnip.git
```

### 2- Oluşturulan Klasöre Gidin

```bash
cd codesnip
```

### 3- Bağımlılıkları yükleyin

```bash
npm install
npm install electron --save-dev
```

### 4- Geliştirici modunda çalıştırın

```bash
npm start
```

### 5- Üretim sürümünü paketleyin

```bash
npm run dist
```
---

## Ekran Görüntüleri

<p align="center">
<img src="screenshot_1.png" width="900">
<br><br>
<img src="screenshot_2.png" width="900">
</p>




---

## Klavye Kısayolları

| Kısayol | Açıklama |
|---------|----------|
| `Ctrl + Shift + S` | **Global Kısayol:** Uygulama arkada açık olsa bile ekrana getirir ve Spotlight aramayı açar. |
| `Ctrl + Space` | Uygulama içindeyken Spotlight arama panelini hızlıca açar veya kapatır. |
| `Esc` | Açık olan Spotlight arama panelini kapatır. |
| `Space` | Spotlight arama listesindeyken seçili kodun **Quick Look (Hızlı Önizleme)** panelini açar. |
| `Arrow Up / Down` | Spotlight arama sonuçları arasında yukarı-aşağı gezinmeyi sağlar. |
| `Enter` | Spotlight aramasında seçilen kodu ana arama çubuğuna aktarır (Veya `+kategori` formatındaysa hızlı kod ekler).

---

## Kullanılan Teknolojiler

- Electron
- JavaScript
- HTML5
- CSS3

---

## Yol Haritası
- [x] v1.0 — İlk Sürüm
  - [x] v1.1 — Hotfix ve Favorileme Özelliği

- [x] 26Q2 — Spotlight, Paylaşım ve Yenilenen Liquid Glass Tasarımı
  - [x] 26Q2.5 — JSON dışa/içe aktarma, Daha İyi Spotlight ve Sürüm İsmi Değişikliği

- [ ] 26Q3 — MacOS Desteği
- [ ] 26Q4 — Visual Studio Code uzantısı
- [ ] 27Q1 — Eklenti (Plugin) sistemi

>[!NOTE]
>Yol haritası yeni özelliklerden veya çıkan buglardan dolayı zamanla değişebilir.

## Katkıda Bulunma

Projeyi geliştirmemize yardımcı olmak ister misiniz? 
-  Bu depoyu fork edin (`Fork` butonuna basın).
-  Yeni bir özellik için dal oluşturun (`git checkout -b yeni-ozellik`).
-  Değişikliklerinizi kaydedin (`git commit -am 'Yeni özellik eklendi'`).
-  Dalınızı gönderin (`git push origin yeni-ozellik`).
-  Bir **Pull Request** (Değişiklik İsteği) oluşturun.
-  Ya da eğer proje'de hata bulursanız Bug Report kısmından bize bildirmekten çekinmeyin!
