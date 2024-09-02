function validateAge(birthdateStr) {

    const birthdate = new Date(birthdateStr);
    
    const today = new Date();
    
    let age = today.getFullYear() - birthdate.getFullYear();
    
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    return age >= 14;
}

console.log(validateAge("2010-08-20"));