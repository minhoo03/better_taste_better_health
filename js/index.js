
$(document).ready(function(){
    $(".wrapper").smoothWheel()
});


let slideImg = $('.slide img')
let wrapper = document.getElementsByClassName('wrapper')[0]

let intro_des_img = $('.intro_des_img') // 1
let intro_des_img_height = intro_des_img.height() // 1 박스 크기
let intro_des_img_offset_top = intro_des_img.offset().top // 1 박스 위치
let intro_des_img_img = $('.intro_des_img_img') // 1 img

let about_img = $('.about_img') // 2
let about_img_height = about_img.height() // 2 박스 크기
let about_img_offset_top = about_img.offset().top // 2 박스 위치
let about_img_img = $('.about_img_img') // 2 img

let main_recipe = $('.main_recipe') // 3
let main_recipe_height = main_recipe.height()
let main_recipe_offset_top = main_recipe.offset().top
let main_recipe_best_recipe = $('.best_recipe')

let wrapper_scroll_top  // 현재 스크롤

let intro_des_img_scroll // 1 이미지 계산식
let about_img_scroll // 2 이미지 계산식


console.log('박스 크기',intro_des_img_height)
console.log('박스 위치',intro_des_img_offset_top)

wrapper.addEventListener("scroll" , function() {
    wrapper_scroll_top = $(wrapper).scrollTop() // 현재 스크롤
    intro_des_img_scroll = wrapper_scroll_top - (intro_des_img_offset_top - intro_des_img_height) -800 // 현재스크롤 - 박스위치 ( -100px -> 0px)
    about_img_scroll = wrapper_scroll_top - (about_img_offset_top - about_img_height) -800 // 현재스크롤 - 박스위치 ( -100px -> 0px)
    main_recipe_scroll = wrapper_scroll_top - (main_recipe_offset_top - main_recipe_height) -800 // 현재스크롤 - 박스위치 ( -100px -> 0px)

    slideImg.css({
        'transform': `translate(0px,${wrapper_scroll_top/4}px)`
    })

    intro_des_img_img.css({
        'transform': `translate(0px,${intro_des_img_scroll/8}px)`
    })

    about_img_img.css({
        'transform': `translate(0px, ${about_img_scroll/8}px)`
    })
    
    main_recipe_best_recipe.css({
        'transform': `translate(0px, ${-main_recipe_scroll/4}px)`
    })
})