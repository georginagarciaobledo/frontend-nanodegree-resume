// $("#main").append("Georgina Garcia-Obledo");
//var awesomeThoughts = "I am Georgina, and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//console.log(funThoughts);
//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Georgina Garcia-Obledo");
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Product Manager");
$("#header").append(formattedRole);