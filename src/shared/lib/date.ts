import dayjs from "dayjs";

export const getDateAndTimeFormat = (date: string) => {
  return dayjs(date).format("DD.MM.YYYY HH:mm");
};
