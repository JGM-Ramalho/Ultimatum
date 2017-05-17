
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {

  $(".end").hide();


  $("#slider").slider({
    //step: 5,
    range: "min",
    value: 100,

    slide: function (event, ui) {
      $("#amount").val("Seu: " + ui.value + " / " + (100 - ui.value));
    }

  });

  var delay = 0;// em milissegundos
  var lance = 2;
  var money = 0;
  var divisao = $("#slider").slider("value");
  var respostas = {};

  $("#amount").val("Seu: " + divisao + " / " + 0);
  $("#lance").val(lance - 1 + "/" + 20);
  $("#money").val(money + " €");

  if (lance == 2) {
    $(".secondSet").hide();
    $(".L2").hide();
  }

  $("#submit").click(function (event) {

    setTimeout(function () {
      divisao = $("#slider").slider("value");
      if (divisao < 35) {
        //alert("Proposta Aceite");
        console.log("ye");
        $("#lance").val((lance++) + "/" + 20);
        money += divisao;
        $("#money").val(money + " €");
        //guardar no array
        respostas["lance" + (lance - 2)] = { "divisao": divisao + "/" + (100 - divisao), "ganho": divisao, "dinheiroNoFinal": money };
        console.log(respostas);
        //reset
        $("#slider").slider("value", 100);
        divisao = $("#slider").slider("value");
        $("#amount").val("Seu: " + (divisao) + " / " + (100 - divisao));
      }
      else if ((divisao <= 50 || divisao < 35) && getRndInteger(0, 1)) {
        //alert("Proposta Aceite");
        console.log("rng");
        console.log("ye");
        $("#lance").val((lance++) + "/" + 20);
        money += divisao;
        $("#money").val(money + " €");
        //guardar no array
        respostas["lance" + (lance - 2)] = { "divisao": divisao + "/" + (100 - divisao), "ganho": divisao, "dinheiroNoFinal": money };
        console.log(respostas);
        //reset
        $("#slider").slider("value", 100);
        divisao = $("#slider").slider("value");
        $("#amount").val("Seu: " + (divisao) + " / " + (100 - divisao));
      }
      else {
        //alert("Proposta Recusada")
        console.log("nah");
        $("#lance").val((lance++) + "/" + 20);
        $("#money").val(money + " €");
        console.log(money + "€");
        respostas["lance" + (lance - 2)] = { "divisao": divisao + "/" + (100 - divisao), "ganho": 0, "dinheiroNoFinal": money };
        console.log(respostas);
        //reset
        $("#slider").slider("value", 100);
        divisao = $("#slider").slider("value");
        $("#amount").val("Seu: " + (divisao) + " / " + (100 - divisao));

      }
    }, delay);

    if (lance >= 10) {

      $("#slider").slider("disable");
      setTimeout(function () {

        console.log(respostas);
        //mudar butoes
        $("#submit").hide();
        $(".L1").hide();
        $(".secondSet").show();
        $(".L2").show();

        //dar novo valor ao slider
        $("#slider").slider("value", getRndInteger(0, 50));
        //mostrar o novo valor
        divisao = $("#slider").slider("value");
        $("#amount").val("Seu: " + divisao + " / " + (100 - divisao));

        $("#accept").click(function (event) {

          $("#lance").val((lance++) + "/" + 20);
          money += $("#slider").slider("value");
          console.log(money);
          $("#money").val(money + " €");

          respostas["lance" + (lance - 2)] = { "divisao": divisao + "/" + (100 - divisao), "ganho": divisao, "dinheiroNoFinal": money };
          console.log(respostas);
          //nova proposta
          $("#slider").slider("value", getRndInteger(0, 50));
          divisao = $("#slider").slider("value");
          $("#amount").val("Seu: " + divisao + " / " + (100 - divisao));


          if (lance == 22) {
            $(".modal").hide();
            $(".end").show();

            for (var key in respostas) {
              console.log(key);
              $(".results").append($('<tr class ="row">').append('<td>' + key + '\n' + '<td>' + respostas[key].divisao + '\n' + '<td>' + respostas[key].ganho + '\n' + '<td>' + respostas[key].dinheiroNoFinal));
            }
          }

        });

        $("#deny").click(function (event) {

          $("#lance").val((lance++) + "/" + 20);
          //guardar no array
          respostas["lance" + (lance - 2)] = { "divisao": divisao + "/" + (100 - divisao), "ganho": 0, "dinheiroNoFinal": money };
          console.log(respostas);
          //novo valor
          $("#slider").slider("value", getRndInteger(0, 50));
          divisao = $("#slider").slider("value");
          $("#amount").val("Seu: " + divisao + " / " + (100 - divisao));
          console.log(money);


          if (lance == 22) {
            $(".modal").hide();
            $(".end").show();

            for (var key in respostas) {
              console.log(key);
              $(".results").append($('<tr class ="row">').append('<td>' + key + '\n' + '<td>' + respostas[key].divisao + '\n' + '<td>' + respostas[key].ganho + '\n' + '<td>' + respostas[key].dinheiroNoFinal));
            }
          }
        });

      }, delay);
    }


  });

});
