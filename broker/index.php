<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">

        <link rel="stylesheet" href="../Navbar/Css/navStyle.css">
        <link rel="stylesheet" href="Css/Table.css">
        <link rel="stylesheet" href="Css/dashboard-listings.css">

        <title>Broker</title>
    </head>
    <body>

    <header>
        <nav id="navbar"></nav>
    </header>

<!--        Make sure user is logged in and has role-->
    <div class="broker" >
        <div class="dashboard-listings">
            <h1>My listings</h1>
            <table class="dashboard-table" id="table-listings-id">
                <thead class="dashboard-thead">
                <tr class="dashboard-row">
                    <th class="dashboard-th">Property ID</th>
                    <th class="dashboard-th">Property Name</th>
                    <th class="dashboard-th">City</th>
                    <th class="dashboard-th">Postal Code</th>
                    <th class="dashboard-th">Address</th>
                    <th class="dashboard-th">Image</th>
                    <th class="dashboard-th">Description</th>
                    <th class="dashboard-th">Parking</th>



                    <!--                        For the delete, make js confirm to make sure they want to proceed-->
                </tr>
                </thead>
                <tbody id="tbody-existing-brokers">
                <!--                    PopulateTable.js handles filling this table-->
                </tbody>
            </table>
        </div>

    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="JavaScript/import_data.js"></script>
    <script src="JavaScript/Login_Authentication.js" type="module"></script>

    <script src="../Navbar/navbar.js"></script>
    <script>implementNavbar("Broker")</script>
    </body>
</html>
