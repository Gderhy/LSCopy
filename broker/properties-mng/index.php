<!DOCTYPE html>

<html>
    <head>
    <nav>
    <div class="logo">
    </div>
    <ul>
        <li><a href="../../admin">Admin</a></li>
        <li><a href="../" class="active">Broker</a></li>
         <li><a href="../FrontEnd-Rough">Home</a></li>
        <li><a href="../../FrontEnd-Rough/listings.html">Listings</a></li>
        <li><a href="../../FrontEnd-Rough/contact.html">Contact</a></li>
        <li><a href="../../properties">Properties</a></li>
        <li><a href="../../login">Login</a></li>
    </ul>
        </nav>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../../navStyle.css">
        <title>Manage Properties</title>
    </head>
    <body>
       <form id="addProperty">
    <label for="BROKER_ID">Broker ID:</label>
    <input type="number" id="BROKER_ID" name="BROKER_ID" required><br><br>

    <label for="DESCRIPTION">Description:</label>
    <textarea id="DESCRIPTION" name="DESCRIPTION" required></textarea><br><br>

    <label for="AREA_ID">Area ID:</label>
    <select id="AREA_ID" name="AREA_ID" required>
    </select><br><br>

    <label for="ADDRESS">Address:</label>
    <input type="text" id="ADDRESS" name="ADDRESS" required><br><br>

    <label for="POSTAL">Postal Code:</label>
    <input type="text" id="POSTAL" name="POSTAL" required><br><br>

    <label for="YEAR">Year:</label>
    <input type="number" id="YEAR" name="YEAR" required><br><br>

    <label for="PARKING_COUNT">Parking Count:</label>
    <input type="number" id="PARKING_COUNT" name="PARKING_COUNT" required><br><br>

    <label for="BATH_COUNT">Bath Count:</label>
    <input type="number" step="0.1" id="BATH_COUNT" name="BATH_COUNT" required><br><br>

    <label for="ROOMS_COUNT">Rooms Count:</label>
    <input type="number" id="ROOMS_COUNT" name="ROOMS_COUNT" required><br><br>

    <label for="TYPE_ID">Type:</label>
    <select id="TYPE_ID" name="TYPE_ID">
        <option value="1">Condo</option>
        <option value="2">House</option>
        <option value="3">Apartment</option>
        <option value="4">Multiplex</option>
    </select><br><br>

    <label for="PRICE">Price:</label>
    <input type="number" id="PRICE" name="PRICE" required><br><br>

    <label for="IS_FOR_SALE">Is for Sale:</label>
    <select id="IS_FOR_SALE" name="IS_FOR_SALE">
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select><br><br>
    <br><br>
    <input type="submit" value="Insert Property">
</form>
        
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="import_data.js" type="module"></script>
    <script src="properties-mng.js" type="module"></script>
    </body>
</html>