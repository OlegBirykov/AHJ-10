export default class AudioContent {
  constructor(parentEl, blob) {
    this.parentEl = parentEl;
    this.audio = URL.createObjectURL(blob);
    this.classes = this.constructor.classes;
  }

  static get classes() {
    return {
      widget: 'audio-widget',
    };
  }

  bindToDOM() {
    this.widget = document.createElement('div');
    this.widget.className = this.classes.widget;
    this.widget.innerHTML = `<audio src="${this.audio}" controls></audio>`;

    this.parentEl.prepend(this.widget);
  }
}
