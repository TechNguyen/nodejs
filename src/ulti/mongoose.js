module.exports = {
    multiltoObject: (mongooses) => {
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongoogeToObject: function(mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    }
}