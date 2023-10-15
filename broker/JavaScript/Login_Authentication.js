document.addEventListener("DOMContentLoaded",
    ()=>{

        const user = JSON.parse(localStorage.getItem('user'));
            const brokerRoleID = 2; // Make sure that this is the right role ID Number for brokers

        // Localstorage does not store user.ROLE_ID

        // if (!user || parseInt(user.ROLE_ID) !== brokerRoleID) {
        //     alert('Access denied. Redirecting to homepage.');
        //     window.location.href = '../login';
        // } else {
        //
        //     alert("User authorized.");
        // }

});