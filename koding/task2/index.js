const loginForm = document.querySelector[".login-form"];
const submitBtn = document.querySelector(".submit-button");
const errorText = document.querySelector(".error-text");

const serverUrl = "https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/";

const validateFormHandler = () => {
  const isValid = loginForm.reportValidity();

  if (isValid) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
};
loginForm.addEventListener("input", validateFormHandler);

// eslint-disable-next-line arrow-body-style
// eslint-disable-next-line no-shadow
// eslint-disable-next-line arrow-body-style

// eslint-disable-next-line no-return-assign

//   algo
// 1 read form get user info
// 2 send http (data) to server
// 3 handle server response

const createUserHandler = (event) => {
  event.preventDefault();

  //1 option 1 bad
  //   const user = {
  //     email: emailInpute.value,
  //     name: nameInput.value,
  //     password: passwordInput.value,
  //     };
  // option 2 good

  const userData = Object.fromEntries(new FormData(formElem));
  fetch(serverUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((body) => {
      loginForm.reset();
      alert(JSON.stringify(body));
    })

    .catch(() => {
      errorText.textContent = "Failed to create user";
    });
};
loginForm.addEventListener("submit", createUserHandler);
