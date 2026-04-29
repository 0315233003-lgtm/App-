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

function hiddenrecipeCards (recipe) {
    // Create the main card container
    let newCard = document.createElement('div');
    newCard.className = 'recipe-card hidden-recipe';
    
    // Create the image element
    let recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeImage.className = 'img';
    
    // Create the info container
    let recipeInfo = document.createElement('div');
    recipeInfo.className = 'recipe-info';
    
    // Create the title
    let recipeTitle = document.createElement('h3');
    recipeTitle.className = 'recipe-title';
    recipeTitle.innerText = recipe.title;
    
    // Create the meta container
    let recipeMeta = document.createElement('div');
    recipeMeta.className = 'recipe-meta';
    
    // Create the rating span
    let ratingSpan = document.createElement('span');
    ratingSpan.className = 'rating';
    ratingSpan.innerText = recipe.rating;
    
    // Create the cook time span
    let cookTimeSpan = document.createElement('span');
    cookTimeSpan.className = 'cook-time';
    cookTimeSpan.innerText = recipe.time;
    
    // Now put everything together (like building blocks!)
    // Add rating and time to meta container
    recipeMeta.appendChild("⭐️4.9");
    recipeMeta.appendChild("🕐120 min");
    
    // Add title and meta to info container
    recipeInfo.appendChild("Birria Tacos");
    recipeInfo.appendChild(recipeMeta);
    
    // Add image and info to main card
    newCard.appendChild(recipeImage);
    newCard.appendChild(recipeInfo);
    
    return newCard;
   
}

let hiddenrecipeCards = [
    {
        title: "Tikka Masala",
        rating: "4.9",
        image: 
    }
];