import {createEditProductView} from './editProductView.js';
import {createManufacturersView} from './manufacturersView.js';
import {createSingleManufacturerView} from './singleManufacturersView.js';
export {renderManufacturersView,
        renderSingleManufacturerView,
        renderEditProductView};

const anchor = document.querySelector('.anchor');

const renderEditProductView = (product) => {
    clearView();
    const editViewHtml = createEditProductView(product);
    anchor.append(editViewHtml);
}
const renderManufacturersView = () => {
    clearView();
    createManufacturersView();
}

const renderSingleManufacturerView = (manufacturer) => {
    clearView();
    const singleManufacturerViewHtml = createSingleManufacturerView(manufacturer);
    anchor.append(singleManufacturerViewHtml);
}

const clearView = () => {
    while(anchor.firstChild){
        anchor.removeChild(anchor.firstChild);
    }
}
renderManufacturersView();






// console.log(manufacturersElement)
// anchor.appendChild(manufacturersElement)









// const apiAddress = 'http://localhost:8080'

// const fetchManufacturers = async () => {
//     let manufacturers = await fetch(apiAddress + `/manufacturers/`)
//         .then(response => response.json());
//     return manufacturers;
// }

// const fetchProductManufacturer = async (productId) => {
//     let manufacturer = await fetch(apiAddress + `/products/${productId}/manufacturer/`)
//         .then(response => response.json());
//     return manufacturer;
// }

// const renderManufacturersView = (manufacturers) => {
//     const manufacturersElement = document.createElement('section');
//     const manufacturersTitle = document.createElement('h2');
//     manufacturersTitle.innerText = 'Our Items\' Manufacturers';
//     manufacturersElement.appendChild(manufacturersTitle);
//     const manufacturersList = document.createElement('ul');
//     manufacturersElement.appendChild(manufacturersList);
//     manufacturers.forEach(manufacturer => {
//         let manufacturerElement = document.createElement('li');
//         manufacturerElement.innerText = manufacturer.name;
//         manufacturerElement.addEventListener('click', () => {
//             const manufacturerView = renderManufacturerView(manufacturer);
//             redrawMainView(manufacturerView);
//         })
//         manufacturersList.appendChild(manufacturerElement);
//     });
//     return manufacturersElement;
// }

// const renderManufacturerView = (manufacturer) => {
//     const manufacturerElement = document.createElement('section');
//     const manufacturerTitle = document.createElement('h2');
//     manufacturerTitle.innerText = manufacturer.name;
//     manufacturerElement.appendChild(manufacturerTitle);
//     const manufacturerDescription = document.createElement('p');
//     manufacturerDescription.innerText = manufacturer.description;
//     manufacturerElement.appendChild(manufacturerDescription);
//     const productsList = document.createElement('ul');
//     manufacturerElement.appendChild(productsList);
//     manufacturer.products.forEach(product => {
//         let productElement = document.createElement('li');
//         productElement.innerText = product.name;
//         productElement.addEventListener('click', () => {
//             const productView = renderProductView(product);
//             redrawMainView(productView);
//         })
//         productsList.appendChild(productElement);
//     })
//     return manufacturerElement;
// }

// const renderProductView = (product) => {
//     const productElement = document.createElement('section');
//     const productTitle = document.createElement('h2');
//     productTitle.innerText = product.name;
//     productElement.appendChild(productTitle);
//     const productDescription = document.createElement('p');
//     productDescription.innerText = product.description;
//     productElement.appendChild(productDescription);
//     const productManufacturerLink = document.createElement('a');
//     productManufacturerLink.innerText = 'Return to the manufacturer.';
//     productManufacturerLink.addEventListener('click', (event) => {
//         event.preventDefault();
//         let manufacturer = fetchProductManufacturer(product.id);
//         manufacturer.then(manufacturer=>renderManufacturerView(manufacturer))
//                     .then(view => redrawMainView(view))
//     })
//     productElement.appendChild(productManufacturerLink);
//     return productElement;
// }

// const redrawMainView = (element) => {
//     const anchor = document.querySelector('.anchor');
//     while (anchor.firstChild) {
//         anchor.removeChild(anchor.firstChild);
//     }
//     anchor.appendChild(element)
// }

// let manufacturers = fetchManufacturers();
// const manufacturersView = manufacturers.then(json => renderManufacturersView(json))

// manufacturersView.then(view => redrawMainView(view));