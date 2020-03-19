import {
    DomMaker
} from './DomMaker.js'
import {
    createNewManufacturerForm
} from './NewManufacturerForm.js'

const anchorElement = document.querySelector('.anchor');

const displayManufacturers = (manufacturers) => {
    anchorElement.innerHTML='';
    let manufacturerList = new DomMaker('ul')
        .changeContent('List of manufacturers');

    manufacturers.forEach((manufacturer) => {
        manufacturerList.appendChild(new DomMaker('li')
            .changeContent(manufacturer.name)
            .render())
    });

    anchorElement.append(manufacturerList.render());
    anchorElement.append(createNewManufacturerForm());
}


export {
    displayManufacturers
}