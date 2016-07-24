// $("#main").append("Georgina Garcia-Obledo");
//var awesomeThoughts = "I am Georgina, and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//console.log(funThoughts);
//$("#main").append(funThoughts);

var name = "Georgina Garcia-Obledo";
var role = "Product Manager";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);