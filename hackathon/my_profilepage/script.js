document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const cardContainer = document.getElementById("card-container");
    const database = firebase.database();

    submitButton.addEventListener("click", function () {
        // Get form values using the correct unique IDs
        

        const name = document.getElementById("nameInput").value;
        const skills = document.getElementById("skillsInput").value;
        const experience = document.getElementById("experienceInput").value;
        const interest = document.getElementById("interestInput").value;
        const location = document.getElementById("locationInput").value;
        const language = document.getElementById("languageInput").value;

        // Create a data object
        const userData = {
            name: name,
            skills: skills,
            experience: experience,
            interest: interest,
            location: location,
            language: language
        };
        localStorage.setItem('name', userData.name);
        // Push the data to Firebase Realtime Database
        database.ref("userProfiles").push(userData);
        
        

        

        // Clear form fields
        document.getElementById("nameInput").value = name;
        document.getElementById("skillsInput").value = skills;
        document.getElementById("experienceInput").value = experience;
        document.getElementById("interestInput").value = interest;
        document.getElementById("locationInput").value = location;
        document.getElementById("languageInput").value = language;
        submitButton.textContent('change')


        

        // Redirect to another website
         window.location.href = "../myprojectpage/chat.html";
    });
});
function change() // no ';' here
{
    var elem = document.getElementById("submit-button");
    if (elem.value=="Submit"){ elem.value = "Edit";
    document.getElementById("nameInput").disabled = true;
    document.getElementById("skillsInput").disabled = true;
    document.getElementById("experienceInput").disabled = true;
    document.getElementById("interestInput").disabled = true;
    document.getElementById("locationInput").disabled = true;
    document.getElementById("languageInput").disabled = true;
}
    else if (elem.value=="Edit"){elem.value = "Submit";
    document.getElementById("nameInput").disabled = false;
    document.getElementById("skillsInput").disabled = false;
    document.getElementById("experienceInput").disabled = false;
    document.getElementById("interestInput").disabled = false;
    document.getElementById("locationInput").disabled = false;
    document.getElementById("languageInput").disabled = false;
}}
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
