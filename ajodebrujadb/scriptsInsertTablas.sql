INSERT INTO `ajodebruja`.`categorias`(`nombre`)
VALUES ('Comestibles'),
('Cuidado Personal'),
('Suplementos'),
('Veganos');

INSERT INTO `ajodebruja`.`productos` (`nombre`, `categoria`, `descripcion`, `precio`, `imagen`, `id_categoria`, `id_pedido`, `id_usuario`)
VALUES ('Cacao en Polvo', 'Comestibles', 'Cacao orgánico en polvo sin azúcar, colorantes ni conservadores.', '100.00', 'ADB_CacaoPolvo.png', '1', '1', '4'),
('Café Verde', 'Suplementos', 'Granos de café sin tostar en polvo, para el óptimo aprovechamiento de sus propiedades.', '85.00', 'ADB_CafeVerde.png', '4', '2', '3'),
('Jabones Artesanales', 'Cuidado Personal', 'Excelente opcion para el cuidado de la piel, hechos con ingredientes naturales.', '55.00', 'ADB_Jabones.png', '2', '3', '1'),
('Cepillos dentales de bambú', 'Cuidado Personal', 'Cepillos dentales de bambú, 100% biodegradables.', '65.00', 'ADB_CepillosBambu.png', '2', '4', '5'),
('Crema de Granada', 'Cuidado Personal', 'Crema hidratante de granada, ideal para pieles sensibles.', '220.00', 'ADB_CremaGranada.png', '2', '5', '2');

INSERT INTO `ajodebruja`.`registros` (`nombre_completo`, `telefono`, `email`, `contraseña`, `id_usuario`)
VALUES ('José López Rodríguez', '5545990810', 'joselo_01@gmail.com', 'J%l910R^0', '1'),
('Enrique Becerril Navarrete', '5564602346', 'becerriln.enrique@gmail.com', 'P]597I>w', '2'),
('Joel Francisco Gómez Castro', '5530499196', 'joelfcogomezc@gmail.com', '3>87%kFx', '3'),
('Glenda Valentín Robles', '5573261445', 'glendavalentin25@gmail.com', '8<27gVr%', '4'),
('Jesús Ramses Gómez Miraanda', '7121999702', 'jesusramsesgomezmiranda05@gmail.com', 'Ln%S~763', '5');

INSERT INTO `ajodebruja`.`usuarios` (`email`, `contraseña`)
VALUES ('joselo_01@gmail.com', 'J%l910R^0'),
('becerriln.enrique@gmail.com', 'P]597I>w'),
('joelfcogomezc@gmail.com', '3>87%kFx'),
('glendavalentin25@gmail.com', '8<27gVr%'),
('jesusramsesgomezmiranda05@gmail.com', 'Ln%S~763');

INSERT INTO `ajodebruja`.`pedidos` (`cantidad_productos`, `precio_total`, `id_usuario`)
VALUES ('4', '450.00', '3'),
('3', '360.00', '1'),
('5', '820.00', '2'),
('2', '300.00', '5'),
('3', '480.00', '4');