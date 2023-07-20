const listContacts = document.getElementById("list-contacts");

function fullList(array) {
  array.forEach((obj) => {
    const { foto, firstName, lastName, gender, age, address, phoneNumbers } = obj;
    const { streetAddress, city, state, postalCode } = address;
    const { type, number } = phoneNumbers;

    const imageElement = document.createElement("img");
    imageElement.src = foto;
    imageElement.className = "foto";

    const nameElement = document.createElement("h3");
    nameElement.textContent = `${firstName} ${lastName}`;
    nameElement.style.fontSize = "30px"

    const infoElement = document.createElement("p");
    infoElement.textContent = `age: ${age}, gender: ${gender}`;

    const addressElement = document.createElement("p");
    addressElement.textContent = `address: ${state} - ${postalCode}, ${city}, ${streetAddress}`;

    const phoneElement = document.createElement("p");
    phoneElement.textContent = `phone: ${number} - ${type}`;

    const table = document.createElement("table");
    table.className = "table-style";

    const rowTable = document.createElement("tr");

    const leftColumn = document.createElement("td");
    leftColumn.append(imageElement);

    const rightColumn = document.createElement("td");
    rightColumn.style.width = "330px";
    rightColumn.append(nameElement, infoElement, addressElement, phoneElement);

    rowTable.append(leftColumn, rightColumn);
    table.append(rowTable);
    listContacts.append(table);
  });
}

async function getContact() {
  const response = await fetch("https://weizen-w.github.io/lesson_14_address_book/adress_book.json");
  const arrayJson = await response.json();
  fullList(arrayJson);
}

getContact();
