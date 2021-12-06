/* getDate.js */
export default () => {

    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    // FIXME :: new Array 는 사용하지 앟는다.
    const weekList = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
    const week = weekList[now.getDay()];
    const time = now.getTime();

    const dateInfo = {
        month,
        date,
        week,
        time
    }
    return dateInfo
}