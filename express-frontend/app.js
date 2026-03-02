const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <title>express-frontend</title>
</head>
<body>
    <p>Hello from express!!!</p>    
</body>
<style>
    body {
        background-color: antiquewhite;
        color: brown;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
</style>
</html>
`

    );
});

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Express is running on port ${PORT}`);
})