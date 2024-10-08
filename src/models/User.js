import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true 
},
  last_name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    unique: true, 
    required: true 
},
  age: { 
    type: Number 
},
  password: { 
    type: String, required: true 
},
  cart: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'Cart' 
},
  role: { 
    type: String, default: 'user' 
}
},{timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;
