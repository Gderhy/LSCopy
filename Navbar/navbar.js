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
const pathForProperties = "properties/index.php";

const pathForContact = "../FrontEnd-Rough/contact.html";
const pathForLogin = "login/index.php";




function implementNavbar(){

    const navbar = document.getElementById("navbar");

    const logo = document.createElement("div");
    logo.className = "logo";

    const ul = document.createElement("ul");






}



