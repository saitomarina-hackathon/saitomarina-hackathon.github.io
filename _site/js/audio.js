var play_src = "";
$('.music').click(function(){
  $('audio').each(function(key, audio){
    audio.pause();
  });
  var audio_element = $(this).find('audio');
  audio_element[0].play();
  if (play_src == audio_element.attr('src')) {
    audio_element[0].pause();
    play_src = "";
  }
  play_src = audio_element.attr('src');
});
