const mongoose = require("mongoose");

exports.connect = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Database is Connected"))
        .catch((err) => {
            throw new Error(err);
        });
};
