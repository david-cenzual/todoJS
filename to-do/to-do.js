const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile(
        'db/data.json',
        data,
        (err) => { if (err) throw new Error('Cannot Save', err); }
    );
}

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (e) {
        listToDo = [];
    }
}

const create = (desc) => {

    loadDB();

    let toDo = {
        desc,
        state: false,
    };

    listToDo.push(toDo);

    saveDB();

    return toDo;
}

const getList = () => {
    loadDB();
    return listToDo;
}

const update = (desc, state = true) => {
    loadDB();
    let index = listToDo.findIndex(task => task.desc === desc)

    if (index >= 0) {
        listToDo[index].state = state;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const remove = (desc) => {


    loadDB();

    let newList = listToDo.filter(task => task.desc !== desc)

    console.log(newList);
    console.log(listToDo);

    if (newList.length === listToDo.length) {
        return false;
    } else {
        listToDo = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    remove
}