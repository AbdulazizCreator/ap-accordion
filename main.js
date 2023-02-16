const accordionItems = document.querySelectorAll(".accordion-item");
const accordionHeaders = document.querySelectorAll(".accordion-header");
const itemsLength = accordionItems.length;

// one active at a time

for (let i = 0; i < itemsLength; i++) {
  accordionHeaders[i].addEventListener("click", function () {
    const accordionContent = this.nextElementSibling;
    for (let j = 0; j < itemsLength; j++) {
      if (i == j) {
        continue;
      }
      accordionHeaders[j].parentNode.classList.remove("active");
      accordionHeaders[j].nextElementSibling.style.maxHeight = null;
    }
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      this.parentNode.classList.remove("active");
    } else {
      this.parentNode.classList.add("active");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}

// many active at a time

// for (let i = 0; i < itemsLength; i++) {
//   accordionHeaders[i].addEventListener("click", function () {
//     const accordionContent = this.nextElementSibling;
//     this.parentNode.classList.toggle("active");
    
//     if (accordionContent.style.maxHeight) {
//       accordionContent.style.maxHeight = null;
//     } else {
//       accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
//     }
//   });
// }