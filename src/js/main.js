"use strict"; 

// Settings to API-url 
let onlineMode = true;  // false when run with locally, put true before upload
let apiedu;     // Webservice api url for studies
let apieduid;   // Api url with id for studies
let apiwork;    // Api url for workexperience 
let apiworkid;  // Api url with id for workexperience
let apiwebb;    // Api url for created webbpages
let apiwebbid;  // Api url with id for created webbpages
if (onlineMode)    // CHANGE DOWN HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    apiedu= "https://www.cssgeek.se/webbservice/studies.php",
    apieduid= "https://www.cssgeek.se/webbservice/studies.php?id=",  
    apiwork= "https://www.cssgeek.se/webbservice/workexperience.php",
    apiworkid= "https://www.cssgeek.se/webbservice/workexperience.php?id=",
    apiwebb= "https://www.cssgeek.se/webbservice/createdwebb.php",
    apiwebbid= "https://www.cssgeek.se/webbservice/createdwebb.php?id=";    
else 
    apiedu= "http://localhost/dt173gprojekt/studies.php",
    apieduid= "http://localhost/dt173gprojekt/studies.php?id=",  
    apiwork= "http://localhost/dt173gprojekt/workexperience.php",
    apiworkid= "http://localhost/dt173gprojekt/workexperience.php?id=",
    apiwebb= "http://localhost/dt173gprojekt/createdwebb.php",
    apiwebbid= "http://localhost/dt173gprojekt/createdwebb.php?id="; 

// Body onload function
function loads() {
    getStudies();
    getWork(); 
    getWebb(); 
}


// Function to read all courses/programs
function getStudies() {                                                            
    fetch(apiedu)
    .then((res) => res.json())
    .then((data) => {
        let showStudies = " "; 
        // Loop
        data.forEach(function(studies) {
            showStudies += ` 
                <div class="study">
                    <p class="study-name">${studies.coursename} vid ${studies.university}</p>
                    <p class="study-date">${studies.startdate} till ${studies.enddate}</p>
                </div>
            `; 
        })
        document.getElementById('showStudies').innerHTML = showStudies;        
    })
}

// Function to read all works 
function getWork() {                                                            
    fetch(apiwork)
    .then((res) => res.json())
    .then((data) => {
        let showWork = " "; 
        // Loop
        data.forEach(function(workexperience) {
            showWork += ` 
                <div class="work">
                    <p class="work-place">${workexperience.workplace}</p>
                    <p class="work-title">${workexperience.title}</p>
                    <p class="work-date">${workexperience.datestart} till ${workexperience.dateend}</p>
                </div>
            `; 
        })
        document.getElementById('showWork').innerHTML = showWork;   
    })
}

// Function to read all webbpages 
function getWebb() {                                                            
    fetch(apiwebb)
    .then((res) => res.json())
    .then((data) => {
        let showWebb = " "; 
        // Loop
        data.forEach(function(createdwebb) {
            showWebb += ` 
                <div class="webbox">
                    <div class="webbox-inner">
                        <div class="webfront">
                            <img class="readimg" src="${createdwebb.webbpicurl}" alt="Bild på webbsida" />
                        </div>    
                        <div class="webback">
                            <h3>${createdwebb.webbtitle}</h3>
                            <p>${createdwebb.webbdesc}</p>
                            <p><a href="${createdwebb.webburl}" target="_blank">Länk till webbplats</a></p>
                        </div>
                    </div>
                </div>
            `; 
        })
        document.getElementById('showWebb').innerHTML = showWebb;        
    })
}