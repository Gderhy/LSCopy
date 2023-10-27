<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/LuckySeven/FrontEnd-Rough/styles.css">
    <title>Property Search</title>
</head>
<body>
<!--        <header>-->
<!--            <nav id="navbar">-->
<!--            </nav>-->
<!--        </header>-->
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
            <li><a href="/LuckySeven/FrontEnd-Rough/about-us.html">About Us</a></li>
            <li><a href="/LuckySeven/FrontEnd-Rough/contact.html">Contact</a></li>
            <li><a href="/LuckySeven/login/index.php">Login/Register</a></li>
        </ul>
    </nav>
</header>
<br><br><br><br><br>

<section class="hero">
    <!-- Slideshow of featured properties -->
    <div class="slideshow-container">
        <div class="slide fade">
            <img src="/LuckySeven/FrontEnd-Rough/luxury-apartment-design-online-living-room-1.jpg.webp"
                 alt="Property 1">
        </div>
        <div class="slide fade">
            <img src="/LuckySeven/FrontEnd-Rough/Ultra-Luxury-Apartment-Design-cover.jpg" alt="Property 2">
        </div>
        <div class="slide fade">
            <img src="/LuckySeven/FrontEnd-Rough/copper-accent-wall.jpg" alt="Property 3">
        </div>
    </div>
</section>
<section class="search-bar">
    <div class="search-container">
        <h1>Find Your Dream Home</h1>
        <form action="search-results.html" method="GET">
            <select id="area" name="area">
                <option value="-1">All</option>
            </select>
            <input type="number" id="maxPrice" placeholder="Max Price">
            <select id="isForSale">
                <option value="-1">All</option>
                <option value="1">For Sale</option>
                <option value="0">For Rent</option>
            </select>
            <button id="propertySearchForm" type="button">Search</button>
        </form>
    </div>
</section>
<div id="propertiesSections">
</div>

<section class="testimonials">
    <h2>What Our Clients Say</h2>
    <div class="testimonial">
        <p class="quote">"We found our dream home with the help of Your Real Estate. They made the entire process so
            smooth and stress-free!"</p>
        <p class="client">- John and Jane Doe</p>
    </div>
    <!-- Add more testimonials as needed -->
</section>

<footer>
    <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
</footer>
<div id="searchResults">
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="import_data.js" type="module"></script>
<script src="properties.js" type="module"></script>
<script src="/LuckySeven/NavBar/navBar.js" type="module"></script>


<script src="/LuckySeven/FrontEnd-Rough/slideshow.js" type="module"></script>
</body>
</html>

