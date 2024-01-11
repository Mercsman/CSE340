// App server
const express = require("express")
const app = express()

// default GET route (placement/order is important)
app.get("/", (req, res) => {
  res.send("Welcome home!")
})

// server name anddd port
const HOST = "localhost"
const PORT = 3000

app.listen(PORT, () => {
  console.log(`trial app listening on ${HOST}:${PORT}`)
})