function getUsers() {
    return fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq")
        .then((response) => { return response.json() })
}
let usersArray = [];
async function usersDetails() {
    try {
        usersArray = await getUsers();
        usersArray.forEach(userCard => {
            userCards.innerHTML +=
                `<div id=mainDiv> 
        <div id=${userCard._id}>
        <h1>${userCard.name.first} ${userCard.name.last}</h1>
        <h3>${userCard.email}</h3>
        <h3>${userCard.age}</h3>
        <h4>${userCard.phone}</h4>
        <img src="${userCard.picture}"target="_blank">
        </div>
        </div>`
        })
        usersArray.forEach(userCard => {
            document.getElementById(`${userCard._id}`).addEventListener('click', () => {
                userCards.innerHTML = "";
                tableCards.innerHTML = "";
                userCards.innerHTML =
                   `<div>
                   <h1>${userCard.name.first} ${userCard.name.last}</h1>
                   <h3>${userCard.email}</h3>
                   <h3>${userCard.age}</h3>
                   <h4>${userCard.phone}</h4>
                   <img src="${userCard.picture}"target="_blank">
                   <br>
                   <br>
                   <button id="btn3"><a href="http://127.0.0.1:5500/index.html?">Home page</button></a>
                   </div> `
            }
            )
        })
    }
    catch (error) {
        console.log(error);
    }
}
usersDetails()

function usersTable() {
    userCards.innerHTML = "";
    footer.innerHTML = "";
    tableCards.innerHTML = `<tr>
    <th>First name </th>
    <th> Last name </th>
    <th>Email</th>
    <th>Age</th>
    <th>Phone</th>
    <th>Picture</th>  
</tr>`;
    usersArray.forEach(user => {
        tableCards.innerHTML += `
    <tr>
    <td>${user.name.first}</td>
    <td>${user.name.last}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    <td>${user.phone}</td>
    <td><img src=${user.picture}></td>
    </tr>`
    }
    )
}
function addNewUser() {
    userCards.innerHTML = "";
    tableCards.innerHTML = "";
    footer.innerHTML = "";
    btn1.style = "display:none";
    btn.style = "display:none";
    formUser.innerHTML += `<div>
    <div><lable>Full name :<input id="name" type="text"></lable></div>
    <div><lable>Age :<input id="age"  type="number"></lable></div>
    <div><lable> Email :<input id="email" type="email"></lable></div>
    <div><lable>Email :<input id="email2" type="email"></lable></div>
    <div><lable> Phone:<input id="phone" type="number"></lable></div>
    <button>Add</button>`
}
function validEmail() {
    let firstEmail = document.getElementById("email");
    let secondEmail = document.getElementById("email2");
    if (firstEmail.value == secondEmail.value) {
        alert('sucsses')
        return true
    }
    alert('Email does not match')
    return false
}