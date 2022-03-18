const skillsArray = ["Visual Basic 6/VB.Net","Pick Data basic/Unidata","Database","Problem Solving",
                     "JavaScript","PHP","MySQL","SQL Server","HTML 5","CSS","Bootstrap 5",
                     ".Net Framework 4","WPF","MVC","Silverlight","jQuery","Customer support",
                     "Time management","Team Leading"];

const workArray = [["January 1998 - January 1999", "Speedwing Cargo (British Airways) University placement", "Various jobs"],
                   ["June 1999 - August 1999", "Key Systems Ltd.", "VB6 Development on advertisement booking system"],
                   ["August 1999 - February 2001", "TBS Ltd.", "VB6 Development on back end communications manager for flagship mobile phone fleet management system"],
                   ["2001 - 2003", "Plusnet", "Back end and Front end development on plusnet portal/systems, mainly in financial backend and customer web statistics generator front end"],
                   ["June 2003 - November 2020", "Sanderson Computers Ltd.", "VB6 development on CRM system, created a piece of software that automated email processing, ie. process orders automatically when emails come in, flexible approach to allow the software to do pretty much anything once the configuration was done/custom code written"]];

const educationArray = [["1997 - 1999","Sheffield Hallam University","HND Software Engineering"],
                        ["2005 - 2011","Sheffield University","HNC Archaeology (Archaeology/Natural and Human Environments)"]];

const projectsArray = [["Local Tourism website", "https://github.com/nefilem/hobbyproject", "https://nefilem.github.io/hobbyproject/index.html", ["HTML5", "CSS", "Bootstrap 5"], "./images/exampletourismwebsite.jpg", "Image taken from example tourism website", " Project done for bootcamp at the Developer Academy, the site shows examples of photography I've done in three local tourist areas in and around Sheffield with a bit of information about each area and a map to show viewers of the site where to go. Each photograph has a little information about it as well. Needs polishing up a bit but quite happy about the layout and appearance of the site."],
                       ["Quiz website","https://github.com/nefilem/quizProject","https://nefilem.github.io/quizProject/index.html", ["HTML5","CSS","Bootstrap 5", "JavaScript"],"./images/quizexample.jpg","Image taken from quiz example website"," This project is another one done as part of the bootcamp course at the Developer Academy, we were asked to create a quiz with multiple pages and options per question with a page that showed the results, it was meant to run as one page despite having multiple question pages. I decided to have a go at creating a quiz similar the the ones you find on social media sites that ask multiple questions and result in showing you which character you might be out of a film/tv/comic series. I decided to go with the X-Men. Quite happy with how it turned out although as with all the projects I do think that I should go back and polish them up a bit as I learn more."],
                       ["Caesar Cypher website","https://github.com/nefilem/caeserCypher","https://nefilem.github.io/caeserCypher/index.html",["HTML5", "CSS", "Booststrap 5", "JavaScript"],"./images/caesercypher.jpg", "Image or Caeser Cypher website", " Final project for now is another for the bootcamp course at the Developer Academy, the remit for this one was to create a site that involved using the Caesar Cypher to encode plain text and allow you to decrypt it afterwards, I extended this by allowing the user to use multiple key codes to encrypt the text. Quite happy with both the layout and how this turned out, code wise it was rather easy to complete but I think the simple design looks good too."],
                       ["Javascript adventure game","https://github.com/nefilem/javascript","https://nefilem.github.io/javascript/index.html",["HTML5","CSS","JavaScript"],"./images/javascriptadventuregame.jpg", "Image of javascript adventure game website"," This project again was done for part of the ongoing bootcamp course with the Developer Academy, we were asked to create a text adventure game using JavaScript, I however decided to take this one step further and create a graphical adventure game with text descriptions as well (just to cover myself), I decided to try and come up with a modern day version of a game I used to play in the mid 80's on a Mattel Aquarius, it still needs to be finished but it's playable in a very limited form at the minute. If you would like a play the W, A, S, D keys control movement in north, south, east, west style directions, Q and E turn left and right respectively, R is used to loot defeated enemies, SPACE BAR attacks creatures you come across and H uses a health potion if you have one in your inventory."]];
                       
/**
 * Generates content based off above arrays
 */
function generateContent() {
    let skillsTable = document.getElementById("skillstablebody");

    skillsArray.forEach(element => {
        skillsTable.innerHTML += '<tr><th scope="row">' + String(element) + '</th></tr>';
    });

    let workTable = document.getElementById("worktablebody");

    workArray.forEach(element => {
        workTable.innerHTML += '<tr><th scope="row">' + String(element[0]) + '</th><td>' + String(element[1]) + '</td><td>' + String(element[2]) + '</td></tr>';    
    });

    let educationTable = document.getElementById("educationtablebody");

    educationArray.forEach(element => {
        educationTable.innerHTML += '<tr><th scope="row">' + element[0] + '</th><td>' + element[1] + '</td><td>' + element[2] + '</td></tr>';
    });

    let projectsTable = document.getElementById("projectsbody");

    projectsArray.forEach(element => {        
        let buttonString = "";
        element[3].forEach(element => {
            buttonString += '<button type="button" class="btn btn-success btn-sm rounded-pill resizebutton disabled">' + element + '</button>';
        });

        projectsTable.innerHTML += '<div class="col"><div class="card mainBGColour"><div class="cardsectionheader subBGColourFour"><h5 class="card-title whiteFloatShadow fw-bold">' + element[0] + '</h5></div><div class="container"><div class="row"><div class="col-1 verticalsection text-center subBGColourFour"></div><div class="col-11 cardbody bg-white"><img src="' + element[4] + '" class="card-img-top" alt="' + element[5] + '"><div class="card-body"><p class="card-text">' + element[6] + '</p><!-- p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p --></div></div></div></div></div><div class="cardsectionfooter subBGColourFour"><a href="' + element[1] + '" target="_"><button type="button" class="btn btn-success btn-sm rounded-pill resizebutton">Code</button></a><a href="' + element[2] + '" target="_"><button type="button" class="btn btn-success btn-sm rounded-pill resizebutton">Web</button></a>' + buttonString + '</div></div>';
    });
}
