let collection = require('../models/dog');

const postCat = (req,res) => {
    console.log('post dog controller');
    let dog = req.body;
   
    collection.postCat(dog, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllCats = (req,res) => {
    collection.getAllCats((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteCat = (req,res) => {
    let dog = req.body;
    collection.deleteOne(dog, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postCat,getAllCats,deleteCat}