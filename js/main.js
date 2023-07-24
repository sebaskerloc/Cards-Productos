function getData(){
let promesa = fetch("https://fakestoreapi.com/products/",{
        method:"GET"
    });
    promesa.then((response)=>{
        response.json()
        .then((data)=>{
            createCards(data);
        })
        .catch((error)=>{console.error(error,"ocurrio un error en la solicitud");
    
    }).catch((error)=>{
        console.error(error,"ocurrió un error en la solicitud");
    });
});
};//getData 

getData();
// function createCards(data){
//     data.forEach(producto=>{
//         console.log(producto.id,producto.title);
//     })
// }

let mainProds = document.getElementById("mainProds");

function createCards(prods){
    prods.forEach( prod => {
        mainProds.insertAdjacentHTML("beforeend",
        `<div class="card" style="width: 18rem;">
        <img src="${prod.image}" class="card-img-top" alt="${prod.description}">
        <div class="card-body">
        <h5 class="card-title">${prod.title}</h5>
        <p class="card-text"><strong>${prod.category}</strong></p>
        <p class="card-text">${prod.description.slice(0,80)}...</p>
        <a href="#" class="btn btn-primary">Información</a>
        
        </div>
        </div>
        `)
    })
}