import dayjs from "dayjs";

export const getCurrentTimeString = () => {
  return dayjs().format("h:mm A");
};
