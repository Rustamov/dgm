// import { Fancybox } from "@fancyapps/ui";

const accordionBtns = document.querySelectorAll(".acc__header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let isOpen = this.classList.contains("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (!isOpen) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});
