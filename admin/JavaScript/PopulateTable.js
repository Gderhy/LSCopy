import {deleteBroker, getAllBrokers} from "./import_data.js";


// Tbody element
const tableBody = document.querySelector("#table-exiting-brokers > tbody");

// Populate table as page reloads
document.addEventListener("DOMContentLoaded", ()=> { populateTable(getAllBrokers()); });
// getAllBrokerTesting() function calls the db to get data for testing


// Gets data from /Testing data/ dir and then calls populateTable(json) in order
// to populate table with received data
// __I need
// function getAllBrokersTesting(){
//
//     const request = new XMLHttpRequest();
//
//     request.open("get", "Testing data/brokers.json");
//     request.onload = () => {
//
//         try{
//             const json = JSON.parse(request.responseText);
//
//             populateTable(json);
//         } catch (e) {
//             console.warn("Could not load data !");
//         }
//     }
//
//     request.send();
// }



// Parameter - Array of brokers
function populateTable(brokers){

    console.log(brokers);

    // Clears out existing table
    while(tableBody.firstChild) {

        tableBody.removeChild(tableBody.firstChild);
    }

    // Populate table
    brokers.forEach(
        (broker) => tableBody.appendChild(getTableRow(broker))
    );
}



// returns a <tr> element with all the appropriate data
function getTableRow(broker) {

    // Data received -- broker obj

    // EMAIL : "dorthy.o'keefe@example.org"
    // FIRST_NAME : "Jamarcus"
    // LAST_NAME : "Schimmel"
    // PASSWORD : "qui"
    // PHONE_NUM : "(543)209-1616x8725"
    // STATUS : "SUSPENDED"
    // USER_ID : "38"
    // USER_NAME : "tstamm"

    // Create a new table row element
    const tr = document.createElement("tr");
    tr.className = "dashboard-row";
    tr.id = "row-" + broker.USER_ID;

    // Create and append the table data cells to the table row

    // USER_ID
    const td_USER_ID = document.createElement("td");
    td_USER_ID.className = "dashboard-td";
    td_USER_ID.textContent = broker.USER_ID;
    tr.appendChild(td_USER_ID);

    // USERNAME
    const td_USER_NAME = document.createElement("td");
    td_USER_NAME.className = "dashboard-td";
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = broker.USER_NAME;
    td_USER_NAME.appendChild(a);
    tr.appendChild(td_USER_NAME);

    // FIRST_NAME
    const td_FIRST_NAME = document.createElement("td");
    td_FIRST_NAME.className = "dashboard-td";
    td_FIRST_NAME.textContent = broker.FIRST_NAME;
    tr.appendChild(td_FIRST_NAME);

    // LAST_NAME
    const td_LAST_NAME = document.createElement("td");
    td_LAST_NAME.className = "dashboard-td";
    td_LAST_NAME.textContent = broker.LAST_NAME;
    tr.appendChild(td_LAST_NAME);

    // EMAIL
    const td_EMAIL = document.createElement("td");
    td_EMAIL.className = "dashboard-td";
    td_EMAIL.textContent = broker.EMAIL;
    tr.appendChild(td_EMAIL);

    // PHONE_NUM
    const td_PHONE_NUM = document.createElement("td");
    td_PHONE_NUM.className = "dashboard-td";
    td_PHONE_NUM.textContent = broker.PHONE_NUM;
    tr.appendChild(td_PHONE_NUM);

    // PASSWORD -- We should probz not include this
    const td_PASSWORD = document.createElement("td");
    td_PASSWORD.className = "dashboard-td";
    td_PASSWORD.textContent = broker.PASSWORD;
    tr.appendChild(td_PASSWORD);

    // ROLE_ID
    const td_ROLE_ID = document.createElement("td");
    td_ROLE_ID.className = "dashboard-td";
    td_ROLE_ID.textContent = broker.ROLE_ID;
    tr.appendChild(td_ROLE_ID);

    // STATUS
    const td_STATUS = document.createElement("td");
    td_STATUS.className = "dashboard-td";
    td_STATUS.textContent = broker.STATUS;
    tr.appendChild(td_STATUS);

    // DELETE_BUTTON
    const td_DELETE_BUTTON = document.createElement("td");
    td_DELETE_BUTTON.className = "dashboard-td";
    const deleteButton = document.createElement("button");
    deleteButton.id = "delete_button-" + broker.USER_ID; // Important for deleting users from db
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", removeBrokerFromTable); // Add an event listener to the delete button to handle deletion logic
    td_DELETE_BUTTON.appendChild(deleteButton);
    tr.appendChild(td_DELETE_BUTTON);

    // Return the created table row element
    return tr;
}


// Doesnt remove from db -- MUST FIX
function removeBrokerFromTable(event){

   const result = confirm("Are you sure you want to remove user: " + event.target.id);

   if(result === true){

       const rowToBeRemoved = document.getElementById("row-" + event.target.id.replace("delete_button-", ""))

       // Works visually, but does not remove it from db
       tableBody.removeChild(rowToBeRemoved);

       // doesnt work (doesnt remove from db)
       // parameter is int!!
       deleteBroker(parseInt(event.target.id.replace("delete_button-", ""), 10))
   }
}


