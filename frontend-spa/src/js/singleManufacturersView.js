export {createSingleManufacturerView};
import {renderEditProductView} from './app.js'

const createSingleManufacturerView = (manufacturer) =>{

    const mainElement = document.createElement('section');
    const title = document.createElement('h2');
    title.innerText = manufacturer.name;
    mainElement.appendChild(title);
    const description = document.createElement('p');
    description.innerText=manufacturer.description;
    mainElement.appendChild(description);
    const productsList = document.createElement('ul');
    mainElement.appendChild(productsList);
    manufacturer.products.forEach(product=>{
        const productElement = document.createElement('li');
        productElement.innerText = product.name;
        productsList.appendChild(productElement);

        productElement.addEventListener('click', () => {
            renderEditProductView(product);
        })
    })

    return mainElement;
}