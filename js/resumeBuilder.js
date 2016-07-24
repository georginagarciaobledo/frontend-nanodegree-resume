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