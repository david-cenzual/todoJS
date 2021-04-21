const { boolean } = require('yargs');

let desc = {
    alias: 'd',
    demand: true,
    desc: 'Describes the TODO task'
}

let state = {
    alias: 's',
    default: true,
    desc: 'Marks the TODO task as completed'
}

const argv = require('yargs')
    .command('create', 'Creates a TODO task', {
        desc
    })
    .command('update', 'Updates a TODO task on the app', {
        desc,
        state
    })
    .command('remove', 'Removes a TODO task from the list', {
        desc
    })
    .help()
    .argv;

module.exports = {
    argv
}