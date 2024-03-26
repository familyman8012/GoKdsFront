import {useCallback, useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';

function useTimer(data: any) {
  const tick = useRef<NodeJS.Timer>();
  const [showTime, setShowTime] = useState('');
  const [time, setTime] = useState(0);
  const [load, setLoad] = useState(true);
  const [bell, setBell] = useState(false);

  const passedTime = useCallback((orderTime: string) => {
    // 숫자를 시간으로 표현
    const startTime = dayjs(orderTime);
    var endTime = dayjs();

    // calculate total duration
    var duration = dayjs.duration(endTime.diff(startTime));
    // duration in hours
    var hours = Math.floor(duration.asHours());
    // duration in minutes
    var minutes = Math.floor(duration.asMinutes()) % 60;
    // duration in seconds
    var seconds = Math.floor(duration.asSeconds()) % 60;

    setShowTime(
      hours
        ? `${hours} :` +
            `${minutes > 9 ? minutes : '0' + minutes} : ${
              seconds > 9 ? seconds : '0' + seconds
            }`
        : `${minutes > 9 ? minutes : '0' + minutes} : ${
            seconds > 9 ? seconds : '0' + seconds
          }`,
    );
    return {hours, minutes, seconds};
  }, []);

  useEffect(() => {
    if (load) {
      const bellTime = passedTime(data.ordered_at);
      // if (50 > dellTime.minutes && 50 > dellTime.seconds) {
      //   setBell(true);
      // }
      if (1 > bellTime.hours && 1 > bellTime.minutes && 20 > bellTime.seconds) {
        setBell(true);
      }
      setTime(time => time + 1);
      setLoad(false);
    }

    if (10000 > time && !load) {
      if (time > 5 && bell) {
        setBell(false);
      }
      tick.current = setTimeout(() => {
        passedTime(data.ordered_at);
        setTime(time => time + 1);
      }, 1000);
    }

    return () => clearTimeout(tick.current);
  }, [data.ordered_at, time, load]);

  return {showTime, bell};
}

export default useTimer;
