const anchorElement = document.querySelector('.anchor');

const getAllManufacturers = () => {
    fetch('http://localhost:8080/manufacturers')
        .then(response => response.json())
        .then(manString => displayManufacturers(manString));
}

const displayManufacturers = (manufacturers) => {
    let manufacturerList = new DomMaker('ul')
        .changeContent('List of manufacturers');

    manufacturers.forEach((manu) => {
        manufacturerList.appendChild(new DomMaker('li')
            .changeContent(JSON.stringify(manu.name))
            .render())
    });
    
    anchorElement.append(manufacturerList.render());
}

getAllManufacturers();