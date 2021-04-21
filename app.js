const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do.js');
const colors = require('colors');

console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        let taskToDo = toDo.create(argv.desc);
        console.log(taskToDo);
        break;
    case 'list':
        let list = toDo.getList();

        for (let task of list) {
            console.log('========================='.green);
            console.log(task.desc);
            console.log('State:', task.state);
            console.log('=========================\n'.green);
        }
        break;
    case 'update':
        let update = toDo.update(argv.desc, argv.state);
        console.log(update);
        break;
    case 'remove':
        let remove = toDo.remove(argv.desc);
        console.log(remove);
        break;
    default:
        console.log('Comand not recognized');
}