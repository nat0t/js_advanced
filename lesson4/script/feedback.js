class Validator {

  _re = {
    name: {
      regexp: /^[a-zA-Z]+$/,
      error: 'Name can only contain letters'
    },
    phone: {
      regexp: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
      error: 'The phone should look like +7(000)000-0000'
    },
    email: {
      regexp: /^[a-z]+[.-]?[a-z]+@[a-z]+\.[a-z]+$/,
      error: 'E-mail should look like mymail@mail.ru, my.mail@mail.ru or my-mail@mail.ru'
    },
  }

  constructor() {
    document.querySelector('.submit').addEventListener('click', (event) => {
      this.validate(this._re, event)
    }
    )
  }

  validate(re, event) {
    document.querySelectorAll('.feedback>.input-wrapper>input').forEach((item) => {
      if (!re[item.id]['regexp'].test(item.value)) {
        event.preventDefault();
        document.querySelector('.feedback').classList.add('fault');
        item.classList.add('invalid');
        if (!document.querySelector(`#${item.id}-error`)) {
          item.insertAdjacentHTML('afterend',
            `<div class="error" id=${item.id}-error>${re[item.id]['error']}</div>`)
        }
      } else {
        item.classList.remove('invalid')
        if (document.querySelector(`#${item.id}-error`)) {
          document.querySelector(`#${item.id}-error`).remove()
        }
      }
    })
  }
}


validator = new Validator()