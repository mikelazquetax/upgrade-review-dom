/* window.onload = function (){


} */

var countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
var cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const countriesx = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

window.onload = () => {
  divArray = document.querySelector("div");

  listOfCountries = document.createElement("ul");
  divArray.appendChild(listOfCountries);
  printCountries(countries); // function imprimir paises

  clase = "fn-remove-me";
  deleteClass(clase);

  listOfCars = document.createElement("ul");
  divArray.appendChild(listOfCars);
  printCars(cars);

  createDivCountries(countriesx);

  botonEliminar = document.createElement("button");
  divArray.appendChild(botonEliminar);
  botonEliminar.innerText = "Eliminar Ultimo Pais";
  botonEliminar.addEventListener("click", () => {
    deleteLast(newH4);
  });
};

function printCountries(paises) {
  paises.forEach(function (valor) {
    console.log("El pais es: " + valor);
    paisToPrint = document.createElement("li");
    paisToPrint.innerText = valor;
    listOfCountries.appendChild(paisToPrint);
  });
}

deleteClass = (clase) => {
  var eleToDelete = document.querySelector("p");
  if (eleToDelete.className == clase) {
    eleToDelete.remove();
  }
};

printCars = (coches) => {
  coches.forEach(function (valor) {
    var cochesToPrint = document.createElement("li");
    cochesToPrint.innerText = valor;
    listOfCars.appendChild(cochesToPrint);
  });
};

createDivCountries = (country) => {
  var i = 0;
  country.forEach(function (valorPais) {
    i = i + 1;
    var newDiv = document.createElement("div");
    newDiv.id = i;
    newH4 = document.createElement("h4"); // no ponemos var delante porque queremos que sea una asignacion global
    newH4.innerText = "Pais: " + i;
    newH4.id = i;
    var newImg = document.createElement("img");
    var ownDeleteBtn = document.createElement("button");
    ownDeleteBtn.innerText = "Borrar Div";
    ownDeleteBtn.id = i;
    ownDeleteBtn.addEventListener("click", someFunction); //la funcion someFunction sirve para encontrar el id del boton que se pulsa. con el parametro eventos y el atributo estandar target, podemos encontrar el id
    document.body.appendChild(newDiv);
    newDiv.appendChild(newH4);
    newDiv.appendChild(newImg);
    newDiv.appendChild(ownDeleteBtn);
  });
  return newH4;
  function someFunction(eventos) {
    console.log(eventos.target.id);
    //obtenemos el id del boton pulsado
    var divAEliminar = document.getElementById(eventos.target.id); //obtenemos el  div a eliminar. Se coge el elemento con el primer id
    divAEliminar.remove();
  }
};

function deleteLast(newH4) {
  newH4.remove();
}
