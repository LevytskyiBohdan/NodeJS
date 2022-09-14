import express, { Request,Response,Application } from 'express';

const app:Application = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req:Request, res:Response):void => {
    console.log("SEND -> Hello Typescript with Node.js!")
    res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});