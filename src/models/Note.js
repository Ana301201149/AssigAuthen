const { Schema, model, trusted} = require ('mongoose')//data model

const NoteSchema = new Schema ({
    title:{
        type: String, 
        required: true

    },
    
    description: {
        type: String, 
        required: true

    }, 
    user: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
   
})
module.exports = model ('Note', NoteSchema);