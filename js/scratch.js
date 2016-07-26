 var bio = {   "name" : "Georgina Garcia-Obledo   "role": "Product Manager };
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);   
 $("#title").prepend(formattedRole);   
 var formattedName = HTMLheaderName.replace("%data%", bio.name);   
 $("#title").prepend(formattedName);


 // $("#main").append("Georgina Garcia-Obledo");
//var awesomeThoughts = "I am Georgina, and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//console.log(funThoughts);
//$("#main").append(funThoughts);
---
var name = "Georgina Garcia-Obledo";
var role = "Product Manager";
var email = "georgina376@gmail.com";
var github = "georginagarciaobledo";
//var location = ["San Francisco", "Los Angeles"];
var skills = ["research", "planning"];
//var pic = "images/headshot.jpg";
//var welcome = "Welcome to my interactive resume."
----
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedGithub = HTMLgithub.replace("%data%", github);
//var formattedLocation = HTMLlocation.replace("%data%", location);
var formattedSkills = HTMLskills.replace("%data", skills);
//var formattedPic = HTMLbioPic.replace("%data%", pic);
//var foramttedWelcomeMsg = HTMLwelcomeMsg.("%data%", welcome);
----
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(formattedEmail);
$("#main").append(formattedGithub);
//$("#main").append(formattedLocation);
$("#main").append(formattedSkills);
---



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
