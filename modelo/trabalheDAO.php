<?php
    class TrabalheDAO{
        function inserir($nome, $sobrenome, $nascimento, $celular, $email, $curriculo, $conn){
            try{
                $pdo = $conn;
                $stmt = $pdo -> prepare("INSERT INTO trabalhe (nome, sobrenome, nascimento, celular, email, curriculo) VALUES (:nome, :sobrenome, :nascimento, :celular, :email, :curriculo)");
                $stmt -> execute(array("nome" => "$nome", "sobrenome" => "$sobrenome", "nascimento" => "$nascimento", "celular" => "$celular", "email" => "$email", "curriculo" => "$curriculo"));
                echo "<script>window.location = '../visao/pages/sobre/sobre.html'; alert('Formulário enviado com sucesso!'); </script>";
            }catch(PDOException $e){
                echo "<script>window.location = '../visao/pages/contato/contato.html'; alert('Não foi possível enviar o formulário!'); console.log(" . $e -> getMessage() .") </script>";
            }

        }
    }
?>