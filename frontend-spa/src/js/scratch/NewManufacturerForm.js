import{
DomMaker
} from './DomMaker.js'
import{
    InputMaker
} from './InputMaker.js'
import{ getAllManufacturers} from './manufacturerBuilder.js'

const createNewManufacturerForm= ()=>{
    const form = new DomMaker('form')
                    .changeContent('Add new Manufacturer:')
                    .appendChild(new DomMaker('p')
                                    .changeContent('Name:')
                                    .render())
                    .appendChild(new InputMaker()
                                    .changeInputType('text')
                                    .addClassName('form__name')
                                    .addPlaceholder('New manufacturer name')
                                    .render())
                    .appendChild(new DomMaker('p')
                                    .changeContent('Description:')
                                    .render())
                    .appendChild(new DomMaker('textarea')
                                    .addClassName('form__description')
                                    .render())
                    .appendChild(new DomMaker('button')
                                    .changeContent('Submit New Manufacturer')
                                    .addOnClickAction(()=>{
                                        collectData();
                                        
                                    })
                                    .render())
                    .render();
    return form;
}

const collectData = () =>{
    const newName = document.querySelector('.form__name');
    const newDescription = document.querySelector('.form__description');

    const newManufacturerJson = {
        "name": newName.value,
        "description": newDescription.value
    }
    fetch("http://localhost:8080/manufacturers/", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newManufacturerJson) 
      }).then(()=> getAllManufacturers());
}

export {createNewManufacturerForm}