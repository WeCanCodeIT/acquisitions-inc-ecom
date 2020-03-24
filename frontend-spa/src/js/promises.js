// let manufacturer = fetch('http://localhost:8080/manufacturers/1/')
//     .then(response => response.json())
  
// console.log(manufacturer)
// manufacturer
//     .then(json=> console.log(json));

 

const fetchFromApi = async() => {
    let manufacturer = await fetch('http://localhost:8080/manufacturers/1/')
                                .then(response=>response.json())
                                .catch(err => console.error(err))    
    console.log(manufacturer)
    // alert("WAITING")
    return manufacturer
}

let manufacturerAsyncPromise = fetchFromApi();
console.log(manufacturerAsyncPromise);
manufacturerAsyncPromise
    .then(json => console.log(json))

