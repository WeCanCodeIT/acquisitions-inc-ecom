import {createSingleProductView} from './singleProductView.js';
import {createEditProductView} from './editProductView.js';
import {createManufacturersView} from './manufacturersView.js';
import {createSingleManufacturerView} from './singleManufacturerView.js';
import {createAddProductView} from './addProductView.js';


export { renderEditProductView, 
    renderManufacturersView, 
    renderSingleManufacturerView, 
    renderSingleProductView,
    renderAddProductView };


const anchor = document.querySelector('.anchor');

const renderAddProductView = (manufacturer) => {
    clearView();
    anchor.appendChild(createAddProductView(manufacturer));
} 

const renderManufacturersView = () => {
    clearView();
    createManufacturersView();
}

const renderSingleProductView = (product) => {
    clearView();
    anchor.appendChild(createSingleProductView(product));
}

const renderSingleManufacturerView = (singleManufacturer) => {
    clearView();
    anchor.appendChild(createSingleManufacturerView(singleManufacturer));
}

const renderEditProductView = (product) => {
    clearView();
    anchor.appendChild(createEditProductView(product));
}

const clearView = () => {
    while(anchor.firstChild){
        anchor.removeChild(anchor.firstChild);
    }
}

renderManufacturersView();