export default class VideoContent {
  constructor(parentEl, blob) {
    this.parentEl = parentEl;
    this.video = URL.createObjectURL(blob);
    this.classes = this.constructor.classes;
  }

  static get classes() {
    return {
      widget: 'video-widget',
    };
  }

  bindToDOM() {
    this.widget = document.createElement('div');
    this.widget.className = this.classes.widget;
    this.widget.innerHTML = `<video src="${this.video}" controls></video>`;

    this.parentEl.prepend(this.widget);
  }
}
