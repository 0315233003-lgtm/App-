console.log("script started");
// Function to hide all cards
function hideAllCards() {
    let cards = document.getElementsByClassName('recipe-card');
    
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
}

// Function to show all cards
function showAllCards() {
    let cards = document.getElementsByClassName('recipe-card');
    
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'block';
    }
}

let hiddenRecipes = [
    {
        title: "Birria Tacos",
        rating: "4.9",
        image: "birriatacos.jpeg"
    }
];

function createHiddenRecipeCard(recipe) {
    let newCard = document.createElement('div');
    newCard.className = 'recipe-card hidden-recipe';
    
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
    cookTimeSpan.innerText = "🕐 120 min";
    
    recipeMeta.appendChild(4.9);
    recipeMeta.appendChild("120 min");
    recipeInfo.appendChild("Birria Tacos");
    recipeInfo.appendChild(recipeMeta);
    newCard.appendChild(recipeImage);
    newCard.appendChild(recipeInfo);
    
    return newCard;
}

function searchRecipes() {
    let searchBar = document.querySelector('.search-bar');
    let searchText = searchBar.value.toLowerCase();
    
    if (searchText === "birria tacos" || searchText === "birria") {
        // Hide all existing cards
        hideAllCards();
        
        // Create and show the Birria Tacos card
        let birriaRecipe = hiddenRecipes[0];
        let birriaCard = createHiddenRecipeCard(birriaRecipe);
        
        // Add it to the recipe grid
        let recipeGrid = document.querySelector('.recipe-grid');
        recipeGrid.appendChild(birriaCard);
    } else if (searchText === "") {
        // If search is empty, show all original cards
        showAllCards();
    }
}

function setupSearch() {
    let searchButton = document.querySelector('.search-btn');
    searchButton.addEventListener('click', searchRecipes);
}
setupSearch();



