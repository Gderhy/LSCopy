
// Tbody element
const tableBody = document.querySelector("#table-exiting-brokers > tbody");

// Populate table as page reloads
document.addEventListener("DOMContentLoaded", ()=> { getAllBrokersTesting(); });
// getAllBrokerTesting() function calls the db to get data for testing


// Gets data from /Testing data/ dir and then calls populateTable(json) in order
// to populate table with received data
function getAllBrokersTesting(){

    const request = new XMLHttpRequest();

    request.open("get", "Testing data/brokers.json");
    request.onload = () => {

        try{
            const json = JSON.parse(request.responseText);

            populateTable(json);
        } catch (e) {
            console.warn("Could not load data !");
        }
    }

    request.send();
}

function populateTable(json){

    console.log(json);

    // Clears out existing table
    while(tableBody.firstChild) {

        tableBody.removeChild(tableBody.firstChild);
    }

    // Populate table
    json.forEach(
        (broker) => tableBody.appendChild(getTableRow(broker))
    );



}

// returns a <tr> element with all the appropriate data
function getTableRow(broker) {

    // Data received from broker


    // Create a new table row element
    const tr = document.createElement("tr");
    tr.className = "dashboard-row";

    // Create and append the table data cells to the table row
    const td1 = document.createElement("td");
    td1.className = "dashboard-td";
    td1.textContent = broker.userID;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.className = "dashboard-td";
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = broker.firstName + ' ' + broker.lastName;
    td2.appendChild(a);
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.className = "dashboard-td";
    td3.textContent = broker.numberOfListing;
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.className = "dashboard-td";
    td4.textContent = broker.email;
    tr.appendChild(td4);

    const td5 = document.createElement("td");
    td5.className = "dashboard-td";
    td5.textContent = broker.phone;
    tr.appendChild(td5);

    const td6 = document.createElement("td");
    td6.className = "dashboard-td";
    td6.textContent = broker.company;
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


