import weatherManager from './weatherManager';
import domManager from './domManager';

const data = weatherManager();
const dom = domManager(data);
data.locationWeatherMetric('sarajevo').then((response) => {
  dom.renderMetric(response);
});
