export {createAddProductView};
import{renderManufacturersView} from './app.js';

const createAddProductView = (manufacturer) => {
    const mainElement = document.createElement('section');

    const editForm = document.createElement('form');
    editForm.innerText = 'Update product information';

    const nameDescriptor = document.createElement('p');
    nameDescriptor.innerText = 'Name: ';
    editForm.append(nameDescriptor);

    const nameInput = document.createElement('input');
    nameInput.classList.add('form__name');
    nameInput.setAttribute('type', 'text');
    editForm.append(nameInput);

    const descriptionDescriptor = document.createElement('p');
    descriptionDescriptor.innerText = 'Description: ';
    editForm.append(descriptionDescriptor);

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('form__description');
    descriptionInput.setAttribute('type', 'text');
    editForm.append(descriptionInput);

    const submitButton = document.createElement('button')
    submitButton.innerText = 'Add Product';
    submitButton.addEventListener('click', () => {
        collectData(manufacturer.id);
    })  
    editForm.append(submitButton);
    mainElement.append(editForm);
                        
    return mainElement;
}

const collectData = (manufacturerId) => {

    console.log(manufacturerId);
    const manufacturerJson = {
            "name": document.querySelector('.form__name').value,
            "description": document.querySelector('.form__description').value
        }
    fetch("http://localhost:8080/products/" + manufacturerId + "/", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(manufacturerJson) 
      }).then(()=> renderManufacturersView()); 

}