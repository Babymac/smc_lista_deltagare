//================== Imports ========================================
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import colors from "colors";

//================== Services ======================================
import fileUpload from "./services/upload";

//================== Constants =====================================
const app = express();
const PORT = process.env.PORT || 8080;
const _public = path.join(__dirname, 'public');

app.use(bodyParser());

app.use(express.static(_public));

app.use("/smc", fileUpload);

app.get("*", (req, res) => {
  res.sendFile(path.join(_public, "index.html"));
});

const date = new Date();
app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:8080, ${date}`.rainbow)
);
