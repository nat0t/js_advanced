export default class Button {
  _text = ''
  _callback = null
  className = ''

  constructor(text, callback) {
    this._text = text
    this._callback = callback
  }

  onBtnClick() {
    const callback = this._callback
    if (typeof callback === 'function') {
      callback()
    }
  }

  getTemplate(className) {
    const btn = document.createElement('button')
    btn.classList.add(className)

    return btn
  }

  render(placeToRender, className) {
    if (placeToRender) {
      const btn = this.getTemplate(className)
      btn.innerHTML = this._text
      placeToRender.appendChild(btn)

      btn.addEventListener('click', () => {
        this.onBtnClick()
      })
    }
  }
}
