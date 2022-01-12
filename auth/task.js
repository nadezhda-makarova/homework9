class Auth {
  constructor(container) {
    this.container = container;
    this.btn = document.getElementById('signin__btn');
    this.signin = document.getElementById('signin');
    this.fields = document.querySelectorAll('.control');
    this.signedForm = document.getElementById('signin__form');
    this.modal = document.getElementById('welcome');
    this.id_user = document.getElementById('user_id');
    this.form = {};
    
    this.showModal();

    this.btn.addEventListener('click', this.sendForm);
  };

  sendForm = (e) => {
    e.preventDefault();
     this.fields.forEach(item => {
      this.form = {
        ...this.form,
        [item.name]: item.value
      };
    });

    const errorMsg = document.getElementById('error-msg');

    if(errorMsg) {
      errorMsg.remove();
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(this.form));
    xhr.responseType = 'json';
    
    xhr.onload = () => {
      const res = xhr.response;
      if (!res.success) {
        localStorage.setItem('user_id', res.user_id);
      } else {
        const div = document.createElement('div');
        div.setAttribute('id', 'error-msg');
        div.innerText = 'Неверный логин/пароль';
        this.signedForm.prepend(div);
      }
    }
  };

  showModal = () => {
    const isAuth = localStorage.getItem('user_id');
    if(isAuth) {
      this.signin.remove();
      this.id_user.innerText = isAuth;
      this.modal.classList.add('welcome_active');
    }
  }
};

new Auth( document.querySelector( '.content' ));