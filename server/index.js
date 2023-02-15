const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");

// Custom
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("Welcome to Manage crud Operation data Query with GraphQL");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
