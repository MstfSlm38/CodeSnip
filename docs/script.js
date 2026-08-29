const menu = document.getElementById('menu');
const navLinks = document.getElementById('site-navigation');

function setMenu(open) {
    navLinks?.classList.toggle('mobile-open', open);
    menu?.setAttribute('aria-expanded', String(open));
    menu?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menu?.addEventListener('click', () => {
    setMenu(!navLinks?.classList.contains('mobile-open'));
});

navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

const translations = {
    en: {
        features:'Features', screenshots:'Screenshots', roadmap:'Roadmap', github:'GitHub',
        eyebrow:'NEXT-GENERATION CODE & PROMPT MANAGER', heroTitle:'Your code.<br><span>Organized.</span>',
        heroText:'A modern, fast and completely offline desktop app for code snippets, terminal commands and AI prompts.',
        download:'Download CodeSnip ↗', source:'View source', offline:'Offline-first',
        builtFor:'BUILT FOR PEOPLE WHO BUILD', featureEyebrow:'FEATURES', featureTitle:"Everything you need.<br>Nothing you don't.",
        featureIntro:'CodeSnip keeps your frequently used code and prompts close, searchable and available even without an internet connection.',
        f1t:'Spotlight Search', f1p:'Find snippets instantly with global Spotlight search. Use Ctrl + Shift + S from anywhere.',
        f2t:'Liquid Glass UI', f2p:'A clean, modern interface designed around fast navigation and a focused workspace.',
        f3t:'Share with Base64', f3p:'Create compact Base64-based sharing links for snippets without sending your data to a server.',
        f4t:'Offline by Design', f4p:'Your snippets stay local. CodeSnip works without requiring an internet connection.',
        f5t:'TR / EN', f5p:'Switch between Turkish and English and keep the workspace comfortable for your workflow.',
        f6t:'Categories', f6p:'Organize snippets into categories and filter your collection quickly as it grows.',
        f7t:'Backup & Restore', f7p:'Export and import your snippet library as JSON so your local data is easy to back up and move.',
        f8t:'Customization', f8p:'Personalize the workspace with appearance, blur, transparency, accent and background options.',
        workspace:'THE WORKSPACE', workspaceTitle:'Made to stay out of your way.', roadmapEyebrow:'ROADMAP', roadmapTitle:'Built in releases.<br>Always moving forward.',
        completed:'Completed', current:'Current', planned:'Planned', r1t:'Initial Release', r1p:'CodeSnip starts its journey.',
        r2t:'Hotfixes & Favorites', r2p:'Hotfixes, favorites and early improvements.', r3t:'26Q2 — v2.0', r3p:'Spotlight, sharing and redesigned Liquid Glass UI.',
        r25p:'JSON Export/Import, improved Spotlight and version naming update.',
        r3qTitle:'Linux Support & Customization', r3q:'Linux support for Debian, Arch and Red Hat, improved appearance, customization and category management.',
        r31p:'Critical hotfixes.', r35p:'Important hotfixes, Spanish language support and light theme improvements.',
        r4qTitle:'macOS Support & Performance', r4q:'Application optimization and macOS expansion, while continuing platform-specific Linux improvements.',
        r5qTitle:'Plugins & Code Preview', r5q:'A plugin system and built-in code preview capabilities.', ready:'READY?',
        ctaTitle:'Keep your best code one shortcut away.', ctaText:'Download CodeSnip or explore the source on GitHub.', get:'Get CodeSnip ↗', tagline:'Next-Gen Code & Prompt Manager'
    },
    tr: {
        features:'Özellikler', screenshots:'Ekran Görüntüleri', roadmap:'Yol Haritası', github:'GitHub',
        eyebrow:'YENİ NESİL KOD VE PROMPT YÖNETİCİSİ', heroTitle:'Kodların.<br><span>Düzenli.</span>',
        heroText:'Kod parçacıkları, terminal komutları ve yapay zekâ promptları için modern, hızlı ve tamamen çevrimdışı masaüstü uygulaması.',
        download:"CodeSnip'i İndir ↗", source:'Kaynak kodu', offline:'Çevrimdışı', builtFor:'ÜRETEN İNSANLAR İÇİN', featureEyebrow:'ÖZELLİKLER',
        featureTitle:'İhtiyacın olan her şey.<br>Gereksiz hiçbir şey yok.', featureIntro:'CodeSnip, sık kullandığın kodları ve promptları internet bağlantısı olmadan erişilebilir, aranabilir ve düzenli tutar.',
        f1t:'Spotlight Arama', f1p:'Global Spotlight aramasıyla kodlarını anında bul. Her yerden Ctrl + Shift + S kullan.', f2t:'Liquid Glass Arayüz', f2p:'Hızlı gezinme ve odaklanmış çalışma alanı için tasarlanmış temiz ve modern arayüz.',
        f3t:'Base64 ile Paylaş', f3p:'Verilerini bir sunucuya göndermeden kod parçacıkları için kompakt Base64 paylaşım bağlantıları oluştur.', f4t:'Çevrimdışı Tasarım', f4p:'Kodların yerel olarak kalır. CodeSnip internet bağlantısı gerektirmeden çalışır.',
        f5t:'TR / EN', f5p:'Çalışma alanını Türkçe veya İngilizce kullan.', f6t:'Kategoriler', f6p:'Kod parçacıklarını kategorilere ayır ve koleksiyonun büyüdükçe hızlıca filtrele.',
        f7t:'Yedekle ve Geri Yükle', f7p:'Snippet koleksiyonunu JSON olarak dışa aktar ve gerektiğinde kolayca geri yükle.', f8t:'Özelleştirme', f8p:'Görünüm, blur, şeffaflık, vurgu rengi ve arka plan seçenekleriyle çalışma alanını kişiselleştir.',
        workspace:'ÇALIŞMA ALANI', workspaceTitle:'İşinin önüne geçmemek için tasarlandı.', roadmapEyebrow:'YOL HARİTASI', roadmapTitle:'Sürümlerle gelişiyor.<br>Her zaman ileriye.',
        completed:'Tamamlandı', current:'Mevcut Sürüm', planned:'Planlanıyor', r1t:'İlk Sürüm', r1p:'CodeSnip yolculuğuna başladı.', r2t:'Hotfixler ve Favoriler', r2p:'Hotfixler, favoriler ve ilk geliştirmeler.',
        r3t:'26Q2 — v2.0', r3p:'Spotlight, paylaşım ve yenilenen Liquid Glass arayüzü.', r25p:'JSON içe/dışa aktarma, geliştirilmiş Spotlight ve yeni sürüm adlandırması.',
        r3qTitle:'Linux Desteği ve Özelleştirme', r3q:'Debian, Arch ve Red Hat için Linux desteği, geliştirilmiş görünüm, özelleştirme ve kategori yönetimi.', r31p:'Kritik düzeltmeler.',
        r35p:'Önemli düzeltmeler, İspanyolca dil desteği ve açık tema geliştirmeleri.', r4qTitle:'macOS Desteği ve Performans', r4q:'Uygulama optimizasyonu ve macOS genişlemesi; Linux için platforma özel geliştirmeler devam ediyor.',
        r5qTitle:'Eklentiler ve Kod Önizleme', r5q:'Eklenti sistemi ve yerleşik kod önizleme özellikleri.', ready:'HAZIR MISIN?', ctaTitle:'En iyi kodların tek bir kısayol uzağında.', ctaText:"CodeSnip'i indir veya kaynak kodunu GitHub'da incele.", get:"CodeSnip'i Al ↗", tagline:'Yeni Nesil Kod ve Prompt Yöneticisi'
    }
};

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = translations[lang][el.dataset.i18n];
        if (value !== undefined) el.innerHTML = value;
    });
    document.querySelectorAll('.lang').forEach(btn => btn.classList.toggle('active', btn.id === `lang-${lang}`));
    localStorage.setItem('codesnip-lang', lang);
}

document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-tr')?.addEventListener('click', () => setLanguage('tr'));

const saved = localStorage.getItem('codesnip-lang');
const browserLang = navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
setLanguage(saved || browserLang);

const revealElements = document.querySelectorAll('.feature,.shot,.release,.cta');
if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                reveal.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    document.documentElement.classList.add('reveal-ready');
    revealElements.forEach(el => reveal.observe(el));
} else {
    revealElements.forEach(el => el.classList.add('visible'));
}
