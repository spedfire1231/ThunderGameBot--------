const { model, Schema } = require ('mongoose')


module.exports = model('job', new Schema({
    Guild: String,
    User: String,
    Job: String, 
})
);