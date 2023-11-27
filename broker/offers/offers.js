import {getBrokerOffers, getSentOffers, updateOffer} from './import_data.js';

const user = JSON.parse(localStorage.getItem('user'));

const brokerOffers = getBrokerOffers(user.USER_ID);
const sentOffers = getSentOffers(user.USER_ID);

// console.log(brokerOffers)
// console.log(sentOffers);

if (brokerOffers == null) {
    alert('No offers found.');
}

document.addEventListener('DOMContentLoaded', function () {
    populateOffersTable(brokerOffers);
    populateSentOffersTable(sentOffers);
});

function createOfferRow(offer) {

    const row = document.createElement('row');

    if (!offer) return row;

    const tdAddress = document.createElement('td');
    tdAddress.innerText = offer.ADDRESS;
    row.appendChild(tdAddress);

    const tdDescription = document.createElement('td');
    tdDescription.innerText = offer.DESCRIPTION;
    row.appendChild(tdDescription);

    const tdFromBrokerName = document.createElement('td');
    tdFromBrokerName.innerText = offer.FROM_BROKER_NAME;
    row.appendChild(tdFromBrokerName);

    const tdPostal = document.createElement('td');
    tdPostal.innerText = offer.POSTAL;
    row.appendChild(tdPostal);

    const tdPrice = document.createElement('td');
    tdPrice.innerText = offer.PRICE;
    row.appendChild(tdPrice);

    const tdNote = document.createElement('td');
    tdNote.innerText = offer.NOTE;
    row.appendChild(tdNote);

    const tdSelect = document.createElement('td');
    const select = document.createElement('select');
    select.className = "offer-status";
    select.setAttribute("data-offer-id", offer.OFFER_ID);
    const options = [document.createElement('option'),
        document.createElement('option'), document.createElement('option')];

    for (let i = 0; i < options.length; i++) {

        options[i].value = `${i+1}`;
        options[i].innerText = convertStatusToText(offer.STATUS);
        options[i].selected = i + 1 === offer.STATUS;
        select.appendChild(options[i]);
    }

    options[0].innerText = "New";

    row.appendChild(select);

    return row;
}

function populateOffersTable(offers) {

    if (!offers) return;

    const tableBody = document.getElementById('offers-tbody');
    tableBody.innerHTML = '';


    offers.forEach(offer => {

        if (!offer) return;
        tableBody.appendChild(createOfferRow(offer));
    });


    document.querySelectorAll('.offer-status').forEach(selectElement => {
        selectElement.addEventListener('change', function () {
            updateOfferStatus(this);
        });
    });
}


function updateOfferStatus(selectElement) {
    const offerId = selectElement.getAttribute('data-offer-id');
    const newStatus = selectElement.value;
    console.log(`Offer ID: ${offerId}, New Status: ${newStatus}`);
    updateOffer(newStatus, offerId);
}


// let sentOffers = getSentOffers(user.USER_ID); --> sql function needed
function populateSentOffersTable(sentOffers) {

    if (!sentOffers) return;

    const tableBody = document.getElementById('offerSent-tbody');
    tableBody.innerHTML = '';
    sentOffers.forEach(sentOffer => {
        const row = document.createElement('tr');
        row.innerHTML = '';
        row.innerHTML = `
            <td>${sentOffer.OFFER_ID}</td>
            <td>${sentOffer.ADDRESS}</td>
            <td>${sentOffer.DESCRIPTION}</td>
            <td>${sentOffer.FROM_BROKER_NAME}</td>
            <td>${sentOffer.POSTAL}</td>
            <td>$${sentOffer.PRICE}</td>
            <td>${convertStatusToText(sentOffer.STATUS)}</td>
        `;
        tableBody.appendChild(row);
    });
}

function convertStatusToText(status) {

    if (status == 1) {

        return 'Pending approval';
    } else if (status == 2) {

        return 'Accepted';
    } else {

        return 'Declined'
    }
}