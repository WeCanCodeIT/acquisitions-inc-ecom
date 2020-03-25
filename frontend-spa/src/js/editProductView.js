export {createEditProductView};
import{renderManufacturersView} from './app.js';

const createEditProductView = (product) => {
    const mainElement = document.createElement('section');

    const editForm = document.createElement('form');
    editForm.innerText = 'Update product information';

    const nameDescriptor = document.createElement('p')
    nameDescriptor.innerText = 'Name: ';
    editForm.append(nameDescriptor);

    const nameInput = document.createElement('input');
    nameInput.classList.add('form__name');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', product.name);
    editForm.append(nameInput);

    const descriptionDescriptor = document.createElement('p');
    descriptionDescriptor.innerText = 'Description: ';
    editForm.append(descriptionDescriptor);

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('form__description');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', product.description);
    editForm.append(descriptionInput);

    const submitButton = document.createElement('button')
    submitButton.innerText = 'Update Information';
    submitButton.addEventListener('click', () => {
        collectData(product.id);
    })  
    editForm.append(submitButton);
    mainElement.append(editForm);
                        
    return mainElement;
}

const collectData = (productId) => {

    const manufacturerJson = {
            "name": document.querySelector('.form__name').value,
            "description": document.querySelector('.form__description').value
        }

    fetch("http://localhost:8080/products/" + productId + "/update/", {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(manufacturerJson) 
      }).then(()=> renderManufacturersView()); 

}