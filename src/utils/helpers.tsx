import {
  differenceInDays,
  differenceInMonths,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

function getRemaningDateTime() {
  const today = new Date();
  const timezone = today.toLocaleTimeString('en-US', { timeZoneName: 'short' })
  return {
    date: {
      date: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
    },
    time: {
      hour: today.getHours(),
      minute: today.getMinutes(),
      second: today.getSeconds(),
    },
  };
}

export { getRemaningDateTime };
