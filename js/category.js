$(document).ready(function () {
  $(".cate-btn").click(() => {
    // 카테고리 열림/닫힘
    $(".category").toggleClass("open");
    // 카테고리 라인 close버튼 애니메이션
    $(".cate-btn span").toggleClass("toggle");

    // 카테고리 메뉴 등장 애니메이션
    let menus = $(".menu li").length;

    for(let i = 0; i < menus; i++) {
      $(".menu li").eq(i).delay(i * 200).animate({"left": 0, "opacity": 1}, 1000, "easeOutBack");
    };
    
  });
});