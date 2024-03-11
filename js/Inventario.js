function agregarElemento(item) {
    const elementoHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="' + item.img + '" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.nombre + '</h5>\n' +
        '        <p class="card-text">' + item.descripcion + '</p>\n' +
        '        <p class="card-text">' + item.precio + '</p>\n' +
        '        <a href="#" class="btn btn-primary"><i class="bi bi-cart4"></i></a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const contenedorElemens = document.getElementById("list-items");
    contenedorElemens.innerHTML += elementoHTML;
}

function cargarInventarioDesdeLocalStorage() {
    var productosJSON = localStorage.getItem('productos');
    if (productosJSON) {
        var productos = JSON.parse(productosJSON);
        productos.forEach(function(producto) {
            agregarElemento(producto);
        });
    }
}

window.onload = function() {
    cargarInventarioDesdeLocalStorage();
};

agregarElemento({
    'nombre': 'Cacao en Polvo',
    'img': '../src/inv/ADB_CacaoPolvo.png',
    'descripcion': 'Cacao orgánico en polvo sin azúcar, colorantes ni conservadores. <br/> Presentación: 150g.',
    'precio': '$100.00'
});
agregarElemento({
    'nombre': 'Café Verde',
    'img': '../src/inv/ADB_CafeVerde.png',
    'descripcion': 'Granos de café sin tostar en polvo, para el óptimo aprovechamiento de sus propiedades.<br/> Presentación: 150g.',
    'precio': '$85.00'
});
agregarElemento({
    'nombre': 'Crema de Almendras',
    'img': '../src/inv/ADB_CAlmendra.png',
    'descripcion': 'Crema de almendras naturales, libre de aceites, azúcar, colorantes y conservadores.<br/> Presentación: 250g',
    'precio': '$150.00'
});
agregarElemento({
    'nombre': 'Crema de Cacahuate',
    'img': '../src/inv/ADB_CCacahuate1.png',
    'descripcion': 'Crema de cacahuate tostado natural, libre de aceites, azúcar, colorantes y conservadores.<br/> Presentación: 250g',
    'precio': '$90.00'
});
agregarElemento({
    'nombre': 'Golden Milk',
    'img': '../src/inv/ADB_GoldenMilk.png',
    'descripcion': 'Bebida reconfortante a base de cúrcuma, jengibre y otras especias, antioxidante y antiinflamatorio natural.<br/> Presentación: 100g.',
    'precio': '$120.00'
});
agregarElemento({
    'nombre': 'Granola',
    'img': '../src/inv/ADB_Granola.png',
    'descripcion': 'Mezcla casera de de avena, frutos secos, semillas y miel.<br/> Presentación: 250g',
    'precio': '$60.00'
});
agregarElemento({
    'nombre': 'Jabones Artesanales',
    'img': '../src/inv/ADB_Jabones.png',
    'descripcion': 'Excelente opcion para el cuidado de la piel, hechos con ingredientes naturales.<br/> Contenido neto: 100g.',
    'precio': '$55.00'
});
agregarElemento({
    'nombre': 'Jarabe de Agave',
    'img': '../src/inv/ADB_JarabeAgave.png',
    'descripcion': 'Endulzante extraído 100% de agaves azules mexicanos, de bajo índice glucémico.<br/> Contenido neto: 680g.',
    'precio': '$200.00'
});
agregarElemento({
    'nombre': 'Té Matcha',
    'img': '../src/inv/ADB_Matcha.png',
    'descripcion': 'Té verde japonés con propiedades antioxidantes, listo para preparar en agua, leche, café o repostería.<br/>Presentación: 50g.',
    'precio': '$140.00'
});
agregarElemento({
    'nombre': 'Mermelada',
    'img': '../src/inv/ADB_Mermelada3.png',
    'descripcion': 'Memelada artesanal, hecha con fruta natural de temporada.<br/> Presentación: 250g.',
    'precio': '$100.00'
});
agregarElemento({
    'nombre': 'Vitamina B-12 Vegana',
    'img': '../src/inv/ADB_B12Veg.png',
    'descripcion': 'Vitamina B-12 Cianocobalamina con antioxidante.<br/> Contenido: 30 cápsulas de 500mg.',
    'precio': '$250.00'
});
agregarElemento({
    'nombre': 'Bebida de Almendras',
    'img': '../src/inv/ADB_BebidAlmendras.png',
    'descripcion': 'Bebida en polvo para preparar lechada de almendras.<br/> Contenido: 450g.',
    'precio': '$250.00'
});
agregarElemento({
    'nombre': 'Cepillos dentales de bambú',
    'img': '../src/inv/ADB_CepilloBambu.png',
    'descripcion': 'Cepillos dentales de bambú, 100% biodegradables.<br/> Contenido: 5 pz.',
    'precio': '$65.00'
});
agregarElemento({
    'nombre': 'Crema de Granada',
    'img': '../src/inv/ADB_CremaGranada.png',
    'descripcion': 'Crema hidratante de granada, ideal para pieles sensibles.<br/> Contenido: 250 ml.',
    'precio': '$220.00'
});
agregarElemento({
    'nombre': 'Hidrogel de Aloe Vera',
    'img': '../src/inv/ADB_AloeVera.png',
    'descripcion': 'Hidrogel de Aloe Vera facial, hidratante y revitalizante.<br/> Contenido: 30 ml.',
    'precio': '$180.00'
});