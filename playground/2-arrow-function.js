// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(422))

const event = {
    name: 'Birthday Party',
    guestList: ['Dakota','Leah','John'],
    printGuestList() {
        console.log('Guest List For ' + this.name)

        this.guestList.forEach ((guest) => {
            console.log(guest + ' is attending the ' + this.name)
        })
    }
}
event.printGuestList()

//Arrow functions don't bind their methods.
