const menu = document.getElementById('menu');
const navLinks = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
});

const translations = {
    en: {
        // Navigation
        features: 'Features',
        screenshots: 'Screenshots',
        roadmap: 'Roadmap',
        github: 'GitHub',

        // Hero
        eyebrow: 'NEXT-GENERATION CODE & PROMPT MANAGER',
        heroTitle: 'Your code.<br><span>Organized.</span>',
        heroText: 'A modern, fast and completely offline desktop app for code snippets, terminal commands and AI prompts.',
        download: 'Download CodeSnip ↗',
        source: 'View source',
        offline: 'Offline-first',

        // Features
        builtFor: 'BUILT FOR PEOPLE WHO BUILD',
        featureEyebrow: 'FEATURES',
        featureTitle: "Everything you need.<br>Nothing you don't.",
        featureIntro: 'CodeSnip keeps your frequently used code and prompts close, searchable and available even without an internet connection.',

        f1t: 'Spotlight Search',
        f1p: 'Find snippets instantly with global Spotlight search. Use Ctrl + Shift + S from anywhere.',

        f2t: 'Liquid Glass UI',
        f2p: 'A clean, modern interface designed around fast navigation and a focused workspace.',

        f3t: 'Share with Base64',
        f3p: 'Create compact Base64-based sharing links for snippets without sending your data to a server.',

        f4t: 'Offline by Design',
        f4p: 'Your snippets stay local. CodeSnip works without requiring an internet connection.',

        f5t: 'TR / EN',
        f5p: 'Switch between Turkish and English and keep the workspace comfortable for your workflow.',

        f6t: 'Categories',
        f6p: 'Organize snippets into categories and filter your collection quickly as it grows.',

        // Workspace
        workspace: 'THE WORKSPACE',
        workspaceTitle: 'Made to stay out of your way.',

        // Roadmap
        roadmapEyebrow: 'ROADMAP',
        roadmapTitle: 'Built in releases.<br>Always moving forward.',

        completed: 'Completed',
        current: 'Current',
        planned: 'Planned',

        // v1.0
        r1t: 'Initial Release',
        r1p: 'CodeSnip starts its journey.',

        // v1.1
        r2t: 'Hotfixes & Favorites',
        r2p: 'Hotfixes, favorites and early improvements.',

        // 26Q2
        r3t: '26Q2 — v2.0',
        r3p: 'Spotlight, sharing and redesigned Liquid Glass UI.',

        r25t: '26Q2.5',
        r25p: 'JSON Export/Import, improved Spotlight and version naming update.',

        // 26Q3
        r3qTitle: 'Linux Support & Customization',
        r3q: 'Linux support for Debian, Arch and Red Hat, improved appearance, customization and category management.',

        // 26Q3.1
        r31t: '26Q3.1',
        r31p: 'Critical hotfixes.',

        // 26Q3.5
        r35t: '26Q3.5',
        r35p: 'Important hotfixes, Spanish language support and light theme improvements.',

        // 26Q4
        r4qTitle: 'Optimization & Platform Expansion',
        r4q: 'Application optimization and full macOS and Linux support, including Slackware and Gentoo.',

        // 27Q1
        r5qTitle: 'Plugins & Code Preview',
        r5q: 'A plugin system and built-in code preview capabilities.',

        // CTA
        ready: 'READY?',
        ctaTitle: 'Keep your best code one shortcut away.',
        ctaText: 'Download CodeSnip or explore the source on GitHub.',
        get: 'Get CodeSnip ↗',

        // Footer
        tagline: 'Next-Gen Code & Prompt Manager'
    },

    tr: {
        // Navigation
        features: 'Özellikler',
        screenshots: 'Ekran Görüntüleri',
        roadmap: 'Yol Haritası',
        github: 'GitHub',

        // Hero
        eyebrow: 'YENİ NESİL KOD VE PROMPT YÖNETİCİSİ',
        heroTitle: 'Kodların.<br><span>Düzenli.</span>',
        heroText: 'Kod parçacıkları, terminal komutları ve yapay zekâ promptları için modern, hızlı ve tamamen çevrimdışı masaüstü uygulaması.',
        download: "CodeSnip'i İndir ↗",
        source: 'Kaynak kodu',
        offline: 'Çevrimdışı',

        // Features
        builtFor: 'ÜRETEN İNSANLAR İÇİN',
        featureEyebrow: 'ÖZELLİKLER',
        featureTitle: 'İhtiyacın olan her şey.<br>Gereksiz hiçbir şey yok.',
        featureIntro: 'CodeSnip, sık kullandığın kodları ve promptları internet bağlantısı olmadan erişilebilir, aranabilir ve düzenli tutar.',

        f1t: 'Spotlight Arama',
        f1p: 'Global Spotlight aramasıyla kodlarını anında bul. Her yerden Ctrl + Shift + S kullan.',

        f2t: 'Liquid Glass Arayüz',
        f2p: 'Hızlı gezinme ve odaklanmış çalışma alanı için tasarlanmış temiz ve modern arayüz.',

        f3t: 'Base64 ile Paylaş',
        f3p: 'Verilerini bir sunucuya göndermeden kod parçacıkları için kompakt Base64 paylaşım bağlantıları oluştur.',

        f4t: 'Çevrimdışı Tasarım',
        f4p: 'Kodların yerel olarak kalır. CodeSnip internet bağlantısı gerektirmeden çalışır.',

        f5t: 'TR / EN',
        f5p: 'Çalışma alanını Türkçe veya İngilizce kullan.',

        f6t: 'Kategoriler',
        f6p: 'Kod parçacıklarını kategorilere ayır ve koleksiyonun büyüdükçe hızlıca filtrele.',

        // Workspace
        workspace: 'ÇALIŞMA ALANI',
        workspaceTitle: 'İşinin önüne geçmemek için tasarlandı.',

        // Roadmap
        roadmapEyebrow: 'YOL HARİTASI',
        roadmapTitle: 'Sürümlerle gelişiyor.<br>Her zaman ileriye.',

        completed: 'Tamamlandı',
        current: 'Mevcut Sürüm',
        planned: 'Planlanıyor',

        // v1.0
        r1t: 'İlk Sürüm',
        r1p: 'CodeSnip yolculuğuna başladı.',

        // v1.1
        r2t: 'Hotfixler ve Favoriler',
        r2p: 'Hotfixler, favoriler ve ilk geliştirmeler.',

        // 26Q2
        r3t: '26Q2 — v2.0',
        r3p: 'Spotlight, paylaşım ve yenilenen Liquid Glass arayüzü.',

        r25t: '26Q2.5',
        r25p: 'JSON içe/dışa aktarma, geliştirilmiş Spotlight ve yeni sürüm adlandırması.',

        // 26Q3
        r3qTitle: 'Linux Desteği ve Özelleştirme',
        r3q: 'Debian, Arch ve Red Hat için Linux desteği, geliştirilmiş görünüm, özelleştirme ve kategori yönetimi.',

        // 26Q3.1
        r31t: '26Q3.1',
        r31p: 'Kritik düzeltmeler.',

        // 26Q3.5
        r35t: '26Q3.5',
        r35p: 'Önemli düzeltmeler, İspanyolca dil desteği ve açık tema geliştirmeleri.',

        // 26Q4
        r4qTitle: 'Optimizasyon ve Platform Genişletme',
        r4q: 'Uygulama optimizasyonu ve Slackware ile Gentoo dahil tam macOS ve Linux desteği.',

        // 27Q1
        r5qTitle: 'Eklentiler ve Kod Önizleme',
        r5q: 'Eklenti sistemi ve yerleşik kod önizleme özellikleri.',

        // CTA
        ready: 'HAZIR MISIN?',
        ctaTitle: 'En iyi kodların tek bir kısayol uzağında.',
        ctaText: "CodeSnip'i indir veya kaynak kodunu GitHub'da incele.",
        get: "CodeSnip'i Al ↗",

        // Footer
        tagline: 'Yeni Nesil Kod ve Prompt Yöneticisi'
    }
};


function setLanguage(lang) {
    if (!translations[lang]) {
        lang = 'en';
    }

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;

        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang').forEach(btn => {
        btn.classList.toggle(
            'active',
            btn.id === `lang-${lang}`
        );
    });

    localStorage.setItem('codesnip-lang', lang);
}


document
    .getElementById('lang-en')
    ?.addEventListener('click', () => {
        setLanguage('en');
    });


document
    .getElementById('lang-tr')
    ?.addEventListener('click', () => {
        setLanguage('tr');
    });


const saved = localStorage.getItem('codesnip-lang');

const browser =
    navigator.language?.toLowerCase().startsWith('tr')
        ? 'tr'
        : 'en';

setLanguage(saved || browser);


// Scroll reveal animations
const reveal = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                reveal.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.08
    }
);


document
    .querySelectorAll('.feature,.shot,.release,.cta')
    .forEach(el => reveal.observe(el));


// Final visual polish for the existing CodeSnip Pages layout.
const polish = document.createElement('style');

polish.textContent = `
    .brand {
        gap: 9px;
    }

    .brand img {
        width: 32px;
        height: 32px;
        flex: 0 0 32px;
        display: block;
        object-fit: contain;
        border-radius: 8px;
    }

    .mock-sidebar img {
        width: 30px;
        height: 30px;
        display: block;
        object-fit: contain;
        margin: 0 0 30px 0;
        border-radius: 7px;
    }

    .nav-actions {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .language {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px;
        border: 1px solid rgba(255,255,255,.10);
        border-radius: 11px;
        background: rgba(255,255,255,.045);
        box-shadow:
            inset 0 1px 0 rgba(255,255,255,.04),
            0 6px 20px rgba(0,0,0,.08);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
    }

    .language > span {
        color: rgba(255,255,255,.25);
        font-size: 11px;
        user-select: none;
    }

    .lang {
        appearance: none;
        border: 0;
        background: transparent;
        color: #8f96a3;
        font: 700 11px/1 Inter, system-ui, sans-serif;
        letter-spacing: .04em;
        min-width: 31px;
        height: 26px;
        padding: 0 7px;
        border-radius: 8px;
        cursor: pointer;
        transition:
            color .18s ease,
            background .18s ease,
            transform .18s ease,
            box-shadow .18s ease;
    }

    .lang:hover {
        color: #dceff0;
        background: rgba(0,173,181,.10);
    }

    .lang:active {
        transform: scale(.94);
    }

    .lang.active {
        color: #041316;
        background: #00adb5;
        box-shadow:
            0 4px 14px rgba(0,173,181,.18);
    }

    .lang.active:hover {
        background: #12bbc3;
    }

    /* Roadmap */
    .current-release {
        position: relative;
    }

    .release-status {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        padding: 5px 10px;
        margin-bottom: 10px;
        border: 1px solid rgba(255,255,255,.08);
        border-radius: 999px;
        background: rgba(255,255,255,.04);
        font-size: .72rem;
        font-weight: 700;
        letter-spacing: .08em;
        text-transform: uppercase;
    }

    .release-status.current {
        color: #00adb5;
        border-color: rgba(0,173,181,.35);
        background: rgba(0,173,181,.10);
    }

    .release-status.completed {
        opacity: .65;
    }

    .release-status.planned {
        opacity: .5;
    }

    .release-sub {
        display: flex;
        gap: 10px;
        margin-top: 14px;
        padding: 10px 12px;
        border-left: 2px solid rgba(255,255,255,.08);
        font-size: .9rem;
        line-height: 1.5;
    }

    .release-sub strong {
        flex-shrink: 0;
        color: #00adb5;
    }

    .release-sub.upcoming {
        border-left-color: rgba(0,173,181,.35);
    }

    @media (max-width: 850px) {
        .brand img {
            width: 30px;
            height: 30px;
            flex-basis: 30px;
        }

        .nav-actions {
            gap: 8px;
        }
    }

    @media (max-width: 560px) {
        .brand img {
            width: 28px;
            height: 28px;
            flex-basis: 28px;
            border-radius: 7px;
        }

        .language {
            padding: 3px;
        }

        .lang {
            min-width: 29px;
            height: 24px;
            font-size: 10px;
        }

        .release-sub {
            flex-direction: column;
            gap: 4px;
        }
    }
`;

document.head.appendChild(polish);
