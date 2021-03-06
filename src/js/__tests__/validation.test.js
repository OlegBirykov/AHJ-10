import validatePosition from '../tools/validation';

test.each([
  ['  ', 'Поле должно быть заполнено'],
  [' 1234567  ', 'Нет запятой'],
  [' 123, 45, 67  ', 'Слишком много запятых'],
  [' 545-, 322t ', 'Неправильный формат широты'],
  [' 545, 322t ', 'Неправильный формат долготы'],
  [' 5483, 322 ', 'Широта должна быть в диапазоне от -90 до 90'],
  [' 54.83, 322 ', 'Долгота должна быть в диапазоне от -180 до 180'],

])(('При несоответствии формата должно генерироваться исключение'), (position, error) => {
  expect(() => validatePosition(position)).toThrow(error);
});

test.each([
  ['51.50851, -0.12572'],
  ['51.50851,-0.12572'],
  ['[51.50851, -0.12572]'],
  ['  [ 51.50851, -0.12572  ]  '],

])(('При соответствии формата должен возвращаться объект координат'), (position) => {
  const { coords } = validatePosition(position);
  expect(coords.latitude).toBe(51.50851);
  expect(coords.longitude).toBe(-0.12572);
});
