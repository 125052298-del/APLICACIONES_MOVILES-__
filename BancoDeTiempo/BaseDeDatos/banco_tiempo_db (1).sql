-- ============================================================
-- PROYECTO MÓVIL: BANCO DE TIEMPO Y TALENTO UNIVERSITARIO
-- SCRIPT DE CREACIÓN DE BASE DE DATOS (banco_tiempo_db)
-- Profesor: ISC Iván Isay Guerra López - UPQ
-- ============================================================

CREATE DATABASE IF NOT EXISTS banco_tiempo_db 
DEFAULT CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE banco_tiempo_db;

-- 1. TABLA DE USUARIOS
-- Maneja datos de sesión, roles (ADMIN/USUARIO) y saldo de horas/créditos (Escrow)
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('ADMIN', 'USUARIO') DEFAULT 'USUARIO',
    creditos_disponibles INT DEFAULT 5,
    creditos_reservados INT DEFAULT 0,
    credito_total_ganado INT DEFAULT 0,
    estado ENUM('Activo', 'Suspendido') DEFAULT 'Activo',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. TABLA DE CATEGORÍAS
-- Organiza los módulos de conocimiento (Idiomas, Tecnología, Asesorías, etc.)
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL,
    descripcion TEXT
) ENGINE=InnoDB;

-- 3. TABLA DE HABILIDADES
-- Vincula usuarios con sus talentos registradas y estado de verificación
CREATE TABLE habilidades (
    id_habilidad INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    nivel_dominio ENUM('Principiante', 'Intermedio', 'Avanzado') NOT NULL,
    comprobante_url VARCHAR(255),
    verificado BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
) ENGINE=InnoDB;

-- 4. TABLA DE SERVICIOS (OFERTAS)
-- Publicaciones en el catálogo con modalidad, duración y cupo
CREATE TABLE servicios (
    id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_habilidad INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    duracion_horas INT NOT NULL,
    modalidad ENUM('En Línea', 'Presencial') NOT NULL,
    ubicacion_o_enlace VARCHAR(150),
    cupo INT DEFAULT 1,
    estado VARCHAR(30) DEFAULT 'Disponible',
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_habilidad) REFERENCES habilidades(id_habilidad)
) ENGINE=InnoDB;

-- 5. TABLA DE SOLICITUDES E INTERCAMBIOS
-- Registra los pactos entre usuarios y el estado del intercambio
CREATE TABLE solicitudes (
    id_solicitud INT AUTO_INCREMENT PRIMARY KEY,
    id_emisor INT NOT NULL,       -- Usuario que solicita el servicio
    id_receptor INT NOT NULL,     -- Usuario que imparte la tutoría
    id_servicio INT NOT NULL,
    estado_solicitud ENUM('Pendiente', 'En Proceso', 'Completada', 'Rechazada') DEFAULT 'Pendiente',
    horas_intercambio INT NOT NULL,
    fecha_sesion DATETIME,
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_emisor) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_receptor) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_servicio) REFERENCES servicios(id_servicio)
) ENGINE=InnoDB;

-- 6. TABLA DE MENSAJES DE CHAT
-- Canal de comunicación entre emisor y receptor por intercambio
CREATE TABLE mensajes (
    id_mensaje INT AUTO_INCREMENT PRIMARY KEY,
    id_solicitud INT NOT NULL,
    id_remitente INT NOT NULL,
    texto TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_solicitud) REFERENCES solicitudes(id_solicitud) ON DELETE CASCADE,
    FOREIGN KEY (id_remitente) REFERENCES usuarios(id_usuario)
) ENGINE=InnoDB;

-- 7. TABLA DE CALIFICACIONES
-- Reseñas y puntuación de 1 a 5 estrellas al terminar una sesión
CREATE TABLE calificaciones (
    id_calificacion INT AUTO_INCREMENT PRIMARY KEY,
    id_solicitud INT NOT NULL,
    id_evaluador INT NOT NULL,
    id_evaluado INT NOT NULL,
    puntuacion INT CHECK (puntuacion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha_calificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_solicitud) REFERENCES solicitudes(id_solicitud),
    FOREIGN KEY (id_evaluador) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_evaluado) REFERENCES usuarios(id_usuario)
) ENGINE=InnoDB;

-- 8. TABLA DE FAVORITOS
-- Marcadores guardados por los usuarios desde el catálogo
CREATE TABLE favoritos (
    id_favorito INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_servicio INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_servicio) REFERENCES servicios(id_servicio) ON DELETE CASCADE
) ENGINE=InnoDB;
