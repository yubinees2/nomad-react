class DateUtil {
    curDate: Date;

    constructor() {
        this.curDate = new Date();
        return this;
    }

    static today() {
        const curDate = new Date();
        const year = curDate.getFullYear();
        const month = (curDate.getMonth() + 1).toString().padStart(2, "0");
        const day = curDate.getDate().toString().padStart(2, "0");
        return year+month+day
    }

    static yesterday() {
        const yesterday = new Date(Date.now() - 86400000); 
        const year = yesterday.getFullYear();
        const month = (yesterday.getMonth() + 1).toString().padStart(2, "0");
        const day = yesterday.getDate().toString().padStart(2, "0");
        return year+month+day
    }

}

export default DateUtil;