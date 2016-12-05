/*Custom*/
var $coverImg = $('.cover-img');

function checkResponsive() {
  if(window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches){ //Mobile
    $coverImg.attr('src', 'images/headermovil.jpg');
  }else if(window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches){ //Tablet
    $coverImg.attr('src', 'images/header.jpg');
  }else{ //Laptop
    $coverImg.attr('src', 'images/header.jpg');
  }
}

$(window).resize(checkResponsive);
checkResponsive();
/*End Custom*/

function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

include('js/jquery.cookie.js');
include('js/jquery.easing.1.3.js');


/**
 * @function      Include
 * @description   Lazy script initialization
 */
function lazyInit(element, func) {
    var $win = jQuery(window),
        wh = $win.height();

    $win.on('load scroll', function () {
        var st = $(this).scrollTop();
        if (!element.hasClass('lazy-loaded')) {
            var et = element.offset().top,
                eb = element.offset().top + element.outerHeight();
            if (st + wh > et - 100 && st < eb + 100) {
                func.call();
                element.addClass('lazy-loaded');
            }
        }
    });
}

/**
 * @module       RD Mailform
 * @description  Enables RD Mailform Plugin
 */
;
(function ($) {
    var o = $('.rd-mailform');
    if (o.length > 0) {
        include('js/mailform/jquery.form.min.js');
        include('js/mailform/jquery.rd-mailform.min.js');
        $(document).ready(function () {
            var o = $('.rd-mailform');

            if (o.length) {
                o.rdMailForm({
                    validator: {
                        'constraints': {
                            '@LettersOnly': {
                                message: 'Por favor introduce letras solamente!'
                            },
                            '@NumbersOnly': {
                                message: 'Por favor introduce números solamente!'
                            },
                            '@NotEmpty': {
                                message: 'Este campo no puede estar vacío!'
                            },
                            '@Email': {
                                message: 'Introduce un e-mail válido!'
                            },
                            '@Phone': {
                                message: 'Introduce un número de teléfono válido!'
                            },
                            '@Date': {
                                message: 'Usa el formato MM/DD/AAAA para la fecha!'
                            },
                            '@SelectRequired': {
                                message: 'Por favor selecciona una opción!'
                            }
                        }
                    }
                }, {
                    'MF000': 'Enviado',
                    'MF001': 'No se han definido destinatarios!',
                    'MF002': 'El formulario no funciona de manera local!',
                    'MF003': 'Por favor, define un campo "e-mail" en el formulario!',
                    'MF004': 'Por favor, define el tipo de formulario!',
                    'MF254': 'Algo salió mal al ejecutar PHPMailer!',
                    'MF255': 'Ooops! Ocurrió un error.'
                });
            }
        });
    }
})(jQuery);
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa-angle-up'
            });
        });
    }
})(jQuery);


/**
 * @module       RD Google Map
 * @description  Enables RD Google Map Plugin
 */
;
(function ($) {
    var o = $('#google-map');

    if (o.length) {
        include('//maps.google.com/maps/api/js?key=AIzaSyDP5m9uNisBBkIZBa8uUGrtiqXQ5O3RshU');
        include('js/jquery.rd-google-map.js');
        $(document).ready(function () {
            var head = document.getElementsByTagName('head')[0],
                insertBefore = head.insertBefore;

            head.insertBefore = function (newElement, referenceElement) {
                if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') != -1 || newElement.innerHTML.indexOf('gm-style') != -1) {
                    return;
                }
                insertBefore.call(head, newElement, referenceElement);
            };

            lazyInit(o, function () {
                o.googleMap({
                    styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e9e5dc"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"color":"#89cada"}]}]
                });
            });
        });
    }
})(jQuery);
