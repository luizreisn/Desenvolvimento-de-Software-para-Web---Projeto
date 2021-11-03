$(function(){
    $('#valor1').hide();
    $('#but1').click(function(){
        $('#valor1').toggle(500);
        if($('#but1').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but1').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but1').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
    });

    $('#valor2').hide();
    $('#but2').click(function(){
        $('#valor2').toggle(500);
        if($('#but2').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but2').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but2').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
    });

    $('#valor3').hide();
    $('#but3').click(function(){
        $('#valor3').toggle(500);
        if($('#but3').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but3').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but3').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
    });

    $('#valor4').hide();
    $('#but4').click(function(){
        $('#valor4').toggle(500);
        if($('#but4').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but4').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but4').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
    });

    $('#valor5').hide();
    $('#but5').click(function(){
        $('#valor5').toggle(500);
        if($('#but5').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but5').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but5').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
    });
});