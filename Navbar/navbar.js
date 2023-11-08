/**
 * <header>
 *             <nav>
 *                 <div class="logo">
 *                     <a href="/LuckySeven/properties/"> <img src="/LuckySeven/FrontEnd-Rough/logo.png" alt="Logo"></a>
 *                 </div>
 *                 <div class="mobile-menu-icon" onclick="toggleMobileMenu()">
 *                     <div class="bar"></div>
 *                     <div class="bar"></div>
 *                     <div class="bar"></div>
 *                 </div>
 *                 <ul class="nav-links" id="nav-links">
 *                     <li><a href="/LuckySeven/FrontEnd-Rough/properties/">Properties</a></li>
 *                     <li><a href="/LuckySeven/brokerList/brokers.php">Brokers</a></li>
 *                     <li><a href="/LuckySeven/FrontEnd-Rough/about-us.html">About Us</a></li>
 *                     <li><a href="/LuckySeven/FrontEnd-Rough/contact.html">Contact</a></li>
 *                     <li><a href="/LuckySeven/login/index.php">Login/Register</a></li>
 *                 </ul>
 *             </nav>
 *         </header>
 */

function implementNavBar() {

    const navbar = document.getElementById('navbar');

    navbar.appendChild(getImageDiv());
    navbar.appendChild(getMobileIcon());
    navbar.appendChild(getUl());

}

function getImageDiv() {

    const divLogo = document.createElement('div');
    divLogo.className = 'logo';
    const aLogo = document.createElement('a');
    aLogo.href = "/LuckySeven/properties";
    const imgLogo = document.createElement('img');
    imgLogo.src = "/LuckySeven/Navbar/logo.png";
    imgLogo.alt = 'Logo';
    aLogo.appendChild(imgLogo);
    divLogo.appendChild(aLogo);

    return divLogo;
}

function getMobileIcon() {

    const div = document.createElement('div');
    div.className = 'mobile-menu-icon';
    div.onclick = toggleMobileMenu;

    for (let i = 0; i < 3; i++) {

        const bar = document.createElement('div');
        bar.className = 'bar';
        div.appendChild(bar)
    }

    return div;
}


function getUl() {

    const ul = document.createElement('ul');
    ul.className = 'nav-links';
    ul.id = 'nav-links';

    ul.appendChild(getLi('/LuckySeven/properties/', "Properties"));
    ul.appendChild(getLi('/LuckySeven/brokerList/brokers.php', 'Brokers'));

    const user = localStorage.getItem('user');

    if (!user) {

        ul.appendChild(getLi('/LuckySeven/FrontEnd-Rough/about-us.html', 'About Us'));
        ul.appendChild(getLi('FrontEnd-Rough/contact.html', 'Contact Us'));
        ul.appendChild(getLi('/LuckySeven/login/index.php', 'Login/Register'));
    } else {

        if (user.ROLE_ID == 1) { // Admin

            ul.appendChild(getLi('/LuckySeven/admin/', 'Admin'));


        } else if (user.ROLE_ID == 2) { // Broker

            ul.appendChild(getLi('/LuckySeven/broker/properties-mng/', 'Property Management'));
            ul.appendChild(getLi('/LuckySeven/broker/visit-requests/', 'Visit Requests'));

        } else if (user.ROLE_ID == 3) { // Client

            ul.appendChild(getLi('/LuckySeven/FrontEnd-Rough/about-us.html', 'About Us'));
            ul.appendChild(getLi('FrontEnd-Rough/contact.html', 'Contact Us'));

        }


        const logout = document.createElement('a');
        logout.addEventListener('click', function () {

            // Logging out
            localStorage.removeItem('user');
            location.href = '/LuckySeven/properties/';
        });

        logout.textContent = user.USER_NAME;

        ul.appendChild(document.createElement('li').appendChild(logout));

    }

    return ul;
}


function getLi(pathname, textContent) {

    const a = document.createElement('a');
    a.href = pathname;
    a.textContent = textContent;

    return document.createElement('li').appendChild(a);
}




