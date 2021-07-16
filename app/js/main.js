document.querySelector('.page-main__button').addEventListener('click', myClick);

function myClick() {
  console.log('Button clicked');
};

const popup = document.querySelector('.popup');
const popupMobileLink = document.querySelector('.page-footer__link--top');
const popupDesktopLink = document.querySelector('.page-footer__link--middle');
const popupCloseLink = document.querySelector('.popup__button');
const scroll = document.querySelector('.simplebar-vertical');

popupMobileLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--opened");
});

popupDesktopLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--opened");
});

popupCloseLink.addEventListener('click', function () {
  if (popup.classList.contains('popup--opened')) {
    popup.classList.add('popup--closed');
    popup.classList.remove('popup--opened');
  }
});
