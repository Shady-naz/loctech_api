const   express     = require ("express"),
        passport    = require ("passport"),
        User        = require ("../models/user"),
        router      = express.Router();

router.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    const newUser = new User ({username});
    const registeredUser = await User.register(newUser, password);
        if (!registeredUser) {
            res.send ("Sign Up was Unsuccessfull!")
        } 
        return res.json({"msg": `Successfully Signed You Up as ${newUser.username}`, "success": true});
});

router.post("/signin", (req, res) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return res.json ({"err": "Something Went Wrong"})
        } 
        if (!user) {
            return res.json ({"err": "Invalid Username or Password", "success": false})
        }
        req.logIn(user, function (err) {
            let username = user.username;
            if(err) {
                return res.json({"msg": "An Error occurred", "succes": false})
            }
            return res.json({username, "success": true, "err": null})
        }) 
    }) (req, res)
});

module.exports = router;

