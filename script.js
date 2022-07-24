const searchForm = document.querySelector(".search-form");
const searchButon = document.querySelector("#search-btn");
const shopBtn = document.querySelector("#shop-btn");
const menuBtn = document.querySelector("#menu-btn");
const cartItemForm = document.querySelector(".cart-items-container");
const navBar = document.querySelector(".navbar");
const yukariBtn = document.getElementsByClassName("yukaricik")[0];

//arama paneli
searchButon.addEventListener("click" , function(){
    searchForm.classList.add("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchButon) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove("active");
        }
    });
});

//shop karti
shopBtn.addEventListener("click" , function(){
    cartItemForm.classList.add("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(shopBtn) && !e.composedPath().includes(cartItemForm) ){
            cartItemForm.classList.remove("active");
        }
    });
});

//mobil acilan menu
menuBtn.addEventListener("click" , function(){
    navBar.classList.add("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navBar) ){
            navBar.classList.remove("active");
        }
    });
});

//yukari cik butonu
window.addEventListener("scroll" , function(){
    const mesafe = window.scrollY;
    console.log("mesafe"  +mesafe);
    if(mesafe > 300){
        yukariBtn.classList.add("goster");
    }else{
        yukariBtn.classList.remove("goster");
    }
});

yukariBtn.addEventListener("click", function(){
    window.scrollTo(0,0) ;
    yukariBtn.classList.remove("goster");
})

