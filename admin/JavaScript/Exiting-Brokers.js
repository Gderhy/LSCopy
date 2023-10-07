// This js file will handle fetching the data from the db and inputing the elements into the exiting-brokers
// table



import sqlHandler from "./import_data"


function importExistingBrokersToHTML(){

    const data = sqlHandler() //Not sure what data is received



}

function getTableRow(obj) {
    // Create a new table row element
    const tr = document.createElement("tr");
    tr.className = "dashboard-row";

    // Create and append the table data cells to the table row
    const td1 = document.createElement("td");
    td1.className = "dashboard-td";
    td1.textContent = obj.userID;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.className = "dashboard-td";
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = obj.firstName + ' ' + obj.lastName;
    td2.appendChild(a);
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.className = "dashboard-td";
    td3.textContent = obj.numberOfListing;
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.className = "dashboard-td";
    td4.textContent = obj.email;
    tr.appendChild(td4);

    const td5 = document.createElement("td");
    td5.className = "dashboard-td";
    td5.textContent = obj.phone;
    tr.appendChild(td5);

    const td6 = document.createElement("td");
    td6.className = "dashboard-td";
    td6.textContent = obj.company;
    tr.appendChild(td6);

    const td7 = document.createElement("td");
    td7.className = "dashboard-td";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete (Icon)";
    // Add an event listener to the delete button to handle deletion logic
    deleteButton.addEventListener("click", function() {
        // Put your deletion logic here, like sending a request
        // After confirmation, you can remove the row by using tr.remove()
        // For example: tr.remove();
    });
    td7.appendChild(deleteButton);
    tr.appendChild(td7);

    // Return the created table row element
    return tr;
}

// Usage example:
const data = {
    userID: "00000000",
    firstName: "Fake",
    lastName: "Broker",
    numberOfListing: 1000,
    email: "fake@gmail.com",
    phone: "514-000-0000",
    company: "Fake company"
};

const tableRow = getTableRow(data);

// Append the created table row to a table (assuming you have a table element)
const table = document.getElementById("#tbody-existing-brokers"); // Replace with your table ID

for(let i=0; i < 5; i++){

    table.appendChild(tableRow);
}


