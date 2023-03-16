
// import { memo } from 'react';

 const MilisecondConverterToMinAndSec = ({millis}) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  
}

// const MilisecondConverterToMinAndSec2 =({millis}) =>{
//     let year,
//         month,
//         day,
//         hour,
//         minute,
//         second;
  
//     second = Math.floor(t / 1000);
//     minute = Math.floor(second / 60);
//     second = second % 60;
//     hour = Math.floor(minute / 60);
//     minute = minute % 60;
//     day = Math.floor(hour / 24);
//     hour = hour % 24;
//     month = Math.floor(day / 30);
//     day = day % 30;
//     year = Math.floor(month / 12);
//     month = month % 12;
  
//     return `${year} ${month} ${day} ${hour} ${minute} ${second}`  ;
//   }
export default MilisecondConverterToMinAndSec;
// export default memo(MilisecondConverterToMinAndSec);

