const listUl = document.getElementById("list-ul");
const imageElement = document.getElementById("foto");
const nameElement = document.getElementById("name");
const infoElement = document.getElementById("info");
const addressElement = document.getElementById("address");
const phoneElement = document.getElementById("phone");

async function getContact() {
  const response = await fetch(
    "https://weizen-w.github.io/lesson_14_address_book/adress_book.json"
  );
  const obj = await response.json();
  const { foto, firstName, lastName, gender, age, address, phoneNumbers } = obj;
  const { streetAddress, city, state, postalCode } = address;
  const { type, number } = phoneNumbers;
  imageElement.src = foto;
  nameElement.textContent = `${firstName} ${lastName}`;
  infoElement.textContent = `age: ${age}, gender: ${gender}`;
  addressElement.textContent = `adress: ${state} - ${postalCode}, ${city}, ${streetAddress}`
  phoneElement.textContent = `phone: ${number} - ${type}`;
}

getContact();
