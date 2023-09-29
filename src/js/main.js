// import { Fancybox } from "@fancyapps/ui";
import $ from "jquery";
import mask from "jquery-mask-plugin";
import Parsley from "parsleyjs";

let $body,
    $window,
    wWidth = 0,
    wHeight = 0,
    W_SM = 576,
    W_MD = 768,
    W_LG = 992,
    W_XL = 1200,
    LOADER_HTML =
        '<div class="overlay-loader"><div class="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';

$(function() {
  accordion();
  formScript();

  function formScript () {

    $('[type=tel]').mask('+7 (000) 000-00-00');

    Parsley
        .addValidator('ruPhone', {
            // string | number | integer | date | regexp | boolean
            requirementType: 'string',

            // validateString | validateDate | validateMultiple
            validateString: function (value, requirement) {
                let regexp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
                
                return  regexp.test(value) 
            },

            messages: {
                ru: 'Неверный формат номера',
                en: 'Invalid number format'
            }
        })
        .addValidator('personName', {
            // string | number | integer | date | regexp | boolean
            requirementType: 'string',

            // validateString | validateDate | validateMultiple
            validateString: function (value, requirement) {
                let regexp = /^[а-яА-ЯёЁa-zA-Z\ ]+$/;

                return  regexp.test(value) 
            },

            messages: {
              ru: 'Используйте только буквы',
              en: 'Use only letters'
            }
        })
        .addMessages('ru', {
            defaultMessage: "Некорректное значение.",
            type: {
                email:        "Введите правильный е-mail",
                url:          "Введите URL адрес",
                number:       "Введите число",
                integer:      "Введите целое число",
                digits:       "Введите только цифры",
                alphanum:     "Введите буквенно-цифровое значение"
            },
            notblank:       "Это поле должно быть заполнено",
            required:       "Поле обязательно для заполнения",
            pattern:        "Это значение некорректно",
            min:            "Это значение должно быть не менее чем %s",
            max:            "Это значение должно быть не более чем %s",
            range:          "Это значение должно быть от %s до %s",
            minlength:      "Это значение должно содержать не менее %s символов",
            maxlength:      "Это значение должно содержать не более %s символов",
            length:         "Это значение должно содержать от %s до %s символов",
            mincheck:       "Выберите не менее %s значений",
            maxcheck:       "Выберите не более %s значений",
            check:          "Выберите от %s до %s значений",
            equalto:        "Это значение должно совпадать"
        })
        .setLocale('ru');

    $('.js-validate').parsley({

    });


    $body.on('click touch', '.js-form-resset', function(e) {
        let form = $(this).closest('form');

        form.removeClass('is-form-sent');
        window.globalOptions.formResset(form);
    });

  }



  function accordion() {
    const accordionBtns = document.querySelectorAll(".acc__header");

    accordionBtns.forEach((accordion) => {
      accordion.onclick = function () {
        this.classList.toggle("is-open");

        let isOpen = this.classList.contains("is-open");

        let content = this.nextElementSibling;
        console.log(content);

        if (!isOpen) {
          //this is if the accordion is open
          content.style.maxHeight = null;
        } else {
          //if the accordion is currently closed
          content.style.maxHeight = content.scrollHeight + "px";
          console.log(content.style.maxHeight);
        }
      };
    });
  }
});



window.globalOptions = {
  animationDuration: 200,
  sizes: {
      xl: 1920,
      lg: 1200,
      md: 992,
      sm: 768,
      xs: 576
  },
  formResset: function(form) {
      if ( !form.length ) {
          return
      }
  
      $('.input-text input, .input-text textarea', form).each(function() {
          let input = $(this),
              wrap = input.closest('.input-text');
  
          input.val('').trigger('input');
  
          wrap.toggleClass('input-text--dirty', input.val() != '');
      });
  
      form.parsley().reset();
  
  },


  scrollToId: function(href, delay) {
      let scrollOnMenuBtn = false,
          scrollOnHeaderHide = false,
          scrollSpeed = 800;



      setTimeout(function() {
          scrollTo();
      }, delay)

      function scrollTo() {

          let targetOffset = $(href).offset().top;

          // if ( wWidth >= W_MD && scrollOnMenuBtn ) {
          //     targetOffset -= $('.side-nav__trigger-icon-line--1').offset().top - $('.header').offset().top;
          // } else if (wWidth < W_MD && !scrollOnHeaderHide) {
          //     targetOffset -= $('.header').outerHeight();
          // }

          try {
              scrollSpeed = Math.abs($window.scrollTop() - targetOffset) / Math.abs($body[0].scrollHeight) * 4000
          } catch(event) {
              console.error(event);
          }

          scrollSpeed = ( scrollSpeed < 1000 ) ? 1000 : scrollSpeed;
   
          $('html, body').animate({ scrollTop: targetOffset }, scrollSpeed);

          location.replace(href);
          
      }
  }
};