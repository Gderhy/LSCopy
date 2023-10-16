
addEventListener("DOMContentLoaded",
    ()=> populateMyListingTable(testingData)
);

const testingData = [
    {
        PROPERTY_ID : 1,
        COVER_IMG_ID : 2,
        DESCRIPTION : "description fake",
        AREA_ID : 3,
        ADDRESS : "@",
        POSTAL : "H4M",
        YEAR : 2023,
        PARKING_COUNT : 4,
        BATH_COUNT : 4.5,
        ROOMS_COUNT : 5,
        TYPE_ID : 6,
        PRICE : 6.5,
        IS_FOR_SALE : 0,
        STATUS : 7
    },
    {
        PROPERTY_ID : 2,
        COVER_IMG_ID : 2,
        DESCRIPTION : "description fake",
        AREA_ID : 3,
        ADDRESS : "@",
        POSTAL : "H4M",
        YEAR : 2023,
        PARKING_COUNT : 4,
        BATH_COUNT : 4.5,
        ROOMS_COUNT : 5,
        TYPE_ID : 6,
        PRICE : 6.5,
        IS_FOR_SALE : 0,
        STATUS : 7
    },
    {
        PROPERTY_ID : 3,
        COVER_IMG_ID : 2,
        DESCRIPTION : "description fake",
        AREA_ID : 3,
        ADDRESS : "@",
        POSTAL : "H4M",
        YEAR : 2023,
        PARKING_COUNT : 4,
        BATH_COUNT : 4.5,
        ROOMS_COUNT : 5,
        TYPE_ID : 6,
        PRICE : 6.5,
        IS_FOR_SALE : 0,
        STATUS : 7
    }
]


function populateMyListingTable(listings){

    const tableBody = document.getElementById("tbody-my-listings");

    // Clears out existing table
    while(tableBody.firstChild) {

        tableBody.removeChild(tableBody.firstChild);
    }

    // Populate table
    listings.forEach(
        (listing) => tableBody.appendChild(getTableRow(listing))
    );
}

function getTableRow(listing){

    const row = document.createElement("tr");

    const td_PROPERTY_ID = document.createElement("td");
    td_PROPERTY_ID.id = `PROPERTY_ID-${listing.PROPERTY_ID}`;
    td_PROPERTY_ID.textContent = `${listing.PROPERTY_ID}`;
    td_PROPERTY_ID.className = "dashboard-td";
    row.appendChild(td_PROPERTY_ID);


    const td_COVER_IMG_ID = document.createElement("td");

        const img = document.createElement("img");
        img.src = ""; // What will this be?
        img.alt = `Image-${listing.COVER_IMG_ID}`

    td_COVER_IMG_ID.id = `COVER_IMG_ID-${listing.PROPERTY_ID}`;
    td_COVER_IMG_ID.appendChild(img);
    td_COVER_IMG_ID.className = "dashboard-td";
    row.appendChild(td_COVER_IMG_ID);


    const td_DESCRIPTION = document.createElement("td");
    td_DESCRIPTION.id = `DESCRIPTION-${listing.PROPERTY_ID}`;
    td_DESCRIPTION.textContent = `${listing.DESCRIPTION}`;
    td_DESCRIPTION.className = "dashboard-td";
    row.appendChild(td_DESCRIPTION);


    const td_AREA_ID = document.createElement("td");
    td_AREA_ID.id = `AREA_ID-${listing.PROPERTY_ID}`;
    td_AREA_ID.textContent = `${listing.AREA_ID}`;
    td_AREA_ID.className = "dashboard-td";
    row.appendChild(td_AREA_ID);


    const td_ADDRESS = document.createElement("td");
    td_ADDRESS.id = `ADDRESS-${listing.PROPERTY_ID}`;
    td_ADDRESS.textContent = `${listing.ADDRESS}`;
    td_ADDRESS.className = "dashboard-td";
    row.appendChild(td_ADDRESS);


    const td_POSTAL = document.createElement("td");
    td_POSTAL.id = `POSTAL-${listing.PROPERTY_ID}`;
    td_POSTAL.textContent = `${listing.POSTAL}`;
    td_POSTAL.className = "dashboard-td";
    row.appendChild(td_POSTAL);


    const td_YEAR = document.createElement("td");
    td_YEAR.id = `YEAR-${listing.PROPERTY_ID}`;
    td_YEAR.textContent = `${listing.YEAR}`;
    td_YEAR.className = "dashboard-td";
    row.appendChild(td_YEAR);

    const td_PARKING_COUNT = document.createElement("td");
    td_PARKING_COUNT.id = `PARKING_COUNT-${listing.PROPERTY_ID}`;
    td_PARKING_COUNT.textContent = `${listing.PARKING_COUNT}`;
    td_PARKING_COUNT.className = "dashboard-td";
    row.appendChild(td_PARKING_COUNT);


    const td_BATH_COUNT = document.createElement("td");
    td_BATH_COUNT.id = `BATH_COUNT-${listing.PROPERTY_ID}`;
    td_BATH_COUNT.textContent = `${listing.BATH_COUNT}`;
    td_BATH_COUNT.className = "dashboard-td";
    row.appendChild(td_BATH_COUNT);


    const td_ROOMS_COUNT = document.createElement("td");
    td_ROOMS_COUNT.id = `ROOMS_COUNT-${listing.PROPERTY_ID}`;
    td_ROOMS_COUNT.textContent = `${listing.ROOMS_COUNT}`;
    td_ROOMS_COUNT.className = "dashboard-td";
    row.appendChild(td_ROOMS_COUNT);


    const td_TYPE_ID = document.createElement("td");
    td_TYPE_ID.id = `TYPE_ID-${listing.PROPERTY_ID}`;
    td_TYPE_ID.textContent = `${listing.TYPE_ID}`;
    td_TYPE_ID.className = "dashboard-td";
    row.appendChild(td_TYPE_ID);


    const td_PRICE = document.createElement("td");
    td_PRICE.id = `PRICE-${listing.PROPERTY_ID}`;
    td_PRICE.textContent = `$${listing.PRICE.toFixed(2)}`;
    td_PRICE.className = "dashboard-td";
    row.appendChild(td_PRICE);


    const td_IS_FOR_SALE = document.createElement("td");
    td_IS_FOR_SALE.id = `IS_FOR_SALE-${listing.PROPERTY_ID}`;
    td_IS_FOR_SALE.textContent = listing.IS_FOR_SALE === 0 ? "No" : "Yes";
    td_IS_FOR_SALE.className = "dashboard-td";
    row.appendChild(td_IS_FOR_SALE);


    const td_STATUS = document.createElement("td");
    td_STATUS.id = `STATUS-${listing.PROPERTY_ID}`;
    td_STATUS.textContent = listing.STATUS;
    td_STATUS.className = "dashboard-td";
    row.appendChild(td_STATUS);


    // Functionality not completed
    const td_DELETE_BUTTON = document.createElement("td");
    td_DELETE_BUTTON.className = "dashboard-td";
        const deleteButton = document.createElement("button");
        deleteButton.id = `DELETE_BUTTON-${listing.PROPERTY_ID}`; // Important for deleting users from db
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click",
            ()=>{
                const confirm1 = confirm(`Are you sure you want to remove property: ${listing.PROPERTY_ID}`);

                if(!confirm1) return;

                // Remove property ID


            }
        )
    td_DELETE_BUTTON.appendChild(deleteButton);
    row.appendChild(td_DELETE_BUTTON);


    // Functionality not completed
    const td_UPDATE_BUTTON = document.createElement("td");
    td_UPDATE_BUTTON.className = "dashboard-td";
    const updateButton = document.createElement("button");
    updateButton.id = `UPDATE_BUTTON-${listing.PROPERTY_ID}`; // Important for deleting users from db
    updateButton.textContent = "Update";
    updateButton.addEventListener("click",
        ()=>{
            const confirm1 = confirm(`Are you sure you want to update property: ${listing.PROPERTY_ID}`);

            if(!confirm1) return;

            // Remove property ID


        }
    )
    td_UPDATE_BUTTON.appendChild(updateButton);
    row.appendChild(td_UPDATE_BUTTON);


    return row;
}