// write a function for read more button
let modal = document.getElementById("simpleModal");
const list_items = document.querySelectorAll("#simpleModal ul li");
const modalBtn = document.getElementById("Btn");
const closeBtn = document.getElementById("close");
const readmore = document.querySelectorAll(".btn-t");
const readmoreDiv = document.querySelectorAll(".btn-t ~ div");
const s = {};
// in place of s using es6
// const arr = Array.from(Array(readmoreDiv.length).keys());
// const obj = arr.reduce((obj, cur, i) => ({...obj, [i]: 0 }), {});

readmoreDiv.forEach((e, i) => {
    e.classList.add("hide");
    // hide all the readmore content by adding a css class I already create the style
    // .hide{display:'none'}   in the style.css
    s[i] = 0;
    // assing defaut value to make the switch
});
readmore.forEach((e, i) => {
    // loop through the readmore btn
    e.addEventListener("click", () => {
        if (s[i]) {
            // s[i] can be truthy value or falsy
            // s[i]==0 is false
            // s[i] >=1 is true
            readmoreDiv[i].classList.toggle("hide");
            // if the class is there already it will remove it and if it is not it will be added
            s[i] = 0;
        } else {
            // adding all the hide class to hide all the open readmore if at all you have opened any
            readmoreDiv.forEach((e) => e.classList.add("hide"));
            readmoreDiv[i].classList.toggle("hide");
            s[i] = 1;
        }
    });
});
window.addEventListener("load", hideClose);

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", clickOutside);
list_items.forEach((e) =>
    e.addEventListener("click", () => {
        modal.style.display = "none";
        modalBtn.style.display = "block";
        closeBtn.style.display = "none";
    })
);

function hideClose() {
    closeBtn.classList.add("hide");
}

function openModal() {
    modal.style.display = "block";

    closeBtn.style.display = "block";
    modalBtn.style.display = "none";
}

function closeModal() {
    modal.style.display = "none";
    closeBtn.style.display = "none";
    modalBtn.style.display = "block";
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        modalBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
}

//Back to top button
$(function() {
    var btn = $('.back-to-top');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() < 120) {
        btn.addClass('hidden');
      } else {
        btn.removeClass('hidden');
      }
    });
  });

/* Activate Wow.js */
new WOW().init();


/* Preloader */
// $(window).on( "load", function() {
// 	$(".load").fadeOut("slow");
// })
