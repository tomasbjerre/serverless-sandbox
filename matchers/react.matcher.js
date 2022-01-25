function isMatching(repoFolder) {
  try {
    return require(`${repoFolder}/package.json`).scripts.setup != undefined;
  } catch (e) {
    console.log(e);
    return false;
  }
}

function getName(repoFolder) {
  return require(`${repoFolder}/package.json`).name;
}

function getPrepareCommand(repoFolder) {
  return `npm install && npm run setup`;
}

function preStart(repoFolder, env) {
  // Do struff before start
  // env contains port in evn.PORT
}

function getStartCommand(repoFolder) {
  // Environment variable named "PORT" contains the allocated port
  return `npm run start`;
}

module.exports = { getName, getStartCommand, getPrepareCommand, isMatching, preStart };
