<?php

// 1. Permitir acceso desde Angular
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// 2. Conexión a la base de datos
include 'conexion.php';

// 3. Obtener los datos enviados desde Angular
$datos = json_decode(file_get_contents("php://input"));

// 4. Verificar que sí llegaron datos
if (!$datos)
{
    echo json_encode([
        "mensaje" => "No se recibieron datos"
    ]);
    exit;
}

// 5. Verificar que los campos no estén vacíos
if (
    empty($datos->nombre) ||
    empty($datos->correo) ||
    empty($datos->telefono)
)
{
    echo json_encode([
        "mensaje" => "Todos los campos son obligatorios"
    ]);
    exit;
}

// 6. Guardar los datos en variables
$nombre = $datos->nombre;
$correo = $datos->correo;
$telefono = $datos->telefono;

// 7. Consulta para insertar el usuario
$sql = "INSERT INTO usuarios (nombre, correo, telefono)
        VALUES ('$nombre', '$correo', '$telefono')";

// 8. Ejecutar consulta
if ($conn->query($sql) === TRUE)
{
    echo json_encode([
        "mensaje" => "Usuario guardado correctamente"
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