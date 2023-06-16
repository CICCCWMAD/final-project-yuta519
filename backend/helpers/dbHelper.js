import mongoose from 'mongoose';

export const db = mongoose.connection;

export const createDbConnection = (dbUrl) => {
    mongoose.connect(dbUrl, { useNewUrlParser: true });
    return mongoose.connection;
}
