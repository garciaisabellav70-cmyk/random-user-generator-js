const button = document.querySelector("#generate-btn");

const userImage = document.querySelector("#user-image");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");

function generateUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      userImage.src = user.picture.large;

      userName.textContent =
        `${user.name.first} ${user.name.last}`;

      userEmail.textContent = user.email;
    });
}

button.addEventListener("click", generateUser);