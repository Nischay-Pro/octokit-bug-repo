const octokit = require('@octokit/rest')();

let config = {
  owner: 'Nischay-Pro',
  repo: 'octokit-bug-repo',
  archive_format: 'tarball',
  ref: 'master'
}

async function
test() {
  const result = await octokit.issues.getForRepo(config);
  console.log(result);
} 

test();
