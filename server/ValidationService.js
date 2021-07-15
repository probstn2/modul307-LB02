// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("firstname", userObj.firstname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("age", userObj.age);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("number", userObj.number);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("firstname",userObj.firstname, 3, 15);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //check number
    result = validateLib.checkNumber("number", userObj.number);
    if (result.isNotValid) { return result; }

    //check age
    result = validateLib.checkAge("age", userObj.age);
    if (result.isNotValid) { return result; }

    //check password
    result = validateLib.checkPassword("password", userObj.password);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
