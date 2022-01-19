const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close');
closeModal.addEventListener('click', () => {
  close();
});

const showModal = () => {
  if (!document.cookie.includes("modal=isShow")) {
    modal.classList.add('modal_active');
  }
};

showModal();

const close = () => {
  modal.classList.remove('modal_active');
  const date = new Date();
  document.cookie = "modal=isShow, path=/, expires=" + date.toUTCString() + "path=/;samesite=none;secure=false";
};