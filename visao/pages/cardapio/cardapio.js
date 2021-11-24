$(function () {
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
    $('#det1').click(function(){
        $('#desc1').toggle(500);
        if($('#det1').text()=='Mais detalhes'){
            $('#det1').text('Menos detalhes')
        }else{
            $('#det1').text('Mais detalhes');
        }
    });

    $('#desc2').hide();
    $('#det2').click(function(){
        $('#desc2').toggle(500);
        if($('#det2').text()=='Mais detalhes'){
            $('#det2').text('Menos detalhes')
        }else{
            $('#det2').text('Mais detalhes');
        }
    });

    $('#desc3').hide();
    $('#det3').click(function(){
        $('#desc3').toggle(500);
        if($('#det3').text()=='Mais detalhes'){
            $('#det3').text('Menos detalhes')
        }else{
            $('#det3').text('Mais detalhes');
        }
    });

    $('#desc4').hide();
    $('#det4').click(function(){
        $('#desc4').toggle(500);
        if($('#det4').text()=='Mais detalhes'){
            $('#det4').text('Menos detalhes')
        }else{
            $('#det4').text('Mais detalhes');
        }
    });

    $('#desc5').hide();
    $('#det5').click(function(){
        $('#desc5').toggle(500);
        if($('#det5').text()=='Mais detalhes'){
            $('#det5').text('Menos detalhes')
        }else{
            $('#det5').text('Mais detalhes');
        }
    });

    $('#desc6').hide();
    $('#det6').click(function(){
        $('#desc6').toggle(500);
        if($('#det6').text()=='Mais detalhes'){
            $('#det6').text('Menos detalhes')
        }else{
            $('#det6').text('Mais detalhes');
        }
    });

    $('#desc7').hide();
    $('#det7').click(function(){
        $('#desc7').toggle(500);
        if($('#det7').text()=='Mais detalhes'){
            $('#det7').text('Menos detalhes')
        }else{
            $('#det7').text('Mais detalhes');
        }
    });

    $('#desc8').hide();
    $('#det8').click(function(){
        $('#desc8').toggle(500);
        if($('#det8').text()=='Mais detalhes'){
            $('#det8').text('Menos detalhes')
        }else{
            $('#det8').text('Mais detalhes');
        }
    });

    $('#desc9').hide();
    $('#det9').click(function(){
        $('#desc9').toggle(500);
        if($('#det9').text()=='Mais detalhes'){
            $('#det9').text('Menos detalhes')
        }else{
            $('#det9').text('Mais detalhes');
        }
    });

    $('#desc10').hide();
    $('#det10').click(function(){
        $('#desc10').toggle(500);
        if($('#det10').text()=='Mais detalhes'){
            $('#det10').text('Menos detalhes')
        }else{
            $('#det10').text('Mais detalhes');
        }
    });

    $('#desc11').hide();
    $('#det11').click(function(){
        $('#desc11').toggle(500);
        if($('#det11').text()=='Mais detalhes'){
            $('#det11').text('Menos detalhes')
        }else{
            $('#det11').text('Mais detalhes');
        }
    });

    $('#desc12').hide();
    $('#det12').click(function(){
        $('#desc12').toggle(500);
        if($('#det12').text()=='Mais detalhes'){
            $('#det12').text('Menos detalhes')
        }else{
            $('#det12').text('Mais detalhes');
        }
    });

    $('#desc13').hide();
    $('#det13').click(function(){
        $('#desc13').toggle(500);
        if($('#det13').text()=='Mais detalhes'){
            $('#det13').text('Menos detalhes')
        }else{
            $('#det13').text('Mais detalhes');
        }
    });

    $('#desc14').hide();
    $('#det14').click(function(){
        $('#desc14').toggle(500);
        if($('#det14').text()=='Mais detalhes'){
            $('#det14').text('Menos detalhes')
        }else{
            $('#det14').text('Mais detalhes');
        }
    });

    $('#desc15').hide();
    $('#det15').click(function(){
        $('#desc15').toggle(500);
        if($('#det15').text()=='Mais detalhes'){
            $('#det15').text('Menos detalhes')
        }else{
            $('#det15').text('Mais detalhes');
        }
    });

    $('#desc16').hide();
    $('#det16').click(function(){
        $('#desc16').toggle(500);
        if($('#det16').text()=='Mais detalhes'){
            $('#det16').text('Menos detalhes')
        }else{
            $('#det16').text('Mais detalhes');
        }
    });

    $('#desc17').hide();
    $('#det17').click(function(){
        $('#desc17').toggle(500);
        if($('#det17').text()=='Mais detalhes'){
            $('#det17').text('Menos detalhes')
        }else{
            $('#det17').text('Mais detalhes');
        }
    });

    $('#desc18').hide();
    $('#det18').click(function(){
        $('#desc18').toggle(500);
        if($('#det18').text()=='Mais detalhes'){
            $('#det18').text('Menos detalhes')
        }else{
            $('#det18').text('Mais detalhes');
        }
    });

    $('#desc19').hide();
    $('#det19').click(function(){
        $('#desc19').toggle(500);
        if($('#det19').text()=='Mais detalhes'){
            $('#det19').text('Menos detalhes')
        }else{
            $('#det19').text('Mais detalhes');
        }
    });

    $('#desc20').hide();
    $('#det20').click(function(){
        $('#desc20').toggle(500);
        if($('#det20').text()=='Mais detalhes'){
            $('#det20').text('Menos detalhes')
        }else{
            $('#det20').text('Mais detalhes');
        }
    });

});