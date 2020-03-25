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
        collectData(product);
    })  
    editForm.append(submitButton);
    mainElement.append(editForm);
                        
    return mainElement;
}

const collectData = (product) => {
    //create Post in productController on back end
    fetch("http://localhost:8080/products/" + product.id + "/update/", {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json'
        },
        //Create and import a function for rendering an all products view or 
        body: JSON.stringify({
            "name": document.querySelector('.form__name'),
            "description": document.querySelector('.form__description')
        }) 
      }).then(()=> renderManufacturersView()); //Change to all products or manufacturer view

}