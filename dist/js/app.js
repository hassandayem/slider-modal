const sliderTrigger = document.querySelector(".slider-trigger");
const sliderModal = document.querySelector(".slider-modal");
const modalCloseButton = document.querySelector(".slider__close-button");

const toggleModal = () => {
  //console.log("clicked");
  sliderModal.classList.toggle("active");
};

const clickOnWindow = (e) => {
  if (e.target === sliderModal) toggleModal();
};

sliderTrigger.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);

window.addEventListener("click", clickOnWindow);

$(".custom-slider-1").on("click", function (e) {
  e.preventDefault();

  const currentIndex = $(".custom-slider").slick("slickCurrentSlide");
  const slideIndex = e.target.dataset.slickIndex;

  console.log(currentIndex);
  console.log(slideIndex);

  if (currentIndex < slideIndex) {
    $(".custom-slider").slick("slickNext");
  } else if (currentIndex > slideIndex) {
    $(".custom-slider").slick("slickPrev");
  }
});

$(".custom-slider-1").slick({
  arrows: false,
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "260px",
  swipeToSlide: true,
});

$(".custom-slider-2").on("click", function (e) {
  e.preventDefault();

  const currentIndex = $(".custom-slider").slick("slickCurrentSlide");
  const slideIndex = e.target.dataset.slickIndex;

  console.log(currentIndex);
  console.log(slideIndex);

  if (currentIndex < slideIndex) {
    $(".custom-slider").slick("slickNext");
  } else if (currentIndex > slideIndex) {
    $(".custom-slider").slick("slickPrev");
  }
});

$(".custom-slider-2").slick({
  arrows: false,
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "160px",
  swipeToSlide: true,
});

// Tabs Functionality
const tabs = document.querySelectorAll("[data-tab-target]");
const tabsContent = document.querySelectorAll("[data-tab-content]");

// 1. Loop through the tabs
tabs.forEach((tab) => {
  // 2. Listen to the click event on each tab.
  tab.addEventListener("click", () => {
    // 3. Selcet the tab content (the target) to add the active class.
    const target = document.querySelector(tab.dataset.tabTarget);
    // 5. Loop through the content divs to add or remove active class.
    tabsContent.forEach((tabContent) => {
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
  });
});
