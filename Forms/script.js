

$(document).ready(function(){
 
 $('#button').click(function(){
    $('#output').text(function(n){
       return $("#txt1").val();
    }); 
    
    $('#txt1').val("");
   });
  });

  