//Average's calculation
export function average(sum, count) {
    return parseFloat((sum / count).toFixed(2));
}

// Regex to add grade
export function isValidValue(value) {
    const VALUE_REGEX = /^(0|[1-9]|1[0-9]|20)$/;
    return VALUE_REGEX.test(value);
}
export function isValidDate(date) {
    const DATE_REGEX = /^(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:29|30|31)|(?:0[13-9]|1[0-2])-(?:0[1-9]|[1-2][0-9])|02-(?:0[1-9]|1[0-9]|2[0-8]))$/;
    return DATE_REGEX.test(date);
}
export function isDateBeforeToday(dateString) {
    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    const date = new Date(year, month, day);
    const today = new Date();
    return date <= today;
}
export function isValidComment(comment) {
    const COMMENT_REGEX = /^[a-zA-Z0-9À-ÿ\-_\s.,;:!?()€$£&<>\/]+$/u;
    return COMMENT_REGEX.test(comment);
}
export function isValidGradeType(type) {
    let result = (type === "oral") || (type === "écrit")
    return result;
}

export function isValidGradeSubject(subject) {
    let result = (subject === "Histoire") || (subject === "Anglais") || (subject === "Physique") || (subject === "Français") || (subject === "Mathématiques");
    return result;
}

// email validation
export function isValidMail(mail) {
    console.log(mail)
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(EMAIL_REGEX.test(mail))
    return EMAIL_REGEX.test(mail);
}
