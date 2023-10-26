<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" type="text/css" href="/LuckySeven/FrontEnd-Rough/styles.css">
        <link rel="stylesheet" type="text/css" href="/LuckySeven/Navbar/Css/navStyle.css">

        <title>Login/Register</title>
    </head>
    <body>
        <header>
        <nav>
            <div class="logo">
                <a href="index.html"> <img  src="logo.png" alt="Logo"></a>
            </div>
            <div class="mobile-menu-icon" onclick="toggleMobileMenu()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul class="nav-links" id="nav-links">
        
                <li><a href="listings.html">Listings</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li class="dropdown">
                    <a href="#" class="account-dropdown">Account</a>
                    <div class="dropdown-content">
                        <a href="#">Login/Register</a>
                       
                    </div>
                </li>
            </ul>
        </nav>
    </header>

        <div class = "content-wrap"> 

        <section class="login-register">
            <table class="options-table">
                <tr>
                    <td class="option" id="login-option">Login</td>
                    <td class="option" id="register-option">Register</td>
                </tr>
            </table>

            <div class="forms">
                <form id="login-form" class="form">
                    <h2>Login</h2>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" id="btn_login">Login</button>
                </form>

                <form id="register-form" class="form">
                    <h2>Register</h2>
                    <div class="form-group">
                        <label for="fname">First Name:</label>
                        <input type="text" id="fName" name="fName" required>
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name:</label>
                        <input type="text" id="lName" name="lName" required>
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone number:</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="new-email">Email:</label>
                        <input type="email" id="new-email" name="new-email" required>
                    </div>
                    <div class="form-group">
                        <label for="new-username">Username:</label>
                        <input type="text" id="newUser" name="newUser" pattern="^(?=.*[A-Z])(?=.*\d).{6,}$" title="At least 6 characters, 1 uppercase letter, and 1 number" required>

                    </div>

                    <div class="form-group">
                        <label for="new-password">Password:</label>
                        <input type="password" id="new-password" name="new-password" required>
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" required>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
</div> 
        <footer>
            <p>&copy; 2023 Your Real Estate. All rights reserved.</p>
        </footer>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="/LuckySeven/FrontEnd-Rough/script.js" type="module"></script>

        <script src="/LuckySeven/login/import_data.js" type="module"></script>
        <script src="/LuckySeven/login/login.js" type="module"></script>

        <script src="/LuckySeven/Navbar/navbar.js"></script>
        <script>implementNavbar("Login")</script>
    </body>
</html>


