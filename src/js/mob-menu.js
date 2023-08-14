(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
  const isOpen = !refs.menu.classList.contains("is-hidden");

  if (isOpen) {
    refs.menu.style.left = "-900px"; 
    document.body.classList.remove("no-scroll");
  } else {
    refs.menu.style.left = "0"; 
    document.body.classList.add("no-scroll");
  }

  refs.menu.classList.toggle("is-hidden");
}
  })();
  