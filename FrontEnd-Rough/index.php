<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>index page</title>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <a href="index.html"> <img  src="logo.png" alt="Logo"></a>
            </div>
            <div class="mobile-menu-icon" onclick="toggleMobileMenu()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul class="nav-links" id="nav-links">
        
                <li><a href="listings.html">Listings</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li class="dropdown">
                    <a href="login.html" class="account-dropdown">Account</a>
                    <div class="dropdown-content">
                        <a href="login.html">Login/Register</a>
                       
                    </div>
                </li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        
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
                <input type="number" name="price-max" placeholder="Max Price">
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
   
    </section>

    <section class="testimonials">
        <h2>What Our Clients Say</h2>
        <div class="testimonial">
            <p class="quote">"We found our dream home. They made the entire process so smooth and stress-free!"</p>
            <p class="client">- Steven and Kumai</p>
        </div>
    
    </section>

    <footer>
        <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
    </footer>

  
    <script src="script.js"></script>
    <script src="slideshow.js"></script>
    
</body>
</html>
