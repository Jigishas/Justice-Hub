const {connectDB, mongoose} = require('./connect');


// Example CRUD operations
async function main() {
    await connectDB();
    // Define a simple schema and model for demonstration
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String,
    });
    const User = mongoose.model('User', userSchema);
    // Create
    const newUser = new User({ name: 'John Doe', email: 'jigisha@plp.com', password: 'password123' });
    await newUser.save();
    console.log('User created:', newUser);

}