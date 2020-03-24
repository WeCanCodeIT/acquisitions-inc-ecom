export {createEditProductView}

const createEditProductView = (product) => {
    const mainElement = document.createElement('section');

    const editForm = document.createElement('form');
    editForm.innerText = 'Update product information';

    const nameDescriptor = document.createElement('p')
    nameDescriptor.innerText = 'Name: ';
    editForm.appendChild(nameDescriptor);

    const nameInput = document.createElement('input');
    nameInput.classList.add('form__name');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', product.name);
    editForm.appendChild(nameInput);

    const descriptionDescriptor = document.createElement('input');
    descriptionDescriptor.innerText = 'Description: ';
    editForm.append(nameDescriptor);

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('form__description');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', product.description);
    editForm.append(descriptionInput);

    const submitButton = document.createElement('button')
    submitButton.innerText = 'Update Information';
    submitButton.addEventListener('click', () => {
        collectData();
    })  

    mainElement.append(editForm);
                        
    return mainElement;
}

const collectData = () => {
    console.log('we did it!')
    // const updatedProductJson = {
        
    // }
}