const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'this is a required field'],
        trim: true,
        maxlength: [20, 'name must not be more than 20 characters'],
    }, 
    completed: {
        type: Boolean,
        default: false,
    }
})


module.exports = mongoose.model('Task', taskSchema)
