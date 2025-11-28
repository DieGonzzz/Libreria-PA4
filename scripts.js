$(function(){
  setInterval(function(){
    var $current=$('.banner-img.active');
    var $next=$current.next('.banner-img');
    if(!$next.length){
      $next=$('.banner-img').first();
    }
    $current.removeClass('active');
    $next.addClass('active');
  },3000);
  $('#contactForm').on('submit',function(e){
    e.preventDefault();
    var name=$(this).find('input[name="name"]').val();
    var email=$(this).find('input[name="email"]').val();
    $('#formMessage').text('Gracias '+name+'. Hemos recibido tu mensaje y contactaremos al correo '+email+'.');
    $(this).trigger('reset');
  });
});