import {getBrokerProperties, getLocations, updateProperty} from "./import_data.js";


const user = localStorage.getItem('user');

addEventListener("DOMContentLoaded",
    ()=> populateMyListingTable(getBrokerProperties(101))
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


    const locations = getLocations();

    // Populate table
    listings.forEach(
        (listing) => tableBody.appendChild(getTableRow(listing, locations))
    );
}

function getTableRow(listing, locations){

    const row = document.createElement("tr");
    row.id = `row-${listing.PROPERTY_ID}`

    const td_PROPERTY_ID = document.createElement("td");
    td_PROPERTY_ID.id = `PROPERTY_ID-${listing.PROPERTY_ID}`;
    td_PROPERTY_ID.textContent = `${listing.PROPERTY_ID}`;
    td_PROPERTY_ID.className = "dashboard-td";
    row.appendChild(td_PROPERTY_ID);


    const td_PROPERTY_TYPE = document.createElement("td");
    td_PROPERTY_TYPE.id = `PROPERTY_TYPE-${listing.PROPERTY_ID}`;
    td_PROPERTY_TYPE.textContent = `${listing.PROPERTY_TYPE}`;
    td_PROPERTY_TYPE.className = "dashboard-td";
    td_PROPERTY_TYPE.contentEditable = true;
    row.appendChild(td_PROPERTY_TYPE);


    // Will add editing to images later
    const td_COVER_IMG_ID = document.createElement("td");
        const img = document.createElement("img");
        img.className = "cover-img"
        img.id = `img-${listing.PROPERTY_ID}`
        img.src = `${listing.COVER_IMG_ID}`; // What will this be?
        img.alt = `Image-${listing.COVER_IMG_ID}`
    td_COVER_IMG_ID.id = `COVER_IMG_ID-${listing.PROPERTY_ID}`;
    td_COVER_IMG_ID.className = "dashboard-td";
    td_COVER_IMG_ID.appendChild(img);
    row.appendChild(td_COVER_IMG_ID);


    const td_DESCRIPTION = document.createElement("td");
    td_DESCRIPTION.id = `DESCRIPTION-${listing.PROPERTY_ID}`;
    td_DESCRIPTION.textContent = `${listing.DESCRIPTION}`;
    td_DESCRIPTION.className = "dashboard-td";
    td_DESCRIPTION.contentEditable = true;
    row.appendChild(td_DESCRIPTION);





    const td_ADDRESS = document.createElement("td");
    td_ADDRESS.id = `ADDRESS-${listing.PROPERTY_ID}`;
    td_ADDRESS.textContent = `${listing.ADDRESS}`;
    td_ADDRESS.className = "dashboard-td";
    td_ADDRESS.contentEditable = true;
    row.appendChild(td_ADDRESS);


    const td_CITY_PROVINCE_COUNTRY = document.createElement("td");
    td_CITY_PROVINCE_COUNTRY.id = `CITY_PROVINCE_COUNTRY-${listing.PROPERTY_ID}`;

    // NEEDS WORK
    const AREA_ID = getAreaID(locations, listing.LOCATION_NAME, listing.LOCATION_CITY, listing.LOCATION_PROVINCE, listing.LOCATION_COUNTRY) ?? "1";

    const select = createLocationSelect(locations);
    select.value = AREA_ID;
    td_CITY_PROVINCE_COUNTRY.appendChild(select);
    row.appendChild(select);


    //const td_LOCATION_NAME = document.createElement("td");
    // td_LOCATION_NAME.id = `PROPERTY_NAME-${listing.PROPERTY_ID}`;
    // td_LOCATION_NAME.textContent = `${listing.LOCATION_NAME}`;
    // td_LOCATION_NAME.className = "dashboard-td";
    // td_LOCATION_NAME.contentEditable = true;
    // row.appendChild(td_LOCATION_NAME);


    // const td_LOCATION_CITY = document.createElement("td");
    // td_LOCATION_CITY.id = `LOCATION_CITY-${listing.PROPERTY_ID}`;
    // td_LOCATION_CITY.textContent = `${listing.LOCATION_CITY}`;
    // td_LOCATION_CITY.className = "dashboard-td";
    // td_LOCATION_CITY.contentEditable = true;
    // row.appendChild(td_LOCATION_CITY);
    //
    //
    // const td_LOCATION_PROVINCE = document.createElement("td");
    // td_LOCATION_PROVINCE.id = `LOCATION_PROVINCE-${listing.PROPERTY_ID}`;
    // td_LOCATION_PROVINCE.textContent = `${listing.LOCATION_PROVINCE}`;
    // td_LOCATION_PROVINCE.className = "dashboard-td";
    // td_LOCATION_PROVINCE.contentEditable = true;
    // row.appendChild(td_LOCATION_PROVINCE);
    //
    //
    // const td_LOCATION_COUNTRY = document.createElement("td");
    // td_LOCATION_COUNTRY.id = `LOCATION_COUNTRY-${listing.PROPERTY_ID}`;
    // td_LOCATION_COUNTRY.textContent = `${listing.LOCATION_COUNTRY}`;
    // td_LOCATION_COUNTRY.className = "dashboard-td";
    // td_LOCATION_COUNTRY.contentEditable = true;
    // row.appendChild(td_LOCATION_COUNTRY);


    const td_YEAR = document.createElement("td");
    td_YEAR.id = `YEAR-${listing.PROPERTY_ID}`;
    td_YEAR.textContent = `${listing.YEAR}`;
    td_YEAR.className = "dashboard-td";
    td_YEAR.contentEditable = true;
    row.appendChild(td_YEAR);

    const td_PARKING_COUNT = document.createElement("td");
    td_PARKING_COUNT.id = `PARKING_COUNT-${listing.PROPERTY_ID}`;
    td_PARKING_COUNT.textContent = `${listing.PARKING_COUNT}`;
    td_PARKING_COUNT.className = "dashboard-td";
    td_PARKING_COUNT.contentEditable = true;
    row.appendChild(td_PARKING_COUNT);


    const td_BATH_COUNT = document.createElement("td");
    td_BATH_COUNT.id = `BATH_COUNT-${listing.PROPERTY_ID}`;
    td_BATH_COUNT.textContent = `${listing.BATH_COUNT}`;
    td_BATH_COUNT.className = "dashboard-td";
    td_BATH_COUNT.contentEditable = true;
    row.appendChild(td_BATH_COUNT);


    const td_ROOMS_COUNT = document.createElement("td");
    td_ROOMS_COUNT.id = `ROOMS_COUNT-${listing.PROPERTY_ID}`;
    td_ROOMS_COUNT.textContent = `${listing.ROOMS_COUNT}`;
    td_ROOMS_COUNT.className = "dashboard-td";
    td_ROOMS_COUNT.contentEditable = true;
    row.appendChild(td_ROOMS_COUNT);


    const td_PRICE = document.createElement("td");
    td_PRICE.id = `PRICE-${listing.PROPERTY_ID}`;
    td_PRICE.textContent = `$${listing.PRICE}`;
    td_PRICE.className = "dashboard-td";
    td_PRICE.contentEditable = true;
    row.appendChild(td_PRICE);


    const td_IS_FOR_SALE = document.createElement("td");
    td_IS_FOR_SALE.id = `IS_FOR_SALE-${listing.PROPERTY_ID}`;
    td_IS_FOR_SALE.textContent = listing.IS_FOR_SALE === "0" ? "No" : "Yes";
    td_IS_FOR_SALE.className = "dashboard-td";
    td_IS_FOR_SALE.contentEditable = true;
    row.appendChild(td_IS_FOR_SALE);


    // Functionality not completed
    const td_DELETE_BUTTON = document.createElement("td");
    td_DELETE_BUTTON.className = "dashboard-td";
        const deleteButton = document.createElement("button");
        deleteButton.id = `DELETE_BUTTON-${listing.PROPERTY_ID}`; // Important for deleting users from db
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click",
            (event)=>{

                const id = event.target.id.replace("DELETE_BUTTON-", "");

                const confirm1 = confirm(`Are you sure you want to remove property: ${id}`);

                // if(!confirm1) return;
                //
                // // Remove property ID
                // const row = document.getElementById(`row-${id}`);
                // const tableBody = document.getElementById("tbody-my-listings");
                //
                // tableBody.removeChild(row);

                location.reload();
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
        (event)=>{

            const id = event.target.id.replace("DELETE_BUTTON-", "");
            const confirm1 = confirm(`Are you sure you want to update property: ${id}`);

            if(!confirm1) return;

            const BROKER_ID = parseInt(localStorage.getItem('user').USER_ID);
            const COVER_IMG_ID = document.getElementById(`img-${id}`).getAttribute('src'); // is this the source of the image?
            const DESCRIPTION = document.getElementById(`DESCRIPTION-${id}`).textContent;
            const AREA_ID = document.getElementById(); // ?
            const ADDRESS = document.getElementById(`ADDRESS-${id}`).textContent;
            const POSTAL = document.getElementById(`POSTAL-${id}`).textContent;
            const YEAR = document.getElementById(`YEAR-${id}`).textContent;
            const PARKING_COUNT = parseInt(document.getElementById(`PARKING_COUNT-${id}`).textContent);
            const BATH_COUNT = parseInt(document.getElementById(`BATH_COUNT-${id}`).textContent);
            const ROOMS_COUNT = parseInt(document.getElementById(`ROOMS_COUNT-${id}`).textContent);
            const TYPE_ID = parseInt(document.getElementById(`TYPE_ID-${id}`).textContent);
            const PRICE = parseFloat(document.getElementById(`BATH_COUNT-${id}`).textContent.replace("$",""));
            const IS_FOR_SALE = document.getElementById(`IS_FOR_SALE-${id}`).textContent === "Yes" ? 1 : 0;
            // const STATUS = document.getElementById().value;
            const PROPERTY_ID = parseInt(id);


            updateProperty(COVER_IMG_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
                PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, STATUS, PROPERTY_ID);



        }
    )
    td_UPDATE_BUTTON.appendChild(updateButton);
    row.appendChild(td_UPDATE_BUTTON);


    return row;
}


/**
 *
 * @param {Array of objs} locations
 * @param {string} AREA_ID
 * @returns {HTMLSelectElement}
 */
function createLocationSelect(locations) {
    const select = document.createElement("select");
    select.id = 'SELECT_CITY_PROVINCE_COUNTRY';

    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location.AREA_ID;
        option.textContent = `${location.NAME}, ${location.CITY}, ${location.PROVINCE}, ${location.COUNTRY}`;
        select.appendChild(option);
    });

    return select;
}


/**
 *
 * @param {array of locations}locations
 * @param {string} NAME
 * @param {string} CITY
 * @param {string} PROVINCE
 * @param {string} COUNTRY
 */

function getAreaID(locations, NAME, CITY, PROVINCE, COUNTRY){

    locations.forEach(
        (location)=>{

            if(location.NAME === NAME && location.CITY === CITY && location.PROVINCE === PROVINCE && location.COUNTRY === COUNTRY){

                return location.AREA_ID
            }
        }
    )

    return undefined;
}

