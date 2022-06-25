const express = require("express");
const mysql = require("mysql2");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "47B66FQvaM!",
    database: "movie_db",
  },
  console.log(`Connected to the courses_db database.`)
);

// Create
app.post("/API/create", (req, res) => {
  const { movieName } = req.body;

  db.query(
    `INSERT INTO movie_names (movie_name)
  VALUES (?)`,
    movieName,
    function (err, results) {
      console.log(results);
    }
  );
  res.send(movieName);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
