const helpers = {
    getDate: () => {
        let today = new Date();
        let dd = today.getDate();

        let mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        if (dd < 10) {
            dd = `0${dd}`;
        }

        if (mm < 10) {
            mm = `0${mm}`;
        }
        today = `${yyyy}-${mm}-${dd}`;
        return today;
    },

    getTime: () => {
        let today = new Date();
        const hr = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
        const min = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
        const sec = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

        today = `${hr}:${min}:${sec}`;
        return today;
    },
};

export { helpers };