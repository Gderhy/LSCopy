<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/LuckySeven/FrontEnd-Rough/styles.css">
    <title>Broker Page - Your Real Estate</title>

    <script src="/LuckySeven/Navbar/navbar.js"></script>
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
            <!--            <li><a href="/LuckySeven/properties/">Properties</a></li>-->
            <!--            <li><a href="/LuckySeven/brokerList/brokers.php">Brokers</a></li>-->
            <!--            <li><a href="../properties-mng/index.php">Property Management</a></li>-->
            <!--            <li><a href="../offers/index.php">My Offers</a></li>-->
            <!--            <li><a href="../visit-requests/index.php">My visits</a></li>-->
            <!--            <li><a href="/LuckySeven/login/index.php" id="nav-login/register">Logout</a></li>-->
        </ul>
    </nav>
</header>

<section class="broker-page">
    <h1>Welcome, Broker!</h1>
    <section class="offer-management">
        <h2>Offer Management</h2>
        <table class="offer-management-table">
            <thead>
            <tr>
                <th>Address</th>
                <th>Description</th>
                <th>Broker Name</th>
                <th>Postal Code</th>
                <th>Note</th>
                <th>Price</th>
                <th>Note</th>
            </tr>
            </thead>
            <tbody id="offers-tbody">

            </tbody>
        </table>
    </section>
    <section class="offerSent">
        <h2>Offer(s) Sent</h2>
        <table class="offer-management-table">
            <thead>
            <tr>
                <th>Offer ID</th>
                <th>Address</th>
                <th>Description</th>
                <th>Broker Name</th>
                <th>Postal Code</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody id="offerSent-tbody">

            </tbody>
        </table>
    </section>

</section>


<footer>
    <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
</footer>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="import_data.js" type="module"></script>
<script src="offers.js" type="module"></script>

</body>
</html>
