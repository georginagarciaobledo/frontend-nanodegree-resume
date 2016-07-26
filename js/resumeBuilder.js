
var bio = {
    "name": "Georgina Garcia-Obledo",
    "role": "Product Manager",
    "contacts": {
        "mobile": "415.555.5555",
        "email": "georgina376@gmail.com",
        "github": "georginagarciaobledo",
        "location": "San Francisco",
    },
    "welcomeMessage": "Welcome, catchy intro blah blah blah.",
    "skills": [
        "UX research", " coordination", " data analysis"
    ],
    "bioPic": "images/headshot.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkill);
    }
};


var work = {
    "jobs": [{
        "employer": "Cocoon Cam",
        "title": "Customer Success Intern",
        "location": "San Francisco, CA",
        "dates": "June 2016 - Present",
        "description": "This is what I do. Here is our website: www.cocooncam.com"
    }, {
        "employer": "Occidental College",
        "title": "Managing Editor, La Encina Yearbook",
        "location": "Los Angeles, CA",
        "dates": "May 2016 - Present",
        "description": "This is what I do. Here is our website: www.oxy.edu/la-encina"
    }, {
        "employer": "Occidental College",
        "title": "Economics Students Association",
        "location": "Los Angeles, CA",
        "dates": "May 2016 - Present",
        "description": "This is what I do. Here is our website: ..."
    }, {
        "employer": "Koru@Facebook",
        "title": "Program Participant",
        "location": "San Francisco, CA",
        "dates": "July 2015",
        "description": "This is what I do. Here is our website: joinkoru.com"
    }, {
        "employer": "Cullinane Construction",
        "title": "Admin Assistant",
        "location": "San Francisco, CA",
        "dates": "December 2013 - Present",
        "description": "This is what I do. I worked here full time December 2013-July 2014. Now part-time."
    }]
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();


var projects = {
    "projects": [{
        "title": "Portfolio Project",
        "dates": "July 2016",
        "description": "Made an online portfolio.",
        "images": [
            "images/fog.jpg", "images/dragonfruit.jpg"
        ]
    }, {
        "title": "Animal Trading Card",
        "dates": "June 2016",
        "description": "Made a trading card based on a picture.",
        "images": [
            "images/tardigrade.jpg"
        ]
    }, ]
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "Occidental College",
        "location": "Los Angeles, CA",
        "degree": "B.A., Expected May 21, 2017",
        "majors": ["Economics Major, Mathematics Minor"],
        "dates": "2014-2017",
        "url": "www.oxy.edu"
    }, {
        "name": "City College of San Francisco",
        "location": "San Francisco, CA",
        "degree": "none",
        "majors": ["Coursework in German, Bookbinding"],
        "dates": "2013-2014",
        "url": "www.ccsf.edu"
    }, {
        "name": "Harvard University",
        "location": "Cambridge, MA",
        "degree": "Harvard College Class of 2015",
        "majors": ["Coursework in...", "Working toward B.A. but transferred to Occidental College"],
        "dates": "2011-2012",
        "url": "www.harvard.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree, Expected August 2016",
        "school": "Udacity",
        "dates": "June 2016-August 2016",
        "url": "www.udacity.com"
    }]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajors);
    };
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedURL);
    }
};

education.display();


function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
};

$("#mapDiv").append(googleMap);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

bio.display();