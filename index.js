const express = require("express");
const app = express();
const teams = require("./teams.json");
const bodyParser = require("body-parser");

//todo: create the teams.js
const teamsModel = require("./models/teams");

app.get("/teams", (request, response) => {
  const teams = models.teams.findAll()
});

app.get("/teams/:filter", (request, response) => {
  let teamInfo = teams.filter(team => {
    return (
      team.id == request.params.filter ||
      team.abbreviation == request.params.filter ||
      team.mascot == request.params.filter
    );
  });
  response.send(teamInfo);
});

app.post("/teams", bodyParser.json(), (request, response) => {
  const body = request.body;
  let addTeam = teams.concat(body);
  console.log({
    body
  });
  response.send(addTeam);
});

app.all("*", (request, response) => {
  response.send("Specify a valid url please.");
});
app.listen(3000, () => {
  console.log("listening on port 3000.");
});