const domManager = (data) => {
  const input = document.getElementById('cityInput');
  const errMsg = document.getElementById('errMsg');
  const date = document.getElementById('date');
  const locationName = document.getElementById('locationName');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const day1name = document.getElementById('day1name');
  const day1temp = document.getElementById('day1temp');
  const day2name = document.getElementById('day2name');
  const day2temp = document.getElementById('day2temp');
  const day3name = document.getElementById('day3name');
  const day3temp = document.getElementById('day3temp');
  const selector = document.getElementById('selector');
  const infoContainer = document.getElementById('infoContainer');


  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const dateFormatter = (index) => {
    const currentDatetime = new Date();
    const formattedDate = `${currentDatetime.getDate()} ${monthNames[(currentDatetime.getMonth())].toUpperCase()} ${currentDatetime.getFullYear()}`;
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const indexWeek = currentDatetime.getDay() + index;
    let day;
    if (indexWeek <= 6) {
      day = weekdays[indexWeek];
    } else {
      day = weekdays[indexWeek - weekdays.length];
    }

    return { formattedDate, day };
  };
  date.innerHTML = dateFormatter().formattedDate;


  const renderMetric = (response) => {
    locationName.innerText = response.cityName.toUpperCase();
    if (response.description === 'Rain') {
      infoContainer.classList = 'rain';
    } else if (response.description === 'Clear') {
      infoContainer.classList = 'clear';
    } else {
      infoContainer.classList = 'clouds';
    }
    temperature.innerText = `${response.temperature}C°`;
    description.innerText = response.description;
    day1name.innerText = dateFormatter(1).day;
    day1temp.innerText = `${response.day1}C°`;
    day2name.innerText = dateFormatter(2).day;
    day2temp.innerText = `${response.day2}C°`;
    day3name.innerText = dateFormatter(3).day;
    day3temp.innerText = `${response.day3}C°`;
  };

  const renderImperial = (response) => {
    locationName.innerText = response.cityName.toUpperCase();
    temperature.innerText = `${response.temperature}F`;
    description.innerText = response.description;
    day1name.innerText = dateFormatter(1).day;
    day1temp.innerText = `${response.day1}F`;
    day2name.innerText = dateFormatter(2).day;
    day2temp.innerText = `${response.day2}F`;
    day3name.innerText = dateFormatter(3).day;
    day3temp.innerText = `${response.day3}F`;
  };

  selector.addEventListener('change', (event) => {
    const value = locationName.innerText;
    if (!event.target.checked) {
      data.locationWeatherMetric(value).then((response) => {
        if (response === 'error') {
          errMsg.style.display = 'flex';
        } else {
          renderMetric(response);
        }
      });
    } else {
      data.locationWeatherImperial(value).then((response) => {
        if (response === 'error') {
          errMsg.style.display = 'flex';
        } else {
          renderImperial(response);
        }
      });
    }
  });

  input.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (errMsg.style.display === 'flex') {
      errMsg.style.display = 'none';
    }
    if (key === 13) {
      const { value } = input;
      input.value = '';
      if (!selector.checked) {
        data.locationWeatherMetric(value).then((response) => {
          if (response === 'error') {
            errMsg.style.display = 'flex';
          } else {
            renderMetric(response);
          }
        });
      } else {
        data.locationWeatherImperial(value).then((response) => {
          if (response === 'error') {
            errMsg.style.display = 'flex';
          } else {
            renderImperial(response);
          }
        });
      }
    }
  });

  return {
    renderMetric,

  };
};

export default domManager;
