
$(document).ready(function () {

  //----Modal------
  $("#accordion").accordion({
    heightStyle: "content",
    icons: false

  });
  //-----------------

  //---dpDown--------
  $("#behaviour").selectmenu({
    select: function (event, option) {
      if (option.item.index === 1) {
        document.location.href = "/ultimatum/empatia";
      }
      else if (option.item.index === 2) {
        document.location.href = "/ultimatum/despeito";
      }
    }
  });
  //-------------------

});
