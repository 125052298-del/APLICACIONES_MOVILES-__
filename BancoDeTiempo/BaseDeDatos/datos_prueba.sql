-- ============================================================
-- PROYECTO MÓVIL: BANCO DE TIEMPO
-- SCRIPT DE INSERCIÓN DE DATOS DE PRUEBA (INSERTs a todas las tablas)
-- ============================================================

USE banco_tiempo_db;

-- 1. INSERT USUARIOS
INSERT INTO usuarios (nombre, correo, password, rol, creditos_disponibles, creditos_reservados, credito_total_ganado, estado) VALUES
('Carlos Mendoza', 'carlos.m@universidad.edu', 'hashed_pass_1', 'USUARIO', 5, 1, 12, 'Activo'),
('Ana Ruiz', 'ana.r@universidad.edu', 'hashed_pass_2', 'USUARIO', 9, 0, 8, 'Activo'),
('Pablo Ríos', 'pablo.r@universidad.edu', 'hashed_pass_3', 'USUARIO', 6, 2, 15, 'Activo'),
('Sofía L.', 'sofia.l@universidad.edu', 'hashed_pass_4', 'USUARIO', 4, 1, 6, 'Activo'),
('Admin Central', 'admin@universidad.edu', 'admin_pass', 'ADMIN', 0, 0, 0, 'Activo');

-- 2. INSERT CATEGORÍAS
INSERT INTO categorias (nombre_categoria, descripcion) VALUES
('Idiomas', 'Aprendizaje y práctica de lenguas extranjeras'),
('Tecnología', 'Programación, bases de datos y desarrollo web'),
('Asesorías', 'Apoyo académico en matemáticas y ciencias exactas'),
('Reparaciones', 'Soporte técnico de hardware y equipos');

-- 3. INSERT HABILIDADES
INSERT INTO habilidades (id_usuario, id_categoria, titulo, nivel_dominio, verificado) VALUES
(1, 2, 'Programación Python', 'Avanzado', TRUE),
(1, 1, 'Inglés Conversacional', 'Intermedio', TRUE),
(3, 1, 'Francés básico A1', 'Principiante', FALSE),
(2, 2, 'Guitarra para principiantes', 'Intermedio', TRUE);

-- 4. INSERT SERVICIOS
INSERT INTO servicios (id_usuario, id_habilidad, titulo, descripcion, duracion_horas, modalidad, ubicacion_o_enlace, cupo, estado) VALUES
(1, 1, 'Clases de Python desde cero', 'Aprende variables, funciones y tu primer proyecto web en 4 sesiones...', 4, 'Presencial', 'Laboratorio C-2', 4, 'Disponible'),
(3, 3, 'Francés básico A1', 'Introducción a la gramática y pronunciación francesa cotidiana.', 2, 'En Línea', 'Google Meet', 5, 'Disponible'),
(2, 4, 'Guitarra para principiantes', 'Acordes mayores, ritmo base y tu primera canción.', 3, 'Presencial', 'Biblioteca Central', 4, 'Disponible');

-- 5. INSERT SOLICITUDES
INSERT INTO solicitudes (id_emisor, id_receptor, id_servicio, estado_solicitud, horas_intercambio, fecha_sesion) VALUES
(4, 3, 2, 'Pendiente', 2, '2026-03-14 17:30:00'),
(1, 2, 3, 'En Proceso', 3, '2026-03-12 16:00:00'),
(4, 1, 1, 'Completada', 4, '2026-03-08 10:00:00');

-- 6. INSERT MENSAJES
INSERT INTO mensajes (id_solicitud, id_remitente, texto) VALUES
(2, 2, '¡Hola! Confirmada la sesión para el Jueves a las 16:00 en la biblioteca.'),
(2, 1, 'Perfecto Pablo, ahí nos vemos. Llevaré mi propia guitarra.');

-- 7. INSERT CALIFICACIONES
INSERT INTO calificaciones (id_solicitud, id_evaluador, id_evaluado, puntuacion, comentario) VALUES
(3, 4, 1, 5, 'Excelente mentor, explica muy claro Python y es muy paciente.');

-- 8. INSERT FAVORITOS
INSERT INTO favoritos (id_usuario, id_servicio) VALUES
(1, 3), 
(4, 1);
