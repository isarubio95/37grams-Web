// main.js – 37GRAMS
// ------------------------------------------------------------
// Autor: Isaías Rubio 
// Descripción: control de animaciones, cambio de idioma, menú responsive y
//              librería para la interacción con los libros.
// ------------------------------------------------------------

/** UTILIDADES ------------------------------------------------*/
const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => ctx.querySelectorAll(selector);

/** HR ANIMATION ---------------------------------------------*/
class HrReveal {
  static THRESHOLD = 0.8;

  constructor() {
    const intersectionCb = (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) target.classList.add("visible");
      });
    };

    const observer = new IntersectionObserver(intersectionCb, {
      threshold: HrReveal.THRESHOLD,
    });

    $$(".hr").forEach((hr) => observer.observe(hr));
  }
}

/** LANGUAGE TOGGLE ------------------------------------------*/
class LanguageManager {
  /** @type {Record<string, Record<string,string>>} */
  #dictionary;
  #toggle;

  constructor(dictionary) {
    this.#dictionary = dictionary;
    this.#toggle = $("#lang-toggle");

    this.#toggle.addEventListener("change", () => this.apply());
    this.apply(); // estado inicial
  }

  apply() {
    const lang = this.#toggle.checked ? "en" : "es";
    this.#updateTexts(lang);
    this.#updateToggleOpacity(lang);
  }

  #updateTexts(lang) {
    const translations = this.#dictionary[lang];
    Object.entries(translations).forEach(([key, value]) => {
      const el = document.getElementById(key);
      if (!el) return;

      if (el.placeholder !== undefined) el.placeholder = value;
      else if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return;
      else if (el.hasAttribute("href") && key.startsWith("footer-link")) el.textContent = value;
      else el.innerHTML = value;
    });
  }

  #updateToggleOpacity(lang) {
    $$(".lang-text.es").forEach((el) => (el.style.opacity = lang === "es" ? 1 : 0.4));
    $$(".lang-text.en").forEach((el) => (el.style.opacity = lang === "en" ? 1 : 0.4));
  }
}

/** NAV MENU --------------------------------------------------*/
class NavMenu {
  static DESKTOP_WIDTH = 999;

  #checkbox;
  #links;

  constructor() {
    this.#checkbox = $("#nav-button");
    this.#links = $("#links");

    this.#checkbox.addEventListener("change", () => this.#toggle());
    window.addEventListener("resize", () => this.#toggle());
    this.#toggle(); // estado inicial
  }

  #toggle() {
    const isDesktop = window.innerWidth >= NavMenu.DESKTOP_WIDTH;

    if (isDesktop) {
      this.#links.style.display = "flex";
      this.#links.classList.remove("show", "hide");
      this.#links.style.visibility = "visible";
      this.#checkbox.checked = false;
      return;
    }

    this.#links.classList.toggle("show", this.#checkbox.checked);
    this.#links.classList.toggle("hide", !this.#checkbox.checked);
  }
}

/** BOOK GALLERY (modo móvil) --------------------------------*/
class BookGallery {
  constructor() {
    if (!this.#isTouchDevice()) return; // solo táctil

    $$(".book").forEach((book) => {
      book.classList.add("closed");
      book.addEventListener("click", () => {
        book.classList.toggle("open");
        book.classList.toggle("closed");
      });
    });
  }

  #isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
}

/** INICIALIZACIÓN -------------------------------------------*/
(() => {
  new HrReveal();
  new LanguageManager(window.translations); // `translations` está definido en script HTML
  new NavMenu();
  new BookGallery();
})();
