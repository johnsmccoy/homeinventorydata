// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

//craft data items
const art = {
    name: "art",
    location: "foyer",
    description: "garden of delight"
  };
HomeInventoryDatabase.crafts.push(art)

const book = {
      name: "book",
      location: "library",
      description: "lots of medical and finace"
};
HomeInventoryDatabase.crafts.push(book)
  

//furniture data items
const sofa = {
    name: "sofa",
    location: "bedroom",
    description: "nothing special besides the coffee stains"
  };
HomeInventoryDatabase.furniture.push(sofa)

const chair = {
    name: "chair",
    location: "living room",
    description: "beautiful claw foot chairs"
  };
HomeInventoryDatabase.furniture.push(chair)

const bed = {
    name: "bed",
    location: "bedroom",
    description: "queen canopy"
  };
HomeInventoryDatabase.furniture.push(bed)

const desk = {
    name: "desk",
    location: "bedroom",
    description: "nothing special besides the coffee stains"
  };
HomeInventoryDatabase.furniture.push(desk)
  
const table = {
    name: "table",
    location: "kitchen",
    description: "hightop with chairs"
  };
HomeInventoryDatabase.furniture.push(table)


//electronics data items
const tv = {
    name: 'tv',
    location: "den",
    description: "65 inch hdtv"
};
HomeInventoryDatabase.electronics.push(tv)

const clock = {
    name: 'clock',
    location: 'hallway',
    description: 'grandfather clock'
};
HomeInventoryDatabase.electronics.push(clock)

const laptop = {
    name: 'laptop',
    location: 'mobile',
    description: 'lenovo pc'
}
HomeInventoryDatabase.electronics.push(laptop)

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(HomeInventoryDatabase, "homeinventory")


const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

