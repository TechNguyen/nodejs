const mongoose = require('mongoose');
async function connect() {
    try {   
        await mongoose.connect('mongodb://localhost:27017/account_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch(error) {
        alert(error)
    }
};
module.exports = {connect}