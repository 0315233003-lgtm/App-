console.log("script started");
// Function to hide all cards
let recipes = [
    {
        title: "Creamy Pasta Carbonara",
        rating: "4.8",
        cookTime: "25 min",
        image: "creamy_carbonara.jpg",
        hidden: false
    },
    {
        title: "Spicy Chicken Tikka Masala",
        rating: "4.7",
        cookTime: "45 min",
        image: "tikkamasala.jpg",
        hidden: false
    },
    {
        title: "Rich Chocolate Cake",
        rating: "4.9",
        cookTime: "60 min",
        image: "chocolatecake.jpg",
        hidden: false
    },
    {
        title: "Classic Caesar Salad",
        rating: "4.6",
        cookTime: "15 min",
        image: "cesarsalad.jpg",
        hidden: false
    },
    {
        title: "Cajun Seafood Boil",
        rating: "4.6",
        cookTime: "15 min",
        image: "seafood.jpg",
        hidden: false
    },
    {
        title: "Mexican Chicken Flautas",
        rating: "4.6",
        cookTime: "15 min",
        image: "chicken-flautas.jpg",
        hidden: false
    },
    {
        title: "Birria Tacos",
        rating: "4.9",
        cookTime: "120 min",
        image: "birriatacos.jpeg",
        hidden: true
    },
    {
        title: "Mango Sushi Roll",
        rating: "4.3",
        cookTime: "20 min",
        image:"sushi.jpg",
        hidden: true
    },
    {
        title: "Italian Pizza",
        rating: "5.0",
        cookTime: "60 min",
        image: "italian pizza.jpg",
        hidden: true
    },
    {
        title:"Fufu and Egusi",
        rating: "4.8",
        cookTime: "55 min",
        image: "Egusi.jpg",
        hidden: true

    },
    {
        title: "Pupusa",
        rating: "4.3",
        cookTime: "30 min",
        image: "pupusa.jpg",
        hidden: true
    }
];

function createRecipeCard(recipe) {
    let newCard = document.createElement('div');
    newCard.className = 'recipe-card';
    
    let recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeImage.className = 'recipe-image';
    
    let recipeInfo = document.createElement('div');
    recipeInfo.className = 'recipe-info';
    
    let recipeTitle = document.createElement('h3');
    recipeTitle.className = 'recipe-title';
    recipeTitle.innerText = recipe.title;
    
    let recipeMeta = document.createElement('div');
    recipeMeta.className = 'recipe-meta';
    
    let ratingSpan = document.createElement('span');
    ratingSpan.className = 'rating';
    ratingSpan.innerText = "⭐ " + recipe.rating;
    
    let cookTimeSpan = document.createElement('span');
    cookTimeSpan.className = 'cook-time';
    cookTimeSpan.innerText = "🕐 " + recipe.cookTime;
    
    recipeMeta.appendChild(ratingSpan);
    recipeMeta.appendChild(cookTimeSpan);
    recipeInfo.appendChild(recipeTitle);
    recipeInfo.appendChild(recipeMeta);
    newCard.appendChild(recipeImage);
    newCard.appendChild(recipeInfo);
    
    return newCard;
}

function displayRecipes() {
    let recipeGrid = document.querySelector('.recipe-grid');
    
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].hidden === false) {
            let card = createRecipeCard(recipes[i]);
            recipeGrid.appendChild(card);
        }
    }
}


// Call this when the page loads
displayRecipes(); 

function setupSearch() {
    let searchButton = document.querySelector('.search-btn');
    searchButton.addEventListener('click', searchRecipes);
}

setupSearch();

function searchRecipes() {
    console.log("Search button clicked!");
    
    let searchBar = document.querySelector('.search-bar');
    let searchText = searchBar.value.toLowerCase();
    console.log("Search text:", searchText);
    
    // Clear the recipe grid
    let recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerText = '';
    
    // If search is empty, show only non-hidden recipes
    if (searchText === '') {
        displayRecipes();
        return;
    }
    
    // Loop through ALL recipes (including hidden ones)
    for (let i = 0; i < recipes.length; i++) {
        let recipeTitle = recipes[i].title.toLowerCase();
        console.log("Checking recipe:", recipeTitle, "against search:", searchText);
        
        // Check if the recipe title includes the search text
        if (recipeTitle.includes(searchText)) {
            console.log("MATCH FOUND:", recipes[i].title);
            let card = createRecipeCard(recipes[i]);
            recipeGrid.appendChild(card);
        }
    }
}


