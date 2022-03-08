//Password Strong

function isSpecial(a) {
    return '!@#$%^&*()-+'.indexOf(a) != -1
}

function isNumber(a) {
    return Number.isInteger(parseInt(a));
}

function isLowerCase(a) {
    return a.toLowerCase() == a;
}

function isUpperCase(a) {
    return a.toUpperCase() == a;
}

function totalRequirements(a) {
    return a.reduce((p, c) => p + c, 0);
}

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let count = 0, a, requirements = [1, 1, 1, 1];
    
    
    for(let i = 0; i < password.length; i++) {
        a = password[i];
        if(isSpecial(a)) {
            requirements[0] = 0;
        } else if(isNumber(a)) {
            requirements[1] = 0;
        } else if(isUpperCase(a)){
            requirements[2] = 0;
        } else if(isLowerCase(a)) {
            requirements[3] = 0;
        }
    }
    console.log(requirements)
    let p = totalRequirements(requirements);
    if(password.length < 6) return Math.max(6 - n, p);
    console.log(p)
    return p;
}

minimumNumber(6, '')

