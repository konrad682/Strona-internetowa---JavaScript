var mongoose = require('mongoose')
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

var FormSchema = mongoose.Schema({
    name1: {
        type: String
    },
    surname:{
        type: String
    },
    email1:{
        type:String
    },
    city:{
        type:String
    },
    State:{
        type:String
    },
    university:{
        type:String
    },
    position:{
        type:String
    },
    textarea:{
        type:String
    }

});

var Form = module.exports = mongoose.model('Form',FormSchema);


module.exports.createForm = function (newForm,callback) {
    newForm.save(callback);
}

module.exports.DeleteFormByValue = function (valueToDelete,callback) {
    Form.deleteOne({'email1': valueToDelete},callback);
}

module.exports.getFormByValue = function(optionToSearch,valueToSearch,callback){


    if(optionToSearch == 'Position'){
        Form.find({ 'position' : valueToSearch},callback);
    }
    if(optionToSearch == 'Name'){
        Form.find({ 'name1' : valueToSearch},callback);
    }
    if(optionToSearch == 'Surname'){
        Form.find({ 'surname' : valueToSearch},callback);
    }
    if(optionToSearch == 'University'){
        Form.find({ 'university' : valueToSearch},callback);
    }

}