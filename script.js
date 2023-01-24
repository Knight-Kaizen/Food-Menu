let allItemsBtn = document.querySelector(".allItems");
let breakfastItemBtn = document.querySelector(".breakfast");
let calorieBtn = document.querySelector(".lessCalories");
let junkFoodBtn = document.querySelector(".junkFood");


let displayArr = [];

function food(name, category, calories, isJunk){
    this.name = name, 
    this.category = category,
    this.calories = calories,
    this.junkFood = isJunk
}

let arrayFoodItems = [];

//breakfast
arrayFoodItems.push(new food("Egg-bread", "breakfast", 300, false));
arrayFoodItems.push(new food("Aloo-Paratha", "breakfast", 400, false));
arrayFoodItems.push(new food("Pancakes", "breakfast", 500, true));
arrayFoodItems.push(new food("Buttered-Toast", "breakfast", 600, true));

//lunch
arrayFoodItems.push(new food("Salad", "lunch", 300, false));
arrayFoodItems.push(new food("Broccoli", "lunch", 400, false));
arrayFoodItems.push(new food("Nachos", "lunch", 500, true));
arrayFoodItems.push(new food("Jalapeño Poppers", "lunch", 600, true));

//snacks
arrayFoodItems.push(new food("Burger", "snacks", 300, false));
arrayFoodItems.push(new food("French-fries", "snacks", 400, false));
arrayFoodItems.push(new food("Samosa", "snacks", 500, true));
arrayFoodItems.push(new food("Oatmeal", "snacks", 600, true));

//dinner
arrayFoodItems.push(new food("Paneer", "dinner", 300, false));
arrayFoodItems.push(new food("Chicken Curry", "dinner", 400, false));
arrayFoodItems.push(new food("Fried-rice", "dinner", 500, true));
arrayFoodItems.push(new food("Pan-Pizza", "dinner", 600, true));

// console.log(arrayFoodItems);

def();
display(arrayFoodItems);


allItemsBtn.addEventListener("click", ()=>{
    displayArr = arrayFoodItems.map((item)=>{
        return item;
    })
    display(displayArr);
})



breakfastItemBtn.addEventListener("click", ()=>{
    displayArr = arrayFoodItems.filter((item)=>{
        if(item.category == "breakfast")
        return item;
    })

    display(displayArr);
})


calorieBtn.addEventListener("click", ()=>{
    displayArr = arrayFoodItems.filter((item)=>{
        if(item.calories <= 400)
        return item;
    })
    display(displayArr);
})


junkFoodBtn.addEventListener("click", ()=>{
    displayArr = arrayFoodItems.filter((item)=>{
        if(item.calories > 400)
        return item;
    })
    display(displayArr);
})



function display(arr){
    def();
    arr.map((item)=>{
        let foodItemHTML = `
        <div class="image">
                    <img src="Images\\${item.name}.jpg" alt="">
                </div>
        <div class="details">
            <h3>${item.name}</h3> 
            Category: ${item.category} <br>
            Calories: ${item.calories} <br>
            Junk: ${item.junkFood} <br>
         </div>
        `;
        let foodItemDiv = document.createElement("div");
        foodItemDiv.classList.add("items");
        foodItemDiv.innerHTML = foodItemHTML;

        let foodItemsDisplay = document.querySelector(".foodItems");
        foodItemsDisplay.appendChild(foodItemDiv);

    })
    console.log(displayArr.length);
}

function def(){
    //Default function
    let itemArr = document.querySelectorAll(".items");
    itemArr.forEach((item)=>{
        item.remove();
    })
}















