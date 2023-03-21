const User = require('../models/user')
const passport = require('passport-facebook')
const  FacebookStrategy = passport.Strategy

class FaceBookAuthen {
    authenAuth(req,res,next) {
        passport.use(new FacebookStrategy ({
            clientID: process.env.FACEBOOK_CLIENT_ID, 
            clientSecret: process.env.FACEBOOK_SECRET_KEY,
            callbackURL: "http://localhost:3001/auth/facebook/callback"
        }))



        async function (accessToken, refreshYToken, profile, cb) {
            const user = await User.findOne({
                accountId: profile.id,
                provider: 'facebook'
            })
            if(!user) {
                console.log('add to the db');
                const newuser = new Accounts({
                    profileId: profile.id
                })
            }
        }
    }
}


module.exports = new FaceBookAuthen()