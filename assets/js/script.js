$('#hamburger').click(() => {
  document.getElementById('sidebar_toggle').classList.toggle('open');
  document.getElementById('sidebar').classList.toggle('open');
});

// var count = 1, prev;

// $('#prevBtn').click(() => {
//   prev = count;
//   if (count == 1) {
//     count = 3;
//   } else {
//     count--;
//   }
//   slideFn();
// });

// $('#nxtBtn').click(() => {
//   prev = count
//   if (count == 3) {
//     count = 1;
//   } else {
//     count++;
//   }
//   slideFn();
// });

// slideFn = () => {
//   // document.getElementById('count').innerHTML = `${count+1} ` ;
//   // document.getElementById(`img_slider${prev}`).classList.toggle('active');
//   // document.getElementById(`img_slider${count}`).classList.toggle('active');
//   document.getElementById('pj_slider_wrapper').style.transform = `translate3d(${-630 * count}px,0px,0px)`;
// }

window.addEventListener('scroll',()=>{
    if (document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').style.boxShadow = 'rgba(0, 0, 0, 0.16) -2px 1px 3px';
        document.getElementById('navbar').style.backgroundColor = '#000';
    }else{
        document.getElementById('navbar').style.boxShadow = 'none';
        document.getElementById('navbar').style.backgroundColor = 'transparent';

    }
})


jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('.testimonial-owl-carousel').owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1170: {
        items: 3
      }
    }
  });
});

jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('.client-owl-carousel').owlCarousel({
    loop: true,
    center: true,
    items: 6,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 3
      },
      1170: {
        items: 6
      }
    }
  });
});