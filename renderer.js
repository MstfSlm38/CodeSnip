const { ipcRenderer } = require('electron');

let currentCategory = 'all';
let currentLang = 'tr';

const spanishTranslations = {
        "All Snippets": "Todos los fragmentos",
        "Favorites": "Favoritos",
        "Add Category": "Añadir categoría",
        "Settings": "Ajustes",
        "Reload Application": "Recargar aplicación",
        "Instantly reloads the application.": "Recarga la aplicación al instante.",
        "Appearance Design": "Diseño de apariencia",
        "Interface Theme": "Tema de interfaz",
        "Changes the color palette of the app.": "Cambia la paleta de colores de la aplicación.",
        "Dark Theme": "Tema oscuro",
        "Light Theme": "Tema claro",
        "Liquid Glass Effect": "Efecto Liquid Glass",
        "Controls frosted glass and transparency effects.": "Controla los efectos de cristal esmerilado y transparencia.",
        "Glass Blur": "Desenfoque del cristal",
        "Adjusts the background blur level.": "Ajusta el nivel de desenfoque del fondo.",
        "Glass Opacity": "Opacidad del cristal",
        "Determines the opacity of the glass layer.": "Determina la opacidad de la capa de cristal.",
        "Theme Accent Color": "Color de acento",
        "Changes the color of buttons and active elements.": "Cambia el color de los botones y elementos activos.",
        "Background Type": "Tipo de fondo",
        "Determines if the background is a color or an image.": "Determina si el fondo es un color o una imagen.",
        "Solid Color": "Color sólido",
        "Custom Image (URL / Path)": "Imagen personalizada (URL / ruta)",
        "Background Color": "Color de fondo",
        "Sets the main background color of the app.": "Establece el color de fondo principal de la aplicación.",
        "Background Image": "Imagen de fondo",
        "Enter image link (URL) or local file path.": "Introduce un enlace de imagen (URL) o una ruta local.",
        "Font Size (Codes)": "Tamaño de fuente (código)",
        "Adjusts text size of code blocks.": "Ajusta el tamaño del texto de los bloques de código.",
        "Small (12px)": "Pequeño (12px)",
        "Normal (14px)": "Normal (14px)",
        "Large (16px)": "Grande (16px)",
        "Smart Features": "Funciones inteligentes",
        "Application Language": "Idioma de la aplicación",
        "Changes the display language.": "Cambia el idioma de visualización.",
        "Save": "Guardar",
        "Cancel": "Cancelar",
        "Update": "Actualizar",
        "Create New Snippet Card": "Crear nueva tarjeta de fragmento",
        "Add New Code": "Añadir código",
        "Search code or prompt...": "Buscar código o prompt...",
        "Copied!": "¡Copiado!",
        "Copy": "Copiar",
        "Delete": "Eliminar",
        "Edit": "Editar",
        "Share": "Compartir",
        "Quick Add:": "Añadir rápido:",
        "No matching code found.": "No se encontraron coincidencias.",
        "Successfully added to": "Añadido correctamente a",
        "Invalid import code!": "¡Código de importación no válido!",
        "Data successfully restored! App will reload.": "¡Datos restaurados correctamente! La aplicación se recargará.",
};

function t(tr, en) {
    if (currentLang === 'es') return spanishTranslations[en] || tr;
    return currentLang === 'tr' ? tr : en;
}

const defaultInitialSnips = [
    { id: 'snip-1', title: 'HTML Koyu Mod Temeli', category: 'web', code: '<!DOCTYPE html>\n<html>\n<body style="background:#1e1e1e; color:#fff;">\n   <h1>Hello, World!</h1>\n</body>\n</html>', isFavorite: false },
    { id: 'snip-2', title: 'CSS Flexbox Ortalaması', category: 'web', code: '.ortala {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}', isFavorite: false },
    { id: 'snip-3', title: 'CSS Cam Efekti (Liquid Glass)', category: 'web', code: '.liquid_glass {\n    background: rgba(255, 255, 255, 0.05);\n    backdrop-filter: blur(10px);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n}', isFavorite: false },
    { id: 'snip-4', title: 'AI Kod Düzenleyici Promptu', category: 'ai', code: '"Sen uzman bir yazılımcısın. Sana vereceğim kod bloklarındaki hataları bul, optimize et ve en temiz haliyle bana sadece kod olarak ver."', isFavorite: false },
    { id: 'snip-5', title: 'Karakter Simülasyon Promptu', category: 'ai', code: '"Seninle bir rol yapacağız. Sen tamamen bir işletim sistemi (örneğin bilge bir Linux Terminali) gibi davranacaksın."', isFavorite: false },
    { id: 'snip-6', title: 'Otomatik Eritici Malzemeleri', category: 'minecraft', code: '- 2x Sandık (Chest)\n- 2x Huni (Hopper)\n- 1x Fırın (Furnace)', isFavorite: false },
    { id: 'snip-7', title: 'Köylü Zombiyi İyileştirme', category: 'minecraft', code: '1. Zombi köylüye "Halsizlik İksiri" fırlat.\n2. "Büyülü Altın Elma" ile sağ tıkla.', isFavorite: false },
    { id: 'snip-8', title: 'Hızlı Sistem Özeti (Fastfetch)', category: 'unix', code: 'sudo apt install fastfetch && fastfetch', isFavorite: false },
    { id: 'snip-9', title: 'Paket Güncelleme Komutu', category: 'unix', code: 'sudo apt update && sudo apt upgrade', isFavorite: false },
    { id: 'snip-10', title: 'Windows Terminal List Comprehension', category: 'windows_terminal', code: 'numbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers]\nprint(squares)', isFavorite: false }
];

// Tek bir merkezi DOMContentLoaded yönetimi
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem('all_snippets_data')) {
        localStorage.setItem('all_snippets_data', JSON.stringify(defaultInitialSnips));
    }

    if (!localStorage.getItem('codesnip_categories')) {
        const defaultCategories = [
            { id: 'web', name: { tr: 'HTML / CSS', en: 'HTML / CSS' }, icon: 'bi-globe' },
            { id: 'ai', name: { tr: 'AI Promptları', en: 'AI Prompts' }, icon: 'bi-robot' },
            { id: 'minecraft', name: { tr: 'Minecraft', en: 'Minecraft' }, icon: 'bi-box' },
            { id: 'unix', name: { tr: 'Unix', en: 'Unix' }, icon: 'bi-terminal' },
            { id: 'windows_terminal', name: { tr: 'Windows Terminal', en: 'Windows Terminal' }, icon: 'bi-pc-display' }
        ];
        localStorage.setItem('codesnip_categories', JSON.stringify(defaultCategories));
    }

    loadSettings();
    renderCategories();
    renderSnips();
    loadNotes();

    // Pencere Kontrolleri
    const minBtn = document.getElementById('min-btn');
    const maxBtn = document.getElementById('max-btn');
    const closeBtn = document.getElementById('close-btn');

    if (minBtn) minBtn.addEventListener('click', () => ipcRenderer.send('window-minimize'));
    if (maxBtn) maxBtn.addEventListener('click', () => ipcRenderer.send('window-maximize'));
    if (closeBtn) closeBtn.addEventListener('click', () => ipcRenderer.send('window-close'));

    const allCodesBtn = document.querySelector('.sidebar-menu li:first-child');
    if (allCodesBtn) allCodesBtn.classList.add('active');

    // ⚡ IPC Dinleyici Bellek Temizliği (Global Spotlight)
    ipcRenderer.removeAllListeners('global-spotlight-trigger');
    ipcRenderer.on('global-spotlight-trigger', () => {
        const spotlightOverlay = document.getElementById('spotlight-overlay');
        const spotlightInput = document.getElementById('spotlight-input');
        if (spotlightOverlay && spotlightInput) {
            spotlightOverlay.classList.remove('spotlight-hidden');
            spotlightInput.value = '';
            spotlightInput.focus();
        }
    });

    // ⚡ Slider Dinleyicileri (Tek seferlik ve bellek dostu yükleme)
    document.querySelectorAll('input[type="range"]').forEach(slider => {
        const update = () => {
            const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
            slider.style.setProperty('--slider-progress', percent + '%');
        };
        update();
        slider.addEventListener('input', update);
    });

    const blurSlider = document.getElementById("setting-glass-blur");
    const blurValue = document.getElementById("blur-value");
    if (blurSlider && blurValue) {
        blurSlider.addEventListener("input", () => {
            blurValue.textContent = blurSlider.value;
        });
    }
});

function renderSnips() {
    const allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
    const container = document.getElementById('snip-list-container');
    if (!container) return;
    container.innerHTML = '';

    const settingGlass = document.getElementById('setting-glass');
    const settingFontSize = document.getElementById('setting-font-size');
    const settingWrap = document.getElementById('setting-wrap');

    const glassEnabled = settingGlass ? settingGlass.checked : true;
    const fontSize = settingFontSize ? settingFontSize.value : '14px';
    const wrapEnabled = settingWrap ? settingWrap.checked : false;
    const glassClass = glassEnabled ? 'liquid_glass' : 'no-glass';

    const fragment = document.createDocumentFragment();

    allSnips.forEach(snip => {
        if (currentCategory === 'favorites' && !snip.isFavorite) return;
        if (currentCategory !== 'all' && currentCategory !== 'favorites' && snip.category !== currentCategory) return;

        const card = document.createElement('div');
        card.className = `snip-card ${glassClass} fade-in`;
        card.setAttribute('data-category', snip.category);

        const safeCode = snip.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const copyBtnText = t('Kopyala', 'Copy');
        const deleteBtnText = t('Sil', 'Delete');
        const editBtnText = t('Düzenle', 'Edit');
        const shareBtnText = t('Paylaş', 'Share');

        const favIcon = snip.isFavorite ? '★' : '☆';
        const favClass = snip.isFavorite ? 'fav-active' : '';

        const lineCount = snip.code.split('\n').length;
        const charCount = snip.code.length;
        const linesTxt = currentLang === 'tr' ? 'satır' : currentLang === 'es' ? 'líneas' : 'lines';
        const charsTxt = currentLang === 'tr' ? 'karakter' : currentLang === 'es' ? 'caracteres' : 'characters';

        let langClass = 'language-none';
        if (snip.category === 'web') {
            langClass = snip.code.trim().startsWith('<') ? 'language-html' : 'language-css';
        } else if (snip.category === 'unix' || snip.category === 'windows_terminal') {
            langClass = 'language-bash';
        } else if (snip.category === 'ai') {
            langClass = 'language-javascript';
        }

        card.innerHTML = `
            <div class="snip-header">
                <h3>${snip.title}</h3>
                <div class="card-actions">
                    <button class="fav-btn ${favClass}" onclick="toggleFavorite('${snip.id}')" title="Favori">${favIcon}</button>
                    <button class="share-btn" onclick="kartiKopruyeDonustur('${snip.id}')" title="${shareBtnText}"><i class="fas fa-share-alt"></i> ${shareBtnText}</button>
                    <button class="edit-btn" onclick="editCard('${snip.id}')">${editBtnText}</button>
                    <button class="copy-btn" onclick="copyCode('${snip.id}', event)">${copyBtnText}</button>
                    <button class="delete-btn" onclick="deleteSnip('${snip.id}')">${deleteBtnText}</button>
                </div>
            </div>
            <pre style="white-space: ${wrapEnabled ? 'pre-wrap' : 'pre'}" class="${langClass}"><code id="${snip.id}" style="font-size: ${fontSize}" class="${langClass}">${safeCode}</code></pre>
            <div class="code-stats" style="text-align: right; font-size: 11px; color: #888; margin-top: 5px; font-family: monospace;">
                <span>${lineCount} ${linesTxt}</span> • <span>${charCount} ${charsTxt}</span>
            </div>
        `;
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
    updateBadges(allSnips);

    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

function renderCategories() {
    const categories = JSON.parse(localStorage.getItem('codesnip_categories')) || [];
    const container = document.getElementById('dynamic-categories');
    const selectCategory = document.getElementById('new-category');

    if (!container || !selectCategory) return;

    container.innerHTML = '';
    selectCategory.innerHTML = '';

    const fragment = document.createDocumentFragment();

    categories.forEach(cat => {
        const catName = cat.name[currentLang] || cat.name.tr;

        const btn = document.createElement('button');
        btn.className = `nav-item ${currentCategory === cat.id ? 'active' : ''}`;
        btn.id = `nav-${cat.id}`;
        btn.onclick = function () { filterCategory(cat.id, this); };

        btn.innerHTML = `
            <span><i class="bi ${cat.icon}"></i> <span>${catName}</span></span>
            <span class="badge" id="badge-${cat.id}">0</span>
        `;

        const deleteBtn = document.createElement('i');
        deleteBtn.className = 'bi bi-trash';
        deleteBtn.style.marginLeft = 'auto';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.paddingLeft = '10px';
        deleteBtn.onclick = function (e) { deleteCategory(e, cat.id); };

        btn.appendChild(deleteBtn);
        fragment.appendChild(btn);

        const option = document.createElement('option');
        option.value = cat.id;
        option.innerText = catName;
        selectCategory.appendChild(option);
    });

    container.appendChild(fragment);
    const allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
    updateBadges(allSnips);
}

function kartiKopruyeDonustur(id) {
    const allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
    const snip = allSnips.find(s => s.id === id);

    if (!snip) return;

    const kartVerisi = { title: snip.title, code: snip.code, category: snip.category };

    try {
        const jsonMetni = JSON.stringify(kartVerisi);
        const sifreliKopru = btoa(encodeURIComponent(jsonMetni).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)));
        const tamPaylasimMetni = `import:${sifreliKopru}`;

        navigator.clipboard.writeText(tamPaylasimMetni).then(() => {
            alert(currentLang === 'tr' ? "Kod paylaşım köprüsü panoya kopyalandı! Arkadaşına gönderebilirsin." : "Code share bridge copied to clipboard!");
        });
    } catch (err) {
        console.error("Paylaşım kodu oluşturulamadı:", err);
    }
}

function hariciKartEkle(title, code, category) {
    let allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
    const newId = 'snip-' + Date.now();
    allSnips.push({ id: newId, title, category, code, isFavorite: false });
    localStorage.setItem('all_snippets_data', JSON.stringify(allSnips));
    renderSnips();
}

window.toggleFavorite = function (id) {
    let allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
    const snip = allSnips.find(s => s.id === id);
    if (snip) {
        snip.isFavorite = !snip.isFavorite;
        localStorage.setItem('all_snippets_data', JSON.stringify(allSnips));
        renderSnips();
    }
};

window.deleteSnip = function (id) {
    const confirmMsg = currentLang === 'tr' ? 'Bu kod kartını silmek istediğinize emin misiniz?' : 'Are you sure you want to delete this snippet?';
    if (confirm(confirmMsg)) {
        let allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
        allSnips = allSnips.filter(snip => snip.id !== id);
        localStorage.setItem('all_snippets_data', JSON.stringify(allSnips));
        renderSnips();
    }
};

window.editCard = function (cardId) {
    const allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
    const snip = allSnips.find(s => s.id === cardId);

    if (snip) {
        document.getElementById('edit-snip-id').value = snip.id;
        document.getElementById('new-title').value = snip.title;
        document.getElementById('new-category').value = snip.category;
        document.getElementById('new-code').value = snip.code;

        document.getElementById('panel-form-title').innerText = currentLang === 'tr' ? 'Kod Kartını Düzenle' : 'Edit Snippet Card';
        document.getElementById('form-save-btn').innerText = currentLang === 'tr' ? 'Güncelle' : 'Update';

        document.getElementById('add-form-panel').style.display = 'block';
        document.getElementById('new-title').focus();
    }
};

window.saveSnipAction = function () {
    const editId = document.getElementById('edit-snip-id').value;
    const title = document.getElementById('new-title').value.trim();
    const category = document.getElementById('new-category').value;
    const code = document.getElementById('new-code').value.trim();

    if (!title || !code) return;

    let allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];

    if (editId) {
        allSnips = allSnips.map(snip => snip.id === editId ? { ...snip, title, category, code } : snip);
    } else {
        const newId = 'snip-' + Date.now();
        allSnips.push({ id: newId, title, category, code, isFavorite: false });
    }

    localStorage.setItem('all_snippets_data', JSON.stringify(allSnips));
    closeFormPanel();
    renderSnips();
};

window.toggleAddForm = function () {
    document.getElementById('edit-snip-id').value = '';
    document.getElementById('new-title').value = '';
    document.getElementById('new-code').value = '';
    document.getElementById('panel-form-title').innerText = currentLang === 'tr' ? 'Yeni Kod Kartı Oluştur' : 'Create New Snippet Card';
    document.getElementById('form-save-btn').innerText = currentLang === 'tr' ? 'Kaydet' : 'Save';

    const panel = document.getElementById('add-form-panel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
};

window.closeFormPanel = function () {
    document.getElementById('add-form-panel').style.display = 'none';
};

window.toggleSettingsModal = function () {
    const modal = document.getElementById('settings-modal');
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
};

window.reloadApp = function () {
    window.location.reload();
};

function applySettings() {
    const settingTheme = document.getElementById('setting-theme');
    const settingGlass = document.getElementById('setting-glass');
    const settingFontSize = document.getElementById('setting-font-size');
    const settingLang = document.getElementById('setting-lang');
    const settingToast = document.getElementById('setting-toast');
    const settingWrap = document.getElementById('setting-wrap');

    const settingGlassBlur = document.getElementById('setting-glass-blur');
    const settingGlassOpacity = document.getElementById('setting-glass-opacity');
    const settingThemeColor = document.getElementById('setting-theme-color');
    const settingBgType = document.getElementById('setting-bg-type');
    const settingBgColor = document.getElementById('setting-bg-color');
    const settingBgImage = document.getElementById('setting-bg-image');

    const theme = settingTheme ? settingTheme.value : 'dark';
    const glass = settingGlass ? settingGlass.checked : true;
    const fontSize = settingFontSize ? settingFontSize.value : '14px';
    const lang = settingLang ? settingLang.value : 'tr';
    const toastEnabled = settingToast ? settingToast.checked : true;
    const wrapEnabled = settingWrap ? settingWrap.checked : false;

    const glassBlur = settingGlassBlur ? settingGlassBlur.value : '16';
    const glassOpacity = settingGlassOpacity ? settingGlassOpacity.value : '5';
    const themeColor = settingThemeColor ? settingThemeColor.value : '#007acc';
    const bgType = settingBgType ? settingBgType.value : 'color';
    const bgColor = settingBgColor ? settingBgColor.value : '#1e1e1e';
    const bgImage = (settingBgImage && settingBgImage.value.trim() !== '') ? settingBgImage.value : 'abstract_beta.png';

    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    const root = document.documentElement;
    root.style.setProperty('--theme-color', themeColor);
    root.style.setProperty('--glow-color', `${themeColor}33`);

    const bgColorContainer = document.getElementById('bg-color-container');
    const bgImageContainer = document.getElementById('bg-image-container');

    if (bgType === 'image') {
        if (bgColorContainer) bgColorContainer.style.display = 'none';
        if (bgImageContainer) bgImageContainer.style.display = 'flex';

        if (bgImage.trim() !== '') {
            document.body.style.backgroundImage = `url('${bgImage}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundAttachment = 'fixed';
        } else {
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = '#1e1e1e';
        }
    } else {
        if (bgColorContainer) bgColorContainer.style.display = 'flex';
        if (bgImageContainer) bgImageContainer.style.display = 'none';

        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = bgColor;
    }

    const sidebar = document.querySelector('.sidebar');
    const addPanel = document.getElementById('add-form-panel');
    const modalContent = document.querySelector('.modal-content');

    if (sidebar) sidebar.classList.toggle('liquid_glass', glass);
    if (addPanel) addPanel.classList.toggle('liquid_glass', glass);
    if (modalContent) modalContent.classList.toggle('liquid_glass', glass);

    if (glass) {
        document.body.classList.add('liquid-glass');
        root.style.setProperty('--glass-blur', `${glassBlur}px`);
        root.style.setProperty('--glass-opacity', (glassOpacity / 100));
    } else {
        document.body.classList.remove('liquid-glass');
        root.style.setProperty('--glass-blur', '0px');
        root.style.setProperty('--glass-opacity', '0');
    }

    currentLang = lang;
    document.querySelectorAll('.lang-txt').forEach(el => {
        el.innerText = lang === 'es' ? (spanishTranslations[el.getAttribute('data-en')] || el.innerText) : (el.getAttribute(`data-${lang}`) || el.innerText);
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = lang === 'tr' ? 'Kod veya prompt ara...' : lang === 'es' ? 'Buscar código o prompt...' : 'Search code or prompt...';

    localStorage.setItem('app_settings', JSON.stringify({
        theme, glass, fontSize, lang, toastEnabled, wrapEnabled,
        glassBlur, glassOpacity, themeColor, bgType, bgColor, bgImage
    }));

    renderSnips();

    const bValEl = document.getElementById("blur-value");
    const oValEl = document.getElementById("opacity-value");
    if (bValEl) bValEl.textContent = glassBlur;
    if (oValEl) oValEl.textContent = glassOpacity;
}

function loadSettings() {
    const defaultBackgroundImage = 'abstract_beta.png';
    let saved = JSON.parse(localStorage.getItem('app_settings'));

    if (!saved) {
        saved = {
            theme: 'dark', glass: true, fontSize: '14px', lang: 'tr',
            toastEnabled: true, wrapEnabled: false, glassBlur: '16',
            glassOpacity: '5', themeColor: '#007acc', bgType: 'image',
            bgColor: '#1e1e1e', bgImage: defaultBackgroundImage
        };
        localStorage.setItem('app_settings', JSON.stringify(saved));
    }

    if (saved.theme && document.getElementById('setting-theme')) document.getElementById('setting-theme').value = saved.theme;
    if (saved.glass !== undefined && document.getElementById('setting-glass')) document.getElementById('setting-glass').checked = saved.glass;
    if (saved.fontSize && document.getElementById('setting-font-size')) document.getElementById('setting-font-size').value = saved.fontSize;
    if (saved.lang && document.getElementById('setting-lang')) document.getElementById('setting-lang').value = saved.lang;
    if (saved.toastEnabled !== undefined && document.getElementById('setting-toast')) document.getElementById('setting-toast').checked = saved.toastEnabled;
    if (saved.wrapEnabled !== undefined && document.getElementById('setting-wrap')) document.getElementById('setting-wrap').checked = saved.wrapEnabled;

    if (saved.glassBlur && document.getElementById('setting-glass-blur')) document.getElementById('setting-glass-blur').value = saved.glassBlur;
    if (saved.glassOpacity && document.getElementById('setting-glass-opacity')) document.getElementById('setting-glass-opacity').value = saved.glassOpacity;
    if (saved.themeColor && document.getElementById('setting-theme-color')) document.getElementById('setting-theme-color').value = saved.themeColor;

    if (saved.bgType && document.getElementById('setting-bg-type')) document.getElementById('setting-bg-type').value = saved.bgType;
    if (saved.bgColor && document.getElementById('setting-bg-color')) document.getElementById('setting-bg-color').value = saved.bgColor;
    if (document.getElementById('setting-bg-image')) {
        document.getElementById('setting-bg-image').value = saved.bgImage || defaultBackgroundImage;
    }

    applySettings();
    renderCategories();
}

window.copyCode = function (id, event) {
    const codeElem = document.getElementById(id);
    if (!codeElem) return;

    navigator.clipboard.writeText(codeElem.innerText);

    const btn = event.target;
    btn.innerText = t('Kopyalandı!', 'Copied!');

    const settingToast = document.getElementById('setting-toast');
    const toastEnabled = settingToast ? settingToast.checked : true;
    if (toastEnabled) {
        const toast = document.getElementById('toast-notification');
        if (toast) {
            toast.innerText = t('Kod panoya kopyalandı!', 'Code copied to clipboard!');
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }
    }

    setTimeout(() => {
        btn.innerText = currentLang === 'tr' ? "Kopyala" : "Copy";
    }, 1500);
};

window.filterCategory = function (category, element) {
    currentCategory = category;
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    const titleMap = {
        all: { tr: 'Tüm Kodlar', en: 'All Snippets' },
        favorites: { tr: 'Favori Kodlarım', en: 'Favorite Snippets' }
    };

    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        if (category === 'all' || category === 'favorites') {
            pageTitle.innerText = titleMap[category][currentLang];
        } else {
            const categories = JSON.parse(localStorage.getItem('codesnip_categories')) || [];
            const cat = categories.find(c => c.id === category);
            if (cat) pageTitle.innerText = cat.name[currentLang] || cat.name.tr;
        }
    }
    renderSnips();
};

window.searchSnips = function () {
    const query = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('.snip-card').forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const code = card.querySelector('code').innerText.toLowerCase();

        const matchesCategory = (currentCategory === 'all') ||
            (currentCategory === 'favorites' && card.querySelector('.fav-btn').classList.contains('fav-active')) ||
            (card.getAttribute('data-category') === currentCategory);

        card.style.display = (matchesCategory && (title.includes(query) || code.includes(query))) ? 'block' : 'none';
    });
};

function updateBadges(allSnips) {
    const badgeAll = document.getElementById(`badge-all`);
    const badgeFav = document.getElementById(`badge-favorites`);

    if (badgeAll) badgeAll.innerText = allSnips.length;
    if (badgeFav) badgeFav.innerText = allSnips.filter(s => s.isFavorite).length;

    const categories = JSON.parse(localStorage.getItem('codesnip_categories')) || [];
    categories.forEach(cat => {
        const count = allSnips.filter(s => s.category === cat.id).length;
        const bEl = document.getElementById(`badge-${cat.id}`);
        if (bEl) bEl.innerText = count;
    });
}

let saveTimeout;
window.saveNotes = function () {
    const scratchPad = document.getElementById('scratchpad');
    if (!scratchPad) return;

    clearTimeout(saveTimeout);
    const saveStatus = document.getElementById("save-status");

    saveTimeout = setTimeout(() => {
        localStorage.setItem('codesnip_notes', scratchPad.value);
        if (saveStatus) {
            saveStatus.style.opacity = "1";
            setTimeout(() => { saveStatus.style.opacity = "0"; }, 1200);
        }
    }, 300);
};

function loadNotes() {
    const scratchPad = document.getElementById('scratchpad');
    if (!scratchPad) return;
    const n = localStorage.getItem('codesnip_notes');
    if (n) scratchPad.value = n;
}

window.clearAllData = function () {
    const confirmMsg = currentLang === 'tr' ? 'DİKKAT: Kayıtlı bütün kod blokların ve notların kalıcı olarak silinecektir. Emin misiniz?' : 'WARNING: All saved codes and notes will be deleted permanently. Are you sure?';
    if (confirm(confirmMsg)) {
        localStorage.clear();
        reloadApp();
    }
};

// 🧠 Spotlight Canlı Arama Motoru
let seciliIndeks = -1;
let filtrelenmisKartlar = [];

const spInputEl = document.getElementById('spotlight-input');
if (spInputEl) {
    spInputEl.addEventListener('input', () => {
        const girdi = spInputEl.value.trim().toLowerCase();
        const resultsDiv = document.getElementById('spotlight-results');
        if (!resultsDiv) return;

        if (!girdi || girdi.startsWith('+') || girdi.startsWith('import:')) {
            resultsDiv.innerHTML = `<div class="spotlight-hint">${currentLang === 'tr' ? 'Hızlı Ekleme:' : 'Quick Add:'} <span>+dil kod_içeriği</span></div>`;
            return;
        }

        const cards = document.querySelectorAll('.snip-card');
        filtrelenmisKartlar = [];

        cards.forEach(card => {
            const titleElement = card.querySelector('h3');
            const codeElement = card.querySelector('code');
            if (!titleElement || !codeElement) return;

            const originalTitle = titleElement.innerText;
            const titleLower = originalTitle.toLowerCase();
            const category = card.getAttribute('data-category') || 'kod';
            const code = codeElement.innerText;

            if (titleLower.includes(girdi) || category.includes(girdi)) {
                filtrelenmisKartlar.push({ title: originalTitle, category, code, originalCard: card });
            }
        });

        if (filtrelenmisKartlar.length > 0) {
            resultsDiv.classList.remove('spotlight-results-hidden');
            seciliIndeks = 0;

            let listeHtml = '<div class="spotlight-list">';
            filtrelenmisKartlar.forEach((item, index) => {
                const activeClass = index === 0 ? 'active' : '';
                listeHtml += `
                    <div class="spotlight-item ${activeClass}" data-index="${index}">
                        <span>${item.title}</span>
                        <span class="item-category">${item.category.toUpperCase()}</span>
                    </div>
                `;
            });
            listeHtml += '</div><div id="spotlight-ql" class="spotlight-quick-preview"><pre><code id="spotlight-ql-code"></code></pre></div>';

            resultsDiv.innerHTML = listeHtml;
        } else {
            resultsDiv.innerHTML = `<div class="spotlight-hint">${currentLang === 'tr' ? 'Eşleşen kod bulunamadı.' : 'No matching code found.'}</div>`;
        }
    });
}

// 🎹 Klavye Dinleyicisi
window.addEventListener('keydown', (e) => {
    const spotlightOverlay = document.getElementById('spotlight-overlay');
    const spotlightInput = document.getElementById('spotlight-input');
    const resultsDiv = document.getElementById('spotlight-results');

    if (!spotlightOverlay || !spotlightInput) return;

    if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        e.stopPropagation();

        spotlightOverlay.classList.toggle('spotlight-hidden');

        if (!spotlightOverlay.classList.contains('spotlight-hidden')) {
            spotlightInput.value = '';
            if (resultsDiv) {
                resultsDiv.innerHTML = `<div class="spotlight-hint">${currentLang === 'tr' ? 'Hızlı Ekleme:' : 'Quick Add:'} <span>+dil kod_içeriği</span></div>`;
            }
            setTimeout(() => { spotlightInput.focus(); }, 50);
        }
        return;
    }

    if (e.key === 'Escape' && !spotlightOverlay.classList.contains('spotlight-hidden')) {
        spotlightOverlay.classList.add('spotlight-hidden');
        return;
    }

    if (spotlightOverlay.classList.contains('spotlight-hidden')) return;

    const items = document.querySelectorAll('.spotlight-item');

    if (e.key === 'ArrowDown' && items.length > 0) {
        e.preventDefault();
        items[seciliIndeks].classList.remove('active');
        seciliIndeks = (seciliIndeks + 1) % items.length;
        items[seciliIndeks].classList.add('active');
        items[seciliIndeks].scrollIntoView({ block: 'nearest' });
        guncelleSpotlightQuickLook();
    }
    else if (e.key === 'ArrowUp' && items.length > 0) {
        e.preventDefault();
        items[seciliIndeks].classList.remove('active');
        seciliIndeks = (seciliIndeks - 1 + items.length) % items.length;
        items[seciliIndeks].classList.add('active');
        items[seciliIndeks].scrollIntoView({ block: 'nearest' });
        guncelleSpotlightQuickLook();
    }
    else if (e.code === 'Space' && items.length > 0) {
        const girdi = spotlightInput.value.trim();
        if (!girdi.startsWith('+') && !girdi.startsWith('import:')) {
            e.preventDefault();
            const qlPanel = document.getElementById('spotlight-ql');
            if (qlPanel) {
                qlPanel.style.display = qlPanel.style.display === 'flex' ? 'none' : 'flex';
                guncelleSpotlightQuickLook();
            }
        }
    }
    else if (e.key === 'Enter') {
        const girdi = spotlightInput.value.trim();
        if (!girdi) return;

        if (girdi.startsWith('+')) {
            e.preventDefault();
            const ilkBosluk = girdi.indexOf(' ');
            if (ilkBosluk !== -1) {
                const kategori = girdi.substring(1, ilkBosluk).toLowerCase();
                const kodIcerigi = girdi.substring(ilkBosluk + 1);
                const varsayilanBaslik = `Quick Snippet (${kategori.toUpperCase()})`;

                hariciKartEkle(varsayilanBaslik, kodIcerigi, kategori);

                spotlightInput.value = '';
                spotlightOverlay.classList.add('spotlight-hidden');
                alert(currentLang === 'tr' ? `Başarıyla ${kategori.toUpperCase()} kategorisine eklendi!` : `Successfully added to ${kategori.toUpperCase()}!`);
            } else {
                alert(currentLang === 'tr' ? "Lütfen formata uygun yazın: +kategori kod" : "Format: +category code");
            }
            return;
        }

        if (girdi.startsWith('import:')) {
            e.preventDefault();
            try {
                const sifreliKisim = girdi.replace('import:', '');
                const cozulmusMetin = decodeURIComponent(atob(sifreliKisim).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

                const gelenKart = JSON.parse(cozulmusMetin);
                hariciKartEkle(`${gelenKart.title} (Gelen)`, gelenKart.code, gelenKart.category);

                spotlightInput.value = '';
                spotlightOverlay.classList.add('spotlight-hidden');
                alert(currentLang === 'tr' ? `"${gelenKart.title}" başarıyla listene eklendi!` : `"${gelenKart.title}" successfully imported!`);
            } catch (hata) {
                alert(currentLang === 'tr' ? "Geçersiz paylaşım kodu!" : "Invalid import code!");
                console.error(hata);
            }
            return;
        }

        e.preventDefault();
        const anaAramaCubugu = document.getElementById('search-input');
        if (anaAramaCubugu) {
            anaAramaCubugu.value = filtrelenmisKartlar[seciliIndeks] ? filtrelenmisKartlar[seciliIndeks].title : girdi;
            if (typeof searchSnips === 'function') searchSnips();
        }

        spotlightInput.value = '';
        if (resultsDiv) resultsDiv.classList.add('spotlight-results-hidden');
        spotlightOverlay.classList.add('spotlight-hidden');
    }
});

// 🖱️ Dışarı Tıklayınca Kapanma
window.addEventListener('click', (e) => {
    const spotlightOverlay = document.getElementById('spotlight-overlay');
    const spotlightWindow = document.querySelector('.spotlight-window');

    if (spotlightOverlay && !spotlightOverlay.classList.contains('spotlight-hidden')) {
        if (spotlightWindow && !spotlightWindow.contains(e.target)) {
            spotlightOverlay.classList.add('spotlight-hidden');
        }
    }
});

function guncelleSpotlightQuickLook() {
    const qlPanel = document.getElementById('spotlight-ql');
    const qlCode = document.getElementById('spotlight-ql-code');

    if (qlPanel && qlPanel.style.display === 'flex' && filtrelenmisKartlar[seciliIndeks]) {
        qlCode.innerText = filtrelenmisKartlar[seciliIndeks].code;
        if (typeof Prism !== 'undefined') {
            Prism.highlightElement(qlCode);
        }
    }
}

// 💾 JSON Dışa Aktarma (Export) - Çift tıklama korumalı
window.exportCodeSnipData = async function () {
    try {
        const localData = localStorage.getItem('all_snippets_data');
        if (!localData || localData === '[]') {
            alert(currentLang === 'tr' ? 'Yedeklenecek herhangi bir kod veya prompt bulunamadı!' : 'No snippets found to backup!');
            return;
        }
        const result = await ipcRenderer.invoke('export-data', localData);
        if (result && result.success) alert(result.message);
    } catch (error) {
        console.error("Export hatası:", error);
    }
};

// 📂 JSON İçe Aktarma (Import) - Çift pencere çakışması engellendi
window.importCodeSnipData = async function () {
    const onay = confirm(currentLang === 'tr' ? "Mevcut verilerinizin üzerine yazılacak. Emin misiniz?" : "This will overwrite your existing data. Are you sure?");
    if (!onay) return;

    try {
        const result = await ipcRenderer.invoke('import-data');
        if (result && result.success) {
            localStorage.setItem('all_snippets_data', result.data);
            alert(currentLang === 'tr' ? 'Verileriniz başarıyla geri yüklendi! Uygulama yenilenecektir.' : 'Data successfully restored! App will reload.');
            window.location.reload();
        } else if (result && result.message) {
            alert(result.message);
        }
    } catch (error) {
        console.error("Import hatası:", error);
        alert('İçe aktarma sırasında bir hata oluştu.');
    }
};

function addCategoryProcess() {
    const nameTr = document.getElementById('cat-name-tr').value;
    const icon = document.getElementById('cat-icon-select').value;

    if (!nameTr) return;

    let categories = JSON.parse(localStorage.getItem('codesnip_categories')) || [];

    categories.push({
        id: nameTr.toLowerCase().replace(/\s+/g, '-'),
        name: { tr: nameTr, en: nameTr },
        icon: icon
    });

    localStorage.setItem('codesnip_categories', JSON.stringify(categories));
    document.getElementById('category-modal').style.display = 'none';
    renderCategories();
}

function deleteCategory(event, categoryId) {
    event.stopPropagation();

    if (!confirm("Bu kategoriyi silmek istediğine emin misin?")) return;

    let categories = JSON.parse(localStorage.getItem('codesnip_categories')) || [];
    const updatedCategories = categories.filter(c => c.id !== categoryId);

    localStorage.setItem('codesnip_categories', JSON.stringify(updatedCategories));
    renderCategories();
}

function toggleAboutModal() {
    const modal = document.getElementById('about-modal');
    if (!modal) return;
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'flex' : 'none';
}


// Subtle Liquid Glass 3D depth — intentionally restrained.
// It changes the light/depth of a card without moving it around the page.
function initGlass3D() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.addEventListener('mousemove', (event) => {
        const card = event.target.closest('.snip-card');
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

        // Very small angles: depth, not a spinning card effect.
        const rotateY = (x - 0.5) * 3;
        const rotateX = (0.5 - y) * 3;

        card.style.setProperty('--card-rotate-x', rotateX.toFixed(2) + 'deg');
        card.style.setProperty('--card-rotate-y', rotateY.toFixed(2) + 'deg');
        card.style.setProperty('--card-glow-x', (x * 100).toFixed(1) + '%');
        card.style.setProperty('--card-glow-y', (y * 100).toFixed(1) + '%');
    });

    document.addEventListener('mouseleave', () => {
        document.querySelectorAll('.snip-card').forEach(card => {
            card.style.setProperty('--card-rotate-x', '0deg');
            card.style.setProperty('--card-rotate-y', '0deg');
            card.style.setProperty('--card-glow-x', '50%');
            card.style.setProperty('--card-glow-y', '50%');
        });
    }, true);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlass3D);
} else {
    initGlass3D();
}
