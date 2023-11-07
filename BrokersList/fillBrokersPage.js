function getAllBrokers(){

}

fillBrokers(getAllBrokers());

function fillBrokers(brokers){

    const listings = document.getElementById('brokers-grid');

    brokers.forEach(
        broker => {

            const listing = document.createElement("div");
            listing.id = broker.USER_ID;
            listing.className = 'listing'

            const h3 = document.createElement('h3');
            h3.textContent = `${broker.FIRST_NAME} ${broker.LAST_NAME}`;
            listing.appendChild(h3);

            const img = document.createElement("img");
            img.src = "https://www.rate-my-agent.com/upload/Asal-Jami-Montreal-Real-Estate-Agent.webp";
            img.alt = `Broker: ${broker.USER_ID}`;
            listing.appendChild(img);

            const phone = document.createElement('a');
            phone.href = `tel:${broker.PHONE_NUM}`;
            const phone_p = document.createElement('p');
            phone_p.textContent = broker.PHONE_NUM;
            phone.appendChild(phone_p);
            listing.appendChild(phone);

            const email = document.createElement('a');
            email.href = `mailto:${broker.EMAIL}`;
            const email_p = document.createElement('p');
            email_p.textContent = broker.EMAIL;
            email.appendChild(email_p);
            listing.appendChild(email);

            const view_listings_btn = document.createElement('button');
            view_listings_btn.innerText = "View Broker's Listings";
            view_listings_btn.className = "view-details";
            listing.appendChild(view_listings_btn);

            listings.appendChild(listing)
        }
    )


}

