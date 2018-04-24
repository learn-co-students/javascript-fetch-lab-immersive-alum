const repo = 'javascript-fetch-lab'
const base_url = 'https://api.github.com'
const username = ""
const owner = 'learn-co-curriculum'

function getIssues() {
  fetch(`${base_url}/repos/${username}/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json()).then(issues => showIssues(issues))
}

function showIssues(issues) {
  var html =
  `<ul> ${issues.map(issue => `
    <li>
      <a href=${issue.html_url} target="_blank">${issue.title}</a>
    </li>`).join("")}
  </ul>`
  $("#issues").html(html)
}

function createIssue() {
  var title = document.getElementById('title').value
  var body = document.getElementById('body').value

  fetch(`${base_url}/repos/${username}/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  }).then(response => response.json()).then(response => getIssues())

}

function showResults(url) {
  var href = `https://github.com/${username}/${repo}`
  var html = `<a href=${href} target="_blank">${url}</a>`
  $("#results").html(html)
}

function forkRepo() {
  fetch(`${base_url}/repos/${owner}/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => {
    showResults(response.url)
  })
}

function getToken() {
  return ''
}
