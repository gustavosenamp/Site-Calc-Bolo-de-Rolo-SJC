function limpar() {
    $("table tbody").each(function() {
        $(this).find("tr:not(:first)").remove();
      });
    TotalB = 0;
    TotalM = 0;
    FormasTotalFG = 0;
    FormasTotalFP = 0;
  }

FormasTotalFG = 0;
FormasTotalFP = 0;

function adicionarLinha() {
    var peso = $('#peso').val();
    var quantidade = $('#quantidade').val();
    if (quantidade <= 0) {
        alert('Erro! A quantidade deve ser maior que zero.');
        return;
      }
    var sabor = $('#sabor').val();
    var fator = fatorForma(peso);
    quantidadeformas = quantidade * fator;
    numeroArredondado = Math.ceil(quantidadeformas)


    var tabela;
    
    if (peso === "500") {
      tabela = $("#Tabela500");
      FormasTotalFG += numeroArredondado;
    } else if (peso === "350") {
      tabela = $("#Tabela350");
      FormasTotalFG += numeroArredondado;
    } else if (peso === "250") {
      tabela = $("#Tabela250");
      FormasTotalFP += numeroArredondado;
    } else if (peso === "70") {
      tabela = $("#Tabela70");
      FormasTotalFP += numeroArredondado;
    }else{
        window.alert("Erro! Ainda não temos peso maiores")
    }

    if (tabela) {
      var newRow = $("<tr></tr>");
      var cell1 = $("<td class='td'></td>").append(`<input type='text' id='borda' class='edit' value='${quantidade}' readonly>`);
      var cell2 = $("<td class='td'></td>").append(`<input type='text' id='borda' class='edit' value='${sabor}' readonly>`);
      var cell3 = $("<td class='td'></td>").append(`<input type='text' id='borda' class='edit' value='${numeroArredondado}' readonly>`);
  
      newRow.append(cell1, cell2, cell3);
      tabela.append(newRow);
    }
  }

  function alternarEdicao() {
    var camposInput = document.querySelectorAll('.edit');
    const buttonEdit = document.getElementsByClassName('btn btb-danger');
    const editChange = document.getElementById('edit');

    camposInput.forEach(function (input) {
      input.readOnly = !input.readOnly;
    });

    buttonEdit.toggleClass("btn btn-sucess");
    editChange.toggleClass("edit2");
  }

  function calcTotal(){
    TotalF = FormasTotalFG + FormasTotalFP;
    TotalB = FormasTotalFP / 4 + FormasTotalFG / 2;
    TotalM = Math.ceil(TotalB/4);
    var tabela = $("#TabelaFinal");
    var newRow = $("<tr></tr>");
      var cell1 = $("<td class='tdf'></td>").append(`<input type='text' class='edit' value='${FormasTotalFG}' readonly>`);
      var cell2 = $("<td class='tdf'></td>").append(`<input type='text' class='edit' value='${FormasTotalFP}' readonly>`);
      var cell3 = $("<td class='tdf'></td>").append(`<input type='text' class='edit' value='' readonly>`);
      var cell4 = $("<td class='tdf'></td>").append(`<input type='text' class='edit' value='' readonly>`);
      var cell5 = $("<td class='tdf'></td>").append(`<input type='text' class='edit' value='${TotalB}' readonly>`);
      var cell6 = $("<td class='tdf'></td>").append(`<input type='text' class='edit' value='${TotalM}' readonly>`);

      newRow.append(cell1, cell2, cell3, cell4, cell5, cell6);
      tabela.append(newRow);

  }

  function imprimir(){
    var tabela = document.getElementById("tabelaContainer").innerHTML;
    var janelaImprimir = window.open('', '', 'width=800,height=600');
    janelaImprimir.document.write('<html><head><title>Imprimir Tabela</title></head><body>');
    janelaImprimir.document.write('<style>@media print { table { width: 100%; border-collapse: collapse; table-layout: fixed; background-color: #ffffff; margin-bottom: 5px;} .L, .LF, .td, .tdf { border: 1px solid #000000; padding: 8px; } }</style>');
    janelaImprimir.document.write(tabela);
    janelaImprimir.document.write('</body></html>');
    janelaImprimir.document.close();
    janelaImprimir.print();
  }

  function fatorForma(peso){
    var fator = 0.0;
    switch (peso) {
      case "3000":
        fator = 18.0;
        break;
      case "2500":
        fator = 24.0;
        break;
      case "1500":
        fator = 22.0;
        break;
      case "1000":
        fator = 14.0;
        break;
      case "650":
        fator = 7.0;
        break;
      case "500":
        fator = 2.0;
        break;
      case '350':
        fator = 1.33;
        break;
      case '250':
        fator = 2.0;
        break;
      case '70':
        fator = 0.5;
        break;
    }
    return fator;
  }

  var pesoSelect = document.getElementById("peso");
  var formaSelect = document.getElementById("tipoForma");

  pesoSelect.addEventListener("change", function() {
    var selectedPeso = pesoSelect.value;
    if (selectedPeso === "3000") {
      formaSelect.value = "FR27";
      formaSelect.disabled = true;
    } else if (selectedPeso === "2500") {
      formaSelect.value = "FR27";
      formaSelect.disabled = true;
    } else if (selectedPeso === "1500") {
      formaSelect.value = "FR23";
      formaSelect.disabled = true;
    } else if (selectedPeso === "1000") {
      formaSelect.value = "FR23";
      formaSelect.disabled = true;
    }else if (selectedPeso === "650") {
      formaSelect.value = "FP";
      formaSelect.disabled = true;
    }else if (selectedPeso === "500") {
      formaSelect.value = "FG";
      formaSelect.disabled = true;
    }else if (selectedPeso === "350") {
      formaSelect.value = "FG";
      formaSelect.disabled = true;
    }else if (selectedPeso === "250") {
        formaSelect.value = "FP";
        formaSelect.disabled = true;
    }else if (selectedPeso === "70") {
        formaSelect.value = "FP";
        formaSelect.disabled = true;
    }else{
      formaSelect.disabled = false;
    }
  });

 
