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


var work = {};

work.position = "Customer Success Intern";
work.employer = "Cocoon Cam";
work.yearsWorked = 0.17;
work.city = "San Francisco";

var education = {};

education["name"] = "Occidental College";
education["yearsAttended"] = "2014-Present"
education["city"] = "Los Angeles";

$("#main").append(work["position"]);
$("#main").append(education.name);






/*
var work = {
	"jobs": [
				{
					"employer": "Cocoon Cam",
					"title": "Customer Success Intern",
					"location": "San Francisco, CA",
					"dates": "June 2016-Present",
					"description": "this is what I do. Here is our website: www.cocooncam.com"
				},
				{
					"employer": "Office of Student Life, Occidental College"
				},
				{},
				{},
				{}
			]
	//display: function taking no parameters		
};


var education = {
	"schools": [{
		"name": "Occidental College",
		"location": "Los Angeles, CA",
		"degree": "B.A., Expected May 21, 2017",
		"majors": "Economics Major, Mathematics Minor",
		"dates": "2014-2017",
		"url": "www.oxy.edu"
		},
		{
		"name": "City College of San Francisco",
		"location": "San Francisco, CA",
		"degree": "none",
		"majors": "Coursework in German, Bookbinding",
		"dates": "2013-2014",
		"url": "www.ccsf.edu"
		},
		{
		"name": "Harvard University",
		"location": "Cambridge, MA",
		"degree": "Harvard College Class of 2015",
		"majors": "Coursework in . Working toward B.A. but transferred to Occidental College",
		"dates": "2011-2012",
		"url": "www.harvard.edu",
		}],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree, Expected August 2016",
		"school": "Udacity",
		"dates": "June 2016-August 2016",
		"url": "www.udacity.com"
	}]
	//display: function taking no parameters
};
*/
