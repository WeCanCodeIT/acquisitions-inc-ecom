export {createManufacturersView};
import {renderSingleManufacturerView} from './app.js';

const createManufacturersView = () => fetch('http://localhost:8080/manufacturers/')
                                .then(response => response.json())
                                .then(manufacturersPromiseValue => 
                                    document.querySelector('.anchor').append(
                                        createManufacturersComponent(manufacturersPromiseValue)));

const createManufacturersComponent = (manufacturers) =>{
    const mainElement = document.createElement('section');
    const title = document.createElement('h2');
    title.innerText = 'Manufacturers we have:';
    mainElement.appendChild(title);
    const manufacturersList = document.createElement('ul');
    mainElement.appendChild(manufacturersList);
    manufacturers.forEach(manufacturer =>{
        const manufacturerName = document.createElement('li');
        manufacturerName.innerText = manufacturer.name;
        mainElement.appendChild(manufacturerName);

        manufacturerName.addEventListener('click',()=>{
            console.log(manufacturer)
            renderSingleManufacturerView(manufacturer);
        })
    })

    return mainElement
}