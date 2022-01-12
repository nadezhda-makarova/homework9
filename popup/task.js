class Popup {
  constructor(container) {
    this.container = container;
    this.modal = document.getElementById('subscribe-modal');

    this.closeModal = document.querySelector('.modal__close');

    this.showModal();

    this.closeModal.addEventListener('click', this.close)
  };

  showModal = () => {
    if (this.checkCookie('modal') !== 'isShow') {
      this.modal.classList.add('modal_active');
    };
  };


  checkCookie = (name) => {
    const str = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    if(str) {
      return decodeURIComponent(str[1]);
    } else {
      return ''
    }
  }


  close = () => {
    this.modal.classList.remove('modal_active');
    const date = new Date();
    document.cookie = "modal=isShow, path=/, expires=" + date.toUTCString() + "path=/;samesite=none;secure=false";
  };
}

new Popup(document.querySelector('body'));