const { ipcRenderer } = require('electron');

let currentCategory = 'all';
let currentLang = 'tr';

const spanishTranslations = {
  'Tüm Kodlar':'Todos los snippets','All Snippets':'Todos los snippets','Favoriler':'Favoritos','Favorites':'Favoritos',
  'Ayarlar':'Configuración','Settings':'Configuración','Yeni Kod Ekle':'Añadir código','Add New Code':'Añadir código',
  'Yeni Kod Kartı Oluştur':'Crear nuevo snippet','Create New Snippet Card':'Crear nuevo snippet','Kod Kartını Düzenle':'Editar snippet','Edit Snippet Card':'Editar snippet',
  'Kaydet':'Guardar','Save':'Guardar','Güncelle':'Actualizar','Update':'Actualizar','İptal':'Cancelar','Cancel':'Cancelar',
  'Başlık':'Título','Title':'Título','Kod veya prompt ara...':'Buscar código o prompt...','Search code or prompt...':'Buscar código o prompt...',
  'Kod bloğunu buraya yapıştır...':'Pega aquí el código...','Paste code block here...':'Pega aquí el código...','Kopyala':'Copiar','Copy':'Copiar',
  'Sil':'Eliminar','Delete':'Eliminar','Düzenle':'Editar','Edit':'Editar','Paylaş':'Compartir','Share':'Compartir',
  'satır':'líneas','lines':'líneas','karakter':'caracteres','characters':'caracteres',
  'Yenile':'Recargar','Reload':'Recargar','Koyu Tema':'Tema oscuro','Dark Theme':'Tema oscuro','Açık Tema':'Tema claro','Light Theme':'Tema claro',
  'Liquid Glass Efekti':'Efecto Liquid Glass','Liquid Glass Effect':'Efecto Liquid Glass','Uygulama Dili':'Idioma de la aplicación','Application Language':'Idioma de la aplicación',
  'Kopyalama Bildirimi':'Notificación de copia','Copy Notification':'Notificación de copia','Kod Satırlarını Kaydır':'Ajuste de línea','Word Wrap':'Ajuste de línea',
  'Tehlike Bölgesi':'Zona de peligro','Danger Zone':'Zona de peligro','Tüm Verileri Sıfırla':'Restablecer todos los datos','Reset All Data':'Restablecer todos los datos',
  'Fabrika Ayarları':'Restablecer','Factory Reset':'Restablecer'
};
function t(tr,en){return currentLang==='tr'?tr:currentLang==='es'?(spanishTranslations[tr]||spanishTranslations[en]||en):en;}

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
    loadSettings();
    renderSnips();
    loadNotes();

    // Sürüm 26Q2.5 Buton Event Listener Bağlantıları
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    if (exportBtn) exportBtn.addEventListener('click', exportCodeSnipData);
    if (importBtn) importBtn.addEventListener('click', importCodeSnipData);

    // Pencere Kontrolleri
    const minBtn = document.getElementById('min-btn');
    const maxBtn = document.getElementById('max-btn');
    const closeBtn = document.getElementById('close-btn');

    if (minBtn) { minBtn.addEventListener('click', () => { ipcRenderer.send('window-minimize'); }); }
    if (maxBtn) { maxBtn.addEventListener('click', () => { ipcRenderer.send('window-maximize'); }); }
    if (closeBtn) { closeBtn.addEventListener('click', () => { ipcRenderer.send('window-close'); }); }

    // İlk açılışta menüdeki "Tüm Kodlar" butonuna active sınıfı ver
    const allCodesBtn = document.querySelector('.sidebar-menu li:first-child');
    if (allCodesBtn) {
        allCodesBtn.classList.add('active');
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

    allSnips.forEach(snip => {
        if (currentCategory === 'favorites' && !snip.isFavorite) {
            return;
        } else if (currentCategory !== 'all' && currentCategory !== 'favorites' && snip.category !== currentCategory) {
            return;
        }

        const card = document.createElement('div');
        card.className = `snip-card ${glassClass} fade-in`;
        card.setAttribute('data-category', snip.category);

        const safeCode = snip.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const copyBtnText = t('Kopyala','Copy');
        const deleteBtnText = t('Sil','Delete');
        const editBtnText = t('Düzenle','Edit');
        const shareBtnText = t('Paylaş','Share');

        const favIcon = snip.isFavorite ? '★' : '☆';
        const favClass = snip.isFavorite ? 'fav-active' : '';

        const lineCount = snip.code.split('\n').length;
        const charCount = snip.code.length;
        const linesTxt = t('satır','lines');
        const charsTxt = t('karakter','characters');

        let langClass = 'language-none';
        if (snip.category === 'web') {
            langClass = snip.code.trim().startsWith('<') ? 'language-html' : 'language-css';
        } else if (snip.category === 'unix') {
            langClass = 'language-bash';
        } else if (snip.category === 'ai') {
            langClass = 'language-javascript';
        } else if (snip.category === 'windows_terminal') {
            langClass = 'language-bash';
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
        container.appendChild(card);
    });

    updateBadges(allSnips);

    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

function kartiKopruyeDonustur(id) {
    const allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
    const snip = allSnips.find(s => s.id === id);

    if (!snip) return;

    const kartVerisi = {
        title: snip.title,
        code: snip.code,
        category: snip.category
    };

    try {
        const jsonMetni = JSON.stringify(kartVerisi);
        const sifreliKopru = btoa(encodeURIComponent(jsonMetni).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        }));

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
}

window.deleteSnip = function (id) {
    const confirmMsg = currentLang === 'tr' ? 'Bu kod kartını silmek istediğinize emin misiniz?' : 'Are you sure you want to delete this snippet?';
    if (confirm(confirmMsg)) {
        let allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];
        allSnips = allSnips.filter(snip => snip.id !== id);
        localStorage.setItem('all_snippets_data', JSON.stringify(allSnips));
        renderSnips();
    }
}

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
}

window.saveSnipAction = function () {
    const editId = document.getElementById('edit-snip-id').value;
    const title = document.getElementById('new-title').value.trim();
    const category = document.getElementById('new-category').value;
    const code = document.getElementById('new-code').value.trim();

    if (!title || !code) return;

    let allSnips = JSON.parse(localStorage.getItem('all_snippets_data')) || [];

    if (editId) {
        allSnips = allSnips.map(snip => {
            if (snip.id === editId) {
                return { ...snip, title, category, code };
            }
            return snip;
        });
    } else {
        const newId = 'snip-' + Date.now();
        allSnips.push({ id: newId, title, category, code, isFavorite: false });
    }

    localStorage.setItem('all_snippets_data', JSON.stringify(allSnips));
    closeFormPanel();
    renderSnips();
}

window.toggleAddForm = function () {
    document.getElementById('edit-snip-id').value = '';
    document.getElementById('new-title').value = '';
    document.getElementById('new-code').value = '';
    document.getElementById('panel-form-title').innerText = currentLang === 'tr' ? 'Yeni Kod Kartı Oluştur' : 'Create New Snippet Card';
    document.getElementById('form-save-btn').innerText = currentLang === 'tr' ? 'Kaydet' : 'Save';

    const panel = document.getElementById('add-form-panel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

window.closeFormPanel = function () {
    document.getElementById('add-form-panel').style.display = 'none';
}

window.toggleSettingsModal = function () {
    const modal = document.getElementById('settings-modal');
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
}

window.reloadApp = function () {
    window.location.reload();
}

function applySettings() {
    const settingTheme = document.getElementById('setting-theme');
    const settingGlass = document.getElementById('setting-glass');
    const settingFontSize = document.getElementById('setting-font-size');
    const settingLang = document.getElementById('setting-lang');
    const settingToast = document.getElementById('setting-toast');
    const settingWrap = document.getElementById('setting-wrap');

    const theme = settingTheme ? settingTheme.value : 'dark';
    const glass = settingGlass ? settingGlass.checked : true;
    const fontSize = settingFontSize ? settingFontSize.value : '14px';
    const lang = settingLang ? settingLang.value : 'tr';
    const toastEnabled = settingToast ? settingToast.checked : true;
    const wrapEnabled = settingWrap ? settingWrap.checked : false;

    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';

    const sidebar = document.querySelector('.sidebar');
    const addPanel = document.getElementById('add-form-panel');
    const modalContent = document.querySelector('.modal-content');

    if (sidebar) {
        if (glass) sidebar.classList.add('liquid_glass');
        else sidebar.classList.remove('liquid_glass');
    }
    if (addPanel) {
        if (glass) addPanel.classList.add('liquid_glass');
        else addPanel.classList.remove('liquid_glass');
    }
    if (modalContent) {
        if (glass) modalContent.classList.add('liquid_glass');
        else modalContent.classList.remove('liquid_glass');
    }

    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-txt').forEach(el => {
        const trText=el.getAttribute('data-tr')||el.innerText; const enText=el.getAttribute('data-en')||trText; el.innerText=lang==='tr'?trText:lang==='es'?(spanishTranslations[trText]||spanishTranslations[enText]||enText):enText;
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('Kod veya prompt ara...','Search code or prompt...');

    const newTitle = document.getElementById('new-title');
    if (newTitle) newTitle.placeholder = t('Başlık','Title');

    const newCode = document.getElementById('new-code');
    if (newCode) newCode.placeholder = t('Kod bloğunu buraya yapıştır...','Paste code block here...');

    const scratchPad = document.getElementById('scratchpad');
    if (scratchPad) scratchPad.placeholder = lang === 'tr' ? 'Notları buraya karala...' : 'Scratch your notes here...';

    localStorage.setItem('app_settings', JSON.stringify({ theme, glass, fontSize, lang, toastEnabled, wrapEnabled }));
    renderSnips();
}

function loadSettings() {
    const saved = JSON.parse(localStorage.getItem('app_settings'));
    if (saved) {
        if (saved.theme && document.getElementById('setting-theme')) document.getElementById('setting-theme').value = saved.theme;
        if (saved.glass !== undefined && document.getElementById('setting-glass')) document.getElementById('setting-glass').checked = saved.glass;
        if (saved.fontSize && document.getElementById('setting-font-size')) document.getElementById('setting-font-size').value = saved.fontSize;
        if (saved.lang && document.getElementById('setting-lang')) document.getElementById('setting-lang').value = saved.lang;
        if (saved.toastEnabled !== undefined && document.getElementById('setting-toast')) document.getElementById('setting-toast').checked = saved.toastEnabled;
        if (saved.wrapEnabled !== undefined && document.getElementById('setting-wrap')) document.getElementById('setting-wrap').checked = saved.wrapEnabled;
    }
    applySettings();
}

window.copyCode = function (id, event) {
    const codeText = document.getElementById(id).innerText;
    navigator.clipboard.writeText(codeText);

    const btn = event.target;
    btn.innerText = t('Kopyalandı!','Copied!');

    const settingToast = document.getElementById('setting-toast');
    const toastEnabled = settingToast ? settingToast.checked : true;
    if (toastEnabled) {
        const toast = document.getElementById('toast-notification');
        if (toast) {
            toast.innerText = t('Kod panoya kopyalandı!','Code copied to clipboard!');
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }
    }

    setTimeout(() => {
        btn.innerText = currentLang === 'tr' ? "Kopyala" : "Copy";
    }, 1500);
}

window.filterCategory = function (category, element) {
    currentCategory = category;
    document.getElementById('search-input').value = '';
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    const titleMap = {
        all: { tr: 'Tüm Kodlar', en: 'All Snippets', es: 'Todos los snippets' },
        favorites: { tr: 'Favori Kodlarım', en: 'Favorite Snippets', es: 'Snippets favoritos' },
        web: { tr: 'HTML / CSS Şablonları', en: 'HTML / CSS Templates', es: 'Plantillas HTML / CSS' },
        ai: { tr: 'Yapay Zeka Promptları', en: 'AI Prompts', es: 'Prompts de IA' },
        minecraft: { tr: 'Minecraft Teknik Notlar', en: 'Minecraft Technical Notes', es: 'Notas técnicas de Minecraft' },
        unix: { tr: 'Unix / Linux Komutları', en: 'Unix / Linux Commands', es: 'Comandos Unix / Linux' },
        windows_terminal: { tr: 'Windows Terminal Kodları', en: 'Windows Terminal Snippets', es: 'Snippets de Windows Terminal' }
    };

    document.getElementById('page-title').innerText = titleMap[category][currentLang] || titleMap[category].en;
    renderSnips();
}

window.searchSnips = function () {
    const query = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('.snip-card').forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const code = card.querySelector('code').innerText.toLowerCase();

        const matchesCategory = (currentCategory === 'all') ||
            (currentCategory === 'favorites' && card.querySelector('.fav-btn').classList.contains('fav-active')) ||
            (card.getAttribute('data-category') === currentCategory);

        if (matchesCategory && (title.includes(query) || code.includes(query))) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function updateBadges(allSnips) {
    const categories = ['all', 'favorites', 'web', 'ai', 'minecraft', 'unix', 'windows_terminal'];
    categories.forEach(cat => {
        let count = 0;
        if (cat === 'all') count = allSnips.length;
        else if (cat === 'favorites') count = allSnips.filter(s => s.isFavorite).length;
        else count = allSnips.filter(s => s.category === cat).length;

        if (document.getElementById(`badge-${cat}`)) {
            document.getElementById(`badge-${cat}`).innerText = count;
        }
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
}

function loadNotes() {
    const scratchPad = document.getElementById('scratchpad');
    if (!scratchPad) return; // 💡 BUGFIX: Eğer not alanı ekranda yoksa çökme, geç!

    const n = localStorage.getItem('codesnip_notes');
    if (n) scratchPad.value = n;
}

window.clearAllData = function () {
    const confirmMsg = currentLang === 'tr' ? 'DİKKAT: Kayıtlı bütün kod blokların ve notların kalıcı olarak silinecektir. Emin misiniz?' : 'WARNING: All saved codes and notes will be deleted permanently. Are you sure?';
    if (confirm(confirmMsg)) {
        localStorage.clear();
        reloadApp();
    }
}

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
            listeHtml += '</div>';

            listeHtml += `
                <div id="spotlight-ql" class="spotlight-quick-preview">
                    <pre><code id="spotlight-ql-code"></code></pre>
                </div>
            `;

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
                if (qlPanel.style.display === 'flex') {
                    qlPanel.style.display = 'none';
                } else {
                    qlPanel.style.display = 'flex';
                    guncelleSpotlightQuickLook();
                }
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
                const cozulmusMetin = decodeURIComponent(atob(sifreliKisim).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

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
            if (filtrelenmisKartlar[seciliIndeks]) {
                anaAramaCubugu.value = filtrelenmisKartlar[seciliIndeks].title;
            } else {
                anaAramaCubugu.value = girdi;
            }
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

// Global kısayol dinleyicisi
ipcRenderer.on('global-spotlight-trigger', () => {
    const spotlightOverlay = document.getElementById('spotlight-overlay');
    const spotlightInput = document.getElementById('spotlight-input');
    if (spotlightOverlay && spotlightInput) {
        spotlightOverlay.classList.remove('spotlight-hidden');
        spotlightInput.value = '';
        spotlightInput.focus();
    }
});

// 💾 JSON Dışa Aktarma (Export)
async function exportCodeSnipData() {
    try {
        const localData = localStorage.getItem('all_snippets_data');
        if (!localData || localData === '[]') {
            alert(currentLang === 'tr' ? 'Yedeklenecek herhangi bir kod veya prompt bulunamadı!' : 'No snippets found to backup!');
            return;
        }
        const result = await ipcRenderer.invoke('export-data', localData);
        if (result.success) alert(result.message);
    } catch (error) {
        alert('Yedekleme başlatılamadı.');
    }
}

// 📂 JSON İçe Aktarma (Import)
async function importCodeSnipData() {
    const onay = confirm(currentLang === 'tr' ? "Mevcut verilerinizin üzerine yazılacak. Emin misiniz?" : "This will overwrite your existing data. Are you sure?");
    if (!onay) return;

    try {
        const result = await ipcRenderer.invoke('import-data');
        if (result.success) {
            localStorage.setItem('all_snippets_data', result.data);
            alert(currentLang === 'tr' ? 'Verileriniz başarıyla geri yüklendi! Uygulama yenilenecektir.' : 'Data successfully restored! App will reload.');
            window.location.reload();
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('İçe aktarma sırasında bir hata oluştu.');
    }
}