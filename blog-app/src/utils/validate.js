export default function validate(errors, name, value) {
    switch (name) {
        case 'username':
            let usernameError = value.length >= 6 ? "" : "Username must be more than 6 characters"
            errors.username = usernameError;
            break;
        case 'email':
            let emailError =
                value.indexOf('@') === -1 ? "Email does not contain @" : "";
            errors.email = emailError;
            break;
        case 'password':
            // check length of password
            let passwordError;
            if (value.length < 7) {
                passwordError = "Password must be at-least 6 characters"
            }
            // check alphabets and number are present
            let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
            if (!re.test(value)) {
                passwordError = "Password must contain a character and a number"
            }
            errors.password = passwordError;
            break;
        default:
            return errors;
    }
}
