const anchorElement = document.querySelector('.anchor');

let newElement = new DomMaker('h1');
newElement.changeContent('Hi THere');

let tacoFact = new DomMaker('p');
tacoFact.changeContent('TacoCat spelled backwards is taCocaT.')

let tacoList = new DomMaker('ul')
                .changeContent('List of Tacos') 
                .appendChild(new DomMaker('li')
                                .changeContent('Taco Bell')
                                .render()
                            )
                .appendChild(new DomMaker('li')
                                .changeContent('Taco Johns - the Best')
                                .render()
                            );    
anchorElement.append(newElement.render())
anchorElement.append(tacoFact.render())
anchorElement.append(tacoList.render())

const listOfTacos = document.createElement('ul');
const tacoBell = document.createElement('li');
const tacoJohn = document.createElement('li')
listOfTacos.innerText = 'List of Tacos';
tacoBell.innerText = 'Taco Bell';
tacoJohn.innerText = 'Taco John - Still the best';
listOfTacos.appendChild(tacoBell);
listOfTacos.appendChild(tacoJohn);

anchorElement.appendChild(listOfTacos)