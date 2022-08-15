export class Slider {
  provider;
  images;
  totalImages;
  init = 0;
  slideInterval;
  interval = 5000;

  constructor() {
    this.onload();
  }

  start() {
    this.provider = document.getElementById("slide-provider");
    this.images = Array.from(document.getElementsByClassName("slide-img"));

    this.provider.setAttribute("data-images", this.images.length);
    this.totalImages = this.images.length;

    this.changeStateImage();
    this.startInterval();
  }

  startInterval() {
    this.slideInterval = setInterval(() => {
      this.nextImage();
    }, this.interval);
  }

  clearInterval() {
    clearInterval(this.slideInterval);
  }

  resetInterval() {
    this.clearInterval();
    this.startInterval();
  }

  changeStateImage() {
    this.images.map((img, index) => {
      if (index === this.init) {
        img.setAttribute("data-state", "visible");
        return;
      }

      img.setAttribute("data-state", "hidden");
    });
  }

  nextImage() {
    if (this.init === this.totalImages - 1) {
      this.init = 0;
      this.changeStateImage();
      return;
    }

    this.init = this.init + 1;
    this.changeStateImage();
  }

  prevImage() {
    if (this.init === 0) {
      this.init = this.totalImages - 1;
      this.changeStateImage();
      return;
    }

    this.init = this.init - 1;
    this.changeStateImage();
  }

  controls() {
    this.provider.addEventListener("mouseenter", () => {
      this.clearInterval();
      console.log("entrei");
    });

    this.provider.addEventListener("mouseleave", () => {
      this.startInterval();
      console.log("sai");
    });
  }

  onload() {
    window.addEventListener("DOMContentLoaded", () => {
      this.start();
      this.controls();
    });
  }
}
