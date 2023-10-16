<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

<!--        Css-->

        <link rel="stylesheet" href="Css/admin-content.css">
        <link rel="stylesheet" href="Css/Existing-brokers.css">
        <link rel="stylesheet" href="Css/Create-new-broker.css">
        <link rel="stylesheet" href="/Navbar/Css/navStyle.css">


        <title>Your Real Estate</title>
      
    </head>
    <body>
        <header>
           <nav id="navbar"></nav>
        </header>
        <div class="content-container">

<!--        Find a way to make this fetch data from data base and display respectively -->
<!--        The broker's name should be a link to a page where the user can edit the broker-->
            <h1 class="h1-exting-brokers">Active brokers </h1>
            <h4 class="h4-exting-brokers">Click on cell to edit</h4>
            <div class="dashboard-listings">
                <table class="dashboard-table" id="table-exiting-brokers">
                    <thead class="dashboard-thead">
                        <tr class="dashboard-row">
                            <th class="dashboard-th">User ID</th>
                            <th class="dashboard-th">Username</th>
                            <th class="dashboard-th">First name</th>
                            <th class="dashboard-th">Last name</th>
                            <th class="dashboard-th">Email</th>
                            <th class="dashboard-th">Phone Number</th>
                            <th class="dashboard-th">Password</th>
                            <th class="dashboard-th">Role ID</th>
                            <th class="dashboard-th">Status</th>
                            <th class="dashboard-th">Delete broker</th>
                            <th class="dashboard-th">Update broker</th>

    <!--                        For the delete, make js confirm to make sure they want to proceed-->
                        </tr>
                    </thead>
                    <tbody id="tbody-existing-brokers">
<!--                    PopulateTable.js handles filling this table-->
                    </tbody>
                </table>
            </div>

            <div class="div-create-broker">

                <h3>Add new broker</h3>

<!--            Calls function that handles creating new broker and sending to db-->
                <form class="form-create-broker" id="form-create-broker">
<!--                    action="process_broker.php" method="post"-->
                    <span class="labels-same-line">
<!--                        USER_NAME-->
                        <label for="USER_NAME">Username: </label>
                        <input type="text" id="USER_NAME" name="USER_NAME" required>

                        <!-- PASSWORD -->
                        <label for="PASSWORD">Password: </label>
                        <input type="text" id="PASSWORD" name="PASSWORD" required><br>
                    </span>

                    <span class="labels-same-line">
                        <!-- First Name -->
                        <label for="FIRST_NAME">First name: </label>
                        <input type="text" id="FIRST_NAME" name="FIRST_NAME" required>

                        <!-- Last Name -->
                        <label for="LAST_NAME">Last name: </label>
                        <input type="text" id="LAST_NAME" name="LAST_NAME" required>
                    </span>

                    <span class="labels-same-line">
                        <!-- Phone Number -->
                    <br><label for="PHONE_NUM">Phone Number:</label>
                    <input type="tel" id="PHONE_NUM" name="PHONE_NUM" required>

                        <!-- Email -->
                    <label for="EMAIL">Email:</label>
                    <input type="email" id="EMAIL" name="EMAIL" required><br>
                    </span>

                    <!-- Submit Button -->
                    <input type="submit" value="Create Broker">
                </form>
            </div>
        </div>
<!--    Java script import-->
        <script src="JavaScript/PopulateTable.js" type="module"></script>
        <script src="JavaScript/import_data.js" type="module"></script>
        <script src="JavaScript/CreateNewBroker.js" type="module"></script>

        <script src="../Navbar/navbar.js"></script>
        <script>implementNavbar("Admin")</script>

    </body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


<!--Admin page is used to control the brokers meaning to view all
the brokers, to add brokers, to edit brokers, to remove-->