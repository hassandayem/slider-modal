const sliderTrigger = document.querySelector(".slider-trigger");
const sliderModal = document.querySelector(".slider-modal");
const modalCloseButton = document.querySelector(".slider__close-button");

const toggleModal = () => {
  sliderModal.classList.toggle("active");
  initSlider(`#tab-1 .custom-slider`);

  // $(window).trigger("resize");
};

const clickOnWindow = (e) => {
  if (e.target === sliderModal) toggleModal();
};

sliderTrigger.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);

window.addEventListener("click", clickOnWindow);

const initSlider = (cls) => {
  if (document.querySelector(cls).dataset.init === "true") return;
  document.querySelector(cls).dataset.init = true;

  $(`${cls}`).on("click", function (e) {
    e.preventDefault();
    const currentIndex = $(`${cls}`).slick("slickCurrentSlide");
    const slideIndex = e.target.dataset.slickIndex;

    if (currentIndex < slideIndex) {
      $(`${cls}`).slick("slickNext");
    } else if (currentIndex > slideIndex) {
      $(`${cls}`).slick("slickPrev");
    }
  });

  $(`${cls}`).slick({
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "260px",
    swipeToSlide: true,
  });

  // On edge hit
  $(`${cls}`).on("edge", (event, slick, direction) => {
    console.log("edge was hit");
  });
};

window.addEventListener("DOMContentLoaded", () => {
  // initSlider(`#tab-1 .custom-slider`);
  // initSlider(`#tab-2 .custom-slider`);
});

// document.querySelector(".tab").addEventListener("click", () => {
//   // $(window).trigger("resize");
//   console.log("tab clicked");
// });

// Tabs Functionality
const tabs = document.querySelectorAll("[data-tab-target]");
const tabsContent = document.querySelectorAll("[data-tab-content]");

// 1. Loop through the tabs
tabs.forEach((tab) => {
  // 2. Listen to the click event on each tab.
  tab.addEventListener("click", () => {
    // This helps to resize the slider when click on tab to rsize the window
    // 3. Selcet the tab content (the target) to add the active class.
    const target = document.querySelector(tab.dataset.tabTarget);
    // 5. Loop through the content divs to add or remove active class.
    tabsContent.forEach((tabContent) => {
      // console.log(`#${tabContent.id} .custom-slider`);
      // $(`#${tabContent.id} .custom-slider`).slick("unslick");
      tabContent.classList.remove("active");
    });
    // 6. Loop through the tab itself (the clickable tab) to add or remove active class.
    tabs.forEach((tab) => {
      // 7. Remove the active class from the tab.
      tab.classList.remove("active");
    });

    // 8. Add the active class from the tab.
    tab.classList.add("active");
    // 4. Add active class to the content.
    target.classList.add("active");

    initSlider(`#${target.id} .custom-slider`);
  });
});
