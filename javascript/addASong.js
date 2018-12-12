//var artistInput = $('.new-writer').clone();

//$('.add-writer').click(function(){
 //  console.log($(this));
  // $("#new-writer").clone().appendTo($("#writer-block"));
// });

 //document.getElementsByClassName("btn btn-primary add-writer").onclick = function() {
    //alert("button was clicked");
// }​;​
 // remove the var input and add back the clone function to the appendto.

 $('#sendInfo').click(function(event){
     event.preventDefault();
     var nameInput = $('#nameInput').val();
     var writerPercent = $('#writerPercent').val();
     console.log(nameInput,writerPercent);
 });
 
