if (document.querySelector('.main-overlay')) {
    const product = [];

 const alerting = [
         {  
            name: 'name',
            value: document.querySelector('input[name=name]') && document.querySelector('input[name=name]').checked
         },
         { 
            name: 'sku',
            value: document.querySelector('input[name=sku]') && document.querySelector('input[name=sku]').checked
         },
         { 
            name: 'subtitle',
            value: document.querySelector('input[name=subtitle]') && document.querySelector('input[name=subtitle]').checked
         },
         { 
            name: 'description',
            value: document.querySelector('input[name=description]') && document.querySelector('input[name=description]').checked
         },
         { 
            name: 'showOnFrontpage',
            value: document.querySelector('input[name=showOnFrontpage]') && document.querySelector('input[name=showOnFrontpage]').checked  
         },
         { 
            name: 'category1',
            value: document.querySelector('input[name=category1]') && document.querySelector('input[name=category1]').checked  
        },
        { 
            name: 'category2',
            value: document.querySelector('input[name=category1]') && document.querySelector('input[name=category2]').checked  
        },
        { 
            name: 'category3',
            value: document.querySelector('input[name=category1]') && document.querySelector('input[name=category3]').checked  
         },
         { 
            name: 'image',
            value: document.querySelector('input[name=image]') && document.querySelector('input[name=image]').checked
         },
         { 
             name: 'ribbon',
             value: document.querySelector('input[name=ribbon]') && document.querySelector('input[name=ribbon]').checked  
         },
         { 
             name: 'ribbonColor',
             value: document.querySelector('input[name=ribbonColor]') && document.querySelector('input[name=ribbonColor]').checked  
         },
         { 
             name: 'weight',
             value: document.querySelector('input[name=weight]') && document.querySelector('input[name=weight]').checked  
         },
         { 
            name: 'price',
            value: document.querySelector('input[name=price]') && document.querySelector('input[name=price]').checked 
         },
         { 
             name: 'recommended_price',
             value: document.querySelector('input[name=recommended_price]') && document.querySelector('input[name=recommended_price]').checked  
         },
         { 
             name: 'quantity',
             value: document.querySelector('input[name=quantity]') && document.querySelector('input[name=quantity]').checked  
         },
         { 
             name: 'enabled',
             value: document.querySelector('input[name=enabled]') && document.querySelector('input[name=enabled]').checked  
         },
         { 
             name: 'shipping_freight',
             value: document.querySelector('input[name=shipping_freight]') && document.querySelector('input[name=shipping_freight]').checked  
         },
         { 
             name: 'fixed_shipping_rate_only',
             value: document.querySelector('input[name=fixed_shipping_rate_only]') && document.querySelector('input[name=fixed_shipping_rate_only]').checked  
         },
         { 
             name: 'shippingType',
             value: document.querySelector('input[name=shippingType]') &&  document.querySelector('input[name=shippingType]').checked
         },
         { 
             name: 'shippingMethodMarkup',
             value: document.querySelector('input[name=shippingMethodMarkup]') && document.querySelector('input[name=shippingMethodMarkup]').checked  
         },
         { 
             name: 'shippingFlatRate',
             value: document.querySelector('input[name=shippingFlatRate]') && document.querySelector('input[name=shippingFlatRate]').checked  
         },
         { 
             name: 'shippingDisabledMethods',
             value: document.querySelector('input[name=shippingDisabledMethods]') && document.querySelector('input[name=shippingDisabledMethods]').checked  
         },
         { 
             name: 'shippingEnabledMethods',
             value: document.querySelector('input[name=shippingEnabledMethods]') && document.querySelector('input[name=shippingEnabledMethods]').checked  
         },
         { 
             name: 'length',
             value: document.querySelector('input[name=length]') && document.querySelector('input[name=length]').checked  
         },
         { 
             name: 'width',
             value: document.querySelector('input[name=width]') && document.querySelector('input[name=width]').checked  
         },
         { 
             name: 'height',
             value: document.querySelector('input[name=height]') && document.querySelector('input[name=height]').checked  
         },
         { 
             name: 'upc',
             value: document.querySelector('input[name=upc]') && document.querySelector('input[name=upc]').checked  
         },
         { 
             name: 'brand',
             value: document.querySelector('input[name=brand]') && document.querySelector('input[name=brand]').checked  
         },
         { 
             name: 'seo_title',
             value: document.querySelector('input[name=seo_title]') && document.querySelector('input[name=seo_title]').checked  
         },
         { 
             name: 'seo_description',
             value: document.querySelector('input[name=seo_description]') && document.querySelector('input[name=seo_description]').checked  
         },
         {
            name: 'count',
            value: +prompt('Введите кол-во товаров :)') 
        }
     ]

     alerting.forEach(item => {
        if (item.value == true) {
            product.push(item.name);
        }
        if (item.name == 'count'){
            if(!item.value == 0){
                async function postData(url = '', data = {}) {
                    // Default options are marked with *
                    const response = await fetch(url, {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        headers: {
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                         'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data) // body data type must match "Content-Type" header
                    });
                    return await response.json(); // parses JSON response into native JavaScript objects
                    }
                        //https://nameless-atoll-14634.herokuapp.com/data
                        //http://localhost:3000/data
                    postData('https://nameless-atoll-14634.herokuapp.com/data', { alerting })
                    .then((data) => {
                        console.log(data); // JSON data parsed by `response.json()` call
                    });
                    alert(`Созданые поля: ${product}, кол-во товаров ${item.value}. Нажмите кнопку 'ОК' и скачивание начнется через 5 секунд :)`);
                    document.querySelector('.loading-panel').style = 'display: block; z-index: 99999';
                    document.querySelector('.loading-info').textContent = 'Загрузка файла скоро начнется';
                    setTimeout(() => {
                         //https://nameless-atoll-14634.herokuapp.com/download
                        //http://localhost:3000/download
                        document.querySelector('.loading-panel').style = 'display: none';
                        document.querySelector('.loading-info').textContent = 'Загрузка панели управления';
                        window.open("https://nameless-atoll-14634.herokuapp.com/download");
                    },5000)  
            }
            else{
                alert('Вы ввели неккоретное кол-во продуктов попробуйте заново :)');
            }
        }
     })
     
} else {
    alert('Необходимо перейти на страницу #products и нажать [Импорт файлов] и выбрать необходмые поля');
    product = [];
}