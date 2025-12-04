class AccordionSlider {
  constructor() {
    this.slides = document.querySelectorAll(".slide");
    this.prevBtn = document.querySelector(".nav-prev");
    this.nextBtn = document.querySelector(".nav-next");
    this.currentIndex = -1;

    this.init();
  }

  init() {
    // Activar slide al hacer click
    this.slides.forEach((slide, index) => {
      slide.addEventListener("click", () => this.setActiveSlide(index));
    });

    // Botones prev/next
    this.prevBtn.addEventListener("click", () => this.previousSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    // Navegación con teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.previousSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });
  }

  setActiveSlide(index) {
    if (this.currentIndex === index) {
      // Si ya está activa, la desactiva
      this.slides.forEach((slide) => slide.classList.remove("active"));
      this.currentIndex = -1;
    } else {
      // Activa la nueva y desactiva las demás
      this.slides.forEach((slide) => slide.classList.remove("active"));
      this.slides[index].classList.add("active");
      this.currentIndex = index;
    }
  }

  nextSlide() {
    const nextIndex =
      this.currentIndex === -1 ? 0 : (this.currentIndex + 1) % this.slides.length;
    this.setActiveSlide(nextIndex);
  }

  previousSlide() {
    const prevIndex =
      this.currentIndex === -1
        ? this.slides.length - 1
        : (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.setActiveSlide(prevIndex);
  }
}

// Inicializar cuando cargue la página
document.addEventListener("DOMContentLoaded", () => {
  new AccordionSlider();
});
