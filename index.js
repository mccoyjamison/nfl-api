const express = require('express')
const app = express()
const teams = require('./teams.json')

app.get('/teams', (request, response) => {
  response.send(teams)
})

app.get('/teams/:filter', (request, response) => {
  let teamInfo = teams.filter( (team) => {
    return team.id == request.params.filter || team.abbreviation == request.params.filter || team.mascot == request.params.filter
  })
  response.send(teamInfo)
})


app.all('*', (request, response) => {
  response.send('Specify a valid url please.')
})
app.listen(3000, () => {
  console.log('listening on port 3000.')
})