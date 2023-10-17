import { consultaHoteles } from "./hoteles.js";


// const buttonConsulta = document.getElementById("printButton");
const main = document.querySelector("main");
const menu = document.getElementById("Container_menu");


// buttonConsulta.addEventListener("click", async () => {
    
    export const CardG = async () => {
        
    const respuesta = await consultaHoteles();
    const data = await respuesta.json();
    
    

    data.forEach((hotel) => {


    const cardHotel = document.createElement("article");
    cardHotel.className = "card";
    menu.appendChild(cardHotel);

    const imagenHotel = document.createElement("img");
    imagenHotel.setAttribute("src", hotel.photo);
    imagenHotel.setAttribute("alt", hotel.name);
    cardHotel.appendChild(imagenHotel)

    const nombreHotel = document.createElement("h2");
    nombreHotel.innerText = hotel.name;
    nombreHotel.className = "hotel-name";
    cardHotel.appendChild(nombreHotel);
    
    const subCard = document.createElement("div");
    subCard.className = "subCard";
    cardHotel.appendChild(subCard);

    const subCard_country = document.createElement("div");
    subCard_country.className = "subCard_country";
    subCard.appendChild(subCard_country);

    const subCard_countryName = document.createElement("p");
    subCard_countryName.innerText = hotel.country + "-" +hotel.city;
    subCard_countryName.className = "subCard_countryName";
    subCard_country.appendChild(subCard_countryName);

    const subCard_prices = document.createElement("div");
    subCard_prices.className = "subCard_prices";
    subCard.appendChild(subCard_prices);

    const subCard_pricesRoom = document.createElement("p");
    subCard_pricesRoom.innerText = hotel.rooms ;
    subCard_pricesRoom.className = "subCard_priceRoom";
    subCard_prices.appendChild(subCard_pricesRoom);
    
    const subCard_pricesElement = document.createElement("p");
    subCard_pricesElement.innerText = "rooms - " + hotel.price ;
    subCard_pricesElement.className = "subCard_priceElement";
    subCard_prices.appendChild(subCard_pricesElement);
    
    // const subCard_city = document.createElement("p");
    // subCard_city.innerText = hotel.city;
    // subCard_city.className = "subCard_city";
    // subCard_prices.appendChild(subCard_city);

    const buttonDescription = document.createElement("button");
    buttonDescription.className = "descrip";
    buttonDescription.innerText = "Book it!  ";
    cardHotel.appendChild(buttonDescription);
    
    const buttonClose = document.createElement("button");
    buttonClose.innerText = "-";
    buttonDescription.appendChild(buttonClose);

   
        const description =  document.createElement("p");
        description.innerText = hotel.description;
        description.className = "description";
        cardHotel.appendChild(description);
        


        //    buttonClose.addEventListener('click', ()=>{
        //       description.remove(buttonClose);
        //    });
          
    
    
    

    });


    

};

CardG();