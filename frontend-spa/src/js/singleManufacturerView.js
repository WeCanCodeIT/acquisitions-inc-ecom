export {createSingleManufacturerView};
import {renderSingleProductView, renderAddProductView} from './app.js';

const createSingleManufacturerView = (manufacturer) =>{

    const mainElement = document.createElement('section');

    const title = document.createElement('h2');
    title.innerText = manufacturer.name;
    mainElement.appendChild(title);

    const description = document.createElement('p');
    description.innerText= 'Description: ' + manufacturer.description;
    mainElement.appendChild(description);

    const productsList = document.createElement('ul');
    productsList.innerText = 'List of Products:';
    mainElement.appendChild(productsList);

    manufacturer.products.forEach(product=>{
        const productElement = document.createElement('li');
        productElement.innerText = product.name;
        productsList.appendChild(productElement);

        productElement.addEventListener('click', ()=>{
            renderSingleProductView(product);
    })
})

    const addButton = document.createElement('button');
    addButton.innerText = "Add Product";
    addButton.addEventListener('click', () => {
        renderAddProductView(manufacturer)
    });
    mainElement.append(addButton);


    return mainElement;
}