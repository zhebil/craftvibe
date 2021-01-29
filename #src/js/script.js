// константы для слайдера
const workSlidersEl = document.querySelectorAll(".work__slider");
const workButtons = document.querySelectorAll(".work .slider-btns");
// константы для табов
const tabsBtns = document.querySelectorAll(".work__btn");
const tabsItems = document.querySelectorAll(".work__item");
// константы для модалки
const openPopupBtns = document.querySelectorAll(".js-popup-open");
const closePopupBtns = document.querySelectorAll(".popup__close, .overlay");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const body = document.body;

function getScrollMenu() {
  const headerTop = document.querySelector(".header__top");
  const headerClone = headerTop.cloneNode(true);
  const headerScroll = document.querySelector(".header__scroll");
  headerScroll.append(headerClone);

  window.addEventListener("scroll", function (e) {
    const toScrollBlock = document.querySelector(".about");
    if (toScrollBlock.getBoundingClientRect().top <= 0) {
      headerScroll.classList.add("active");
    } else {
      headerScroll.classList.remove("active");
    }
  });
}

function getWorkSliders() {
  workSlidersEl.forEach((item, idx) => {
    item.classList.add(`work-slider-${idx}`);
    workButtons[idx].classList.add(`slider-buttons-${idx}`);
    new Swiper(`.work-slider-${idx}`, {
      slidesPerView: 1,
      initialSlide: 1,
      navigation: {
        nextEl: `.slider-buttons-${idx}  .swiper-button-next`,
        prevEl: `.slider-buttons-${idx} .swiper-button-prev`,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  });
}

function getWorkTabs() {
  let activeTabIdx = 0;
  tabsBtns.forEach((tab, i) => {
    tab.addEventListener("click", function () {
      if (activeTabIdx === i) return false;
      else {
        tabsBtns[activeTabIdx].classList.remove("work__btn--active");
        tabsItems[activeTabIdx].classList.remove("active");

        tab.classList.add("work__btn--active");
        tabsItems[i].classList.add("active");
        activeTabIdx = i;
      }
    });
  });
}

if (document.querySelector(".review__slider")) {
  const review = new Swiper(".review__slider", {
    slidesPerView: 1,
    pagination: {
      el: ".review .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".review .swiper-button-next",
      prevEl: ".review .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
}

function getPopup() {
  openPopupBtns.forEach((btn) => {
    btn.addEventListener("click", togglePopup);
  });
  closePopupBtns.forEach((btn) => {
    btn.addEventListener("click", togglePopup);
  });
}

function togglePopup() {
  overlay.classList.toggle("active");
  popup.classList.toggle("active");
  getOverflow();
}

function getOverflow() {
  if (body.style.overflow === "hidden") {
    body.style.overflow = "auto";
  } else {
    body.style.overflow = "hidden";
  }
}

function getBurger() {
  const burger = document.querySelectorAll(".menu__burger");
  const menu = document.querySelector(".menu__list");
  const menuItems = document.querySelectorAll(".menu__list-item");

  burger.forEach((item) => {
    item.addEventListener("click", toggleBurgerActive);
  });
  menuItems.forEach((item) => {
    item.addEventListener("click", toggleBurgerActive);
  });
  function toggleBurgerActive() {
    // console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      burger[0].classList.toggle("active");
      burger[1].classList.toggle("active");
      menu.classList.toggle("active");
      getOverflow();
    }
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  getScrollMenu();
  getWorkSliders();
  getWorkTabs();
  getPopup();
  getBurger();
});
