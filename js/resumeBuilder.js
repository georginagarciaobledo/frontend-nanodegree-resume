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
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[indexCount]);
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
    for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[indexCount].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount].description);
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
    for (var indexProjectCount = 0; indexProjectCount < projects.projects.length; indexProjectCount++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexProjectCount].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[indexProjectCount].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexProjectCount].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[indexProjectCount].images.length > 0) {
            for (var indexImageCount = 0; indexImageCount < projects.projects[indexProjectCount].images.length; indexImageCount++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[indexProjectCount].images[indexImageCount]);
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
    for (var indexCount = 0; indexCount < education.schools.length; indexCount++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[indexCount].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[indexCount].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[indexCount].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[indexCount].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[indexCount].majors);
        $(".education-entry:last").append(formattedMajors);
    }
    $("#education").append(HTMLonlineClasses);
    for (var indexCourseCount = 0; indexCourseCount < education.onlineCourses.length; indexCourseCount++) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[indexCourseCount].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[indexCourseCount].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[indexCourseCount].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[indexCourseCount].url);
        $(".education-entry:last").append(formattedURL);
    }
};

education.display();


function locationizer(work_obj) {
    var locationArray = [];
    for (var indexCount = 0; indexCount < work_obj.jobs.length; indexCount++) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

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