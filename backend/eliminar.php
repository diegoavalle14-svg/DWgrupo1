<?php

// Permitir acceso desde Angular
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Conexión a la base de datos
include 'conexion.php';

// Obtener datos enviados desde Angular
$datos = json_decode(file_get_contents("php://input"));

// Verificar que llegó el id
if (!$datos)
{
    echo json_encode([
        "mensaje" => "No se recibieron datos"
    ]);
    exit;
}

$id = $datos->id;

// Consulta DELETE
$sql = "DELETE FROM usuarios WHERE id='$id'";

// Ejecutar consulta
if ($conn->query($sql) === TRUE)
{
    echo json_encode([
        "mensaje" => "Usuario eliminado correctamente"
    ]);
}
else
{
    echo json_encode([
        "mensaje" => $conn->error
    ]);
}

$conn->close();

?>