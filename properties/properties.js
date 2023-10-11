import {getProperties, getLocations, getPropertyImages} from './import_data.js';

document.addEventListener('DOMContentLoaded', function() {
    let locations = getLocations();
    let selectElement = document.getElementById('area');

    locations.forEach(function(location) {
        let option = document.createElement('option');
        option.value = location.AREA_ID; 
        option.textContent = location.NAME;
        selectElement.appendChild(option);
    });
});




document.getElementById('propertySearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
 let area = document.getElementById('area').value;
 let maxPrice = document.getElementById('maxPrice').value;
 let isForSale = document.getElementById('isForSale').value;

 area = area ? area : -1;
 maxPrice = maxPrice ? maxPrice : -1;

let jsonProperties = getProperties(area, maxPrice, isForSale);
displayProperties(jsonProperties);
});
  



function displayProperties(properties) {

    let resultsDiv = document.getElementById('searchResults');

    resultsDiv.innerHTML = '';

    properties.forEach(function(property) {
      
        
        let propertyImage = getPropertyImages(property.PROPERTY_ID);

        let imageUrl = propertyImage && propertyImage.length > 0 ? propertyImage[0].link : 'COVER_IMAGE';

        
        let propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';

        
        propertyDiv.innerHTML = `
            <h3>${property.DESCRIPTION} on ${property.ADDRESS}</h3>
            <p>Price: $${property.PRICE}</p>
            <img src="${imageUrl}" alt= 
            "Cover Image"> `;

        
        resultsDiv.appendChild(propertyDiv);
    });
}


