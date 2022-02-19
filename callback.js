console.log('Before');
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });

// Too Avoid nesting of callbacks, will replace anonymous function to named function
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getGitHubRepos(user.gitHubUsername, getCOmmits);  // getCOmmits is callback function
}

function getCOmmits(repos) {
    gitCommits(repos, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'Raj' });
    }, 2000);
}

function getGitHubRepos(userName, callback) {
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function gitCommits(repo, callback) {
    setTimeout(() => {
        callback(['sdsd', 'sdsd', 'repsdo3']);
    }, 2000);
}
