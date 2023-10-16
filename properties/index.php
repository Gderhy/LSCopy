<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../Navbar/Css/navStyle.css">
        <title>Property Search</title>
    </head>
    <body>
        <header>
    <nav>
    <div class="logo">
    </div>
    <ul>
    <li><a href="../admin" >Admin</a></li>
        <li><a href="../broker">Broker</a></li>
         <li><a href="../FrontEnd-Rough">Home</a></li>
        <li><a href="../FrontEnd-Rough/listings.html">Listings</a></li>
        <li><a href="../FrontEnd-Rough/contact.html">Contact</a></li>
        <li><a href="" class="active">Properties</a></li>
        <li><a href="../login">Login</a></li>
    </ul>
        </nav>
        </header>
        <br><br><br><br><br>
    <form id="propertySearchForm">
    <!-- Area Input -->
    <select name="area" id="area">
        <option value="-1">Quebec</option>
    </select>

    <!-- Max Price Input -->
    <input type="number" name="maxPrice" id="maxPrice" placeholder="Max Price" >

    <!-- Is For Sale Dropdown -->
    <select name="isForSale" id="isForSale">
        <option value="-1">For Sale or Rent</option>
        <option value="1">For Sale</option>
        <option value="0">For Rent</option>
    </select>
    <button type="submit">Search</button>
</form>


<div id="searchResults">
</div>


    </body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="import_data.js" type="module"></script>
<script src="properties.js" type="module"></script>
