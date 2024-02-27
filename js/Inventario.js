function agregarElemento(item){
    const elementoHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.nombre+'</h5>\n' +
        '        <p class="card-text">'+item.descripcion+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const contenedorElemens = document.getElementById("list-items");
    contenedorElemens.innerHTML += elementoHTML;
}

agregarElemento({'nombre':'Cafe Verde',
'img':'https://i.imgur.com/H24o1P9.png',
    'descripcion':'Cafe que mantiene sus caracteristicas al no estar tostado y esto tiene muchos beneficios para la salud.'});

agregarElemento({'nombre':'Crema de Almendras',
    'img':'https://i.imgur.com/YcyulaU.png',
    'descripcion':'Contiene almendras finamente molidas.'})

agregarElemento({'nombre':'Crema de Cacahuate',
    'img':'https://i.imgur.com/RPcNKBl.png',
    'descripcion':'Delicioso y muy versatil que ofrece varios beneficios  a la salud.'})

agregarElemento({'nombre':'Golden Milk',
    'img':'https://i.imgur.com/hbxHCzH.png',
    'descripcion':'Bebida reconfortante con raices en la medicina ayurvética.'})
agregarElemento({'nombre':'Granola',
    'img':'https://i.imgur.com/B1XbQwV.png',
    'descripcion':'Esta compuesta principalmente de avena, frutos secos, semillas y miel.'})

    
agregarElemento({'nombre':'Jabones',
'img':'https://i.imgur.com/RbSpWGl.png',
    'descripcion':'Exelente opcion para el cuidado de la piel, echos con ingredientes naturales.'});

agregarElemento({'nombre':'Jarabe de Agave',
    'img':'https://i.imgur.com/vpXV3IP.png',
    'descripcion':'Es un endulzante extraído 100% de agaves azules mexicanos, de bajo índice glucémico.'})

agregarElemento({'nombre':'Te Matcha',
    'img':'https://i.imgur.com/8pWc87P.png',
    'descripcion':'Aprovecha todos los beneficios del té verde matcha, ya sea con agua, leche, café; hasta incluirlo en repostería.'})

agregarElemento({'nombre':'Mermelada',
    'img':'https://i.imgur.com/fBDrSYF.png',
    'descripcion':'Memelada echa con fruta natural.'})
agregarElemento({'nombre':'Sal Artesanal',
    'img':'https://i.imgur.com/zG8uvf7.png',
    'descripcion':'Sal de origen natural rica en minerales.'})

