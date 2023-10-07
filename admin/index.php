<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

<!--        Css-->
        <link rel="stylesheet" href="Css/navbar.css">
        <link rel="stylesheet" href="Css/admin-content.css">
        <link rel="stylesheet" href="Css/Existing-brokers.css">
        <link rel="stylesheet" href="Css/Create-new-broker.css">

        <title>Your Real Estate</title>
    </head>
    <body>
        <header>
<!--        Nav bar taken from FrontEnd-Rough/index.html-->
          <nav>
            <div class="logo">
                <img src="logo.png" alt="Your Logo">
            </div>
            <div class="mobile-menu-icon" onclick="toggleMobileMenu()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul class="nav-links" id="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="listings.html">Listings</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li class="dropdown">
                    <a href="#" class="account-dropdown">Account</a>
                    <div class="dropdown-content">
                        <a href="#">Login/Register</a>
                        <a href="#">Broker Login</a>
                    </div>
                </li>
            </ul>
        </nav>
        </header>
        <div class="content-container">

<!--        Find a way to make this fetch data from data base and display respectively -->
<!--        The broker's name should be a link to a page where the user can edit the broker-->
            <h1 class="h1-exting-brokers">Active brokers </h1>
            <h4 class="h4-exting-brokers">Click on name to edit</h4>
            <div class="dashboard-existing-brokers">
                <table class="dashboard-table" id="table-exiting-brokers">
                    <thead class="dashboard-thead">
                        <tr class="dashboard-row">
                            <th class="dashboard-th">Broker ID</th>
                            <th class="dashboard-th">Broker Name</th>
                            <th class="dashboard-th">Number of listings</th>
                            <th class="dashboard-th">Email</th>
                            <th class="dashboard-th">Phone Number</th>
                            <th class="dashboard-th">Company</th>
                            <th class="dashboard-th">Delete broker</th>
    <!--                        For the delete, make js confirm to make sure they want to proceed-->
                        </tr>
                    </thead>
                    <tbody id="tbody-existing-brokers">
                        <tr class="dashboard-row">
                            <td class="dashboard-td">00000000</td>
                            <td class="dashboard-td"><a href="#">Fake broker</a></td>
                            <td class="dashboard-td">1000</td>
                            <td class="dashboard-td">fake@gmail.com</td>
                            <td class="dashboard-td">514-000-0000</td>
                            <td class="dashboard-td">Fake company</td>
                            <td class="dashboard-td"><button>Delete (Maybe put an icon)</button></td>
                            <!-- Button will confirm with user if they want to proceed -->
                            <!-- After confirmation, the function will remove Broker from data by sending a request-->
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="div-create-broker">

                <h3>Add new broker</h3>

<!--            Have to link the submit to send the data to the database-->
                <form class="form-create-broker" onsubmit="">
<!--                    action="process_broker.php" method="post"-->
                    <span class="labels-same-line">
                        <!-- First Name -->
                        <label for="first_name">First name: </label>
                        <input type="text" id="first_name" name="first_name" required>

                        <!-- Last Name -->
                        <label for="last_name">Last name: </label>
                        <input type="text" id="last_name" name="last_name" required>

                        <!-- Company -->
                        <label for="company">Company: </label>
                        <input type="text" id="company" name="company" required>
                    </span>

                    <!-- Phone Number -->
                    <br><label for="phone_number">Phone Number:</label>
                    <input type="tel" id="phone_number" name="phone_number" required>

                    <!-- Email -->
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <!-- Submit Button -->
                    <input type="submit" value="Create Broker">
                </form>
            </div>
        </div>
        <script src="JavaScript/Exiting-Brokers.js"></script>
    </body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="main.js"></script>


<!--Admin page is used to control the brokers meaning to view all
the brokers, to add brokers, to edit brokers, to remove-->