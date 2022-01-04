let isFocussed = false;

export const ruleRunner = (field, name, alertType, ...validations) => {
    return (state, canFocus) => {
        for (let validate of validations) {
            let errorMessageFunc = validate(state[field], state);
            if (errorMessageFunc) {
                if (!isFocussed) {
                    let el = document.getElementsByName(field);
                    if (el && el.length && canFocus) {
                        el[0].focus();
                        isFocussed = true;
                    }
                }
                return {
                    [field]: {
                        message: errorMessageFunc,
                        alertType: alertType
                    }
                };
            }
        };
        return null;
    };
};

export const run = (state, runners, canFocus) => {
    isFocussed = false;
    return runners.reduce((memo, runner) => {
        return Object.assign(memo, runner(state, canFocus));
    }, {});
}