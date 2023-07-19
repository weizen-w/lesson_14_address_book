const listUl = document.getElementById("list-ul");
listUl.type = "circle";

async function getContact() {
  const response = await fetch("https://weizen-w.github.io/lesson_14_address_book/adress_book.json");
  const arrayJson = await response.json();
  arrayJson.forEach((obj) => {
    const { foto, firstName, lastName, gender, age, address, phoneNumbers } = obj;
    const { streetAddress, city, state, postalCode } = address;
    const { type, number } = phoneNumbers;
    const imageElement = document.createElement("img");
    imageElement.src = foto;
    imageElement.className = "foto";
    const nameElement = document.createElement("h3");
    nameElement.textContent = `${firstName} ${lastName}`;
    const infoElement = document.createElement("p");
    infoElement.textContent = `age: ${age}, gender: ${gender}`;
    const addressElement = document.createElement("p");
    addressElement.textContent = `adress: ${state} - ${postalCode}, ${city}, ${streetAddress}`;
    const phoneElement = document.createElement("p");
    phoneElement.textContent = `phone: ${number} - ${type}`;
    const table = document.createElement("table");
    const rowTable = document.createElement("tr");
    const leftColumn = document.createElement("td");
    const rightColumn = document.createElement("td");
    leftColumn.append(imageElement);
    rightColumn.append(nameElement, infoElement, addressElement, phoneElement);
    rowTable.append(leftColumn, rightColumn);
    rowTable.className = "row-style";
    table.append(rowTable);
    const liElement = document.createElement("li");
    liElement.className = "li-style";
    liElement.append(table);
    listUl.append(liElement);
  });
}

getContact();
