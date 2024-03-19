SELECT * FROM ajodebruja.productos;

INSERT INTO `ajodebruja`.`productos` (`id_producto`, `nombre`, `categoria`, `descripcion`, `precio`, `id_cliente`, `id_categoria`)
VALUES ('1', 'Cacao en Polvo', 'Comestibles', 'Cacao orgánico en polvo sin azúcar, colorantes ni conservadores.', '100.00', ?, '1', '1'),
('2', 'Café Verde', 'Suplementos', 'Granos de café sin tostar en polvo, para el óptimo aprovechamiento de sus propiedades.', '85.00', ?, '2', '3'),
('3', 'Jabones Artesanales', 'Cuidado Personal', 'Excelente opcion para el cuidado de la piel, hechos con ingredientes naturales.', '55.00', ?, '1', '2'),
('4', 'Cepillos dentales de bambú', 'Cuidado Personal', 'Cepillos dentales de bambú, 100% biodegradables.', '65.00', ?, '3', '2'),
('5', 'Crema de Granada', 'Cuidado Personal', 'Crema hidratante de granada, ideal para pieles sensibles.', '220.00', ?, '4', '2');
