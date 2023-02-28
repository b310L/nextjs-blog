import { parseISO, format,formatDistance } from 'date-fns';

export default function DateComponent({ dateString }) {
  const date = parseISO(dateString);

  const howDayAgo =formatDistance( date, new Date(), { addSuffix: true })
console.log(howDayAgo)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')} {howDayAgo}</time>;
}