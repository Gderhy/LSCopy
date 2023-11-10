
import {getBrokerOffers, getSentOffers, updateOffer} from './import_data.js';
import { changeLoginInNav } from '../../login/loginNAV.js';


const user = JSON.parse(localStorage.getItem('user'));
changeLoginInNav();
const brokerOffers = getBrokerOffers(user.USER_ID);
const sentOffers = getSentOffers(user.USER_ID);

console.log(brokerOffers)
console.log(sentOffers);

if (brokerOffers == null) {
    alert('No offers found.');
}

document.addEventListener('DOMContentLoaded', function() {
    populateOffersTable(brokerOffers);
    populateSentOffersTable(sentOffers);
});

function populateOffersTable(offers) {
    const tableBody = document.getElementById('offers-tbody');
    tableBody.innerHTML = ''; 
    
    offers.forEach(offer => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${offer.ADDRESS}</td>
            <td>${offer.DESCRIPTION}</td>
            <td>${offer.FROM_BROKER_NAME}</td>
            <td>${offer.POSTAL}</td>
            <td>$${offer.PRICE}</td>
            <td>${offer.NOTE}</td>
            <td>
                <select class="offer-status" data-offer-id="${offer.OFFER_ID}">
                    <option value="1" ${offer.STATUS === "1" ? 'selected' : ''}>New</option>
                    <option value="2" ${offer.STATUS === "2" ? 'selected' : ''}>Accepted</option>
                    <option value="3" ${offer.STATUS === "3" ? 'selected' : ''}>Declined</option>
                </select>
            </td>
        `;
    });

    document.querySelectorAll('.offer-status').forEach(selectElement => {
        selectElement.addEventListener('change', function() {
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

    const tableBody = document.getElementById('offerSent-tbody');
    tableBody.innerHTML = ''; 
    sentOffers.forEach(sentOffer => {
        console.log(sentOffer)
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

    if(status == 1){

        return 'Pending approval';
    } else if(status == 2){

        return 'Accepted';
    } else {

        return 'Declined'
    }
}