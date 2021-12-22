import mongoose from 'mongoose'; 

const VideoSchema = new mongoose.Schema({
    videos : [{ 
        location: {type: String, required: true},
        
    }]
}, {
    timestamps: true
});

export const VideoModel = mongoose.model('Videos', VideoSchema);