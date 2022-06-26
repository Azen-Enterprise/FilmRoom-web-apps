export const isEmpty = (str: string) => {
    return !str || str.length === 0;
};

export const validateEmail = (email: string) => {
    let filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email);
};

export const validatePhoneNumber = (phone: string) => {
    console.log(phone);
    // let filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // return filter.test(phone);
    return true;
};

export const validatePassword = (password: string) => {
    return password.length > 5;
};

export const comparePassword = (confirm_password: string, password: string) => {
    return confirm_password === password;
};