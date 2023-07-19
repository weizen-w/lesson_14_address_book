const listUl = document.getElementById("list-ul");

async function getContact() {
  const response = await fetch(
    "https://weizen-w.github.io/lesson_14_address_book/adress_book.json"
  );
  const obj = await response.json();
  const { firstName, lastName, gender, age, adress, phoneNumbers } = obj;
  // const { streetAddress, city, state, postalCode } = adress;
  const { type, number } = phoneNumbers;
  const contact = document.createElement("li");
  contact.textContent = `${firstName} ${lastName}; age: ${age}, gender: ${gender}; adress: ${adress} ; phone: ${number} `;
  listUl.append(contact);
}

getContact();
