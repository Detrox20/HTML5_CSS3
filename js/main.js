var menuItems = $(".menu-item");
var menuLinks = $(".menu-link");
var subLinks = $(".submenu a");
var sections = $(".board section");
var boardItems = $(".board li");
var tab = $(".tab");

subLinks.attr("class", "icon-dot-circled");
boardItems.attr("class", "icon-dot-circled");

menuLinks.click(function(e) {
  e.preventDefault();
  menuItems.removeClass("menu-item-act");
  $(this)
    .parent()
    .addClass("menu-item-act");
});

tab.click(function(e) {
  e.preventDefault();
  sections.removeClass("board-act");
  $(this)
    .parent()
    .parent()
    .addClass("board-act");
});
