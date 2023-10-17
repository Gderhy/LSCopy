<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">

        <link rel="stylesheet" href="/Navbar/Css/navStyle.css">
        <link rel="stylesheet" href="/broker/Css/Table.css">
        <link rel="stylesheet" href="/broker/Css/dashboard-listings.css">

        <title>My Listings  </title>
    </head>
    <body>
        <header>
            <nav id="navbar"></nav>
        </header>

<!--        Make sure user is logged in and has role-->
    <div class="broker" >
        <div class="dashboard-listings">
            <h1>My Listings</h1>
            <table class="dashboard-table" id="table-listings-id">
                <thead class="dashboard-thead">
                <tr class="dashboard-row">
                    <th class="dashboard-th">Property ID</th>
                    <th class="dashboard-th">Property name</th>
                    <th class="dashboard-th">Property type</th>
                    <th class="dashboard-th">Cover Image</th>
                    <th class="dashboard-th">Description</th>
                    <th class="dashboard-th">Address</th>
                    <th class="dashboard-th">City</th>
                    <th class="dashboard-th">Province</th>
                    <th class="dashboard-th">Country</th>
                    <th class="dashboard-th">Year</th>
                    <th class="dashboard-th">Parking</th>
                    <th class="dashboard-th">Baths</th>
                    <th class="dashboard-th">Rooms</th>
                    <th class="dashboard-th">Price</th>
                    <th class="dashboard-th">For sale</th>
                    <th class="dashboard-th">Delete</th>
                    <th class="dashboard-th">Update</th>


                    <!--                        For the delete, make js confirm to make sure they want to proceed-->
                </tr>
                </thead>
                <tbody id="tbody-my-listings">
                <!--                    PopulateMyListingTable.js handles filling this table-->
                </tbody>
            </table>
        </div>

    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="import_data.js" type="module"></script>
    <script src="/broker/JavaScript/Login_Authentication.js" type="module"></script>

    <script src="/Navbar/navbar.js"></script>
    <script>implementNavbar("My Listings")</script>

    <script src="PopulateMyListingTable.js" type="module"></script>
    </body>
</html>
