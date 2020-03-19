var menuItems = $(".menu-item"); // string으로 선언해야됨
var menuLinks = $(".menu-link");
var subLinks = $(".submenu a");

subLinks.attr("class", "icon-dot-circled"); // attribute

menuLinks.click(function(e) {
  // 파라미터e값은 click event를 기억할
  e.preventDefault(); //a 의 기본이벤트가 발생 href # 때문에
  menuItems.removeClass("menu-item-act");
  $(this)
    .parent()
    .addClass("menu-item-act"); //나의 부모를 찾아감 클래스 추가 JQ에서만 지원
});
