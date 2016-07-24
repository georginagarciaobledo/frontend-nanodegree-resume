 var bio = {
 	"name" : "Georgina Garcia-Obledo",
 	"role" : "Product Manager",
 	"contacts" : {
 		"mobile" : "415.555.5555",
 		"email" : "georgina376@gmail.com",
 		"github" : "georginagarciaobledo",
 		"location" : "San Francisco and Los Angeles",

 	},
 	"welcomeMessage" : "Welcome, catchy intro blah blah blah.",
 	"skills" : ["UX research"," coordination"," data analysis"],
 	"biopic" : "images/headshot.jpg",
 	//"display" : "function taking no parameters"
 };

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkills);

/*
var work = {};

work.jobs = [];

work.jobs[0] = {
	"employer": "Cocoon Cam",
	"title": "Customer Success Intern",
	"location": "San Francisco, CA",
	"dates": "June 2016-Present",
	"description": "This is what I do. Here is our website: www.cocooncam.com"
};

work.jobs[1] = {
	"employer": "Occidental College",
	"title": "Managing Editor, La Encina Yearbook",
	"location": "San Francisco, CA",
	"dates": "May 2016-Present",
	"description": "This is what I do. Here is our website: www.oxy.edu/la-encina"
};

work.jobs[2] = {
	"employer": "Occidental College",
	"title": "Economics Students Association",
	"location": "San Francisco, CA",
	"dates": "May 2016-Present",
	"description": "This is what I do. Here is our website: ..."
};

work.jobs[3] = {
	"employer": "Koru@Facebook",
	"title": "Program Participant",
	"location": "San Francisco, CA",
	"dates": "July 2015",
	"description": "This is what I do. Here is our website: joinkoru.com"
};

work.jobs[4] = {
	"employer": "Cullinane Construction",
	"title": "Admin Assistant",
	"location": "San Francisco, CA",
	"dates": "December 2013-Present",
	"description": "This is what I do. I worked here full time December 2013-July 2014. Now part-time."
};

//work.display = function taking no parameters

var education = {};

education.schools = [];

education.schools[0] = {
	"name": "Occidental College",
	"location": "Los Angeles, CA",
	"degree": "B.A., Expected May 21, 2017",
	"majors": "Economics Major, Mathematics Minor",
	"dates": "2014-2017",
	"url": "www.oxy.edu"
};

education.schools[1] = {
	"name": "City College of San Francisco",
	"location": "San Francisco, CA",
	"degree": "none",
	"majors": "Coursework in German, Bookbinding",
	"dates": "2013-2014",
	"url": "www.ccsf.edu"
};

education.schools[2] = {
	"name": "Harvard University",
	"location": "Cambridge, MA",
	"degree": "Harvard College Class of 2015",
	"majors": "Coursework in . Working toward B.A. but transferred to Occidental College",
	"dates": "2011-2012",
	"url": "www.harvard.edu"
};

education.onlineCourses" = [];

education.onlineCourses[0] = {
	"title": "Front-End Web Developer Nanodegree, Expected August 2016",
	"school": "Udacity",
	"dates": "June 2016-August 2016",
	"url": "www.udacity.com"
};

//education.display = function taking no parameters

*/