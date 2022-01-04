const isNullOrEmpty = (obj) => {
    if (typeof obj !== 'undefined' && obj !== null && obj !== '' && obj.trim() !== '') {
        return null;
    } else return 'Cannot be left blank.'
}

const namePattern = (val) => {
    if (/^[a-z-\'\s]+$/i.test(val)) {
        return null;
    } else return 'Must be only letters.'
}

const emailPattern = (val) => {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(val)) {
        return null;
    } else return 'Must be a vaid email format.'
}

export const validators = {
    emailPattern,
    isNullOrEmpty,
    namePattern
}