// JavaScript to set the selected class based on the current page
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.href;
    const links = document.querySelectorAll(".navigation a");
    
    links.forEach(link => {
        if (currentPage === link.href) {
            link.classList.add("selected");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const cardContainer = document.getElementById("card-container");
    const database = firebase.database(); // Get a reference to the database

    submitButton.addEventListener("click", function () {
        // Get form values
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const domain = document.getElementById("domain").value;
        const days = document.getElementById("days").value;
        const moredetails = document.getElementById("moredetails").value;

        if (!name || !description || !domain) {
            alert("Please fill in all fields.");
            return;
        }

        // Push data to Firebase database
        database.ref("projects").push({
            name: name,
            description: description,
            domain: domain,
            days: days,
            moredetails: moredetails
        });

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("domain").value = "";
        document.getElementById("days").value = "";
        document.getElementById("moredetails").value = "";
    });
});

