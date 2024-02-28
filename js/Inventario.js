function agregarElemento(item) {
    const elementoHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="' + item.img + '" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.nombre + '</h5>\n' +
        '        <p class="card-text">' + item.descripcion + '</p>\n' +
        '        <a href="#" class="btn btn-primary"><i class="bi bi-cart4"></i></a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const contenedorElemens = document.getElementById("list-items");
    contenedorElemens.innerHTML += elementoHTML;
}

agregarElemento({
    'nombre': 'Cacao en Polvo',
    'img': '../src/inv/ADB_CacaoPolvo.png',
    'descripcion': 'Cacao orgánico en polvo sin azúcar, colorantes ni conservadores.'
});
agregarElemento({
    'nombre': 'Café Verde',
    'img': '../src/inv/ADB_CafeVerde.png',
    'descripcion': 'Granos de café sin tostar, para el óptimo aprovechamiento de sus propiedades.'
});
agregarElemento({
    'nombre': 'Crema de Almendras',
    'img': '../src/inv/ADB_CAlmendra.png',
    'descripcion': 'Crema de almendras naturales, libre de aceites, azúcar, colorantes y conservadores.'
});
agregarElemento({
    'nombre': 'Crema de Cacahuate',
    'img': '../src/inv/ADB_CCacahuate1.png',
    'descripcion': 'Crema de cacahuate tostado natural, libre de aceites, azúcar, colorantes y conservadores.'
});
agregarElemento({
    'nombre': 'Golden Milk',
    'img': '../src/inv/ADB_GoldenMilk.png',
    'descripcion': 'Bebida reconfortante a base de cúrcuma, jengibre y otras especias, antioxidante y antiinflamatorio natural.'
});
agregarElemento({
    'nombre': 'Granola',
    'img': '../src/inv/ADB_Granola.png',
    'descripcion': 'Mezcla casera de de avena, frutos secos, semillas y miel.'
});
agregarElemento({
    'nombre': 'Jabones Artesanales',
    'img': '../src/inv/ADB_Jabones.png',
    'descripcion': 'Excelente opcion para el cuidado de la piel, hechos con ingredientes naturales.'
});
agregarElemento({
    'nombre': 'Jarabe de Agave',
    'img': '../src/inv/ADB_JarabeAgave.png',
    'descripcion': 'Endulzante extraído 100% de agaves azules mexicanos, de bajo índice glucémico.'
});
agregarElemento({
    'nombre': 'Té Matcha',
    'img': '../src/inv/ADB_Matcha.png',
    'descripcion': 'Té verde japonés con propiedades antioxidantes, listo para preparar en agua, leche, café o repostería.'
});
agregarElemento({
    'nombre': 'Mermelada',
    'img': '../src/inv/ADB_Mermelada3.png',
    'descripcion': 'Memelada artesanal, hecha con fruta natural de temporada.'
});
agregarElemento({
    'nombre': 'Sal Gourmet Artesanal',
    'img': '../src/inv/ADB_SalArtesanal.png',
    'descripcion': 'Sal de mesa en grano de origen natural, rica en minerales. Sabor albahaca o vino tinto.'
});