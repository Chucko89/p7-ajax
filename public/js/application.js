$(document).ready(function(){
  $('#get_color').on('click', function(e){
  e.preventDefault();
  $.ajax({
  	url: '/color',
  	type: 'post'
    }).done(function(server_response){
    	$('li:nth-child('+server_response.cell+')').css('background-color', server_response.color)
    });
  });
});