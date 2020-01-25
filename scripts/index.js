let menuIcon = document.querySelector('.header__drop-down-menu');
let headerNavList = document.querySelector('.header__nav-list');

// выдвигает меню
menuIcon.addEventListener('click', function(event) {
    headerNavList.classList.toggle('header__nav-list--active--open');
});

// закрывает меню
// menuIcon.addEventListener('click', function(event) {
//     headerNavList.classList.remove('header__nav-list--active');
// });

window.addEventListener('keydown', function (event) {
    if (!(event.ctrlKey && event.shiftKey)) return;

    let headerEl = document.querySelector('.header');
    let headerStyles = headerEl.getBoundingClientRect();

    if (event.code === 'ArrowUp') {
        headerEl.style.height = headerStyles.height + 5 + 'px';
    }
    else if (event.code === 'ArrowDown') {
        headerEl.style.height = headerStyles.height - 5 + 'px';
    }
});

// Валидация поля ввода Имени

let userName = document.querySelector('.footer__form-name');

userName.addEventListener('input', function(event) {
    if (!this.value) {
        this.classList.remove('form_field-error');

        return;
    }

    if (this.value.length < 3 ) {
        this.classList.add('form_field-error');
    }
    else {
        this.classList.remove('form_field-error');
    }
});

userName.addEventListener('input', function(event) {
    if (this.value.length >= 3 ) {
        this.classList.add('form_field-success');
    }
    else {
        this.classList.remove('form_field-success');
    }
});

// Валидация Еmail

let userEmail = document.querySelector('.footer__form-email');
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

userEmail.addEventListener('input', function(event) {
    if (!this.value) {
        this.classList.remove('form_field-error');

        return;
    }

    if(!this.value.match(mailFormat)) {
        this.classList.add('form_field-error');
    }
    else {
        this.classList.remove('form_field-error');
    }
});

userEmail.addEventListener('input', function(event) {
    if (this.value.match(mailFormat)) {
        this.classList.add('form_field-success');
    }
    else {
        this.classList.remove('form_field-success');
    }
});


// прогресс бар

let line = document.getElementById('header__progress-line');
window.addEventListener('scroll', progressBar);
         
function progressBar(e) {
   let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

   let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 

   let width_progress_line = windowScroll / windowHeight * 100;

   line.style.width = width_progress_line + '%';
}
