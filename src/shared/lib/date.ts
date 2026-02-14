import dayjs from "dayjs";

export const getDateFormat = (date: Date) => {
  return dayjs(date).format("DD.MM.YYYY");
};
