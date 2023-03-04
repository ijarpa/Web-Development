/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let information = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
information.name = "Ivan Jarpa";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
information.photo = "images/photo.jpg"
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
information.favoriteFoods = [];
information.favoriteFoods.push("Lasagna", "Tacos", "Hot dogs");
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
information.hobbies = [];
information.hobbies.push("3D Design", "Soccer", "Movies and Series");
// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
information.placesLived = [
    {
        place: "Chillan",
        length: "20"
    },
    {
        place: "Viña del Mar",
        length: "2"
    }

]
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = information.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", information.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let foodInfo = document.querySelector("#favorite-foods");
let foodList;

for (let x = 0; x < information.favoriteFoods.length; x++){
    foodList = document.createElement("li");
    foodList.textContent = information.favoriteFoods[x];
    foodInfo.append(foodList);
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbiesInfo = document.querySelector("#hobbies");
let hobbiesList;

for (let x = 0; x < information.hobbies.length; x++){
    hobbiesList = document.createElement("ul");
    hobbiesList.textContent = information.hobbies[x];
    hobbiesInfo.append(hobbiesList);
}

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

let placesInfo = document.querySelector("#places-lived");
let placeNameList, placeLengthList;

for (let x = 0; x < information.placesLived.length; x++){
    placeNameList = document.createElement("dt");
    placeNameList.textContent = information.placesLived[x].place;

    placeLengthList = document.createElement("dd");
    placeLengthList.textContent = information.placesLived[x].length;

    placesInfo.append(placeNameList);
    placesInfo.append(placeLengthList);
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
