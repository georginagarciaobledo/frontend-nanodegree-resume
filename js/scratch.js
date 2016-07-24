 var bio = {   "name" : "Georgina Garcia-Obledo   "role": "Product Manager };
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);   
 $("#title").prepend(formattedRole);   
 var formattedName = HTMLheaderName.replace("%data%", bio.name);   
 $("#title").prepend(formattedName);


 var bio = {
	"name": "Georgina Garcia-Obledo",
	"role": "Product Manager",
	"contact info": {
		"email": "georgina376@gmail.com",
		"github": "georginagarciaobledo",
		"location": "San Francisco/Los Angeles"
	},
	"welcomeMessage": "Welcome to my interactive resume.";
	"skills": ["user research", "event planning"],
	"bioPic": "images/headshot.jpg"
};

$("#main").append(bio.location);