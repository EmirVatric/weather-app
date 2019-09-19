const Weather = (cityName, temperature, description, humidity, day1, day2, day3) => ({
  cityName, temperature, description, humidity, day1, day2, day3,
});

const findDate = (res) => {
  const timer = (time) => {
    const dateTime = res.list[0].dt_txt.split(' ')[0].split('-');
    let dayTime = Number(res.list[0].dt_txt.split(' ')[0].split('-')[2]);
    dayTime += time;
    dateTime[2] = dayTime;
    const result = `${dateTime.join('-')} 12:00:00`;

    return result;
  };
  const date1 = timer(0);
  const date2 = timer(1);
  const date3 = timer(2);

  return { date1, date2, date3 };
};


const weatherManager = () => {
  const locationWeatherMetric = (cityName) => fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=16dc6a67eac29ace6ded1c478775351b`)
    .then((response) => response.json())
    .then((res) => {
      const dates = findDate(res);
      let day1;
      let day2;
      let day3;
      res.list.map((x) => {
        if (x.dt_txt === dates.date1) {
          day1 = x.main.temp;
        } if (x.dt_txt === dates.date2) {
          day2 = x.main.temp;
        } if (x.dt_txt === dates.date3) {
          day3 = x.main.temp;
        }
      });
      const location = Weather(cityName, res.list[0].main.temp, res.list[0].weather[0].description,
        res.list[0].main.humidity, day1, day2, day3);
      return location;
    })
    .catch(() => 'error');

  const locationWeatherImperial = (cityName) => fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&APPID=16dc6a67eac29ace6ded1c478775351b`)
    .then((response) => response.json())
    .then((res) => {
      const dates = findDate(res);
      let day1;
      let day2;
      let day3;
      res.list.map((x) => {
        if (x.dt_txt === dates.date1) {
          day1 = x.main.temp;
        } if (x.dt_txt === dates.date2) {
          day2 = x.main.temp;
        } if (x.dt_txt === dates.date3) {
          day3 = x.main.temp;
        }
        return day1;
      });
      const location = Weather(cityName, res.list[0].main.temp, res.list[0].weather[0].description,
        res.list[0].main.humidity, day1, day2, day3);
      return location;
    })
    .catch(() => 'error');


  return {
    locationWeatherMetric,
    locationWeatherImperial,
  };
};

export default weatherManager;
