function getIssues() {
  const issue = 'javascript-fetch-lab/issues/';

  const token = '67aae0649acc0701480882a053e06f46d3e22489';

  const testBody = {
    body: 'test body'
  };

  fetch(`http://api.github.com/repos/${issue}`, {
    method: 'get',
    body: JSON.stringify(testBody),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}

function showIssues(json) {}

function createIssue() {
  const issue = 'javascript-fetch-lab/issues/';

  const token = '67aae0649acc0701480882a053e06f46d3e22489';

  const testBody = {
    body: 'test body'
  };

  fetch(`http://api.github.com/repos/${issue}`, {
    method: 'post',
    body: JSON.stringify(testBody),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}

function showResults(json) {}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!

  const token = '67aae0649acc0701480882a053e06f46d3e22489';

  fetch(`http://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
