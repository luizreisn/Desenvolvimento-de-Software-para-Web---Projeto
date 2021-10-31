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
            $('#desc1').text('Hamburguer diretamente de chernobyl, radiação pura. Contém pão, hamburger bolvino, cheddar, maionese temperada, cebola caramelizada, bacon e nosso molho especial.');
            $('#det1').text('Menos detalhes')
        }else{
            $('#det1').text('Mais detalhes');
        }
    });

    $('#desc2').hide();
    $('#det2').click(function(){
        $('#desc2').toggle(500);
        if($('#det2').text()=='Mais detalhes'){
            $('#desc2').text('Nosso lanche para os pequenos, hambúrguer de frango empanado com pão de hambúrguer sem gergelim, possui salada de alface americana, maionese da casa e ketchup.');
            $('#det2').text('Menos detalhes')
        }else{
            $('#det2').text('Mais detalhes');
        }
    });

    $('#desc3').hide();
    $('#det3').click(function(){
        $('#desc3').toggle(500);
        if($('#det3').text()=='Mais detalhes'){
            $('#desc3').text('Nosso lanche para quem é vegano, hambúrguer a base se verduras e plantas com pão vegano com gergelim, possui salada de alface, cebola, tomate, maionese vegana temperada, queijo vegano e ketchup.');
            $('#det3').text('Menos detalhes')
        }else{
            $('#det3').text('Mais detalhes');
        }
    });

    $('#desc4').hide();
    $('#det4').click(function(){
        $('#desc4').toggle(500);
        if($('#det4').text()=='Mais detalhes'){
            $('#desc4').text('Nosso monstro Brasileiro, verdadeiramente delicioso. Contém pão francês, hamburger de linguiça, vinagrete, batata palha e maionese temperada.');
            $('#det4').text('Menos detalhes')
        }else{
            $('#det4').text('Mais detalhes');
        }
    });

    $('#desc5').hide();
    $('#det5').click(function(){
        $('#desc5').toggle(500);
        if($('#det5').text()=='Mais detalhes'){
            $('#desc5').text('Como o proprio nome diz, nosso carro chefe, é um verdadeiro monstro. Contém pão de brioche, 2 hamburgers bolvinos, queijo suíço, onion rings, molho barbecue e maionese da casa.');
            $('#det5').text('Menos detalhes')
        }else{
            $('#det5').text('Mais detalhes');
        }
    });

    $('#desc6').hide();
    $('#det6').click(function(){
        $('#desc6').toggle(500);
        if($('#det6').text()=='Mais detalhes'){
            $('#desc6').text('Nosso monstro para os amantes de frango, hambúrguer de frango empanado com pão de hambúrguer com gergelim, possui salada de alface americana, cebola, picles, tomate, queijo cheddar, maionese e ketchup.');
            $('#det6').text('Menos detalhes')
        }else{
            $('#det6').text('Mais detalhes');
        }
    });

    $('#desc7').hide();
    $('#det7').click(function(){
        $('#desc7').toggle(500);
        if($('#det7').text()=='Mais detalhes'){
            $('#desc7').text('Salada coberta de radiação, produtos de primeira qualidade, salada de alface com tomates, possui pepino, cebola, milho, queijo parmesão ralado, frango e maionese da casa. Acompanha talheres.');
            $('#det7').text('Menos detalhes')
        }else{
            $('#det7').text('Mais detalhes');
        }
    });

    $('#desc8').hide();
    $('#det8').click(function(){
        $('#desc8').toggle(500);
        if($('#det8').text()=='Mais detalhes'){
            $('#desc8').text('Nossa salada mais simples, para quem tem pouca fome, salada de alface americana com tomates, possui pepino, cebola e maionese da casa. Acompanha talheres.');
            $('#det8').text('Menos detalhes')
        }else{
            $('#det8').text('Mais detalhes');
        }
    });

    $('#desc9').hide();
    $('#det9').click(function(){
        $('#desc9').toggle(500);
        if($('#det9').text()=='Mais detalhes'){
            $('#desc9').text('Refrigerante gaseificado sabor cola, não acompanha copo nem gelo.');
            $('#det9').text('Menos detalhes')
        }else{
            $('#det9').text('Mais detalhes');
        }
    });

    $('#desc10').hide();
    $('#det10').click(function(){
        $('#desc10').toggle(500);
        if($('#det10').text()=='Mais detalhes'){
            $('#desc10').text('Bebida alcoólica a base de cevada, não acompanha copo. ');
            $('#det10').text('Menos detalhes')
        }else{
            $('#det10').text('Mais detalhes');
        }
    });

    $('#desc11').hide();
    $('#det11').click(function(){
        $('#desc11').toggle(500);
        if($('#det11').text()=='Mais detalhes'){
            $('#desc11').text('Água mineral natural, garrafa de 500ml, não acompanha gelo nem copo.');
            $('#det11').text('Menos detalhes')
        }else{
            $('#det11').text('Mais detalhes');
        }
    });

    $('#desc12').hide();
    $('#det12').click(function(){
        $('#desc12').toggle(500);
        if($('#det12').text()=='Mais detalhes'){
            $('#desc12').text('Água mineral natural com gás, garrafa de 500ml, não acompanha gelo nem copo.');
            $('#det12').text('Menos detalhes')
        }else{
            $('#det12').text('Mais detalhes');
        }
    });

    $('#desc13').hide();
    $('#det13').click(function(){
        $('#desc13').toggle(500);
        if($('#det13').text()=='Mais detalhes'){
            $('#desc13').text('Suco natural de Laranja, não acompanha copo nem gelo.');
            $('#det13').text('Menos detalhes')
        }else{
            $('#det13').text('Mais detalhes');
        }
    });

    $('#desc14').hide();
    $('#det14').click(function(){
        $('#desc14').toggle(500);
        if($('#det14').text()=='Mais detalhes'){
            $('#desc14').text('Suco natural de Morango, não acompanha copo nem gelo.');
            $('#det14').text('Menos detalhes')
        }else{
            $('#det14').text('Mais detalhes');
        }
    });

    $('#desc15').hide();
    $('#det15').click(function(){
        $('#desc15').toggle(500);
        if($('#det15').text()=='Mais detalhes'){
            $('#desc15').text('Suco natural de Limão com groselha, não acompanha copo nem gelo.');
            $('#det15').text('Menos detalhes')
        }else{
            $('#det15').text('Mais detalhes');
        }
    });

    $('#desc16').hide();
    $('#det16').click(function(){
        $('#desc16').toggle(500);
        if($('#det16').text()=='Mais detalhes'){
            $('#desc16').text('Refrigerante gaseificado sabor limão, não acompanha copo nem gelo.');
            $('#det16').text('Menos detalhes')
        }else{
            $('#det16').text('Mais detalhes');
        }
    });

    $('#desc17').hide();
    $('#det17').click(function(){
        $('#desc17').toggle(500);
        if($('#det17').text()=='Mais detalhes'){
            $('#desc17').text('Fatia grande de bolo de chocolate com menta, molhado com uma mistura de leite, leite condensado e licor de menta, recheio de brigadeiro e granulados por cima para decorar.');
            $('#det17').text('Menos detalhes')
        }else{
            $('#det17').text('Mais detalhes');
        }
    });

    $('#desc18').hide();
    $('#det18').click(function(){
        $('#desc18').toggle(500);
        if($('#det18').text()=='Mais detalhes'){
            $('#desc18').text('Nosso gelado diretamente de Chernobyl, um pote de 150ml de sorvete a base se leite com sabores a escolher: chocolate, morango, creme e caramelo.');
            $('#det18').text('Menos detalhes')
        }else{
            $('#det18').text('Mais detalhes');
        }
    });

    $('#desc19').hide();
    $('#det19').click(function(){
        $('#desc19').toggle(500);
        if($('#det19').text()=='Mais detalhes'){
            $('#desc19').text('Nosso brownie de chocolate com menta, possui cobertura de ganache de chocolate com menta caramelizada.');
            $('#det19').text('Menos detalhes')
        }else{
            $('#det19').text('Mais detalhes');
        }
    });

    $('#desc20').hide();
    $('#det20').click(function(){
        $('#desc20').toggle(500);
        if($('#det20').text()=='Mais detalhes'){
            $('#desc20').text('MilkShake a base do nosso sorvete misturado com leite e leite em pó, acompanha um canudo biodegradável e nos sabores a escolher: chocolate, morango, creme e caramelo.');
            $('#det20').text('Menos detalhes')
        }else{
            $('#det20').text('Mais detalhes');
        }
    });

});