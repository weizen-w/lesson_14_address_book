const listUl = document.getElementById("list-ul");

async function getContact() {
  const response = await fetch(
    "https://weizen-w.github.io/lesson_14_address_book/adress_book.json"
  );
  const obj = await response.json();
  const { firstName, lastName, gender, age, address, phoneNumbers } = obj;
  const { streetAddress, city, state, postalCode } = address;
  const { type, number } = phoneNumbers;
  const contact = document.createElement("li");
  contact.textContent = `${firstName} ${lastName}; age: ${age}, gender: ${gender}; adress: ${state} - ${postalCode}, ${city}, ${streetAddress} ; phone: ${number} - ${type} `;
  listUl.append(contact);
}

getContact();
