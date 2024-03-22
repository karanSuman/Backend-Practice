require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "karanSuman",
  "id": 91075916,
  "node_id": "MDQ6VXNlcjkxMDc1OTE2",
  "avatar_url": "https://avatars.githubusercontent.com/u/91075916?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/karanSuman",
  "html_url": "https://github.com/karanSuman",
  "followers_url": "https://api.github.com/users/karanSuman/followers",
  "following_url": "https://api.github.com/users/karanSuman/following{/other_user}",
  "gists_url": "https://api.github.com/users/karanSuman/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/karanSuman/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/karanSuman/subscriptions",
  "organizations_url": "https://api.github.com/users/karanSuman/orgs",
  "repos_url": "https://api.github.com/users/karanSuman/repos",
  "events_url": "https://api.github.com/users/karanSuman/events{/privacy}",
  "received_events_url": "https://api.github.com/users/karanSuman/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Suman karan",
  "company": null,
  "blog": "",
  "location": "Budge Budge",
  "email": null,
  "hireable": null,
  "bio": "Coder|Web  Developer|Fast Learner",
  "twitter_username": "SumanKaran11",
  "public_repos": 13,
  "public_gists": 0,
  "followers": 1,
  "following": 6,
  "created_at": "2021-09-20T14:37:50Z",
  "updated_at": "2024-02-02T07:52:54Z"
}

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/twitter', (req, res) => {
  res.send('Sumandotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at Suman@dotcom</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1>Back-End Practice<h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})