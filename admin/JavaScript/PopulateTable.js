import {deleteBroker, getAllBrokers, updateBroker} from "./import_data.js";


// Tbody element
const tableBody = document.querySelector("#table-exiting-brokers > tbody");

const brokers = getAllBrokers();
console.log(brokers)

// Populate table as page reloads
document.addEventListener("DOMContentLoaded", () => {
    populateTable(brokers);
});
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
function populateTable(brokers) {

    console.log(brokers);

    // Clears out existing table
    while (tableBody.firstChild) {

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
    td_USER_ID.id = "user_id"
    tr.appendChild(td_USER_ID);

    // USERNAME
    const td_USER_NAME = document.createElement("td");
    td_USER_NAME.className = "dashboard-td";
    td_USER_NAME.textContent = broker.USER_NAME;
    td_USER_NAME.contentEditable = true;
    td_USER_NAME.id = "user_name";
    tr.appendChild(td_USER_NAME);

    // FIRST_NAME
    const td_FIRST_NAME = document.createElement("td");
    td_FIRST_NAME.className = "dashboard-td";
    td_FIRST_NAME.textContent = broker.FIRST_NAME;
    td_FIRST_NAME.contentEditable = true;
    td_FIRST_NAME.id = "first_name"
    tr.appendChild(td_FIRST_NAME);

    // LAST_NAME
    const td_LAST_NAME = document.createElement("td");
    td_LAST_NAME.className = "dashboard-td";
    td_LAST_NAME.textContent = broker.LAST_NAME;
    td_LAST_NAME.contentEditable = true;
    td_LAST_NAME.id = "last_name"
    tr.appendChild(td_LAST_NAME);

    // EMAIL
    const td_EMAIL = document.createElement("td");
    td_EMAIL.className = "dashboard-td";
    td_EMAIL.textContent = broker.EMAIL;
    td_EMAIL.contentEditable = true;
    td_EMAIL.id = "email";
    tr.appendChild(td_EMAIL);

    // PHONE_NUM
    const td_PHONE_NUM = document.createElement("td");
    td_PHONE_NUM.className = "dashboard-td";
    td_PHONE_NUM.textContent = broker.PHONE_NUM;
    td_PHONE_NUM.contentEditable = true;
    td_PHONE_NUM.id = "phone_num";
    tr.appendChild(td_PHONE_NUM);

    // PASSWORD -- We should probz not include this
    const td_PASSWORD = document.createElement("td");
    td_PASSWORD.className = "dashboard-td";
    td_PASSWORD.textContent = broker.PASSWORD;
    td_PASSWORD.contentEditable = true;
    td_PASSWORD.id = "password"
    tr.appendChild(td_PASSWORD);

    // ROLE_ID
    const td_ROLE_ID = document.createElement("td");
    td_ROLE_ID.className = "dashboard-td";
    td_ROLE_ID.textContent = "Broker";
    td_ROLE_ID.contentEditable = true;
    td_ROLE_ID.id = "role_id";
    tr.appendChild(td_ROLE_ID);

    // STATUS
    // I need to find a way to put a select tag so that you can only select a few options to not screw up db
    const td_STATUS = document.createElement("td");
    td_STATUS.className = "dashboard-td";
    td_STATUS.textContent = broker.STATUS;
    td_STATUS.contentEditable = true;
    td_STATUS.id = "status";
    tr.appendChild(td_STATUS);

    // DELETE_BUTTON
    const td_DELETE_BUTTON = document.createElement("td");
    td_DELETE_BUTTON.className = "dashboard-td";
    const deleteButton = document.createElement("button");
    deleteButton.id = "delete_button-" + broker.USER_ID; // Important for deleting users from db
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click",
        (event) => {
            const result = confirm("Are you sure you want to remove user: " + event.target.id);

            if (result === true) {

                const rowToBeRemoved = document.getElementById("row-" + event.target.id.replace("delete_button-", ""))

                // Works visually, but does not remove it from db
                // however, you do not want it to be
                // tableBody.removeChild(rowToBeRemoved);

                // doesnt work (doesnt remove from db)
                // parameter is int!!
                deleteBroker(parseInt(event.target.id.replace("delete_button-", ""), 10))
                window.location.reload();
            }
        }); // Add an event listener to the delete button to handle deletion logic
    td_DELETE_BUTTON.appendChild(deleteButton);
    tr.appendChild(td_DELETE_BUTTON);

    // UPDATE_BUTTON
    const td_UPDATE_BUTTON = document.createElement("td");
    td_UPDATE_BUTTON.className = "dashboard-td";
    const updateButton = document.createElement("button");
    updateButton.id = "update_button-" + broker.USER_ID; // Important for updating users from db
    updateButton.textContent = "Update";
    updateButton.addEventListener("click",
        (event) => {

            const rowToBeUpdated = document.getElementById("row-" + event.target.id.replace("update_button-", ""));

            const FIRST_NAME = rowToBeUpdated.querySelector("#first_name").textContent;
            const LAST_NAME = rowToBeUpdated.querySelector("#last_name").textContent;
            const PHONE_NUM = rowToBeUpdated.querySelector("#phone_num").textContent;
            const EMAIL = rowToBeUpdated.querySelector("#email").textContent;
            const USER_NAME = rowToBeUpdated.querySelector("#user_name").textContent;
            const PASSWORD = rowToBeUpdated.querySelector("#password").textContent;
            const STATUS = rowToBeUpdated.querySelector("#status").textContent;
            const USER_ID = rowToBeUpdated.querySelector("#user_id").textContent;

            updateBroker(FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD, STATUS, USER_ID);
            window.location.reload();
        }); // Add an event listener to the update button to handle deletion logic
    td_UPDATE_BUTTON.appendChild(updateButton);
    tr.appendChild(td_UPDATE_BUTTON);

    // Return the created table row element
    return tr;
}





