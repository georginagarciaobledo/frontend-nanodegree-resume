/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {   "name" : "Georgina",   "role": "Web Developer" };
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
 $("#title").prepend(formattedRole); 
 var formattedName = HTMLheaderName.replace("%data%", bio.name); 
 $("#title").prepend(formattedName);
console.log('hello');
