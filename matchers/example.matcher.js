function isMatching(repoFolder) {
    try {
        return require(`${repoFolder}/package.json`).scripts["start"] != undefined
    } catch {
        return false;
    }
}

function getName(repoFolder) {
    return require(`${repoFolder}/package.json`).name
}

function getStartCommand(repoFolder) {
    return `npm run start`
}

module.exports = { getName, getStartCommand, isMatching }