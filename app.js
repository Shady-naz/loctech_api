const   express         = require ("express"),
        path            = require ("path"),
        cors            = require ("cors"),
        session         = require ("express-session"),
        mongoose        = require ("mongoose"),
        passport        = require ("passport"),
        bodyParser      = require ("body-parser"),
        LocalStrategy   = require ("passport-local"),
        
        User        = require ("./models/user"),   

        authRoutes      = require ("./routes/auth"),
        employeeRoutes  = require ("./routes/employee");

const app = express ();
mongoose.connect ("mongodb://localhost:27017/LoctechDB", {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR"));
db.once("open", () => {
    console.log("Successfully Connected to LoctechDB")
});

app.use(express.static(path.join(__dirname, "build")));
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

const sessionConfig = {
    name: "loctech",
    secret: "loctechisanITfirm",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() *1000*60*60*24*7,
        maxAge: 1000*60*60*24*7
    }
}

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/", function (req, res) {
//     // +app.get ("/*", (req, res) => {
//         res.sendFile(path.join(__dirname, "build", "index.html"))
//     // });
// });

app.use("/api", authRoutes);
app.use("/api", employeeRoutes);

app.listen(process.env.PORT || 9000, () => {
    console.log("Loctech Server is Operational!")
});
