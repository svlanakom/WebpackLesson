// input object
// output underfine

// For fetch
// input url(string), other params method, header, body, type
// output promise with respond

// then input callback, output promise (зен ждет результат предыдущего колбека)

function saveUser(userData) {
  fetch("https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      console.log(response.status);
      const body = response.json(); // (возвращает промис)
      console.log(body);
    })
    .then((body) => {
      console.log(body);
    })
    .catch((e) => {
      //
    }); //(response.json()input callback (принимает результат промиса. возвращает то что напишем ), output promise)
  //   console.log(res);
}

// test that
const user = {
  email: "test@example.com",
  firstname: "Svetlana",
  city: "Mukachevo",
  age: 21,
};

console.log(JSON.stringify(user));
saveUser(user);
