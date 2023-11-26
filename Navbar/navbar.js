/*
<header>
    <nav>
        <div class="logo">
            <a href="index.html"> <img src="/LuckySeven/FrontEnd-Rough/logo.png" alt="Logo"></a>
        </div>
        <div class="mobile-menu-icon" onclick="toggleMobileMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links" id="nav-links">
            <li><a href="/LuckySeven/FrontEnd-Rough/properties/">Properties</a></li>
            <li><a href="/LuckySeven/brokerList/brokers.php">Brokers</a></li>
            <li><a href="/LuckySeven/admin/index.php">Admin Page</a></li>
            <li><a href="/LuckySeven/login/index.php">Logout</a></li>
        </ul>
    </nav>
</header>
 */


// Calls for function that fills the li needed
addEventListener('DOMContentLoaded', implementNavbar);


function implementNavbar() {

    // Applies the proper link to the home page (Property Search)
    const logoAnchor = document.querySelector(".logo a")
    logoAnchor.href = "/LuckySeven/properties/index.php"


    // Applies the respective li to the ul of the nav
    const ul = document.getElementById('nav-links');

    while (ul.firstChild) {

        ul.removeChild(ul.firstChild)
    }

    ul.appendChild(getPropertySearchLi());
    ul.appendChild(getSearchForBrokerLi());


    const user = JSON.parse(localStorage.getItem('user'));

    if (user?.ROLE_ID === "1") { // admin

        ul.appendChild(getAdminLi())

    } else if (user?.ROLE_ID === "2") { // Broker

        ul.appendChild(getPropertyManagementLi());
        ul.appendChild(getVisitRequestLi());
        ul.appendChild(getOfferManagementLi());

    } else { // Logged out or client

        ul.appendChild(getContactUsLi());
        ul.appendChild(getAboutUsLi());
    }

    user ? ul.appendChild(getLoggedInUserLi(user.FIRST_NAME, user.LAST_NAME)) :
        ul.appendChild(getLoginRegisterLi());
}

function getLoginRegisterLi() {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '/LuckySeven/login/index.php';
    a.innerText = 'Login/Register';

    li.appendChild(a);

    return li;
}

function getAdminLi() {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = '/LuckySeven/admin/index.php';
    a.innerText = 'Admin';

    li.appendChild(a);

    return li;
}

function getLoggedInUserLi(firstName, lastName) {

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '/LuckySeven/login/index.php';
    a.innerText = `${firstName}`;

    li.appendChild(a);

    return li;
}

function getPropertyManagementLi() {

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '/LuckySeven/broker/properties-mng/index.php';
    a.innerText = `Property Management`;

    li.appendChild(a);

    return li;
}

function getVisitRequestLi() {

    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = '/LuckySeven/broker/visit-requests/index.php';
    a.innerText = `Visit Requests Management`;

    li.appendChild(a);

    return li;
}

function getOfferManagementLi() {

    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = '/LuckySeven/broker/offers/index.php';
    a.innerText = `Offer Management`;

    li.appendChild(a);

    return li;
}


function getPropertySearchLi() {

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '/LuckySeven/properties/index.php';
    a.innerText = 'Properties';

    li.appendChild(a);

    return li;
}

function getSearchForBrokerLi() {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '/LuckySeven/brokerList/brokers.php';
    a.innerText = 'Brokers';

    li.appendChild(a);

    return li;
}

function getContactUsLi() {

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '/LuckySeven/contactUs/contact.html';
    a.innerText = 'Contact Us';

    li.appendChild(a);

    return li;
}

function getAboutUsLi() {

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '/LuckySeven/aboutUs/about-us.html';
    a.innerText = 'About Us';

    li.appendChild(a);

    return li;
}

