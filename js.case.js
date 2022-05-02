
    class Cart{
    product;
    name;
    price;
    constructor(product,name,price) {
    this.product = product
    this.name = name;
    this.price = price;
}
}

    let students = [new Student("Nguyen Le Minh", "19", "Male", "0123456789", "FiretrUCK.gmail.com",)]

    function create (){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;
    let img = document.getElementById('img').value;
    students.push(new Student(name,age,gender,contact,email,img))
    show()
}
    function show() {
    let str = "";
    for (let i = 0; i < students.length; i++) {
    str += "<tr>"
    str += `<td>${i + 1}</td>`
    str += `<td>${students[i].name}</td>`
    str += `<td>${students[i].age}</td>`
    str += `<td>${students[i].gender}</td>`
    str += `<td>${students[i].contact}</td>`
    str += `<td>${students[i].email}</td>`
    str += `<td><img src="${students[i].img}" width="220" height="170"></td>`
    str += `<td><button onclick="showEdit(${i})">Edit</button></td>`
    str += `<td><button onclick="deleteP(${i})">Delete</button></td>`
    str += "</tr>"
}
    document.getElementById("display").innerHTML = str;
}
    indexEdit = -1
    function showEdit(index){
    document.getElementById('name').value = students[index].name;
    document.getElementById('age').value = students[index].age;
    document.getElementById('gender').value = students[index].gender;
    document.getElementById('contact').value = students[index].contact;
    document.getElementById('email').value = students[index].email;
    document.getElementById('img').value = students[index].img
    indexEdit = index;
}
    function saveEdit() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;
    let img = document.getElementById('img').value;

    students[indexEdit] = new Student(name,age,gender,contact,email,img);
    show();
    indexEdit = -1;
}

    function deleteP(index) {
    students.splice(index, 1);
    show();
}

    show();



