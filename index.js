const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

});




const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      426: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
  },

});




var swiper = new Swiper(".mySwiper", {
  
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    426: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },

});


  const myswiper = new Swiper('.myswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        426: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    },

    // autoplay: {
    //     delay: 5000,
    // },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-myswiper',
      clickable: true,
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });



  const myswiper2 = new Swiper('.myswiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        426: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    },

    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-myswiper2',
      clickable: true,
      type: 'bullets',
    },
  
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });

  