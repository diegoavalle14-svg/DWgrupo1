<?php

// 1. Permitir acceso desde Angular
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// 2. Conexión a la base de datos
include 'conexion.php';

// 3. Obtener todos los usuarios
$sql = "SELECT * FROM usuarios";

$resultado = $conn->query($sql);

// 4. Arreglo donde se guardarán los usuarios
$usuarios = [];

// 5. Recorrer cada fila encontrada
while($fila = $resultado->fetch_assoc())
{
    $usuarios[] = $fila;
}

// 6. Enviar los usuarios en formato JSON
echo json_encode($usuarios);

?>