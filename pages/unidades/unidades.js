$(function(){
    $('.navbar2 a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top,
            menuHeight = $('#menuh').innerHeight() + $('.navbar').innerHeight();
        $('html, body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
    });

    $('#desc1').hide();
    $('#but1').click(function(){
        $('#desc1').toggle(500);
        if($('#but1').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but1').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but1').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc2').hide();
    $('#but2').click(function(){
        $('#desc2').toggle(500);
        if($('#but2').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but2').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but2').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc3').hide();
    $('#but3').click(function(){
        $('#desc3').toggle(500);
        if($('#but3').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but3').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but3').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc4').hide();
    $('#but4').click(function(){
        $('#desc4').toggle(500);
        if($('#but4').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but4').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but4').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc5').hide();
    $('#but5').click(function(){
        $('#desc5').toggle(500);
        if($('#but5').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but5').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but5').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc6').hide();
    $('#but6').click(function(){
        $('#desc6').toggle(500);
        if($('#but6').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but6').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but6').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc7').hide();
    $('#but7').click(function(){
        $('#desc7').toggle(500);
        if($('#but7').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but7').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but7').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc8').hide();
    $('#but8').click(function(){
        $('#desc8').toggle(500);
        if($('#but8').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but8').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but8').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc9').hide();
    $('#but9').click(function(){
        $('#desc9').toggle(500);
        if($('#but9').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but9').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but9').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc10').hide();
    $('#but10').click(function(){
        $('#desc10').toggle(500);
        if($('#but10').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but10').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but10').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc11').hide();
    $('#but11').click(function(){
        $('#desc11').toggle(500);
        if($('#but11').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but11').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but11').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });

    $('#desc12').hide();
    $('#but12').click(function(){
        $('#desc12').toggle(500);
        if($('#but12').html() == '<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>'){
            $('#but12').html('<i class="fas fa-chevron-up" style="font-size: 25pt;"></i>')
        }else{
            $('#but12').html('<i class="fas fa-chevron-down" style="font-size: 25pt;"></i>')
        }
        
    });
});