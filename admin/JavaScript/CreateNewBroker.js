import {addNewBroker} from "./import_data.js";

// NEED TO TEST IF DB RECEIVES NEW BROKER


const form = document.getElementById("form-create-broker");

form.addEventListener("submit", (event) =>{

    event.preventDefault();


    const FIRST_NAME = document.getElementById("form-create-broker").querySelector("#FIRST_NAME").value;
    const LAST_NAME = document.getElementById("form-create-broker").querySelector("#LAST_NAME").value;
    const PHONE_NUM = document.getElementById("form-create-broker").querySelector("#PHONE_NUM").value;
    const EMAIL = document.getElementById("form-create-broker").querySelector("#EMAIL").value;
    const USER_NAME = document.getElementById("form-create-broker").querySelector('#USER_NAME').value;
    const PASSWORD = document.getElementById("form-create-broker").querySelector('#PASSWORD').value;

    // console.log(FIRST_NAME);
    // console.log(FIRST_NAME, LAST_NAME, PHONE_NUM,EMAIL, USER_NAME, PASSWORD); They work !!

    addNewBroker(FIRST_NAME, LAST_NAME, PHONE_NUM,EMAIL, USER_NAME, PASSWORD); // NEED TO TEST IF THIS WORK !!
});

