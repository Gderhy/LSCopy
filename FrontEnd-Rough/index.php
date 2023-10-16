<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Corrected stylesheet links -->
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" type="text/css" href="/Navbar/Css/navStyle.css">
    <title>Your Real Estate</title>
</head>
<body>
<header>
    <nav id="navbar"></nav>
</header>

<section class="hero">
    <!-- Slideshow of featured properties -->
    <div class="slideshow-container">
        <div class="slide fade">
            <img src="luxury-apartment-design-online-living-room-1.jpg.webp" alt="Property 1">
        </div>
        <div class="slide fade">
            <img src="Ultra-Luxury-Apartment-Design-cover.jpg" alt="Property 2">
        </div>
        <div class="slide fade">
            <img src="copper-accent-wall.jpg" alt="Property 3">
        </div>
    </div>
</section>

<section class="search-bar">
    <div class="search-container">
        <h1>Find Your Dream Home</h1>
        <form action="search-results.html" method="GET">
            <input type="text" name="location" placeholder="Location">
            <input type="number" name="price-min" placeholder="Min Price">
            <input type="number" name "price-max" placeholder="Max Price"> <!-- Corrected typo -->
            <select name="property-type">
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
            </select>
            <button type="submit">Search</button>
        </form>
    </div>
</section>

<section class="featured-listings">
    <h2>Featured Listings</h2>
    <div class="listing">
        <img src="media.ashx-4.jpeg" alt="Property 4">
        <h3>Beautiful Family Home</h3>
        <p>3 Bedrooms | 2 Bathrooms | 1,500 sqft</p>
        <p>Price: $350,000</p>
        <a href="#">View Details</a>
    </div>
    <!-- Add more featured listings as needed -->
</section>

<section class="testimonials">
    <h2>What Our Clients Say</h2>
    <div class="testimonial">
        <p class="quote">"We found our dream home with the help of Your Real Estate. They made the entire process so smooth and stress-free!"</p>
        <p class="client">- John and Jane Doe</p>
    </div>
    <!-- Add more testimonials as needed -->
</section>

<footer>
    <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
</footer>

<!-- JavaScript for the slideshow -->
<script src="script.js"></script>
<script src="slideshow.js"></script>

<script src="/Navbar/navbar.js"></script>
<script>implementNavbar("Home")</script>
</body>
</html>
