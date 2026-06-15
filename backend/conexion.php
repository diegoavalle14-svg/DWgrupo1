<?php

// 1. Datos para conectarse a MySQL
$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "registro_usuarios";

// 2. Crear conexión
$conn = new mysqli($servidor, $usuario, $password, $bd);

// 3. Verificar si hubo error
if ($conn->connect_error)
{
    die("Error de conexión: " . $conn->connect_error);
}


?>