
$(document).ready(function(){
    $(".wrapper").smoothWheel()
});

let intro_des_img_img = $('.intro_des_img_img')

let wrapper = document.getElementsByClassName('wrapper')[0]

let intro_des_img = $('.intro_des_img')
let intro_des_img_height = intro_des_img.height() // 박스 크기
let intro_des_img_offset_top = intro_des_img.offset().top // 박스 위치
let wrapper_scroll_top  // 현재 스크롤


console.log('intro_des_img.height()',intro_des_img.height())
console.log('intro_des_img.offset.top',intro_des_img.offset().top)

wrapper.addEventListener("scroll" , function() {
    wrapper_scroll_top = $(wrapper).scrollTop() // 현재 스크롤
    console.log(wrapper_scroll_top)
    intro_des_img_img.css({
        'transform': `translate(0px,${wrapper_scroll_top/15}px)`
    })
})