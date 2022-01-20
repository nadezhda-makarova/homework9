btn = document.getElementById('signin__btn');
signin = document.getElementById('signin');
signedForm = document.getElementById('signin__form');
modal = document.getElementById('welcome');
id_user = document.getElementById('user_id');
form = {};
btn.addEventListener('click', (e) => {
  e.preventDefault();
  form = new FormData(signedForm);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.responseType = 'json';
  xhr.send(form);

  xhr.onload = () => {
    const res = xhr.response;
    if (res.success) {
      localStorage.setItem('user_id', res.data_id);
      showModal();
    } else {
      alert('Неверный логин/пароль');
    };
  };
});

const showModal = () => {
  const isAuth = localStorage.getItem('user_id');
  if (isAuth) {
    signin.remove();
    id_user.innerText = isAuth;
    modal.classList.add('welcome_active');
  };
};

showModal();
