const menu = document.getElementById('menu');
const navLinks = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});

const translations = {
  en: {
    features:'Features', screenshots:'Screenshots', roadmap:'Roadmap', github:'GitHub', eyebrow:'NEXT-GENERATION CODE & PROMPT MANAGER', heroTitle:'Your code.<br><span>Organized.</span>', heroText:'A modern, fast and completely offline desktop app for code snippets, terminal commands and AI prompts.', download:'Download CodeSnip ↗', source:'View source', offline:'Offline-first', builtFor:'BUILT FOR PEOPLE WHO BUILD', featureEyebrow:'FEATURES', featureTitle:"Everything you need.<br>Nothing you don't.", featureIntro:'CodeSnip keeps your frequently used code and prompts close, searchable and available even without an internet connection.', f1t:'Spotlight Search', f1p:'Find snippets instantly with global Spotlight search. Use Ctrl + Shift + S from anywhere.', f2t:'Liquid Glass UI', f2p:'A clean, modern interface designed around fast navigation and a focused workspace.', f3t:'Share with Base64', f3p:'Create compact Base64-based sharing links for snippets without sending your data to a server.', f4t:'Offline by Design', f4p:'Your snippets stay local. CodeSnip works without requiring an internet connection.', f5t:'TR / EN', f5p:'Switch between Turkish and English and keep the workspace comfortable for your workflow.', f6t:'Categories', f6p:'Organize snippets into categories and filter your collection quickly as it grows.', workspace:'THE WORKSPACE', workspaceTitle:'Made to stay out of your way.', roadmapEyebrow:'ROADMAP', roadmapTitle:'Built in releases.<br>Always moving forward.', r1t:'Initial Release', r1p:'CodeSnip starts its journey.', r2p:'Spotlight search, sharing and redesigned UI.', r3p:'Import/export improvements and updated version naming.', r4p:'Stability improvements for the current release line.', r5t:'Next up', r5p:'Important hotfixes, Spanish language support and light-theme improvements.', r6p:'Plugins and code preview are planned for the future.', ready:'READY?', ctaTitle:'Keep your best code one shortcut away.', ctaText:'Download CodeSnip or explore the source on GitHub.', get:'Get CodeSnip ↗', tagline:'Next-Gen Code & Prompt Manager'
  },
  tr: {
    features:'Özellikler', screenshots:'Ekran Görüntüleri', roadmap:'Yol Haritası', github:'GitHub', eyebrow:'YENİ NESİL KOD VE PROMPT YÖNETİCİSİ', heroTitle:'Kodların.<br><span>Düzenli.</span>', heroText:'Kod parçacıkları, terminal komutları ve yapay zekâ promptları için modern, hızlı ve tamamen çevrimdışı masaüstü uygulaması.', download:"CodeSnip'i İndir ↗", source:'Kaynak kodu', offline:'Çevrimdışı', builtFor:'ÜRETEN İNSANLAR İÇİN', featureEyebrow:'ÖZELLİKLER', featureTitle:'İhtiyacın olan her şey.<br>Gereksiz hiçbir şey yok.', featureIntro:'CodeSnip, sık kullandığın kodları ve promptları internet bağlantısı olmadan erişilebilir, aranabilir ve düzenli tutar.', f1t:'Spotlight Arama', f1p:'Global Spotlight aramasıyla kodlarını anında bul. Her yerden Ctrl + Shift + S kullan.', f2t:'Liquid Glass Arayüz', f2p:'Hızlı gezinme ve odaklanmış çalışma alanı için tasarlanmış temiz ve modern arayüz.', f3t:'Base64 ile Paylaş', f3p:'Verilerini bir sunucuya göndermeden kod parçacıkları için kompakt Base64 paylaşım bağlantıları oluştur.', f4t:'Çevrimdışı Tasarım', f4p:'Kodların yerel olarak kalır. CodeSnip internet bağlantısı gerektirmeden çalışır.', f5t:'TR / EN', f5p:'Çalışma alanını Türkçe veya İngilizce kullan.', f6t:'Kategoriler', f6p:'Kod parçacıklarını kategorilere ayır ve koleksiyonun büyüdükçe hızlıca filtrele.', workspace:'ÇALIŞMA ALANI', workspaceTitle:'İşinin önüne geçmemek için tasarlandı.', roadmapEyebrow:'YOL HARİTASI', roadmapTitle:'Sürümlerle gelişiyor.<br>İleriye doğru ilerliyor.', r1t:'İlk Sürüm', r1p:'CodeSnip yolculuğuna başladı.', r2p:'Spotlight arama, paylaşım ve yenilenen arayüz.', r3p:'İçe/dışa aktarma geliştirmeleri ve yeni sürüm adlandırması.', r4p:'Mevcut sürüm için kararlılık geliştirmeleri.', r5t:'Sırada', r5p:'Önemli düzeltmeler, İspanyolca dil desteği ve açık tema geliştirmeleri.', r6p:'Eklenti sistemi ve kod önizleme gelecekte planlanıyor.', ready:'HAZIR MISIN?', ctaTitle:'En iyi kodların tek bir kısayol uzağında.', ctaText:"CodeSnip'i indir veya kaynak kodunu GitHub'da incele.", get:"CodeSnip'i Al ↗", tagline:'Yeni Nesil Kod ve Prompt Yöneticisi'
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('.lang').forEach(btn => btn.classList.toggle('active', btn.id === `lang-${lang}`));
  localStorage.setItem('codesnip-lang', lang);
}

document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-tr')?.addEventListener('click', () => setLanguage('tr'));
const saved = localStorage.getItem('codesnip-lang');
const browser = navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
setLanguage(saved || browser);

const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); }
}), {threshold:.08});
document.querySelectorAll('.feature,.shot,.release,.cta').forEach(el => reveal.observe(el));

// Final visual polish for the existing CodeSnip Pages layout.
const polish = document.createElement('style');
polish.textContent = `
.brand { gap: 9px; }
.brand img { width: 32px; height: 32px; flex: 0 0 32px; display: block; object-fit: contain; border-radius: 8px; }
.mock-sidebar img { width: 30px; height: 30px; display: block; object-fit: contain; margin: 0 0 30px 0; border-radius: 7px; }
.nav-actions { display: flex; align-items: center; gap: 14px; }
.language { display: inline-flex; align-items: center; gap: 4px; padding: 4px; border: 1px solid rgba(255,255,255,.10); border-radius: 11px; background: rgba(255,255,255,.045); box-shadow: inset 0 1px 0 rgba(255,255,255,.04); backdrop-filter: blur(14px); }
.language > span { color: rgba(255,255,255,.25); font-size: 11px; user-select: none; }
.lang { appearance: none; border: 0; background: transparent; color: #8f96a3; font: 700 11px/1 Inter,system-ui,sans-serif; letter-spacing: .04em; min-width: 31px; height: 26px; padding: 0 7px; border-radius: 8px; cursor: pointer; transition: .18s ease; }
.lang:hover { color: #dceff0; background: rgba(0,173,181,.10); }
.lang.active { color: #041316; background: #00adb5; box-shadow: 0 4px 14px rgba(0,173,181,.18); }
@media (max-width: 850px) { .brand img { width: 30px; height: 30px; flex-basis: 30px; } .nav-actions { gap: 8px; } }
@media (max-width: 560px) { .brand img { width: 28px; height: 28px; flex-basis: 28px; border-radius: 7px; } .language { padding: 3px; } .lang { min-width: 29px; height: 24px; font-size: 10px; } }
`;
document.head.appendChild(polish);
