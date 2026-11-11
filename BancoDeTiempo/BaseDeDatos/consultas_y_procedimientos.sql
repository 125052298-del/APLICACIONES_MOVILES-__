-- ============================================================
-- PROYECTO MÓVIL: BANCO DE TIEMPO
-- DEMOSTRACIÓN DE CONSULTAS Y PROCEDIMIENTOS ALMACENADOS
-- ============================================================

USE bancodetiempo;

-- ============================================================
-- 1. CONSULTAS SIMPLES (3 Requeridas)
-- ============================================================

-- Consulta Simple 1: Obtener la lista de usuarios activos con su saldo disponible
SELECT id_usuario, nombre, correo, creditos_disponibles, estado 
FROM usuarios 
WHERE estado = 'Activo';

-- Consulta Simple 2: Listar el catálogo general de categorías
SELECT id_categoria, nombre_categoria, descripcion 
FROM categorias;

-- Consulta Simple 3: Filtrar servicios ofertados en modalidad presencial
SELECT id_servicio, titulo, duracion_horas, ubicacion_o_enlace 
FROM servicios 
WHERE modalidad = 'Presencial';


-- ============================================================
-- 2. CONSULTAS CON INNER JOIN (3 Requeridas)
-- ============================================================

-- Consulta INNER JOIN 1: Servicios publicados con datos del tutor y la categoría (para CatalogoScreen)
SELECT s.id_servicio, 
       s.titulo AS servicio, 
       u.nombre AS tutor, 
       c.nombre_categoria, 
       s.duracion_horas, 
       s.modalidad
FROM servicios s
INNER JOIN usuarios u ON s.id_usuario = u.id_usuario
INNER JOIN habilidades h ON s.id_habilidad = h.id_habilidad
INNER JOIN categorias c ON h.id_categoria = c.id_categoria;

-- Consulta INNER JOIN 2: Estado de solicitudes mostrando nombres de solicitante, receptor y servicio (para IntercambiosScreen)
SELECT sol.id_solicitud, 
       e.nombre AS emisor_solicitante, 
       r.nombre AS receptor_tutor, 
       serv.titulo AS servicio_solicitado, 
       sol.estado_solicitud, 
       sol.horas_intercambio
FROM solicitudes sol
INNER JOIN usuarios e ON sol.id_emisor = e.id_usuario
INNER JOIN usuarios r ON sol.id_receptor = r.id_usuario
INNER JOIN servicios serv ON sol.id_servicio = serv.id_servicio;

-- Consulta INNER JOIN 3: Reporte de habilidades verificadas por usuario (para PerfilScreen y Admin)
SELECT u.nombre AS usuario, 
       h.titulo AS habilidad, 
       c.nombre_categoria, 
       h.nivel_dominio
FROM habilidades h
INNER JOIN usuarios u ON h.id_usuario = u.id_usuario
INNER JOIN categorias c ON h.id_categoria = c.id_categoria
WHERE h.verificado = TRUE;


-- ============================================================
-- 3. PROCEDIMIENTOS ALMACENADOS (2 Requeridos)
-- ============================================================

DELIMITER //

-- Procedimiento 1: Crear solicitud de intercambio y apartar créditos en escrow
CREATE PROCEDURE sp_crear_solicitud_intercambio(
    IN p_emisor INT,
    IN p_receptor INT,
    IN p_servicio INT,
    IN p_horas INT,
    IN p_fecha DATETIME
)
BEGIN
    INSERT INTO solicitudes (id_emisor, id_receptor, id_servicio, estado_solicitud, horas_intercambio, fecha_sesion)
    VALUES (p_emisor, p_receptor, p_servicio, 'Pendiente', p_horas, p_fecha);
    
    UPDATE usuarios 
    SET creditos_disponibles = creditos_disponibles - p_horas,
        creditos_reservados = creditos_reservados + p_horas
    WHERE id_usuario = p_emisor;
END //

-- Procedimiento 2: Finalizar un intercambio y liberar/acreditar las horas al tutor
CREATE PROCEDURE sp_finalizar_intercambio(
    IN p_id_solicitud INT
)
Item_Block: BEGIN
    DECLARE v_emisor INT;
    DECLARE v_receptor INT;
    DECLARE v_horas INT;
    DECLARE v_estado VARCHAR(30);

    SELECT id_emisor, id_receptor, horas_intercambio, estado_solicitud 
    INTO v_emisor, v_receptor, v_horas, v_estado
    FROM solicitudes WHERE id_solicitud = p_id_solicitud;

    IF v_estado = 'En Proceso' OR v_estado = 'Pendiente' THEN
        UPDATE solicitudes SET estado_solicitud = 'Completada' WHERE id_solicitud = p_id_solicitud;

        UPDATE usuarios 
        SET creditos_reservados = creditos_reservados - v_horas 
        WHERE id_usuario = v_emisor;

        UPDATE usuarios 
        SET creditos_disponibles = creditos_disponibles + v_horas,
            credito_total_ganado = credito_total_ganado + v_horas 
        WHERE id_usuario = v_receptor;
    END IF;
END //

DELIMITER ;
