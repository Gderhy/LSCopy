
import { getBrokerOffers, updateOffer } from './import_data.js';

const user = JSON.parse(localStorage.getItem('user'));
const brokerOffers = getBrokerOffers(user.USER_ID);
if (brokerOffers == null) {
    alert('No offers found.');
}

document.addEventListener('DOMContentLoaded', function() {
    populateOffersTable(brokerOffers);
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