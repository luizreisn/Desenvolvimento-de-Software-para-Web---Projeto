<?php
    class ContatoDAO{
        function inserir($nome, $sobrenome, $celular, $telefone, $email, $mensagem, $conn){
            try{
                $pdo = $conn;
                $stmt = $pdo -> prepare("INSERT INTO contato (nome, sobrenome, celular, telefone, email, mensagem) VALUES (:nome, :sobrenome, :celular, :telefone, :email, :mensagem)");
                $stmt -> execute(array("nome" => "$nome", "sobrenome" => "$sobrenome", "celular" => "$celular", "telefone" => "$telefone", "email" => "$email", "mensagem" => "$mensagem"));
                echo "<script>window.location = '../visao/pages/contato/contato.html'; alert('Formulário enviado com sucesso!'); </script>";
            }catch(PDOException $e){
                echo "<script>window.location = '../visao/pages/contato/contato.html'; alert('Não foi possível enviar o formulário!'); console.log(" . $e -> getMessage() .") </script>";
            }
        }
    }
?>