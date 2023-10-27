import {
    getBrokerProperties,
    getLocations, getPropertyImages,
    getPropertyTypes,
    insertNewProperty,
    linkImageToProperty,
    updateProperty
} from "./import_data.js";


const user = JSON.parse(localStorage.getItem('user'));
const locations = getLocations();
const propertyTypes = getPropertyTypes();

populateMyListingTable(getBrokerProperties(user.USER_ID));

function populateMyListingTable(listings){

    const tableBody = document.getElementById("tbody-my-listings");

    // Clears out existing table
    while(tableBody.firstChild) {

        tableBody.removeChild(tableBody.firstChild);
    }


    // Populate table
    listings.forEach(
        (listing) => tableBody.appendChild(getTableRow(listing, locations, propertyTypes))
    );
}

function getTableRow(listing, locations, propertyTypes){

    const id = listing.PROPERTY_ID;

    const row = document.createElement("tr");
    row.id = `row-${id}`

    const td_PROPERTY_ID = document.createElement("td");
    td_PROPERTY_ID.id = `PROPERTY_ID-${id}`;
    td_PROPERTY_ID.textContent = `${id}`;
    td_PROPERTY_ID.className = "dashboard-td";
    row.appendChild(td_PROPERTY_ID);


    const td_PROPERTY_TYPE = document.createElement("td");
    const propertyTypeSelect = createPropertyTypeSelect(propertyTypes, id);
    propertyTypeSelect.value = findTypeIdByPropertyType(propertyTypes, listing.PROPERTY_TYPE);
    td_PROPERTY_TYPE.id = `PROPERTY_TYPE-${id}`;
    td_PROPERTY_TYPE.appendChild(propertyTypeSelect);
    row.appendChild(td_PROPERTY_TYPE);
    

    // const td_PROPERTY_TYPE = document.createElement("td");
    // td_PROPERTY_TYPE.id = `PROPERTY_TYPE-${id}`;
    // td_PROPERTY_TYPE.textContent = `${listing.PROPERTY_TYPE}`;
    // td_PROPERTY_TYPE.className = "dashboard-td";
    // td_PROPERTY_TYPE.contentEditable = true;
    // row.appendChild(td_PROPERTY_TYPE);


    // Will add editing to images later
    const td_COVER_IMG_ID = document.createElement("td");
    td_COVER_IMG_ID.id = `COVER_IMG_ID-${id}`;
    td_COVER_IMG_ID.className = "dashboard-td";
        const img = document.createElement("img");
        img.className = "cover-img"
        img.id = `img-${id}`
        const images = getPropertyImages(id) ?? [{"IMG" : `${listing.COVER_IMG_ID}`}];
    console.log(id, images)
        img.src = images[images.length-1].IMG;
        img.alt = `Image-${listing.COVER_IMG_ID}`
    const img_input = document.createElement('input');
        img_input.type = 'text';
        img_input.id = `img_input-${id}`;

    // const img_select = getImgSelect(id);
    // td_COVER_IMG_ID.appendChild(img_select);
    td_COVER_IMG_ID.appendChild(img);
    td_COVER_IMG_ID.appendChild(img_input)
    row.appendChild(td_COVER_IMG_ID);


    const td_DESCRIPTION = document.createElement("td");
    td_DESCRIPTION.id = `DESCRIPTION-${id}`;
    td_DESCRIPTION.textContent = `${listing.DESCRIPTION}`;
    td_DESCRIPTION.className = "dashboard-td";
    td_DESCRIPTION.contentEditable = true;
    row.appendChild(td_DESCRIPTION);


    const td_ADDRESS = document.createElement("td");
    td_ADDRESS.id = `ADDRESS-${id}`;
    td_ADDRESS.textContent = `${listing.ADDRESS}`;
    td_ADDRESS.className = "dashboard-td";
    td_ADDRESS.contentEditable = true;
    row.appendChild(td_ADDRESS);


    const td_POSTAL = document.createElement("td");
    td_POSTAL.id = `POSTAL-${id}`;
    td_POSTAL.textContent = listing.POSTAL;
    td_POSTAL.className = "dashboard-td";
    td_POSTAL.contentEditable = true;
    row.appendChild(td_POSTAL);

    const td_CITY_PROVINCE_COUNTRY = document.createElement("td");
    td_CITY_PROVINCE_COUNTRY.id = `CITY_PROVINCE_COUNTRY-${id}`;
    const AREA_ID = listing.AREA_ID;
    const select = createLocationSelect(locations, id);
    select.value = AREA_ID;
    td_CITY_PROVINCE_COUNTRY.appendChild(select);
    row.appendChild(select);


    const td_YEAR = document.createElement("td");
    td_YEAR.id = `YEAR-${id}`;
    td_YEAR.textContent = `${listing.YEAR}`;
    td_YEAR.className = "dashboard-td";
    td_YEAR.contentEditable = true;
    row.appendChild(td_YEAR);

    const td_PARKING_COUNT = document.createElement("td");
    td_PARKING_COUNT.id = `PARKING_COUNT-${id}`;
    td_PARKING_COUNT.textContent = `${listing.PARKING_COUNT}`;
    td_PARKING_COUNT.className = "dashboard-td";
    td_PARKING_COUNT.contentEditable = true;
    row.appendChild(td_PARKING_COUNT);


    const td_BATH_COUNT = document.createElement("td");
    td_BATH_COUNT.id = `BATH_COUNT-${id}`;
    td_BATH_COUNT.textContent = `${listing.BATH_COUNT}`;
    td_BATH_COUNT.className = "dashboard-td";
    td_BATH_COUNT.contentEditable = true;
    row.appendChild(td_BATH_COUNT);


    const td_ROOMS_COUNT = document.createElement("td");
    td_ROOMS_COUNT.id = `ROOMS_COUNT-${id}`;
    td_ROOMS_COUNT.textContent = `${listing.ROOMS_COUNT}`;
    td_ROOMS_COUNT.className = "dashboard-td";
    td_ROOMS_COUNT.contentEditable = true;
    row.appendChild(td_ROOMS_COUNT);


    const td_PRICE = document.createElement("td");
    td_PRICE.id = `PRICE-${id}`;
    td_PRICE.textContent = `$${listing.PRICE}`;
    td_PRICE.className = "dashboard-td";
    td_PRICE.contentEditable = true;
    row.appendChild(td_PRICE);


    const td_IS_FOR_SALE = document.createElement("td");
    td_IS_FOR_SALE.id = `IS_FOR_SALE-${id}`;
    td_IS_FOR_SALE.textContent = listing.IS_FOR_SALE === "0" ? "No" : "Yes";
    td_IS_FOR_SALE.className = "dashboard-td";
    td_IS_FOR_SALE.contentEditable = true;
    row.appendChild(td_IS_FOR_SALE);


    const td_STATUS = document.createElement("td");
    td_STATUS.id = `STATUS-${id}`;
    const selectStatus = createStatusSelect(id);
    selectStatus.value = listing.STATUS;
    td_STATUS.appendChild(selectStatus)
    td_STATUS.className = "dashboard-td";
    row.appendChild(td_STATUS);


    // Functionality not completed
    const td_UPDATE_BUTTON = document.createElement("td");
    td_UPDATE_BUTTON.className = "dashboard-td";
    const updateButton = document.createElement("button");
    updateButton.id = `UPDATE_BUTTON-${id}`; // Important for deleting users from db
    updateButton.textContent = "Update";
    updateButton.addEventListener("click",
        (event)=>{



            const id = event.target.id.replace("UPDATE_BUTTON-", "");
            console.log(getPropertyImages(id));

            const confirm1 = confirm(`Are you sure you want to update property: ${id}`);

            if(!confirm1) return;

            const COVER_IMG_ID = 1;
            const DESCRIPTION = document.getElementById(`DESCRIPTION-${id}`).textContent;
            const AREA_ID = document.getElementById(`SELECT_CITY_PROVINCE_COUNTRY-${id}`).value;
            const ADDRESS = document.getElementById(`ADDRESS-${id}`).textContent;
            const POSTAL = document.getElementById(`POSTAL-${id}`).textContent;
            const YEAR = document.getElementById(`YEAR-${id}`).textContent;
            const PARKING_COUNT = parseInt(document.getElementById(`PARKING_COUNT-${id}`).textContent);
            const BATH_COUNT = parseInt(document.getElementById(`BATH_COUNT-${id}`).textContent);
            const ROOMS_COUNT = parseInt(document.getElementById(`ROOMS_COUNT-${id}`).textContent);
            const TYPE_ID = document.getElementById(`PROPERTY_TYPE_SELECT-${id}`).value;
            const PRICE = parseFloat(document.getElementById(`BATH_COUNT-${id}`).textContent.replace("$",""));
            const IS_FOR_SALE = document.getElementById(`IS_FOR_SALE-${id}`).textContent === "Yes" ? 1 : 0;
            const STATUS = document.getElementById(`STATUS_SELECT-${id}`).value; // str
            const PROPERTY_ID = id;

            console.log(STATUS)

            updateProperty(COVER_IMG_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR, PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, STATUS, PROPERTY_ID);

            location.reload();

        }
    )
    td_UPDATE_BUTTON.appendChild(updateButton);
    row.appendChild(td_UPDATE_BUTTON);


    return row;
}


/**
 *
 * @param {Array of objs} locations
 * @param id
 * @returns {HTMLSelectElement}
 */
function createLocationSelect(locations, id) {
    const select = document.createElement("select");
    select.id = `SELECT_CITY_PROVINCE_COUNTRY-${id}`;

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
 * @param {number} id
 * @returns {HTMLSelectElement}
 */
function createStatusSelect(id){

    const select = document.createElement("select");
    select.id = `STATUS_SELECT-${id}`;

    const status = ['ACTIVE', 'ON HOLD', 'DELETED', 'SOLD'];

    status.forEach(
        (s, index) => {
            const option = document.createElement('option');
            option.value = index+1;
            option.textContent = s;

            select.appendChild(option);
        }
    )
    return select;
}



function createPropertyTypeSelect(propertyTypes, id){

    const select = document.createElement('select');
    select.id = `PROPERTY_TYPE_SELECT-${id}`;

    propertyTypes.forEach(
        (type)=>{

            const option = document.createElement('option');
            option.value = type.TYPE_ID;
            option.textContent = type.NAME;

            select.appendChild(option);
        }
    )

    return select;
}

function findTypeIdByPropertyType(propertyTypes, PROPERTY_TYPE) {
    const foundType = propertyTypes.find(type => type.NAME === PROPERTY_TYPE);
    return foundType ? foundType.TYPE_ID : null;
}

function addAreaIDToForm(){


    const select = document.getElementById('select_area_id');

    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location.AREA_ID;
        option.textContent = `${location.NAME}, ${location.CITY}, ${location.PROVINCE}, ${location.COUNTRY}`;
        select.appendChild(option);
    });


}

function addTypeIDToForm(){

    const select = document.getElementById("select_type_id");
    propertyTypes.forEach(type => {

            const option = document.createElement('option');
            option.value = type.TYPE_ID;
            option.textContent = type.NAME;
            select.appendChild(option);
        }
    );

    return select;

}


const form_create_new_listing = document.getElementById("form-create-new-listing");
form_create_new_listing.addEventListener("submit",
    (event) =>{

        event.preventDefault();

        const BROKER_ID = 101; // have to check this
        const DESCRIPTION = document.getElementById("description").value;
        const AREA_ID = document.getElementById("select_area_id").value;
        const ADDRESS = document.getElementById("address").value;
        const POSTAL = document.getElementById("postal").value;
        const YEAR = document.getElementById("year").value;
        const PARKING_COUNT = document.getElementById("parkingCount").value;
        const BATH_COUNT = document.getElementById("bathCount").value;
        const ROOMS_COUNT = document.getElementById("roomsCount").value;
        const TYPE_ID = document.getElementById("select_type_id").value;
        const PRICE = document.getElementById("price").value;
        const IS_FOR_SALE = document.getElementById("isForSale").checked ? 1 : 0;
        const COVER_IMG = document.getElementById('cover_img').value;

        insertNewProperty(BROKER_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR, PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE);
        location.reload();
    });


function getImgSelect(PROPERTY_ID){

    const images = getPropertyImages(PROPERTY_ID);

    const select = document.createElement('select');
    select.style = 'width : 100px'

    images.forEach(image => {

        const option = document.createElement('option');
        option.value = image.IMG_ID;
        option.style.height = '100px';
        option.style.width = '100px'
        option.style = `background-image: url(${image.IMG});`;
        option.innerHTML = '<img src="https://as1.ftcdn.net/v2/jpg/00/78/02/92/1000_F_78029240_czkaiWM7G8jkvXAv88dtEArnO7UGDFeg.jpg">'

        // const img = document.createElement('img');
        // img.src = image.IMG;
        // img.alt = 'Image';
        // img.style.width = "100%"
        //
        //
        // option.appendChild(img);

        select.appendChild(option);

    })


    return select;
}

