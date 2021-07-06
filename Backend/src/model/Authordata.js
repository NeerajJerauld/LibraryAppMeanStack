const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.111')) 
   


const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    author:{type:String,unique: true},
    country:String,
    genre:String,
    famousbooks:String,
    description:String,
    image:String
});

var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;