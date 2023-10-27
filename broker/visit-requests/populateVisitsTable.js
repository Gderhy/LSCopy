import {getBrokerVisitRequests, scheduleVisit} from "./import_data.js";

const user = JSON.parse(localStorage.getItem('user'))

function populateVisitsTable(visits) {


    const visitTableBody = document.getElementById('visits-tbody')

    visits.forEach(
        visit => {

            const tr = document.createElement('tr');

            const td_property_id = document.createElement('td');
            td_property_id.textContent = visit.PROPERTY_ID;
            tr.appendChild(td_property_id);

            const td_image = document.createElement('td');
            const img = document.createElement('img');
            img.alt = "image";
            img.src = visit.COVER_IMG_ID;
            td_image.appendChild(img);
            tr.appendChild(td_image);

            const td_name = document.createElement('td');
            td_name.textContent = visit.CLIENT_NAME;
            tr.appendChild(td_name);

            const td_email = document.createElement('td');
            td_email.textContent = visit.CLIENT_EMAIL;
            tr.appendChild(td_email);

            const td_phone = document.createElement('td');
            td_phone.textContent = visit.CLIENT_PHONE;
            tr.appendChild(td_phone);

            const td_address = document.createElement('td');
            td_address.textContent = visit.ADDRESS;
            tr.appendChild(td_address);

            const td_city_province_country = document.createElement('td');
            td_city_province_country.textContent = `${visit.LOCATION_CITY}, ${visit.LOCATION_PROVINCE}, ${visit.LOCATION_COUNTRY}`;
            tr.appendChild(td_city_province_country);


            const td_description = document.createElement('td');
            td_description.textContent = visit.DESCRIPTION;
            tr.appendChild(td_description);

            const td_price = document.createElement('td');
            td_price.textContent = `$${visit.PRICE}`;
            tr.appendChild(td_price);

            const td_for_sale = document.createElement('td');
            td_for_sale.textContent = visit.IS_FOR_SALE == 1 ? "Yes" : "No";
            tr.appendChild(td_for_sale);

            const td_property_type = document.createElement('td');
            td_property_type.textContent = visit.PROPERTY_TYPE;
            tr.appendChild(td_property_type);

            const td_year = document.createElement('td');
            td_year.textContent = visit.YEAR;
            tr.appendChild(td_year);

            const td_request_id = document.createElement('td');
            td_request_id.textContent = visit.REQUEST_ID;
            tr.appendChild(td_request_id);

            const td_scheduled_date = document.createElement('td');
            const calendar = document.createElement('input');
            calendar.type = 'datetime-local';
            calendar.value = visit.SCHEDULED_DATE;
            calendar.onblur = () => {

                console.log(formatDateTime(calendar.value))
                console.log(visit.REQUEST_ID)
                scheduleVisit(formatDateTime(calendar.value), visit.REQUEST_ID);
                location.reload();
            };


            td_scheduled_date.appendChild(calendar)
            tr.appendChild(td_scheduled_date);


            const td_requested_date = document.createElement('td');
            td_requested_date.textContent = visit.REQUESTED_DATE;
            tr.appendChild(td_requested_date);

            const td_status = document.createElement('td');
            td_status.textContent = visit.STATUS;
            tr.appendChild(td_status);


            visitTableBody.appendChild(tr);
        })
}

function formatDateTime(datetimeValue) {
    const dateObj = new Date(datetimeValue);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = '00'; // Set seconds to '00' (or any other value if needed)

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
