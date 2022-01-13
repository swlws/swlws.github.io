import dayjs from "dayjs";

export function c_time() {
  return dayjs().format("HH:mm:ss");
}
export function c_date() {
  return dayjs().format("YYYY-MM-DD");
}
export function c_datetime() {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
}
