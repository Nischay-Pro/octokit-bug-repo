const octokit = require('@octokit/rest')()
const fetch = require('node-fetch')

const config = {
  owner: 'Nischay-Pro',
  repo: 'octokit-bug-repo',
  archive_format: 'tarball',
  ref: 'master'
}

const tarballUrl = `https://api.github.com/repos/${config.owner}/${config.repo}/${config.archive_format || 'tarball'}/${config.ref || 'master'}`

async function test () {
  const {data} = await octokit.repos.getArchiveLink(config)
  const check = await fetch(tarballUrl).then(response => response.buffer())

  if (Buffer.from(data).compare(check) === 0) {
    console.log('Returned data is correct')
  } else {
    console.log('Returned data is incorrect correct')
  }
}

test()
