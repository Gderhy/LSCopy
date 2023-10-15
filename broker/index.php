<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">

        <link rel="stylesheet" href="../navStyle.css">
        <link rel="stylesheet" href="Css/Table.css">
        <link rel="stylesheet" href="Css/dashboard-listings.css">
        <title></title>
    </head>
    <body>

    <header>
        <!--        Nav bar taken from Admin -->
        <nav>
            <div class="logo"></div>
            <ul>
<!--                <li><a href="" >Admin</a></li>-->
                <li><a href="../FrontEnd-Rough">Home</a></li>
                <li><a href="../broker" class="active">Broker</a></li>
                <li><a href="../FrontEnd-Rough/listings.html">Listings</a></li>
                <li><a href="../FrontEnd-Rough/contact.html">Contact</a></li>
                <li><a href="../properties">Properties</a></li>
                <li><a href="../login">Login</a></li>
            </ul>
        </nav>
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
    </body>
</html>
