(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=document.querySelector(".mobile-menu");const d=()=>{e.classList.toggle("is-open"),document.body.classList.toggle("modal-open")};o.addEventListener("click",d),t.addEventListener("click",d),n.addEventListener("click",(function(){e.classList.remove("is-open"),document.body.classList.remove("modal-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),openMobileBtn:document.querySelector("[data-mobile-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.openMobileBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();new Swiper(".my-swiper",{autoplay:{delay:5e3},speed:1e3,loop:!0,spaceBetween:50}),new Swiper(".my-swiper-review",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});(()=>{const e={openOneBtn:document.querySelector("[data-one-open]"),openTwoBtn:document.querySelector("[data-two-open]"),openThreelBtn:document.querySelector("[data-three-open]"),closeModalBtn:document.querySelector("[data-product-close]"),modal:document.querySelector("[data-product]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openOneBtn.addEventListener("click",o),e.openTwoBtn.addEventListener("click",o),e.openThreelBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-cow-open]"),closeModalBtn:document.querySelector("[data-cow-close]"),modal:document.querySelector("[data-modal-cow]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.a88921c4.js.map
