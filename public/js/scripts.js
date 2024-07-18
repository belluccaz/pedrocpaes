$(document).ready(function () {
  $('#mobile-menu').click(function () {
    $(this).toggleClass('is-active');
    $('.nav-list').toggleClass('active');
  });

  // Animação para os itens do portfólio
  $(window).on('scroll', function () {
    $('.project-item').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
        $(this).addClass('animate');
      }
    });
  });

  // Ajustar vídeo responsivo
  function resizeVideo() {
    var videoContainer = $('.video-container');
    var video = $('#background-video');

    var containerWidth = videoContainer.width();
    var containerHeight = videoContainer.height();

    var videoWidth = video[0].videoWidth;
    var videoHeight = video[0].videoHeight;

    var containerRatio = containerWidth / containerHeight;
    var videoRatio = videoWidth / videoHeight;

    if (containerRatio > videoRatio) {
      video.css({
        width: '100%',
        height: 'auto'
      });
    } else {
      video.css({
        width: 'auto',
        height: '100%'
      });
    }
  }

  $(window).on('resize', resizeVideo);
  resizeVideo();
});
