const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove().then((result) => {

// });

Todo.findByIdAndRemove('5c2906aa79d11e480e57057b').then((result) => {
    console.log(result);
})