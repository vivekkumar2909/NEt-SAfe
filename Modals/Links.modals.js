import mongoose from 'mongoose';


const LinksSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    SafeVote:{
        type: Number,
        required: true
    },
    UnSafeVote:{
        type: Number,
        required: true
    }
},{timestamps:true});

export const Links = mongoose.model('Links', LinksSchema);