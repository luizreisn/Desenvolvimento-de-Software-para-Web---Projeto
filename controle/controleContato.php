<?php
    include_once('../modelo/conexao.php');
    include_once('../modelo/contatoDAO.php');

    $conexao = new Conexao();
    $conn = $conexao -> conectar();
    $contatoDAO = new ContatoDAO();

    if(isset($_POST['enviar'])){
        $contatoDAO -> inserir($_POST['nome'],
        $_POST['sobrenome'],
        $_POST['celular'],
        $_POST['telefone'],
        $_POST['email'],
        $_POST['mensagem'],
        $conn);
    }
?>