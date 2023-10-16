<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" type="text/css" href="/FrontEnd-Rough/styles.css">
        <link rel="stylesheet" type="text/css" href="/Navbar/Css/navStyle.css">

        <title>Login/Register - Your Real Estate</title>
    </head>
    <body>
        <header>
            <nav id="navbar"></nav>
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
        <script src="/FrontEnd-Rough/script.js" type="module"></script>

        <script src="/login/import_data.js" type="module"></script>
        <script src="/login/login.js" type="module"></script>

        <script src="/Navbar/navbar.js"></script>
        <script>implementNavbar("Login")</script>
    </body>
</html>


