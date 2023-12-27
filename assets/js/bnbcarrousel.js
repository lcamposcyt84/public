$(document).ready(function(){
  $('.carousel').slick({
      slidesToShow: 3, // Cambia el número de miniaturas a mostrar a tu preferencia
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Velocidad de reproducción automática en milisegundos
      arrows: false, // Oculta las flechas de navegación si lo deseas
  });
});
