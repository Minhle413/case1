class Customer{
    firstname;
    lastname;
    age;
    email;
    constructor(firstname,lastname,age,email) {
        this.firstname = firstname ;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
    }
}

let customer = [new Customer("ex:Michael","Jordan", "59","abcd.gmail.com",)]

function create (){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    customer.push(new Customer(firstname,lastname,age,email,))
    show()
}
function show() {
    let str = "";
    for (let i = 0; i < customer.length; i++) {
        str += "<tr>"
        str += `<td>${i + 1}</td>`
        str += `<td>${customer[i].firstname}</td>`
        str += `<td>${customer[i].lastname}</td>`
        str += `<td>${customer[i].age}</td>`
        str += `<td>${customer[i].email}</td>`
        str += `<td><button onclick="showEdit(${i})">Edit</button></td>`
        str += `<td><button onclick="deleteP(${i})">Delete</button></td>`
        str += "</tr>"
    }
    document.getElementById("display").innerHTML = str;
}
indexEdit = -1
function showEdit(index){
    document.getElementById('firstname').value = customer[index].firstname;
    document.getElementById('lastname').value = customer[index].lastname;
    document.getElementById('age').value = customer[index].age;
    document.getElementById('email').value = customer[index].email;
    indexEdit = index;
}
function saveEdit() {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    customer[indexEdit] = new Customer(firstname,lastname,age,email);
    show();
    indexEdit = -1;
}

function deleteP(index) {
    customer.splice(index, 1);
    show();
}

show();