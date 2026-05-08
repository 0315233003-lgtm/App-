console.log("script started");
// Function to hide all cards
let recipes = [
    {
        title: "Creamy Pasta Carbonara",
        rating: "4.8",
        cookTime: "25 min",
        image: "creamy_carbonara.jpg",
        hidden: false,
        instructions:"Boil 1 lb pasta in salted water until tender. 2. Cook 6 slices of bacon until crispy, then chop. 3. In a bowl, whisk 3 eggs with 1 cup grated Parmesan cheese. 4. Drain pasta and mix with bacon. 5. Remove from heat and stir in egg mixture quickly. 6. Add black pepper and serve hot."
    },
    {
        title: "Spicy Chicken Tikka Masala",
        rating: "4.7",
        cookTime: "45 min",
        image: "tikkamasala.jpg",
        hidden: false,
        instructions:"Cut 1 lb chicken into cubes and marinate in yogurt and spices for 30 minutes. 2. Cook chicken in a pan until browned. 3. In another pan, sauté 1 chopped onion and 2 cloves garlic. 4. Add 1 can tomato sauce, 1 cup cream, and spices (cumin, paprika, garam masala). 5. Add cooked chicken and simmer for 15 minutes. 6. Serve with rice or naan bread."
    },
    {
        title: "Rich Chocolate Cake",
        rating: "4.9",
        cookTime: "60 min",
        image: "chocolatecake.jpg",
        hidden: false,
        instructions:"Preheat oven to 350°F. Grease a 9-inch pan. 2. Mix 1 cup flour, 1 cup sugar, 1/2 cup cocoa powder, 1 tsp baking soda, and 1/2 tsp salt. 3. Add 1 egg, 1/2 cup milk, 1/4 cup oil, and 1 tsp vanilla. Mix well. 4. Pour into pan and bake for 30-35 minutes. 5. Let cool and frost with chocolate frosting."
    },
    {
        title: "Classic Caesar Salad",
        rating: "4.6",
        cookTime: "15 min",
        image: "cesarsalad.jpg",
        hidden: false,
        instructions:"Chop 1 head of romaine lettuce into bite-sized pieces. 2. In a bowl, mix 1/2 cup mayo, 2 tbsp lemon juice, 2 cloves minced garlic, and 1/4 cup grated Parmesan cheese. 3. Toss lettuce with dressing. 4. Add croutons and extra Parmesan on top. 5. Add black pepper and serve immediately."

    },
    {
        title: "Cajun Seafood Boil",
        rating: "4.6",
        cookTime: "15 min",
        image: "seafood.jpg",
        hidden: false,
        instructions:"Fill a large pot with water, add 3 tbsp Cajun seasoning, 2 lemons, and 4 cloves garlic. Bring to a boil. 2. Add 2 lbs potatoes and cook for 10 minutes. 3. Add 4 ears of corn and cook for 5 minutes. 4. Add 1 lb shrimp, 1 lb crab legs, and 1 lb sausage. Cook for 5 minutes. 5. Drain and serve with melted butter."
    },
    {
        title: "Mexican Chicken Flautas",
        rating: "4.6",
        cookTime: "15 min",
        image: "chicken-flautas.jpg",
        hidden: false,
        instructions:"Cook and shred 2 chicken breasts. Mix with 1 cup shredded cheese and 1/4 cup salsa. 2. Warm 8 corn tortillas to make them flexible. 3. Place chicken mixture on each tortilla and roll tightly. 4. Secure with toothpicks. 5. Fry in oil until golden and crispy, about 3 minutes per side. 6. Serve with sour cream, guacamole, and salsa."
    },
    {
        title: "Birria Tacos",
        rating: "4.9",
        cookTime: "120 min",
        image: "birriatacos.jpeg",
        hidden: true,
        instructions:"Season 3 lbs beef with salt, pepper, cumin, and chili powder. 2. In a pot, add beef, 1 chopped onion, 4 cloves garlic, 3 dried chilies, and 4 cups beef broth. 3. Simmer for 2-3 hours until beef is tender and shreds easily. 4. Shred beef and strain broth. 5. Dip corn tortillas in broth, fill with beef and cheese, and fold. 6. Fry until crispy and serve with broth for dipping."
    },
    {
        title: "Mango Sushi Roll",
        rating: "4.3",
        cookTime: "20 min",
        image:"sushi.jpg",
        hidden: true,
        instructions:"Cook 2 cups sushi rice and let cool. Mix with 2 tbsp rice vinegar. 2. Place a sheet of nori on a bamboo mat. 3. Spread rice evenly on nori, leaving 1 inch at the top. 4. Add sliced mango, cucumber, and avocado in a line. 5. Roll tightly using the mat. 6. Slice into 8 pieces and serve with soy sauce."
    },
    {
        title: "Italian Pizza",
        rating: "5.0",
        cookTime: "60 min",
        image: "italian pizza.jpg",
        hidden: true,
        instructions:"Preheat oven to 475°F. 2. Roll out pizza dough into a 12-inch circle. 3. Spread 1/2 cup tomato sauce evenly on dough. 4. Add 2 cups shredded mozzarella cheese. 5. Top with fresh basil leaves and a drizzle of olive oil. 6. Bake for 12-15 minutes until crust is golden and cheese is bubbly."
    },
    {
        title:"Fufu and Egusi",
        rating: "4.8",
        cookTime: "55 min",
        image: "Egusi.jpg",
        hidden: true,
        instructions:""

    },
    {
        title: "Pupusa",
        rating: "4.3",
        cookTime: "30 min",
        image: "pupusa.jpg",
        hidden: true,
        instructions:""
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

    let instructionsDiv = document.createElement('div');
    instructionsDiv.className = 'recipe-instructions';
    instructionsDiv.innerText = recipe.instructions;
    instructionsDiv.style.display = 'none'; // Hidden by default
    
    
    recipeMeta.appendChild(ratingSpan);
    recipeMeta.appendChild(cookTimeSpan);
    recipeInfo.appendChild(recipeTitle);
    recipeInfo.appendChild(recipeMeta);
    newCard.appendChild(recipeImage);
    newCard.appendChild(recipeInfo);
    newCard.appendChild(instructionsDiv);

    newCard.addEventListener('mouseenter', showInstructions);
    newCard.addEventListener('mouseleave', hideInstructions);
    
    
    return newCard;
}

function showInstructions(event) {
    let card = event.target;
    // Find the instructions div inside this card
    let instructions = card.querySelector('.recipe-instructions');
    instructions.style.display = 'block';
}

function hideInstructions(event) {
    let card = event.target;
    let instructions = card.querySelector('.recipe-instructions');
    instructions.style.display = 'none';
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


