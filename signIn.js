class User{
    username;
    password;
    constructor(username,password) {
        this.username=username;
        this.password=password;
    }
}

let user = [new User("ex:abcdfgh","12345")]

function create (){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    user.push(new User(username,password))
    show()
}
function show() {
    let str = "";
    for (let i = 0; i < user.length; i++) {
        str += "<tr>"
        str += `<td>${i + 1}</td>`
        str += `<td>${user[i].username}</td>`
        str += `<td>${user[i].password}</td>`
        str += `<td><button onclick="showEdit(${i})">Edit</button></td>`
        str += `<td><button onclick="deleteP(${i})">Delete</button></td>`
        str += "</tr>"
    }
    document.getElementById("display").innerHTML = str;
}
indexEdit = -1
function showEdit(index){
    document.getElementById('username').value = user[index].username;
    document.getElementById('password').value = user[index].password;
    indexEdit = index;
}
function saveEdit() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    user[indexEdit] = new User(username,password);
    show();
    indexEdit = -1;
}

function deleteP(index) {
    user.splice(index, 1);
    show();
}

show();