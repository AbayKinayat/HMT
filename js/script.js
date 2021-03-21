// Boostrap Toolstip Initial
var btnCta1 = document.getElementById('btnCta');
var btnCta2 = document.getElementById('btnCta2');
var btnCta3 = document.getElementById('btnCta3');
var tooltip = new bootstrap.Tooltip(btnCta1, {
  boundary: 'window'
})
var tooltip2 = new bootstrap.Tooltip(btnCta2, {
  boundary: 'window'
})
var tooltip3 = new bootstrap.Tooltip(btnCta3, {
  boundary: 'window'
})

// Toast init

var toastHTMLSuccess = document.querySelector("#liveToast");
var toastSuccess = new bootstrap.Toast(toastHTMLSuccess, { 
  animation: true,
  delay: 20000,
  autohide: true
});

// AOS Initial

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// Swiper slider

var sectionCardSlider = new Swiper('.section-cards__right', {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    1300: {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    1650: {
      slidesPerView: 3,
    }
  }
});

var feedbackSlider = new Swiper('.feedback__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.dekstop-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      pagination: {
        el: '.mobile-pagination',
        clickable: true,
      }
    },
    551: {
      pagination: {
        el: '.dekstop-pagination',
        clickable: true,
      }
    },
    1920: {
      pagination: {
        el: '.dekstop-pagination',
        clickable: true,
      }
    }
  }
});

// cards and guarantee animation

const successGrafik = document.querySelector('.section-cards__card');
const successCol1 = document.querySelector(".succes-col1");
const successCol2 = document.querySelector(".succes-col2");
const successCol3 = document.querySelector(".succes-col3");
const successCol4 = document.querySelector(".succes-col4");
const successCol5 = document.querySelector(".succes-col5");
const successArrow = document.querySelector(".section-cards__success-arrow");

const guranteeCol = document.querySelector('.guarantee__col');
const sword1 = document.querySelector('.sword1');
const sword2 = document.querySelector('.sword2');

function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

function onVisibilityChange(el, callback) {
  var old_visible = false;
  return function () {
      var visible = isElementInViewport(el);
      if (visible != old_visible) {
          old_visible = visible;
          if (typeof callback == 'function') {
              callback();
          }
      }
  }
}

var successAnimation = onVisibilityChange(successGrafik, function() {
  successCol1.style.height = '54px';
  successCol2.style.height = '94px';
  successCol3.style.height = '142px';
  successCol4.style.height = '180px';
  successCol5.style.height = '226px';
  setTimeout(() => {
    successArrow.style.width = '373px';
  }, 1000)
});

var swordsAnimation = onVisibilityChange(guranteeCol, function() {
  sword1.style.opacity = '1';
  sword2.style.opacity = '1';
  sword1.style.transform = 'translate(0)';
  sword2.style.transform = 'translate(0)';
});

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', successAnimation, false);
  addEventListener('load', successAnimation, false);
  addEventListener('scroll', successAnimation, false);
  addEventListener('resize', successAnimation, false);
  addEventListener('DOMContentLoaded', swordsAnimation, false);
  addEventListener('load', swordsAnimation, false);
  addEventListener('scroll', swordsAnimation, false);
  addEventListener('resize', swordsAnimation, false);
} else if (window.attachEvent)  {
  attachEvent('onDOMContentLoaded', successAnimation); // Internet Explorer 9+ :(
  attachEvent('onload', successAnimation);
  attachEvent('onscroll', successAnimation);
  attachEvent('onresize', successAnimation);
  attachEvent('onDOMContentLoaded', swordsAnimation); // Internet Explorer 9+ :(
  attachEvent('onload', swordsAnimation);
  attachEvent('onscroll', swordsAnimation);
  attachEvent('onresize', swordsAnimation);
}

// Accordion target animation

const accordionItemWrapper = document.querySelectorAll('.accordion-item__wrapper');
const accordionBody = document.querySelectorAll('.accordion-item__wrapper .accordion-item .collapse');

accordionItemWrapper[0].addEventListener('click', function() {
  accordionBoxShadowTaker(this, accordionBody[0])
})
accordionItemWrapper[1].addEventListener('click', function() {
  accordionBoxShadowTaker(this, accordionBody[1])
})
accordionItemWrapper[2].addEventListener('click', function() {
  accordionBoxShadowTaker(this, accordionBody[2])
})

function accordionBoxShadowTaker(accarWrapper, accarBody) {
  accordionItemWrapper.forEach(item => {
    item.style.boxShadow = 'none';
    item.style.zIndex = '0';
    item.style.transform = 'translate(0, 0)';
  })
  setTimeout(() => {
    if (accarBody.classList.contains('show')) {
      accarWrapper.style.boxShadow = '10px 10px 20px 4px rgba(0, 0, 0, 0.25)';
      accarWrapper.style.zIndex = '98';
      accarWrapper.style.transform = 'translate(-5px, -5px)';
    } else {
      accarWrapper.style.boxShadow = 'none';
      accarWrapper.style.zIndex = '0';
      accarWrapper.style.transform = 'translate(0, 0)';
    }
  }, 400)
}

// BURGER NAV

const burgerNav = document.querySelector(".burger-nav");
const navSolid = document.querySelector(".nav-solid");
const burgerNavLinks = document.querySelectorAll(".burger-nav__links");

burgerNav.addEventListener('click', burgerNavToggle)

function burgerNavToggle() {
  navSolid.classList.toggle('active');
}

burgerNavLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navSolid.classList.remove('active');
  })
})

// Certificate Zoom

const certificate = document.querySelector(".certificate");
const certificateMobile = document.querySelector(".certificate-mobile");
const certificateZoom = document.querySelector(".certificate-zoom__wrapper");
const  certificateCloseBtn = document.querySelector(".certificate-zoom__wrapper .btn-close");
const certificateOverlay = document.querySelector(".certificate-zoom__overlay");
const certificateCloseZone = document.querySelector(".certificate-zoom__close-zone");

certificateMobile.addEventListener('click', certificateZoomIn)

certificate.addEventListener('click', certificateZoomIn)

certificateCloseBtn.addEventListener('click', certificateZoomOut)

certificateCloseZone.addEventListener('click', certificateZoomOut)

function certificateZoomIn() {
  certificateZoom.classList.add('active');
  certificateOverlay.style.visibility = "visible";
  certificateOverlay.style.opacity = "0.5";
}

function certificateZoomOut() {
  certificateZoom.classList.remove('active');
  certificateOverlay.style.visibility = "hidden";
  certificateOverlay.style.opacity = "0";
}

// Form Validation and Post PHP

const form = document.querySelector(".form");
const formStepBox = document.querySelector(".form-step__box");
const formStepCount = document.querySelector(".form-step__count");
const formStepAnim = document.querySelector(".form-step_anim");

function formValid(userData) {
  userData.classList.remove('is-invalid');
}

function formInvalid(userData) {
  userData.classList.add('is-invalid');
}

function formNameValidation() {
  if (userName.value === '') {
    formInvalid(userName)
    nameFeedback.textContent = 'Введите ваше имя';
  } else if (userName.value.length < 2) {
    formInvalid(userName)
    nameFeedback.textContent = 'Введите не менее 2 символов';
  } else if (!/[а-я]/ig.test(userName.value)) {
    formInvalid(userName)
    nameFeedback.textContent = 'Не корректное имя';
  } else {
    formValid(userName)
  }
}

function formEmailValidation() {
  if (userEmail.value === '') {
    formInvalid(userEmail)
    emailFeedback.textContent = 'Введите вашу почту';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value)) {
    formInvalid(userEmail)
    emailFeedback.textContent = 'Не корректный почта';
  } else {
    formValid(userEmail)
  }
}

function formPhoneValidation() {
  if (userPhone.value === '') {
    formInvalid(userPhone)
    phoneFeedback.textContent = 'Введите ваш телефон';
  } else if (!/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(userPhone.value)) {
    formInvalid(userPhone)
    phoneFeedback.textContent = 'Не корректный телефон';
  } else {
    formValid(userPhone)
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault()
  const userName = document.querySelector("#userName");
  const userPhone = document.querySelector("#userPhone");
  const userEmail = document.querySelector("#userEmail");
  const userMessage = document.querySelector("#userMessage");
  const agree = document.querySelector("#agree");
  const nameFeedback = document.querySelector("#nameFeedback");
  const phoneFeedback = document.querySelector("#phoneFeedback");
  const emailFeedback = document.querySelector("#emailFeedback");
  const formInputs = document.querySelectorAll(".form .form-control");

  formNameValidation()

  formEmailValidation()

  formPhoneValidation()

  if (!agree.checked) {
    formInvalid(agree)
  } else {
    formValid(agree)
  }

  if (userName.value === '' || userEmail.value === '' || userPhone.value === '' || !agree.checked || userName.value.length < 2 || !/[а-я]/ig.test(userName.value) || !/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(userPhone.value) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value)) {
    return false
  }

  formStepBox.style.borderColor = '#DEBA3C';
  formStepBox.style.color = '#DEBA3C';
  formStepBox.style.opacity = '1';

  formStepCount.style.opacity = '1';
  formStepCount.style.color = '#DEBA3C';

  formStepAnim.style.transform = 'scale(1)';
  formStepAnim.style.opacity = '0';

  toastSuccess.show()

  

  $.ajax({
    url: 'telegram.php',
    type: 'POST',
    cache: false,
    data: {'userName': userName,'userPhone': userPhone, 'userEmail': userEmail,'userMessage': userMessage},
    dataType: 'html',
    success: function(data) {
        console.log('success')
    }
  })

  setTimeout(() => {
    formInputs.forEach(input => {
      input.value = "";
    })
  }, 3000)
})


