import moment from 'moment';

export function coordsToString(coords) {
  const latitude = coords.latitude.toFixed(5);
  const longitude = coords.longitude.toFixed(5);
  return `[${latitude}, ${longitude}] &#x1F441;`;
}

export function dateTimeToString(timestamp) {
  return moment(timestamp).format('DD.MM.YY HH:mm');
}
