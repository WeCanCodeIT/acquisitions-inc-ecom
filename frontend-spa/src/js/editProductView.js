export {createEditProductView};

const createEditProductView = (product) => {
    const mainElement = document.createElement('section');

    const editForm = document.createElement('form')
    editForm.innerText = 'Update product information';

    const productName = document.createElement('p');
    productName.innerText = 'Name: ' + product.name;
    editForm.append(productName);

    const productDescription = document.createElement('p');
    productDescription.innerText = 'Description: ' + product.description;
    editForm.append(productDescription);

    const descriptionTitle = document.createElement('p');
    descriptionTitle.innerText = 'Change Description: ';
    editForm.append(descriptionTitle);

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('form__description');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', product.description);
    editForm.append(descriptionInput);

    const submitButton = document.createElement('button');
    submitButton.innerText = 'Update Information';
    submitButton.addEventListener('click', () =>{
        collectData(product.id);
    })
    editForm.append(submitButton);

    mainElement.append(editForm);
    return mainElement;

}

const collectData = (productId) => {

    const productJson = {
        "description": document.querySelector('.form__description').value
    }
    fetch("http://localhost:8080/products/" + productId + "/update/", {
        method: 'PATCH', 
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productJson)
    }).then(() => renderManufacturersView());

}