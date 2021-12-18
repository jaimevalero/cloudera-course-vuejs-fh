
let firstName;
let lastName = "Smith";


console.log(`${firstName || 'No first name' } ${lastName || 'No last name'}`);

const isActive = true;

const message = 'User is ' + (isActive ? 'active' : 'inactive') + '.';