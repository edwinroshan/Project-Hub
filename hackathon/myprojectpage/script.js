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

    // Retrieve selected project keys from local storage
    var selectedProjectKeys = JSON.parse(localStorage.getItem("selectedProjectKeys")) || [];

    // Display selected projects on the page
    var projectListContainer = document.getElementById("project-list-container");

    // Loop through selected project keys and fetch project data
    selectedProjectKeys.forEach(projectKey => {
        firebase.database().ref("projects/" + projectKey).once("value").then(function (snapshot) {
            var projectData = snapshot.val();
            
            if (projectData) {
                var projectElement = document.createElement("div");
                projectElement.className = "selected-project";
                
                projectElement.innerHTML = `
                
                
                <div class="card-content">
                <h2>${projectData.name}</h2>
                
                <p>${projectData.description}</p>
                
                </div>
                
                <div class="apply-btn">
                <a href="chat.html"><button class="apply-button" data-key="${projectKey}">Work Space</button>
                
                </a> </div>
                
                `;
                
                
                projectListContainer.appendChild(projectElement);
                

                var applyButton = projectElement.querySelector(".apply-button");
                applyButton.addEventListener("click", function () {
                    // Set project name to local storage
                    localStorage.setItem('n', projectData.name);

                    // Redirect to chat.html
                    window.location.href = "../myprojectpage/chat.html";
                });
            }
        });
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