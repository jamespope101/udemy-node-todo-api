const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5c28e33a055d72bc35204c8c11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({_id: id}).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({_id: id}).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '5c28d5957ba99a301d06b084';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
} else {
    User.findById(id).then((user) => {
        if (!user) {
            return console.log('Unable to find user');
        }
        console.log('User', user);
    }).catch((e) => {
        console.log(e);
    });
}