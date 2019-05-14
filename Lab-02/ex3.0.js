
function fetchUsers() {
    fetch('https://api.github.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
        });
}

fetchUsers();
