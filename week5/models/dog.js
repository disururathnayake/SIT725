let client = require('../dbConnection');

let collection = client.db().collection('dog');

function postCat(dog, callback) {
    collection.insertOne(dog,callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

function deleteOne(catId, callback) {
    collection.deleteOne({ _id: catId }, callback);
}

module.exports = {postCat,getAllCats,deleteOne}