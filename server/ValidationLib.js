// Show input error message

/**
 * Beschreibung
 * @param id: Identifikation des eingegebenen Datenelement
 * @param message: Fehlermeldung
 * @returns {string}
 */
function showError(id, message) {
    return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
    return `${id} successfully validated!`;
}

// Check email is valid
function checkEmail(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid')
        }
    }
    return result;
}

//TODO: Check article for throwing errors in node js
// https://stackoverflow.com/questions/33086247/throwing-an-error-in-node-js

// Check required fields
function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //if input is empty ...
    if (input.trim() === '') {
        //.. then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    //return validation result
    return result;
}

// Check input length
function checkLength(id, input, min, max) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}

//Check Phonenumber
function checkNumber(id, input) {
    //Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^0(2[1-246-7]|3[1-4]|4[13-4]|5[25-6]|6[1-2]|7[15-68-9]|8[17]|91)[0-9]{7}/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Number is not valid')
        }
    }
    return result;
}

//Age restriction
function checkAge(id, input){
    //Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (Number(input) < 12){
        result = {
            isNotValid: true,
            msg: showError(id, 'Age has to be at least 12')
        }
    }
    return result;
}

//Validate password
function checkPassword(id, input){
    //Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Password has to 7 to 15 characters and has to contain at least one numeric digit and a special character')
        }
    }
    return result;
}


/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
    checkEmail,
    checkLength,
    checkRequired,
    checkNumber,
    checkAge,
    checkPassword
}
