function getIssues() {
  fetch('https://api.github.com/user/repos/javascript-fetch-lab/issues/', {
    headers: {
      Authorization: `token 17833c15b270be805bfb5fcb8b2abd8f0a4d53a6`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
  console.log(json)
}

function createIssue() {
  const repo = 'thuyanduong-flatiron/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify({
      'title'	: "test",
      'body' :	"test body"
    }),
    headers: {
      'Authorization': `token 17833c15b270be805bfb5fcb8b2abd8f0a4d53a6`
    }
  }).then(res => res.json())
  .then(json => console.log(json))
}

function showResults(json) {
  console.log(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token 17833c15b270be805bfb5fcb8b2abd8f0a4d53a6`
    }
  }).then(res => res.json())
  .then(json => console.log(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
