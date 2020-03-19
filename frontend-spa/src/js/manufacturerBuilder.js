import {
    displayManufacturers
} from './ManufacturersPage.js'


const getAllManufacturers = () => {
    fetch('http://localhost:8080/manufacturers/')
        .then(response => response.json())
        .then(manufacturerJson => displayManufacturers(manufacturerJson));
}


getAllManufacturers();

export {getAllManufacturers}