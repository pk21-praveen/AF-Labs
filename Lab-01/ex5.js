// method 1
fetch('https://api.github.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        users.forEach(element => {
            console.log(element.login + " " + element.id);

        });
    });


//method 2
function callGitHub() {
    $.getJSON("https://api.github.com/users", function (data) {
        data.forEach(element => {
            console.log(element.login + " " + element.id);
        });
    });
}

callGitHub();


//method 3
var xmlhttp = new XMLHttpRequest();
var url = 'https://api.github.com/users';

xmlhttp.open('GET', url, true);

xmlhttp.onload = function () {
    if (this.status === 200) {
        var users = JSON.parse(this.response);
        showUsers(users);
    }
};

xmlhttp.send();

function showUsers(users) {
    for (var i = 0; i < users.length; i++) {
        console.log(users[i].login + " " + users[i].id);
    }
}

