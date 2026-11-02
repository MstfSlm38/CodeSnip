/* CodeSnip 26Q3.5 quality, language and visual refresh */
(function () {
  "use strict";
  const es = {
    "Tüm Kodlar":"Todos los fragmentos","All Snippets":"Todos los fragmentos","Favoriler":"Favoritos","Favorites":"Favoritos",
    "Kategori Ekle":"Añadir categoría","Add Category":"Añadir categoría","Ayarlar":"Ajustes","Settings":"Ajustes",
    "Sistem & Çekirdek":"Sistema y núcleo","System & Kernel":"Sistema y núcleo","Görünüm Tasarımı":"Diseño de apariencia","Appearance Design":"Diseño de apariencia",
    "Arayüzü Yeniden Yükle":"Recargar aplicación","Reload Application":"Recargar aplicación","Yenile":"Recargar","Reload":"Recargar",
    "Arayüz Teması":"Tema de interfaz","Interface Theme":"Tema de interfaz","Koyu Tema":"Tema oscuro","Dark Theme":"Tema oscuro","Açık Tema":"Tema claro","Light Theme":"Tema claro",
    "Liquid Glass Efekti":"Efecto Liquid Glass","Liquid Glass Effect":"Efecto Liquid Glass","Cam Bulanıklığı (Blur)":"Desenfoque del cristal","Glass Blur":"Desenfoque del cristal",
    "Cam Saydamlığı (Opacity)":"Opacidad del cristal","Glass Opacity":"Opacidad del cristal","Tema Vurgu Rengi":"Color de acento","Theme Accent Color":"Color de acento",
    "Arka Plan Tipi":"Tipo de fondo","Background Type":"Tipo de fondo","Düz Renk":"Color sólido","Solid Color":"Color sólido","Arka Plan Rengi":"Color de fondo","Background Color":"Color de fondo",
    "Arka Plan Görseli":"Imagen de fondo","Background Image":"Imagen de fondo","Yazı Tipi Boyutu (Kodlar)":"Tamaño de fuente del código","Font Size (Codes)":"Tamaño de fuente del código",
    "Akıllı Özellikler":"Funciones inteligentes","Smart Features":"Funciones inteligentes","Uygulama Dili":"Idioma de la aplicación","Application Language":"Idioma de la aplicación",
    "Veri Yönetimi":"Gestión de datos","Data Management":"Gestión de datos","Tehlike Bölgesi":"Zona de peligro","Danger Zone":"Zona de peligro",
    "Tüm Verileri Sıfırla":"Restablecer todos los datos","Reset All Data":"Restablecer todos los datos","Fabrika Ayarları":"Restablecer","Factory Reset":"Restablecer",
    "Yeni Kod Ekle":"Añadir código","Add New Code":"Añadir código","Yeni Kod Kartı Oluştur":"Crear fragmento","Create New Snippet Card":"Crear fragmento",
    "Kod Kartını Düzenle":"Editar fragmento","Edit Snippet Card":"Editar fragmento","Başlık":"Título","Kaydet":"Guardar","Save":"Guardar",
    "Güncelle":"Actualizar","Update":"Actualizar","İptal":"Cancelar","Cancel":"Cancelar","Kopyala":"Copiar","Copy":"Copiar","Kopyalandı!":"¡Copiado!","Copied!":"¡Copiado!",
    "Sil":"Eliminar","Delete":"Eliminar","Düzenle":"Editar","Edit":"Editar","Paylaş":"Compartir","Share":"Compartir",
    "Kod veya prompt ara...":"Buscar código o prompt...","Search code or prompt...":"Buscar código o prompt...","Kod bloğunu buraya yapıştır...":"Pega el código aquí...",
    "No matching code found.":"No se encontraron resultados.","Eşleşen kod bulunamadı.":"No se encontraron resultados."
  };
  const tr = {"All Snippets":"Tüm Kodlar","Favorites":"Favoriler","Add Category":"Kategori Ekle","Settings":"Ayarlar","Reload Application":"Arayüzü Yeniden Yükle",
    "Appearance Design":"Görünüm Tasarımı","Interface Theme":"Arayüz Teması","Dark Theme":"Koyu Tema","Light Theme":"Açık Tema",
    "Liquid Glass Effect":"Liquid Glass Efekti","Glass Blur":"Cam Bulanıklığı (Blur)","Glass Opacity":"Cam Saydamlığı (Opacity)",
    "Theme Accent Color":"Tema Vurgu Rengi","Background Type":"Arka Plan Tipi","Solid Color":"Düz Renk","Background Color":"Arka Plan Rengi",
    "Background Image":"Arka Plan Görseli","Font Size (Codes)":"Yazı Tipi Boyutu (Kodlar)","Smart Features":"Akıllı Özellikler",
    "Application Language":"Uygulama Dili","Data Management":"Veri Yönetimi","Danger Zone":"Tehlike Bölgesi","Reset All Data":"Tüm Verileri Sıfırla",
    "Add New Code":"Yeni Kod Ekle","Create New Snippet Card":"Yeni Kod Kartı Oluştur","Save":"Kaydet","Cancel":"İptal","Update":"Güncelle",
    "Copy":"Kopyala","Copied!":"Kopyalandı!","Delete":"Sil","Edit":"Düzenle","Share":"Paylaş","Search code or prompt...":"Kod veya prompt ara..."};

  Object.assign(es, {
    "Uygulamanın renk paletini değiştirir.":"Cambia la paleta de colores de la aplicación.",
    "Buzlu cam ve saydamlık efektlerini yönetir.":"Controla los efectos de cristal esmerilado y transparencia.",
    "Arka planın bulanıklık seviyesini ayarlar.":"Ajusta el desenfoque del fondo.",
    "Cam katmanın opaklık değerini belirler.":"Define la opacidad de la capa de cristal.",
    "Butonlar ve aktif elemanların rengini değiştirir.":"Cambia el color de los botones y elementos activos.",
    "Arka planın renk mi görsel mi olacağını belirler.":"Permite elegir un color o una imagen de fondo.",
    "Uygulamanın ana arka plan rengini belirler.":"Define el color de fondo principal de la aplicación.",
    "Görsel linki (URL) veya yerel dosya yolu girin.":"Introduce una URL o selecciona una imagen de tu dispositivo.",
    "Kod bloklarının metin boyutunu ayarlar.":"Ajusta el tamaño del texto de los fragmentos.",
    "Görüntüleme dilini değiştirir.":"Cambia el idioma de la interfaz.",
    "Kod Satırlarını Kaydır":"Ajustar líneas de código",
    "Yatay kaydırma yerine kodları alt satıra indirir.":"Ajusta las líneas largas en lugar de desplazarlas horizontalmente.",
    "Kopyalama Bildirimi":"Aviso de copia",
    "Kod kopyalandığında ekranda mini bildirim açar.":"Muestra un aviso breve al copiar código.",
    "Kayıtlı tüm verileri ve notları kalıcı olarak siler.":"Elimina permanentemente todos los datos y notas guardados.",
    "Tüm Kodlar":"Todos los fragmentos","Favoriler":"Favoritos","Kategori Ekle":"Añadir categoría","Ayarlar":"Ajustes",
    "Arayüzü Yeniden Yükle":"Recargar aplicación","Yenile":"Recargar","Sistem & Çekirdek":"Sistema y núcleo",
    "Görünüm Tasarımı":"Diseño visual","Arayüz Teması":"Tema de la interfaz","Koyu Tema":"Tema oscuro",
    "Açık Tema":"Tema claro","Liquid Glass Efekti":"Efecto Liquid Glass","Cam Bulanıklığı (Blur)":"Desenfoque del cristal",
    "Cam Saydamlığı (Opacity)":"Transparencia del cristal","Tema Vurgu Rengi":"Color de acento",
    "Arka Plan Tipi":"Tipo de fondo","Düz Renk":"Color sólido","Arka Plan Rengi":"Color de fondo",
    "Arka Plan Görseli":"Imagen de fondo","Özel Görsel (URL / Yol)":"Imagen personalizada (URL / ruta)",
    "Yazı Tipi Boyutu (Kodlar)":"Tamaño de fuente del código","Akıllı Özellikler":"Funciones inteligentes",
    "Uygulama Dili":"Idioma de la aplicación","Veri Yönetimi":"Gestión de datos","Tehlike Bölgesi":"Zona de peligro",
    "Fabrika Ayarları":"Restablecer valores","Kaydet":"Guardar","İptal":"Cancelar","Güncelle":"Actualizar",
    "Kopyala":"Copiar","Kopyalandı!":"¡Copiado!","Sil":"Eliminar","Düzenle":"Editar","Paylaş":"Compartir",
    "Yeni Kod Ekle":"Añadir fragmento","Yeni Kod Kartı Oluştur":"Crear fragmento",
    "Başlık":"Título","Kod bloğunu buraya yapıştır...":"Pega el código aquí...",
    "Kod veya prompt ara...":"Buscar código o prompt...","Eşleşen kod bulunamadı.":"No se encontraron fragmentos."
  });

  function lang() { return document.getElementById("setting-lang")?.value || "tr"; }
  function translateStatic() {
    const current = lang();
    document.documentElement.lang = current;
    document.querySelectorAll(".lang-txt").forEach(el => {
      const english = el.getAttribute("data-en") || el.textContent.trim();
      const turkish = el.getAttribute("data-tr") || tr[english] || english;
      const value = current === "es" ? (es[english] || es[turkish] || english) : current === "tr" ? turkish : english;
      const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      if (textNode) textNode.textContent = value;
      else if (!el.children.length) el.textContent = value;
    });
    const search = document.getElementById("search-input");
    if (search) search.placeholder = current === "es" ? "Buscar código o prompt..." : current === "en" ? "Search code or prompt..." : "Kod veya prompt ara...";
  }

  function safeRenderSnips() {
    const all = JSON.parse(localStorage.getItem("all_snippets_data") || "[]");
    const container = document.getElementById("snip-list-container");
    if (!container) return;
    const current = lang();
    const glass = document.getElementById("setting-glass")?.checked !== false;
    const fontSize = document.getElementById("setting-font-size")?.value || "14px";
    const wrap = document.getElementById("setting-wrap")?.checked || false;
    const query = (document.getElementById("search-input")?.value || "").toLocaleLowerCase();
    container.replaceChildren();
    const fragment = document.createDocumentFragment();
    all.forEach(snip => {
      if (currentCategory === "favorites" && !snip.isFavorite) return;
      if (currentCategory !== "all" && currentCategory !== "favorites" && snip.category !== currentCategory) return;
      const title = String(snip.title || ""), source = String(snip.code || "");
      if (query && !title.toLocaleLowerCase().includes(query) && !source.toLocaleLowerCase().includes(query)) return;
      const card = document.createElement("article");
      card.className = "snip-card " + (glass ? "liquid_glass" : "no-glass") + " fade-in";
      card.dataset.category = String(snip.category || "");
      const header = document.createElement("div"); header.className = "snip-header";
      const heading = document.createElement("h3"); heading.textContent = title;
      const actions = document.createElement("div"); actions.className = "card-actions";
      function addButton(className, label, action, tip) {
        const button = document.createElement("button"); button.type = "button"; button.className = className;
        button.textContent = label; button.title = tip || label; button.addEventListener("click", action); actions.appendChild(button);
      }
      addButton("fav-btn " + (snip.isFavorite ? "fav-active" : ""), snip.isFavorite ? "★" : "☆", () => window.toggleFavorite(snip.id), current === "es" ? "Favorito" : "Favorite");
      addButton("share-btn", current === "es" ? "Compartir" : current === "en" ? "Share" : "Paylaş", () => window.kartiKopruyeDonustur(snip.id));
      addButton("edit-btn", current === "es" ? "Editar" : current === "en" ? "Edit" : "Düzenle", () => window.editCard(snip.id));
      addButton("copy-btn", current === "es" ? "Copiar" : current === "en" ? "Copy" : "Kopyala", event => window.copyCode(snip.id, event));
      addButton("delete-btn", current === "es" ? "Eliminar" : current === "en" ? "Delete" : "Sil", () => window.deleteSnip(snip.id));
      header.append(heading, actions);
      const pre = document.createElement("pre"); pre.style.whiteSpace = wrap ? "pre-wrap" : "pre";
      const code = document.createElement("code"); code.id = String(snip.id); code.style.fontSize = fontSize; code.textContent = source; pre.appendChild(code);
      const stats = document.createElement("div"); stats.className = "code-stats";
      stats.textContent = source.split("\n").length + " " + (current === "tr" ? "satır" : current === "es" ? "líneas" : "lines") + " · " + source.length + " " + (current === "tr" ? "karakter" : current === "es" ? "caracteres" : "characters");
      card.append(header, pre, stats); fragment.appendChild(card);
    });
    container.appendChild(fragment);
    if (typeof updateBadges === "function") updateBadges(all);
    if (typeof Prism !== "undefined") Prism.highlightAllUnder(container);
  }

  function removeDuplicateSettings() {
    ["setting-glass", "setting-font-size"].forEach(id => {
      document.querySelectorAll("#" + id).forEach((element, index) => {
        if (index > 0) element.closest(".setting-item")?.remove();
      });
    });
  }
  function refreshCategories() {
    const categories = JSON.parse(localStorage.getItem("codesnip_categories") || "[]");
    const current = lang();
    categories.forEach(category => {
      if (!category.name) category.name = {tr:category.id,en:category.id};
      if (!category.name.es) category.name.es = category.name.en || category.name.tr || category.id;
    });
    localStorage.setItem("codesnip_categories", JSON.stringify(categories));
    if (typeof renderCategories === "function") renderCategories();
    document.querySelectorAll("#dynamic-categories .nav-item").forEach((button, index) => {
      const category = categories[index], label = button.querySelector("span span");
      if (category && label) label.textContent = category.name[current] || category.name.tr;
    });
  }
  function applyVisualRefresh() {
    const accent = document.getElementById("setting-theme-color");
    const root = document.documentElement;
    root.style.setProperty("--brand-blue", "#256ccd");
    root.style.setProperty("--brand-violet", "#5b7484");
    root.style.setProperty("--brand-cyan", "#78f5c1");
    root.style.setProperty("--theme-color", accent?.value || "#5b8cff");
  }


  function installBackgroundPicker() {
    const urlInput = document.getElementById("setting-bg-image");
    if (!urlInput || document.getElementById("setting-bg-file")) return;
    const controls = document.createElement("div");
    controls.className = "background-image-controls";
    const picker = document.createElement("input");
    picker.type = "file"; picker.id = "setting-bg-file";
    picker.accept = "image/png,image/jpeg,image/webp,image/avif"; picker.hidden = true;
    const choose = document.createElement("button");
    choose.type = "button"; choose.className = "glass-btn"; choose.id = "choose-bg-image";
    choose.textContent = lang() === "es" ? "Elegir imagen" : lang() === "en" ? "Choose image" : "Görsel seç";
    const clear = document.createElement("button");
    clear.type = "button"; clear.className = "glass-btn"; clear.id = "clear-bg-image";
    clear.textContent = lang() === "es" ? "Quitar imagen" : lang() === "en" ? "Remove image" : "Görseli kaldır";
    const status = document.createElement("span"); status.className = "background-image-status";
    status.textContent = lang() === "es" ? "Elige una imagen de tu dispositivo." : lang() === "en" ? "Choose an image from your device." : "Cihazından bir görsel seç.";
    const parent = urlInput.parentElement;
    parent.append(controls); controls.append(picker, choose, clear, status);
    choose.addEventListener("click", () => picker.click());
    picker.addEventListener("change", () => {
      const file = picker.files && picker.files[0];
      if (!file) return;
      if (!/^image\/(png|jpeg|webp|avif)$/.test(file.type) || file.size > 4 * 1024 * 1024) {
        status.textContent = lang() === "es" ? "Usa PNG, JPG, WebP o AVIF de hasta 4 MB." : "PNG, JPG, WebP veya AVIF, en fazla 4 MB seç.";
        picker.value = ""; return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        try {
          localStorage.setItem("codesnip_custom_background", String(reader.result));
          urlInput.value = String(reader.result);
          const type = document.getElementById("setting-bg-type"); if (type) type.value = "image";
          status.textContent = file.name;
          window.applySettings();
        } catch (error) {
          status.textContent = lang() === "es" ? "No se pudo guardar la imagen." : "Görsel kaydedilemedi.";
        }
      };
      reader.readAsDataURL(file);
    });
    clear.addEventListener("click", () => {
      localStorage.removeItem("codesnip_custom_background");
      urlInput.value = "";
      const type = document.getElementById("setting-bg-type"); if (type) type.value = "color";
      status.textContent = lang() === "es" ? "Imagen eliminada." : "Görsel kaldırıldı.";
      window.applySettings();
    });
    const saved = localStorage.getItem("codesnip_custom_background");
    if (saved) { urlInput.value = saved; status.textContent = lang() === "es" ? "Imagen personalizada guardada." : "Özel görsel kayıtlı."; }
  }

  const originalApplySettings = window.applySettings;
  window.applySettings = function () {
    if (typeof originalApplySettings === "function") originalApplySettings();
    applyVisualRefresh(); translateStatic(); refreshCategories(); safeRenderSnips(); installBackgroundPicker();
  };
  window.renderSnips = safeRenderSnips;
  window.searchSnips = safeRenderSnips;
  document.addEventListener("DOMContentLoaded", () => {
    removeDuplicateSettings(); applyVisualRefresh(); translateStatic(); refreshCategories(); safeRenderSnips(); installBackgroundPicker();
  });
  document.addEventListener("change", event => {
    if (event.target?.id === "setting-lang") { translateStatic(); refreshCategories(); safeRenderSnips(); }
  });
})();