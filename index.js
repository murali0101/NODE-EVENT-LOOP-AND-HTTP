const express = require("express")
const app = express();
app.get("",(req,res)=>{
res.send("Hello")
});
app.get("/books",(req,res)=>{
res.send({
    book1:"tamilbook",
    book2:"englishbook",
    book3:"telugubook",
    book4:"hindibook",
})
});
app.listen(4000, () => {
  console.log("4000");
});
