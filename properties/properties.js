import {getProperties, getLocations, getPropertyImages,
    requestVisitToProperty, getAllBrokers, submitOffer1} from './import_data.js';

const user = JSON.parse(localStorage.getItem('user'));

document.addEventListener('DOMContentLoaded', function () {


    let locations = getLocations();
    let selectElement = document.getElementById('area');

    locations.forEach(function (location) {
        let option = document.createElement('option');
        option.value = location.AREA_ID;
        option.textContent = location.NAME;
        selectElement.appendChild(option);
    });

    const brokers_select = document.getElementById('brokers_select');


    const brokers = getAllBrokers();

    brokers.forEach(
        broker => {

            if (broker.STATUS !== "ACTIVE") return;

            const option = document.createElement('option');
            option.value = broker.USER_ID;
            option.textContent = `${broker.FIRST_NAME} ${broker.LAST_NAME}`;
            brokers_select.appendChild(option);
        }
    )

    const broker_USER_ID = localStorage.getItem("broker");

    if (broker_USER_ID) {

        brokers_select.value = broker_USER_ID;
        localStorage.removeItem("broker");
        document.getElementById('propertySearchForm').click();
    }

});

document.getElementById('propertySearchForm').addEventListener('click',
    function (event) {
    let area = document.getElementById('area').value;
    let maxPrice = document.getElementById('maxPrice').value;
    let isForSale = document.getElementById('isForSale').value;
    let broker_id = document.getElementById('brokers_select').value;

    area = area ? area : -1;
    maxPrice = maxPrice ? maxPrice : -1;
    broker_id = broker_id ? broker_id : -1;

    let jsonProperties = getProperties(area, maxPrice, isForSale, broker_id);
    displayProperties(jsonProperties);
});


function displayProperties(properties) {
    let resultsDiv = document.getElementById('searchResults');

    resultsDiv.innerHTML = '';
    if (properties?.length >= 1) {
        removeElementsByClassName('featured-listings');
        properties.forEach(function (property) {
            let propertyImage = getPropertyImages(property.PROPERTY_ID);

            let imageUrl = propertyImage && propertyImage.length > 0 ? propertyImage[0].IMG : 'COVER_IMAGE';

            let propertyDiv = document.createElement('section');

            propertyDiv.className = 'featured-listings';

            let listing = document.createElement('div');
            listing.className = 'listing';

            propertyDiv.innerHTML = `
            <div class="listing" id="property_${property.PROPERTY_ID}">
                <img src="${imageUrl}" alt="Property 4">
                <h3>${property.DESCRIPTION}</h3>
                <p>${property.LOCATION_CITY},  ${property.ADDRESS}</p>
                <p>Price: ${property.PRICE}$</p>
                <p>🛌 ${property.ROOMS_COUNT} 🛁 ${property.BATH_COUNT} 🅿️ ${property.PARKING_COUNT}</p>
            </div>`;

            document.getElementById('propertiesSections').appendChild(propertyDiv);
            let submitRequest = document.createElement('button');
            submitRequest.textContent = 'Request Visit';
            document.getElementById('property_' + property.PROPERTY_ID).appendChild(submitRequest);
            submitRequest.addEventListener('click', function () {
                submitVisitRequest(property.PROPERTY_ID);
            });


            if(user?.ROLE_ID == 2){


                const submitOffer = document.createElement('button');
                submitOffer.textContent = "Submit an offer";
                submitOffer.addEventListener('click',
                    ()=>{




                        submitOffer1(user.BROKER_ID, property.PROPERTY_ID, prompt("Enter your offer: "));

                        // console.log(user.USER_ID, property.PROPERTY_ID, prompt("Enter your offer: "))

                    })
                document.getElementById('property_' + property.PROPERTY_ID).appendChild(submitOffer);


            }


        });
    }
}

function removeElementsByClassName(className) {
    var elements = document.querySelectorAll("." + className);

    for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

function submitVisitRequest(propertyId) {
    let requestDate = getCurrentDateTime();
    let user = JSON.parse(localStorage.getItem('user'));
    requestVisitToProperty(requestDate, user.USER_ID, propertyId);
    alert('Your request has been sent successfully!');
}

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}



