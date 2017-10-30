// ABRIR DIV DO MENU
$(document).ready(function() {
    var id_servico;
    var id_lista;
    var lista_fechada = true;
    var servico_fechado = true;

    $('#navbar ul li').click(function() {
        if (lista_fechada) {
            id_lista = $(this).attr('id');
            $('#navbar ul #' + id_lista + ' i').addClass('menu-ativo-i');
            $('#navbar ul #' + id_lista).addClass('menu-ativo-li');
            lista_fechada = false;
        }
    });

    $('#navbar a').click(function() {
        if (servico_fechado) {
            id_servico = $(this).attr('href');
            $(id_servico).css('display', 'block');
            servico_fechado = false;
        } else {
            alert('Feche o serviço atual');
        }
    });

    $('.btn-fechar').click(function() {
        $(id_servico).css('display', 'none');
        $('#navbar ul #' + id_lista + ' i').removeClass('menu-ativo-i');
        $('#navbar ul #' + id_lista).removeClass('menu-ativo-li');
        servico_fechado = true;
        lista_fechada = true;
        console.log(id_servico);
        limpa();
    });
});

// CONTADOR DE QUANTIDADE
$('.btn-plus').click(function() {
    if ($(this).prev().val() < 10) {
        $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.btn-min').click(function() {
    if ($(this).next().val() > 0) {
        if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
    }
});


function limpa(){
    // var elemento = document.getElementsByClassName('teste');
    // for(var i = 0; i < elemento.length; i++){
    //     document.getElementById(elemento[i].id).value = "";
    //     console.log(elemento[i].id);
    // }
    var elementos = document.getElementsByTagName('input');
    for(var i = 0; i < elementos.length; i++){
        if(elementos[i].type == "text"){
            elementos[i].value = "";
            if(elementos[i].id = "sushi-salmao"){
                elementos[i].value = "";
            }
         }else if(elementos[i].type == "radio"){
             elementos[i].checked = false;
         }
    }
}

// CALCULO DE VALOR TOTAL
function calculo(label, id, valor) {
    label = $(label).attr('id');
    id = $(id).attr('id');

    unidade = parseInt(document.getElementById(id).value) + 1;
    valor = parseFloat(valor);
    if (unidade <= 10) {
        document.getElementById(label).innerHTML = 'R$ ' + (valor * unidade).toFixed(2);
    }

    unidade = unidade + 1;
}

function calculoMin(label, id, valor) {
    label = $(label).attr('id');
    id = $(id).attr('id');

    if (document.getElementById(id).value > 0) {
        unidade = parseInt(document.getElementById(id).value) - 1;
        valor = parseFloat(valor);
        document.getElementById(label).innerHTML = 'R$ ' + (valor * unidade).toFixed(2);
    }
}
