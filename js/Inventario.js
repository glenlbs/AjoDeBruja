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

agregarElemento({'nombre':'jugo',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'descripcion':'Jugo de naranja, fresco y delicioso'});

agregarElemento({'nombre':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'descripcion':'Papas de queso y ajo'})

agregarElemento({'nombre':'Coca',
    'img':'https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/5/5/559.jpg?width=265&height=390&store=default&image-type=image',
    'descripcion':'Refresco sabor a cola.'})

agregarElemento({'nombre':'XX',
    'img':'https://www.sampieri.com.mx/wp-content/uploads/2020/04/CERVEZA-XX-LAGER-LATA-473-ml..jpg',
    'descripcion':'Cerveza clara'})
agregarElemento({'nombre':'Doritos',
    'img':'https://farmaciacalderon.com/cdn/shop/products/7501011131064_580x.png?v=1605548633',
    'descripcion':'Papas sabor a queso y chile'})

