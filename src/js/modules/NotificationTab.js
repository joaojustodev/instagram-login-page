export class NotificationTab {
  element;

  constructor() {
    this.onload();
  }

  start() {
    this.element = document.getElementById("notification-bar");

    setTimeout(() => {
      this.element.style.transform = "translateY(0)";
    }, 1000);
  }

  close() {
    this.element.addEventListener("click", () => {
      this.element.style.transform = "translateY(-100%)";
    });
  }

  onload() {
    window.addEventListener("DOMContentLoaded", () => {
      this.start();
      this.close();
    });
  }
}
