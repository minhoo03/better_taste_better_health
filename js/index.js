
$(document).ready(function(){
    $(".wrapper").smoothWheel()
});

let intro_des_img_img = $('.intro_des_img_img')
let slideImg = $('.slide img')
let wrapper = document.getElementsByClassName('wrapper')[0]

let intro_des_img = $('.intro_des_img')
let intro_des_img_height = intro_des_img.height() // 박스 크기
let intro_des_img_offset_top = intro_des_img.offset().top // 박스 위치
let wrapper_scroll_top  // 현재 스크롤
let intro_des_img_scroll


console.log('박스 크기',intro_des_img_height)
console.log('박스 위치',intro_des_img_offset_top)

wrapper.addEventListener("scroll" , function() {
    wrapper_scroll_top = $(wrapper).scrollTop() // 현재 스크롤
    intro_des_img_scroll = wrapper_scroll_top - (intro_des_img_offset_top - intro_des_img_height) // 현재스크롤 - 박스위치 ( -100px -> 0px)

    // console.log('wrapper_scroll_top',wrapper_scroll_top)
    // console.log(wrapper_scroll_top - (intro_des_img_offset_top - intro_des_img_height))

    slideImg.css({
        'transform': `translate(0px,${wrapper_scroll_top/4}px)`
    })

    intro_des_img_img.css({
        'transform': `translate(0px,${intro_des_img_scroll/12}px)`
    })
    
})