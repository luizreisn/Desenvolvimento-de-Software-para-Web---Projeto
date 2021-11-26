<?php    
    include_once('../modelo/conexao.php');
    include_once('../modelo/trabalheDAO.php');

    $conexao = new Conexao();
    $conn = $conexao -> conectar();
    $trabalheDAO = new TrabalheDAO();

    if(isset($_POST['enviar'])){
        $trabalheDAO -> inserir($_POST['nome'],
        $_POST['sobrenome'],
        $_POST['nascimento'],
        $_POST['celular'],
        $_POST['email'],
        $_POST['curriculo'],
        $conn);
    }
?>