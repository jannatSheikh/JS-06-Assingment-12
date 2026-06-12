const foods = [
    {
        name: "Burger",
        category: "lunch",
        price: 500,
        image: "burger.jpg"
    },

    {
        name: "Sandwich",
        category: "breakfast",
        price: 300,
        image: "sandwich.jpg"
    },

    {
        name: "Pizza",
        category: "dinner",
        price: 1200,
        image: "pizza.jpg"
    },

    {
        name: "Pancake",
        category: "breakfast",
        price: 400,
        image: "pancake.jpg"
    }
];

const menu = document.getElementById("menu");


function displayItems(items){

    menu.innerHTML = "";

    items.forEach((food)=>{

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        <img src="${food.image}">
        <h3>${food.name}</h3>
        <p>Price: Rs ${food.price}</p>
        `;

        menu.appendChild(card);

    });

}


// Filter Function

function filterItems(category){

    if(category === "all"){

        displayItems(foods);

    }
    else{

        const filtered = foods.filter((food)=>{

            return food.category === category;

        });

        displayItems(filtered);

    }

}


// Show all items when page loads

displayItems(foods);const foods = [
    {
        name: "Burger",
        category: "lunch",
        price: 500,
        image: "burger.jpg"
    },

    {
        name: "Sandwich",
        category: "breakfast",
        price: 300,
        image: "sandwich.jpg"
    },

    {
        name: "Pizza",
        category: "dinner",
        price: 1200,
        image: "pizza.jpg"
    },

    {
        name: "Pancake",
        category: "breakfast",
        price: 400,
        image: "pancake.jpg"
    }
];

const menu = document.getElementById("menu");


function displayItems(items){

    menu.innerHTML = "";

    items.forEach((food)=>{

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        <img src="${food.image}">
        <h3>${food.name}</h3>
        <p>Price: Rs ${food.price}</p>
        `;

        menu.appendChild(card);

    });

}


// Filter Function

function filterItems(category){

    if(category === "all"){

        displayItems(foods);

    }
    else{

        const filtered = foods.filter((food)=>{

            return food.category === category;

        });

        displayItems(filtered);

    }

}


// Show all items when page loads

displayItems(foods);