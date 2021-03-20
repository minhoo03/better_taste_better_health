
$(document).ready(function(){
    $(".wrapper").smoothWheel()
});

let intro_des_img_img 
let wrapper


    intro_des_img_img = document.getElementsByClassName('intro_des_img_img')[0]
    wrapper = document.getElementsByClassName('wrapper')[0]



wrapper.addEventListener("scroll" , function() {
    let scrollTop = document.documentElement.scrollTop;

    intro_des_img_img.style.transform = `translate(0, ${scrollTop / 8}px)`

    console.log(scrollTop)
})