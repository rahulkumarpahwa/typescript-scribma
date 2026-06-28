type Address = {
    street : string 
    city : string 
    country : string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address ?: Address  // make the address optional
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
     address : {
        street : "Maple street 2",
        city : "Madrid",
        country : "Spain"
    }
}

function displayInfo(person : Person){
console.log(`${person.name} lives at ${person.address?.street}`)
//The ? goes immediately after the property that might not exist. In your code, that's address, not person.
}

displayInfo(person1)