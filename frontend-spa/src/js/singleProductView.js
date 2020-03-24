export {createSingleProductView}

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
    editButton.addEventListener('click', console.log('It worked!'));
    mainElement.append(editButton);

    return mainElement;
}
