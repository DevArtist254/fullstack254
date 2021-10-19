const express = require("express")
const cors = require("cors")
const path = require("path")
const PORT = 5000

const app = express()
app.use(cors())

// Set static folder
app.use(express.static("client/build/static"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"))
  console.log(`success`)
})

app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
