// This will be a general navbar, include this in all ur html/php files in order to have one navbar
// This navbar will handle all login, logout, and page routing. i.e Display Admin or Broker page respectively.

// <nav>
//             <div class="logo"></div>
//             <ul>
//                 <li><a href="" class="active">Admin</a></li>
//                 <li><a href="../broker">Broker</a></li>
//                  <li><a href="../FrontEnd-Rough">Home</a></li>
//                 <li><a href="../FrontEnd-Rough/listings.html">Listings</a></li>
//                 <li><a href="../FrontEnd-Rough/contact.html">Contact</a></li>
//                 <li><a href="../properties">Properties</a></li>
//                 <li><a href="../login">Login</a></li>
//             </ul>
// </nav>




const pathForHome = "../FrontEnd-Rough";

const pathForAdmin = "admin/index.php";
const pathForBroker = "broker/index.php";
const pathForPropertieSearch = "properties/index.php";

const pathForContact = "../FrontEnd-Rough/contact.html";
const pathForLogin = "login/index.php";



/**
 * This function will implement the navbar into the html
 * It takes one parameter which holds the active page
 *
 * @param {str} activePage
 */
function implementNavbar(activePage){


    const navbar = document.getElementById("navbar");

    const logo = document.createElement("div");
    logo.className = "logo";
    navbar.appendChild(logo);

    const ul = getUl();
    navbar.appendChild(ul);




}

function getUl(){

    const user = localStorage.getItem('user');


    const ul = document.createElement("ul");

    const home = getLi(pathForHome, "Home", activePage);
    ul.appendChild(home);

    if(user == null){

        const propertySearch = getLi(pathForPropertieSearch, "Search for a property", activePage);
        ul.appendChild(propertySearch);

    } else {

        // 1 - Admin
        // 2 - Broker
        // 3 - Client

        if(user.ROLE_ID === "1"){

            const admin = getLi(pathForAdmin, "Admin", activePage);
            ul.appendChild(admin)

        } else if (user.ROLE_ID === "2"){

            const broker = getLi(pathForBroker, "Broker", activePage);
            ul.appendChild(broker);
        }
    }


    const contact = getLi(pathForContact, "Contact Us", activePage);
    ul.appendChild(contact);

    if(user == null){

        const login = getLi(pathForLogin, "Login", activePage);
        ul.appendChild(login);

    } else{

        const username = user.USER_NAME;
        const liUserName = document.createElement("li");
        liUserName.textContent = username;
        liUserName.className = "logout";

        // Have to add a hover dropdown menu that shows logout

    }

    return ul;
}

function getLi(path, content, activePage){
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = path;
    a.textContent = content;
    if(content === activePage) a.className = "active";

    li.appendChild(a);


    return li;
}







