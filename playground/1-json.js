const fs = require('fs')
//const book = {
//    title: 'Ego is the enemy',
//    author: 'Ryan Holiday'
//}

//const bookJson = JSON.stringify(book)
//fs.writeFileSync('1-json.json', bookJson)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Dakota'
data.age = 22

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)