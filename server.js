const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//require("dotenv").config({ path: "backend/.env" });
const fileUpload = require("express-fileupload");

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

//BodyParser Middelware

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0-phmwx.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true,


        useUnifiedTopology: true,
    },(err)=>{

        if(!err){
            console.log('Mongo Connected dawwwsw');
        }else {
            console.log('Not Connected dawq');
        }

    }

);

//dummy
app.get('/',(req,res)=>{
    res.json({
        message:"heelow"
    })
})

const contactRouter = require("./routes/contact");

//natti
const productsRouter = require("./routes/products");
const brandsRouter = require("./routes/brands");
app.use("/products", productsRouter);
app.use("/brands", productsRouter);

//dimi
app.use("/contactus", contactRouter);

const checkoutRouter = require("./routes/checkout");

app.use("/checkout", checkoutRouter);

//Anjik

// Use Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

//VITHU
const stockManagerRouter = require("./routes/stockmanager");
const categoryRouter = require("./routes/category");
const AdminRouter = require("./routes/admin");
app.use("/adminaction", AdminRouter);
app.use("/stockmanager", stockManagerRouter);
app.use("/category", categoryRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started " + port));

/*mongoose.connect(
  process.env.MONGO_DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MONGO VAREN DAW");
  }
);*/
