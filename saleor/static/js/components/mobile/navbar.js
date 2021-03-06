const $toogleIcon = $('.navbar__brand__menu-toggle');
const $mobileNav = $('nav');

const renderLoginBar = () => {
  const $desktopLinkBar = $('.navbar__login');
  const $mobileLinkBar = $('.navbar__menu__login');
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    const $desktopLinks = $desktopLinkBar.find('a');
    if ($desktopLinks.length) {
      $mobileNav.append('<ul class="nav navbar-nav navbar__menu__login"></ul>');
      $desktopLinks
        .appendTo('.navbar__menu__login')
        .wrap('<li class="nav-item login-item"></li>')
        .addClass('nav-link');
      $desktopLinkBar
        .find('li')
        .remove();
    }
  } else {
    const $mobileLinks = $mobileLinkBar.find('a');
    if ($mobileLinks.length) {
      $mobileLinks
        .appendTo('.navbar__login ul')
        .wrap('<li></li>')
        .removeClass('nav-link');
      $mobileLinkBar.remove();
    }
  }
};

// -----

renderLoginBar();
$toogleIcon
  .on('click', (e) => {
    $mobileNav.toggleClass('open');
    e.stopPropagation();
  });
$(document)
  .on('click', () => $mobileNav.removeClass('open'));
$(window)
  .on('resize', renderLoginBar);
