<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="/LuckySeven/Navbar/Css/navStyle.css">
    <link rel="stylesheet" href="/LuckySeven/broker/Css/Table.css">
    <link rel="stylesheet" href="/LuckySeven/broker/Css/dashboard-listings.css">
    <link rel="stylesheet" href="/LuckySeven/broker/Css/dashboard-create-new.css">
    <link rel="stylesheet" href="/LuckySeven/Navbar/Css/navStyle.css">
    <link rel="stylesheet" href="/LuckySeven/broker/Css/Table.css">
    <link rel="stylesheet" href="/LuckySeven/broker/Css/dashboard-listings.css">
    <link rel="stylesheet" href="/LuckySeven/broker/Css/dashboard-create-new.css">
    <link rel="stylesheet" href="/LuckySeven/FrontEnd-Rough/styles.css">
    <title>My Listings </title>
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
            <li><a href="/LuckySeven/FrontEnd-Rough/properties/">Properties</a></li>
            <li><a href="/LuckySeven/brokerList/brokers.php">Brokers</a></li>
            <li><a href="../properties-mng/index.php">Property Management</a></li>
            <li><a href="../visit-requests/index.php">My visits</a></li>
            <li><a href="/LuckySeven/login/index.php">Logout</a></li>
        </ul>
    </nav>
</header>

<!--        Make sure user is logged in and has role-->
<div class="broker">
    <div class="dashboard-listings">
        <h1>My Listings</h1>
        <table class="dashboard-table" id="table-listings-id">
            <thead class="dashboard-thead">
            <tr class="dashboard-row">
                <th class="dashboard-th">Property ID</th>
                <th class="dashboard-th">Property type</th>
                <th class="dashboard-th">Cover Image</th>
                <th class="dashboard-th">Description</th>
                <th class="dashboard-th">Address</th>
                <th class="dashboard-th">Postal</th>
                <!--                    <th class="dashboard-th">Property name</th>-->
                <!--                    <th class="dashboard-th">City</th>-->
                <!--                    <th class="dashboard-th">Province</th>-->
                <!--                    <th class="dashboard-th">Country</th>-->
                <th class="dashboard-th">Property Name, City, Province, Country</th>
                <th class="dashboard-th">Year</th>
                <th class="dashboard-th">Parking</th>
                <th class="dashboard-th">Baths</th>
                <th class="dashboard-th">Rooms</th>
                <th class="dashboard-th">Price</th>
                <th class="dashboard-th">For sale</th>
                <th class="dashboard-th">Status</th>
                <!--                    <th class="dashboard-th">Delete</th>-->
                <th class="dashboard-th">Update</th>


                <!--                        For the delete, make js confirm to make sure they want to proceed-->
            </tr>
            </thead>
            <tbody id="tbody-my-listings">
            <!--                    PopulateMyListingTable.js handles filling this table-->
            </tbody>
        </table>
    </div>

    <div class="add-listing">
        <h3>Add a listing</h3>

        <form class="form-create-new" id="form-create-new-listing">
            <label for="typeID">Type of listing</label>
            <select id="select_type_id"></select>


            <label for="description">Description:</label>
            <input type="text" id="description" name="description" required><br><br>

            <label for="select_area_id">Area ID:</label>
            <select id="select_area_id"></select>

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required><br><br>

            <label for="postal">Postal Code:</label>
            <input type="text" id="postal" name="postal" required><br><br>

            <label for="year">Year Built:</label>
            <input type="number" id="year" name="year" required><br><br>

            <label for="parkingCount">Parking Count:</label>
            <input type="number" id="parkingCount" name="parkingCount" required><br><br>

            <label for="bathCount">Bathrooms:</label>
            <input type="number" id="bathCount" name="bathCount" required><br><br>

            <label for="roomsCount">Rooms:</label>
            <input type="number" id="roomsCount" name="roomsCount" required><br><br>

            <label for="price">Price:</label>
            <input type="number" id="price" name="price" required><br><br>

            <label for="isForSale">Is it for sale?</label>
            <input type="checkbox" id="isForSale" name="isForSale"><br><br>

            <label for="cover_img">Cover Image:</label>
            <input type="text" id="cover_img" name="cover_img">

            <button type="submit" id='addProperty'">Create new listing</button>
        </form>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="/LuckySeven/Navbar/navbar.js" type="module"></script>
<script src="import_data.js" type="module"></script>
<script src="properties-mng.js" type="module"></script>
<script src="PopulateMyListingTable.js" type="module"></script>
</body>
</html>
