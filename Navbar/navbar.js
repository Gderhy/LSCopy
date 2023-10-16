// Auto adds css







// This will be a general navbar, include this in all ur html/php files in order to have one navbar
// This navbar will handle all Login, logout, and page routing. i.e Display Admin or Broker page respectively.

// <nav>
//             <div class="logo"></div>
//             <ul>
//                 <li><a href="" class="active">Admin</a></li>
//                 <li><a href="../broker">Broker</a></li>
//                  <li><a href="../FrontEnd-Rough">Home</a></li>
//                 <li><a href="../FrontEnd-Rough/listings.html">Listings</a></li>
//                 <li><a href="../FrontEnd-Rough/contact.html">Contact</a></li>
//                 <li><a href="../properties">Properties</a></li>
//                 <li><a href="../Login">Login</a></li>
//             </ul>
// </nav>





const pathForHome = "/FrontEnd-rough/";

const pathForAdmin = "/admin/";
const pathForMyListings = "/broker/my-listings.php";
const pathForMyVisits = "/broker/my-visits.php";
const pathForPropertySearch = "/properties/";

const pathForContact = "/FrontEnd-Rough/contact.html";
const pathForLogin = "/Login/index.php";



/**
 * This function will implement the navbar into the html
 * It takes one parameter which holds the active page
 *
 * @param {string} activePage
 */
function implementNavbar(activePage){

    // CssInHead();

    const navbar = document.getElementById("navbar");

    const logo = document.createElement("div");
    logo.className = "logo";
    navbar.appendChild(logo);

    const ul = getUl(activePage);
    navbar.appendChild(ul);

}

function getUl(activePage){

    const user = JSON.parse(localStorage.getItem('user'));


    const ul = document.createElement("ul");

    const home = getLi(pathForHome, "Home", activePage);
    ul.appendChild(home);

    if(!user){

        const propertySearch = getLi(pathForPropertySearch, "Search for a property", activePage);
        ul.appendChild(propertySearch);

    } else {

        // 1 - Admin
        // 2 - Broker
        // 3 - Client

        if(user?.ROLE_ID === "1"){

            const admin = getLi(pathForAdmin, "Admin", activePage);
            ul.appendChild(admin)

        } else if (user?.ROLE_ID ==="2") {

            const myListings = getLi(pathForMyListings, "My Listings", activePage);
            ul.appendChild(myListings);

            const myVisits = getLi(pathForMyVisits, "My Visits", activePage);
            ul.appendChild(myVisits);
        } else {

            const client = getLi(pathForPropertySearch, "Property Search", activePage);
            ul.appendChild(client);
        }
    }

    if(user?.ROLE_ID === "3"){

        const contact = getLi(pathForContact, "Contact Us", activePage);
        ul.appendChild(contact);
    }


    if(!user){

        const login = getLi(pathForLogin, "Login", activePage);
        ul.appendChild(login);

    } else{

        const username = getLi("#", user.USER_NAME, activePage,
            ()=>localStorage.removeItem('user'));
        ul.appendChild(username);

        // Have to add a hover dropdown menu that shows logout

    }

    return ul;
}

function getLi(path, content, activePage, onClickFunction = null){
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = path;
    a.textContent = content;
    if(onClickFunction) a.onclick = onClickFunction;
    if(content === activePage) a.className = "active";

    li.appendChild(a);


    return li;
}


function CssInHead(){

    const cssFileNameToCheck = "Navbar/Css/navStyle.css"; // Name of css file to check

    const cssLinks = document.querySelectorAll("head link[rel='stylesheet']");
    let isCssFileInHead = false;

    cssLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === cssFileNameToCheck) {
            isCssFileInHead = true;
        }
    });

    if (!isCssFileInHead) {

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = cssFileNameToCheck;
        document.head.appendChild(link);
    }
}





