 var bio = {   "name" : "Georgina Garcia-Obledo   "role": "Product Manager };
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);   
 $("#title").prepend(formattedRole);   
 var formattedName = HTMLheaderName.replace("%data%", bio.name);   
 $("#title").prepend(formattedName);