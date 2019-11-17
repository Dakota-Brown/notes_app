const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


//Customize Yargs Version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
 
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function() {
        console.log('Here are the notes')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function() {
        console.log('Note being read')
    }
})

//add, remove, read, list
yargs.parse()