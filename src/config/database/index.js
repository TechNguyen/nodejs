const mongoose = require('mongoose');
async function connect() {
    try {   
        await mongoose.connect('mongodb://localhost:27017/account_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect');
    } catch(error) {
        console.log('faile');
    }
};
module.exports = {connect}