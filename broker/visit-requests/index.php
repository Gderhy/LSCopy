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
            <a href="/LuckySeven/properties/index.php"> <img src="/LuckySeven/FrontEnd-Rough/logo.png" alt="Logo"></a>
        </div>
        <div class="mobile-menu-icon" onclick="toggleMobileMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links" id="nav-links">
            <li><a href="/LuckySeven/properties/">Properties</a></li>
            <li><a href="/LuckySeven/brokerList/brokers.php">Brokers</a></li>
            <li><a href="../properties-mng/index.php">Property Management</a></li>
            <li><a href="../offers/index.php">My Offers</a></li>
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
                <th>Delete</th>
            </tr>
            </thead>
            <tbody id="visits-tbody">
            </tbody>
        </table>
    </section>


</section>


<footer>
    <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
</footer>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="import_data.js" type="module"></script>

<script src="populateVisitsTable.js" type="module"></script>

</body>
</html>
