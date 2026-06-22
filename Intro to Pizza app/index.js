const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

/**
 * This code defines a simple pizza ordering system. It maintains a menu of available pizzas, tracks the cash in the register, and manages an order queue. The `addNewPizza` function allows adding new pizzas to the menu, while `placeOrder` processes a customer's order and updates the cash in the register. The `completeOrder` function marks an order as completed. Finally, it logs the current state of the menu, cash in the register, and order queue to the console.
 * this code is a basic implementation and can be expanded with additional features such as error handling, order cancellation, and more complex pricing structures.
 * this has mistakes in the code, for example, the `cost` property should be `price` in the `addNewPizza` function calls, and the `completeOrder` function should take a number as an argument instead of a string.
 */