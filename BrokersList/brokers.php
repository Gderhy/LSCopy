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
                <li><a href="/LuckySeven/FrontEnd-Rough/about-us.html">About Us</a></li>
                <li><a href="/LuckySeven/FrontEnd-Rough/contact.html">Contact</a></li>
                <li><a href="/LuckySeven/login/index.php">Login/Register</a></li>
            </ul>
        </nav>
    </header>

    <section class="search-bar">
        <div class="search-container">
            <h1>Find Your Ideal Broker</h1>
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">
                </div>
                <div class="form-group">
                    <label for="price-range">Price Range:</label>
                    <select id="price-range" name="price-range">
                        <option value="">Any</option>
                        <option value="100000">$100,000</option>
                        <option value="200000">$200,000</option>
                        <option value="300000">$300,000</option>
                        
                    </select>
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    </section>

    <section id="brokers-grid"  class="listings">
        <div class="listing">
            <img src="https://www.rate-my-agent.com/upload/Asal-Jami-Montreal-Real-Estate-Agent.webp" alt="Property 1">
            <h3>Name of broker</h3>
            <a href="tel:+1234567"><p>+1-514-000-0000</p></a>
            <a href="mailto:test@gmail.com"><p>test@gmail.com</p></a>
            <button class="view-details">View Listings</button>
        </div>

        <div class="listing">
            <img src="https://www.rate-my-agent.com/upload/Asal-Jami-Montreal-Real-Estate-Agent.webp" alt="Property 1">
            <h3>Modern Apartment in the City</h3>
            <p>Location: Downtown</p>
            <p>Price: $250,000</p>
            <a href="#" class="view-details">View Details</a>
            
        </div>

        <div class="listing">
            <img src="https://www.rate-my-agent.com/upload/Asal-Jami-Montreal-Real-Estate-Agent.webp" alt="Property 1">
            <h3>Modern Apartment in the City</h3>
            <p>Location: Downtown</p>
            <p>Price: $250,000</p>
            <a href="#" class="view-details">View Details</a>
            
        </div>
    
    </section>

  
    <div class="popup-container" id="popup">
        <div class="popup-content">
            <span class="close" id="close-popup">&times;</span>
            <h2>Broker Details</h2>
            <p><strong>Name:</strong> <span id="broker-name"></span></p>
            <p><strong>Email:</strong> <span id="broker-email"></span></p>
            <p><strong>Phone Number:</strong> <span id="broker-phone"></span></p>
        </div>
    </div>

    <footer>
        <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
    </footer>





    <!-- SCRIPT FOR POP UP-->
    <script>
        
        const popup = document.getElementById("popup");
        const closePopup = document.getElementById("close-popup");
        const viewDetailsLinks = document.querySelectorAll(".view-details");

       
        function openPopup(name, email, phone) {
            document.getElementById("broker-name").textContent = name;
            document.getElementById("broker-email").textContent = email;
            document.getElementById("broker-phone").textContent = phone;
            popup.style.display = "block";
        }

      
        function closePopupWindow() {
            popup.style.display = "none";
        }

       //REPLACE DETAILS!!!!
        viewDetailsLinks.forEach((link) => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const name = "John Doe"; 
                const email = "john.doe@example.com"; // Replace with broker's email
                const phone = "+1234567890"; // Replace with broker's phone number
                openPopup(name, email, phone);
            });
        });

        //CLOSE
        closePopup.addEventListener("click", closePopupWindow);
    </script>

    <script src="fillBrokersPage.js" type="module"></script>;

</body>
</html>