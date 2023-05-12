const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Constrole Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  // Produto 5 
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  } ,
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },

];
let actionFiguresArray = []
let paintingsArray = []

function separateItens(productsArray){
  for(let i=0; i < productsArray.length; i++ ){
    if (productsArray[i].type ==="Action Figures" )  {
      actionFiguresArray.push(productsArray[i])
      } else if (productsArray[i].type === "Paintings"){
      paintingsArray.push(productsArray[i])
    }
  }
}

separateItens(productsArray)

function renderPaintings(list){
  let listaPaintings = document.querySelector('#paintings');
  
  for(let i =0; i < list.length; i++) {
      let product = (list[i]);

      let li = document.createElement('li');
      let img = document.createElement('img');
      let h2 = document.createElement ('h2');
      let p = document.createElement('p');

      img.src = product.image;
      img.className = "paitings"
      img.alt = product.name;
      h2.innerText = product.name;
      h2.classList.add("cardTitle")
      p.innerText = product.price;
  
      li.append (img, h2, p);

     
      listaPaintings.appendChild(li)
           
    }
}

function renderActionFigures(list){
  let listaActionFigures = document.querySelector('#actionfigures'); 
  

  for(let i =0; i < list.length; i++) {
      let product = (list[i]);

      let li = document.createElement('li');
      let img = document.createElement('img');
      let h2 = document.createElement ('h2');
      let p = document.createElement('p');

      img.src = product.image;
      img.className = "paitings"
      img.alt = product.name;
      h2.innerText = product.name;
      h2.classList.add("cardTitle")
      p.innerText = product.price;
  
      li.append (img, h2, p);

     
      listaActionFigures.appendChild(li)
           
    }
}
renderActionFigures(actionFiguresArray);
renderPaintings(paintingsArray);