
$(document).ready(function() {
  $(this).click(function() {

  });
});

function myFunction(id){
  var id = "#".concat(id);
  var idDefinition = id+"-definition";
  $(id).toggle("slideDown");
  $(idDefinition).toggle("slideDown");
}
