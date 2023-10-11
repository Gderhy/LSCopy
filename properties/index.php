<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <form id="propertySearchForm">
    <!-- Area Input -->
    <select name="area" id="area">
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
