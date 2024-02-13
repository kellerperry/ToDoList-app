import { format, isToday } from "date-fns";

export default function today(date) {
    if(isToday(date)) {
        return "Today";
    } else {
        const newDate = format(date, 'MMM d');
        return newDate;
    }
}