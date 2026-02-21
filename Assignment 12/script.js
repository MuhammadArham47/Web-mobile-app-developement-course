const handleSubmitt = document.getElementById("handleSubmitt");

let array = []

handleSubmitt.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;

  if (!firstName) {
    return showNotification("Please enter your first name");
  } if (firstName.length < 3) {
    return showNotification("First name is too short");
  } if (!lastName) {
    return showNotification("Please enter your last name");
  } if (!email) {
    return showNotification("Please enter your email");
  } if (!dob) {
    return showNotification("Please enter your date of birth");
  }

  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("email", email);
  console.log("dob", dob);

  let id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  let user = {id, firstName, lastName, email, dob};

  user.status = "active"
  user.createdAt = new Date().getTime();

  console.log(user);
  array.push(user);
});

const output = document.getElementById('output');
const printUserInConsole = document.getElementById("printUserInConsole");

printUserInConsole.addEventListener("click", ()=> {
    if (array.length === 0) {
       return showNotification("Please add user first");
    }
    console.log(array);
});

const showTable = document.getElementById("showTable");

showTable.addEventListener('click', ()=> {
    if (array.length === 0) {
       return showNotification("Please add the user first");
    }
    output.innerHTML = `
    <table border="1"> 
    <thead>
    <tr>
    <th>Id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Date of Birth</th>
    <th>Status</th>
    <th>Created At</th>
    </tr>
    </thead>
    <tbody>
    ${array.map((user) => `
    <tr>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    <td>${user.dob}</td>
    <td>${user.status}</td>
    <td>${user.createdAt}</td
    </tr>`).join("")}
    </tbody>
    </table>`
})

const clearOutput = document.getElementById("clear-output");

clearOutput.addEventListener('click', ()=> {
    output.innerHTML = ""
});

const showImage = document.getElementById("showImage");

showImage.addEventListener('click', ()=> {
    document.querySelector(".image").classList.add("show")
})

function showNotification(msg) {
  Toastify({
    text: msg,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #870000 0%, #190A05 100%)",
    },
  }).showToast();
}

document.getElementById("updateYear").innerHTML = new Date().getFullYear();