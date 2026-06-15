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

// Validar que llegaron datos
if (!$datos)
{
    echo json_encode([
        "mensaje" => "No se recibieron datos"
    ]);
    exit;
}

// Guardar datos en variables
$id = $datos->id;
$nombre = $datos->nombre;
$correo = $datos->correo;
$telefono = $datos->telefono;

// Consulta UPDATE
$sql = "UPDATE usuarios
        SET nombre='$nombre',
            correo='$correo',
            telefono='$telefono'
        WHERE id='$id'";

// Ejecutar consulta
if ($conn->query($sql) === TRUE)
{
    echo json_encode([
        "mensaje" => "Usuario actualizado correctamente"
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