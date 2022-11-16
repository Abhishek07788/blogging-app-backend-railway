const express = require("express");
const cors = require("cors");
const compression = require("compression");
const dbConnect = require("../config/db");
const NewsRoute = require("../routes/news.routes");
const UserRoute = require("../routes/user.routes");
const githubRoute = require("../routes/github.routes");
const interviewRoute = require("../routes/interview.routes");

const app = express();
let PORT =process.env.PORT || 8080;

app.use(cors());
app.use(compression());
app.use(express.json());
app.use("/news", NewsRoute);
app.use("/user", UserRoute);
app.use("/github", githubRoute);
app.use("/interview", interviewRoute);

app.get("/", (req, res) => {
  res.send("<h2>This is my blogging app<h2>");
});

app.listen(PORT||8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
