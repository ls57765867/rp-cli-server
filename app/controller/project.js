'use strict';
// const {connect, Schema,model} = require('mongoose');
// connect('mongodb://localhost/rp-cli');
//
// const rpSchema = new Schema({
//     name:String,
//     age:{
//         require:true,
//         type:Number,
//         default:20
//     }
// })
//
// var Rp = model('project', rpSchema);
// Rp.create({name:'zs'},function (err,doc){
//     console.log(err, doc);
// })


// Rp.find({},function (err,doc){
//     if(!err){
//         console.log(doc)
//     }
// })

const {Controller} = require('egg');
const rp = require('../utils/mongo')

class ProjectController extends Controller {
    async getTemplate() {
        const {ctx} = this
        function find(){
            return new Promise((resolve )=>{
                rp.find({}, function (err, doc) {
                    if (!err) {
                        resolve(doc)
                    }
                })
            })
        }

        ctx.body = await find()
    }
}

module.exports = ProjectController;
