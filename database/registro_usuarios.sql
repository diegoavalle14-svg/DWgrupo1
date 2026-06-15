// 1. Crear base de datos
CREATE DATABASE IF NOT EXISTS registro_usuarios;

// 2. Usar la base de datos
USE registro_usuarios;

-- Crear tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

// 3. Datos de ejemplo
INSERT INTO usuarios (nombre, correo, telefono)
VALUES
('Juan Perez', 'juan@gmail.com', '88888888'),
('Maria Lopez', 'maria@gmail.com', '99999999');