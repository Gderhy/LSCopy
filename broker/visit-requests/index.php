<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="/LuckySeven/FrontEnd-Rough/styles.css">
    <title>Broker Page - Your Real Estate</title>
</head>
<body>
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
            <li><a href="../properties-mng/index.php">Property Management</a></li>
            <li><a href="../visit-requests/index.php">My visits</a></li>
            <li><a href="/LuckySeven/login/index.php">Logout</a></li>
        </ul>
    </nav>
</header>

<section class="broker-page">
    <h1>Welcome, Broker!</h1>

    <section class="manage-visits">
        <h2>Manage Visits</h2>
        <table class="visits-table">
            <thead>
            <tr>
                <th>Property ID</th>
                <th>Image</th>
                <th>Client's Name</th>
                <th>Client's Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>City, Province, Country</th>
                <th>Description</th>
                <th>Price</th>
                <th>For sale?</th>
                <th>Property Type</th>
                <th>Year</th>
                <th>Request ID</th>
                <th>Scheduled Date</th>
                <th>Requested Date</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody id="visits-tbody">
            </tbody>
        </table>
    </section>


    <section class="submit-offers">
        <h2>Submit Offers</h2>
        <form class="submit-offers-form">
            <div class="form-group">
                <label for="property-select">Property:</label>
                <select id="property-select" name="property-select">
                    <option value="property1">Property 1</option>
                    <option value="property2">Property 2</option>
                    <!-- Add more property options here -->
                </select>
            </div>
            <div class="form-group">
                <label for="offer-amount">Offer Amount ($):</label>
                <input type="text" id="offer-amount" name="offer-amount" required>
            </div>
            <div class="form-group">
                <label for="offer-date">Offer Date:</label>
                <input type="date" id="offer-date" name="offer-date" required>
            </div>
            <button type="button" onclick="submitOffer()">Submit Offer</button>
        </form>
    </section>


    <section class="manage-visits">
        <h2>Manage Offers</h2>
        <table class="offers-table">
            <thead>
            <tr>
                <th>Property</th>
                <th>Offer Amount</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Property 1</td>
                <td>$500,000</td>
                <td>Pending</td>
                <td>
                    <button onclick="manageOffer(1)">Manage</button>
                </td>
            </tr>
            <tr>
                <td>Property 2</td>
                <td>$600,000</td>
                <td>Accepted</td>
                <td>
                    <button onclick="manageOffer(2)">Manage</button>
                </td>
            </tr>

            </tbody>
        </table>
    </section>


    <section class="offer-management">
        <h2>Offer Management</h2>
        <table class="offer-management-table">
            <thead>
            <tr>
                <th>Property</th>
                <th>Offer Amount</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Property 1</td>
                <td>$500,000</td>
                <td>Pending</td>
                <td>
                    <button onclick="manageOffer(1)">Manage</button>
                </td>
            </tr>
            <tr>
                <td>Property 2</td>
                <td>$600,000</td>
                <td>Accepted</td>
                <td>
                    <button onclick="manageOffer(2)">Manage</button>
                </td>
            </tr>

            </tbody>
        </table>
    </section>

    <div class="view-listings">
        <a href="../FrontEnd-Roungh/listings.html">
            <button>View Your Listings</button>
        </a>
    </div>
</section>

<footer>
    <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
</footer>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="import_data.js" type="module"></script>

<script src="populateVisitsTable.js" type="module"></script>

</body>
</html>
