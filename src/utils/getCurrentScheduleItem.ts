import moment from 'moment-mini';

export const getCurrentScheduleItem = (items: any) => {
  if (!items) return;
  const currentTime = new Date();
  const currentScheduleItem = [...items]
    .sort((a: any, b: any) => moment(a.start).diff(moment(b.start)))
    .find((item: any) => moment(currentTime).isBetween(item.start, item.end));
  return currentScheduleItem;
};
