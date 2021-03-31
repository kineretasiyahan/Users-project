function getUsers() {
    return fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq")
        .then((response) => { return response.json() })
}
let usersArray = [];
async function users() {
    try {
        usersArray = await getUsers();
        usersArray.forEach(userCard => {
            userCards.innerHTML +=
                `<div id=allDiv> 
        <div id=${userCard._id}>
        <h1>user</h1>
        <h2>${userCard.name.first} ${userCard.name.last}</h2>
        <h3>${userCard.email}</h3>
        <h3>${userCard.age}</h3>
        <h4>${userCard.phone}</h4>
        <img src="${userCard.picture}"target="_blank">
        </div></a>
        </div>`
        })
        usersArray.forEach(user => {
            document.getElementById(`${user._id}`).addEventListener('click', () => {
                userCards.innerHTML = "";
                tableCards.innerHTML = "";
                userCards.innerHTML =
                    `<div id=${user._id}>
                   <h1>user</h1>
                   <h2>${user.name.first} ${user.name.last}</h2>
                   <h3>${user.email}</h3>
                   <h3>${user.age}</h3>
                   <h4>${user.phone}</h4>
                   <img src="${user.picture}"target="_blank">
                   <br>
                   <button id="btn3"><a href="http://127.0.0.1:5500/index.html?">Cards Users</button></a>
                   </div>
                   `
            }
            )
        })
    }
    catch (error) {
        console.log(error);
    }
    finally { }
}
users()
function usersTable() {
    userCards.innerHTML = "";
    footer.innerHTML = "";
    tableCards.innerHTML = `  <tr>
    <th>First name</th>
    <th>Last name</th>
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
    btn.style = "display:none";
    btn1.style = "display:none";
    formUser.innerHTML += `
    full name :<input id="name" type="text">
    age :<input id="age"  type="number">
    email :<input id="email"  type="email">
    email :<input id="email2"  type="email">
    phone:<input id="phone"  type="number">
    <button>Add</button>
    <button><a href="http://127.0.0.1:5500/index.html?">users</button></a>`
}
function validEmail() {
    let firstEmail = document.getElementById("email");
    let secondEmail = document.getElementById("email2");
    if (firstEmail.value == secondEmail.value) {
        alert('sucsses')
        return true
    }
    alert('Email not the same')
    return false
}








// function onClick() {
//     userCards.innerHTML = "";
//     tableCards.innerHTML = "";
//     btn.style = "display:none";
//     btn1.style = "display:none";
//     usersArray.forEach((e)=>{
//         userCards.innerHTML = 
//         `<div id=${e._id}>
//         <h1>user</h1>
//         <h2>${e.name.first} ${ e.name.last}</h2>
//         <h3>${e.email}</h3>
//         <h3>${e.age}</h3>
//         <h4>${e.phone}</h4>
//         <img src="${e.picture}"target="_blank">
//         </div></a>`
//     })


// }

// console.log(usersArray);

// async function Users() {
//     try {
//         usersArray = await getUsers();
//         usersArray.forEach(userCard => {
//             userCards.innerHTML +=
//                 `<div> <a href="http://127.0.0.1:5500/user.html"
//         <h1>user</h1>
//         <h2>${userCard.name.first} ${userCard.name.last}</h2>
//         <h3>${userCard.email}</h3>
//         <h3>${userCard.age}</h3>
//         <h4>${userCard.phone}</h4>
//         <img src=${userCard.picture}target="_blank">
//         </a></div>`
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
//     finally { }

// }
// Users()


// async function Users() {
//     try {
//         usersArray = await getUsers();
//         usersArray.forEach(userCard => {
//             userCards.innerHTML +=
//                 `<div>
//         <h1>user</h1>
//         <h2>${userCard.name.first} ${userCard.name.last}</h2>
//         <h3>${userCard.email}</h3>
//         <h3>${userCard.age}</h3>
//         <h4>${userCard.phone}</h4>
//         // <a href="user.html?user=${userCard._id}">
//         <img src="${userCard.picture}" target="_blank">
//         </a>
//         </div>`
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
//     finally { }

// }
// Users()

// usersArray.forEach(userNew => {
//     userCards.innerHTML +=
//     `<a href="http://127.0.0.1:5500/user.html"><div>
//     <h1>user</h1>
//     <h2>${userNew.name.first}${userNew.name.last}</h2>
//     <h3>${userNew.email}</h3>
//     <h3>${userNew.age}</h3>
//     <h4>${userNew.phone}</h4>
//     <img src="${userNew.picture}"target="_blank">
//     </div></a>`

// })