(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const isOpen = !refs.menu.classList.contains('is-hidden');

    if (isOpen) {
      refs.menu.style.left = '-900px';
      document.body.classList.remove('no-scroll');
    } else {
      refs.menu.style.left = '0';
      document.body.classList.add('no-scroll');
    }

    refs.menu.classList.toggle('is-hidden');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const mobMenuOpenButtons = document.querySelectorAll('[data-menu-open]');
  const mobMenuCloseButtons = document.querySelectorAll('[data-menu-close]');
  const mobMenu = document.querySelector('[data-menu]');

  mobMenuOpenButtons.forEach(button => {
    button.addEventListener('click', function () {
      mobMenu.classList.remove('is-hidden');
    });
  });

  mobMenuCloseButtons.forEach(button => {
    button.addEventListener('click', function () {
      mobMenu.classList.add('is-hidden');
    });
  });

  const anchorLinks = document.querySelectorAll('.mob-menu-item a');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobMenu.classList.add('is-hidden');
    });
  });
});
