// 패럴랙스 효과
window.addEventListener("scroll",doScroll); // window내에 scroll이벤트 발생시 doScroll함수 호출

function doScroll(){ // doScroll함수 생성(패럴랙스효과 생성)
  // 스크롤 이동값을 변수에 할당
  var scrollMove = window.scrollY;

  // article의 높이값(padding 포함)을 변수에 할당
  var ht = document.querySelector("article").offsetHeight;
  //console.log(ht)

  // 모든 article요소를 선택
  var articles = document.querySelectorAll("article");

  articles.forEach((el) => { // forEach문으로 article요소를 순회하면서 함수를 실행 매개변수 el로 순회하는 article요소를 전달받음
    // 해당 순번의 article요소의 y축 절대 좌표값을 thisTop변수에 할당
    var thisTop = scrollMove + el.getBoundingClientRect().top;

    // 각 변수에 thisTop에 article의 높이값을 뺀 값과 더한 값을 할당 (각 요소에 스크롤 이벤트가 발생할 범위)
    var start = thisTop - ht;
    var end = thisTop + ht;

    // 스크롤 이동값이 start변수 값보다 크고 end값보다 작거나 같을때
    if(scrollMove > start && scrollMove <= end){
      // 변수에 스크롤 이동값에서 start변수 값을 뺀 값을 할당
      var value = scrollMove - start;

      // 해당 순번의 article의 자손인 이미지 요소를 선택하여 bottom속성값을 value변수로 설정 이때 이미지를 아래로 이동시키기 위해서 -부호를 적용하고 value값에서 3을 나누어 스크롤 이동값보다 작은값으로 이동하도록 설정
      el.querySelector("img").style.bottom = -(value/3)+"px";
    }
  })
}
doScroll(); // doScroll함수 호출

// cursor effect요소가 마우스를 따라 움직이는 효과
// cursor_effect요소 선택
var cursorEffect = document.querySelector(".cursor_effect");
// 문서내에 마우스 무브 이벤트 생성
document.documentElement.addEventListener("mousemove",function(e){
  // 각 변수에 스크롤 이동값을 제외한 마우스 X,Y축 위치값을 할당
  var posX = e.clientX;
  var posY = e.clientY;
  // .cursor_effect요소의 transform:translate 속성값으로 변수값을 적용하여 cursor_effect요소와 마우스의 위치값을 연동
  cursorEffect.style.transform = `translate(${posX}px,${posY}px)`;
});

// a요소에 마우스를 올리면 커서 이펙트가 커지는 효과
// 모든 a요소를 선택
var anchors = document.querySelectorAll("a");

// a요소에 마우스를 올려 놓으면 cursorEffect요소에 on클래스를 추가하는 구문
anchors.forEach(anchor => anchor.addEventListener("mouseover",() => {
  cursorEffect.classList.add("on");
}))
// a요소에서 마우스가 떠나면 cursorEffect요소에 on클래스를 제거하는 구문
anchors.forEach(anchor => anchor.addEventListener("mouseout",() => {
  cursorEffect.classList.remove("on");
}));

// 마우스를 클릭했을때 cursor_effect에 적용할 효과(클릭하면 커서이펙트가 작아지는 효과)
// .cursor_icon요소 선택
var cursorIcon = document.querySelector(".cursor_icon");

// 마우스 버튼을 누르고 있을때 cursorIcon요소에 active클래스 추가
document.documentElement.addEventListener("mousedown",() => {
  cursorIcon.classList.add("active");
});
// 마우스 버튼을 땠을때 cursorIcon요소에 active클래스 제거
document.documentElement.addEventListener("mouseup",() => {
  cursorIcon.classList.remove("active");
});