//backend/models/user.js
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (value.length <= 0)
                    throw new Error(
                        'Invalid job, must be at least 2 characters.'
                    )
            },
        },
        password: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (value.length <= 0)
                    throw new Error(
                        'Invalid job, must be at least 2 characters.'
                    )
            },
        },
        stats: {
            totalPoints: { type: Number, default: 0 },
            tasksCompleted: { type: Number, default: 0 },
            currentStreak: { type: Number, default: 0 },
            pointMultiplier: { type: Number, default: 1.0 },
            globalRank: { type: Number }
        },
        tasks: [{
            text: String,
            completed: { type: Boolean, default: false },
            date: { type: Date, default: Date.now }, 
            points: { type: Number, default: 10 }
        }]
    },
    { collection: 'users_list' }
)

const User = mongoose.model('User', UserSchema)

export default User