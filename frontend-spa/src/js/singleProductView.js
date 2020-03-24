export {createSingleProductView};
import {renderEditProductView} from './app.js';

const createSingleProductView = (product) => {

    const mainElement = document.createElement('section');

    const title = document.createElement('h2');
    title.innerText = product.name;
    mainElement.appendChild(title);

    const description = document.createElement('p');
    description.innerText= 'Description: ' + product.description;
    mainElement.appendChild(description);

    const editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.addEventListener('click', () => {
        renderEditProductView(product)
    });
    mainElement.append(editButton);

    return mainElement;
}
