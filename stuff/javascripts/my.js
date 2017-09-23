$(document).ready(function(){
  $(".testButton").on("click", function(){
      $.ajax({
        type: 'GET',
          dataType: 'json',
          url: '/blah',
          success: function(data) {
            $('body').append("<p>"+data+"</p>");
          },
          error: function(xhr, status, err) {
            console.warn(xhr.responseText);
            console.error("please check your console for errors " + status + ' ' + err);
          }
      });
  });
});
