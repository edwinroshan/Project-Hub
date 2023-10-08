document.addEventListener("DOMContentLoaded", function () {
    // Initialize Firebase with your config here
    var firebaseConfig = {
        apiKey: "AIzaSyCpuLUlfrvUPc431WumRk3MRFTKKl1uxl8",
        authDomain: "userprofil-9c6bd.firebaseapp.com",
        databaseURL: "https://userprofil-9c6bd-default-rtdb.firebaseio.com",
        projectId: "userprofil-9c6bd",
        storageBucket: "userprofil-9c6bd.appspot.com",
        messagingSenderId: "839564141767",
        appId: "1:839564141767:web:88c4609725ec300b8d0ae2"
    };
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();
    var projectsRef = database.ref("projects");
    var cardContainer = document.getElementById("card-container");

    // Retrieve selected project keys from local storage
    var selectedProjectKeys = JSON.parse(localStorage.getItem("selectedProjectKeys")) || [];

    function createCard(projectData, projectKey) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-content">
                <h2>${projectData.name}</h2>
                <p>${projectData.description}</p>
            </div>
            <div class="apply-btn">
                <button class="apply-button" data-key="${projectKey}">Join</button>
            </div>
        `;

        cardContainer.appendChild(card);

        var applyButton = card.querySelector(".apply-button");
        applyButton.addEventListener("click", function () {
            var projectKey = applyButton.getAttribute("data-key");
            selectedProjectKeys.push(projectKey);

            // Store selected project keys in local storage
            localStorage.setItem("selectedProjectKeys", JSON.stringify(selectedProjectKeys));
        });
    }

    projectsRef.on("child_added", function (snapshot) {
        var projectData = snapshot.val();
        var projectKey = snapshot.key;
        createCard(projectData, projectKey);
    });

    const currentPage = window.location.href;
    const links = document.querySelectorAll(".navigation a");

    links.forEach(link => {
        if (currentPage === link.href) {
            link.classList.add("selected");
        }
    });

    // Add a click event listener to navigate to myprojects.html with the selected projects
    cardContainer.addEventListener("click", function () {
        // Construct the URL with the selected project keys as query parameters
        var applyUrl = "../myprojectpage/myprojects.html";

        // Redirect to myprojects.html without appending selected project keys to the URL
        window.location.href = applyUrl;
    });
});
