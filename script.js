let lista = [
    {
        image: "/assets/img/painting/clock.jpg",
        name: "Clock",
        price: 35.99,
        type: "paintings",
    },
    {
        image: "/assets/img/painting/gamepad.jpg",
        name: "Gamepad",
        price: 55.69,
        type: "paintings",
    },
    {
        image: "/assets/img/painting/personagem.jpg",
        name: "R2-D2",
        price: 94.65,
        type: "paintings",
    },
    {
        image: "/assets/img/actions/animewoman.jpg",
        name: "Anime",
        price: 71.85,
        type: "actionFigures",
    },
    {
        image: "/assets/img/actions/dragonballpersonagem.jpg",
        name: "Kakaroto",
        price: 75.64,
        type: "actionFigures",
    },
    {
        image: "/assets/img/actions/starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: 81.64,
        type: "actionFigures",
    },
    {
        image: "/assets/img/actions/dragonballpersonagem.jpg",
        name: "Kakaroto",
        price: 75.64,
        type: "actionFigures",
    },
    {
        image: "/assets/img/actions/animewoman.jpg",
        name: "Anime",
        price: 71.85,
        type: "actionFigures",
    },
    {
        image: "/assets/img/actions/starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: 81.64,
        type: "actionFigures",
    },
    {
        image: "/assets/img/actions/dragonballpersonagem.jpg",
        name: "Kakaroto",
        price: 75.64,
        type: "actionFigures",
    },
    {
        image: "/assets/img/actions/animewoman.jpg",
        name: "Anime",
        price: 71.85,
        type: "actionFigures",
    },
    {
        image: "/assets/img/actions/starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: 81.64,
        type: "actionFigures",
    },
]
let listFigures = []
let listFrames = []

function separateItens(list) {
    let itemLista = list
    for (let i = 0; i < itemLista.length; i++) {
        if (itemLista[i].type == "paintings") {
            listFrames.push(itemLista[i])
        }
        else if (itemLista[i].type == "actionFigures") {
            listFigures.push(itemLista[i])
        }
    }
}
separateItens(lista)

let sectionFigure = document.querySelector(".conteiner-section-Figures")
let ulFigure = document.createElement("ul")
ulFigure.classList.add("lista-loja")
sectionFigure.appendChild(ulFigure)


let sectionFrames = document.querySelector(".conteiner-section-Paintings")
let ulFrames = document.createElement("ul")
ulFrames.classList.add("lista-loja")
sectionFrames.appendChild(ulFrames)

function listSectionFigure(list) {
    for (let i = 0; i < list.length; i++) {

        let elementoLista = document.createElement("li")
        elementoLista.classList.add("conteiner-li")

        let imagem = document.createElement("img")
        imagem.src = list[i].image
        imagem.alt = list[i].name
        imagem.classList.add("lista-img")

        let nome = document.createElement("p")
        nome.classList.add("lista-p")
        nome.innerHTML = `${list[i].name}`


        let preco = document.createElement("span")
        preco.classList.add("lista-span")
        preco.innerHTML = `R$${list[i].price}`

        elementoLista.appendChild(imagem)
        elementoLista.appendChild(nome)
        elementoLista.appendChild(preco)

        ulFigure.appendChild(elementoLista)
    }
}
listSectionFigure(listFigures)


function listSectionFrames(list) {
    for (let i = 0; i < list.length; i++) {

        let elementoLista = document.createElement("li")
        elementoLista.classList.add("conteiner-li")

        let imagem = document.createElement("img")
        imagem.src = list[i].image
        imagem.alt = list[i].name
        imagem.classList.add("lista-img")

        let nome = document.createElement("p")
        nome.classList.add("lista-p")
        nome.innerHTML = `${list[i].name}`

        let preco = document.createElement("span")
        preco.classList.add("lista-span")
        preco.innerHTML = `R$${list[i].price}`

        elementoLista.appendChild(imagem)
        elementoLista.appendChild(nome)
        elementoLista.appendChild(preco)

        ulFrames.appendChild(elementoLista)
    }
}
listSectionFrames(listFrames)

