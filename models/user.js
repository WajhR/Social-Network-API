// Importing the required dependencies from the mongoose library.
const {Schema, model, Types} = require('mongoose');
// Schema to create User model
const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        trimmed: true,
    },
    email: {
        type:String, 
        required: true,
        unique: true,
        validate: [(email) => {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email);
          }, 'Must be a valid email address.']
      
        },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',

        }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
},
{
    toJSON: {
        virtuals: true, 
    },
    id: false,
});
// Create a virtual property `friendCount` that gets the number of friends in the friends array
userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
});

// Creates the User model form UserSchema. 
const User = model('User', userSchema)
// Exporting the User model. 

module.exports = User

       

