const app = require("./src/app")
require('dotenv').config()

app.listen(3000, () => {
    console.log(`server started at ${3000}`)
})