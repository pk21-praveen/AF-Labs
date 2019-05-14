function fetchUsers() {
    return fetch('https://api.github.com/users')
        .then((response) => response.json());

}

fetchUsers.then(function (json) {
    console.log(json);
});