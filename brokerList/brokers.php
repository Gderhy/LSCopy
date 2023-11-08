<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/LuckySeven/FrontEnd-Rough/styles.css">
    <title>BROKERLIST</title>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <a href="/LuckySeven/properties/index.php"> <img src="/LuckySeven/FrontEnd-Rough/logo.png" alt="Logo"></a>
            </div>
            <div class="mobile-menu-icon" onclick="toggleMobileMenu()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul class="nav-links" id="nav-links">
                <li><a href="/LuckySeven/FrontEnd-Rough/properties/">Properties</a></li>
                <li><a href="/LuckySeven/brokerList/brokers.php">Brokers</a></li>
                <li><a href="/LuckySeven/FrontEnd-Rough/about-us.html">About Us</a></li>
                <li><a href="/LuckySeven/FrontEnd-Rough/contact.html">Contact</a></li>
                <li><a href="/LuckySeven/login/index.php">Login/Register</a></li>
            </ul>
        </nav>
    </header>

    <section class="search-bar">
        <div class="search-container">
            <h1>Find Your Ideal Broker</h1>
            <div class="form-group">
                <label for="name"></label>
                <input type="text" id="search-input" name="name">
            </div>

        </div>
    </section>

    <section id="brokers-grid"  class="listings"></section>



    <footer>
        <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
    </footer>







    <script src="fillBrokersPage.js" type="module"></script>;
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="import_data.js" type="module"></script>
</body>
</html>
