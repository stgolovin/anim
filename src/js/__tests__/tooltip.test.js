import Tooltip from '../tooltip';

test('showTooltip adds tooltip to DOM', () => {
  document.body.innerHTML = '<button type="button" class="btn">Click to toggle popover</button>';
  const button = document.querySelector('.btn');
  const tooltipFactory = new Tooltip();

  tooltipFactory.showTooltip('Title', 'Text', button);

  const tooltip = document.querySelector('.tooltip');
  expect(tooltip).not.toBeNull(); // Проверяем, что элемент с классом 'tooltip' присутствует в DOM
  expect(tooltip.querySelector('.tooltip-title').textContent).toBe('Title');
  expect(tooltip.querySelector('.tooltip-message').textContent).toBe('Text');
});

test('removeTooltip removes tooltip from DOM', () => {
  document.body.innerHTML = '<button type="button" class="btn">Click to toggle popover</button>';
  const button = document.querySelector('.btn');
  const tooltipFactory = new Tooltip();

  const tooltipId = tooltipFactory.showTooltip('Title', 'Text', button);
  tooltipFactory.removeTooltip(tooltipId);

  const tooltip = document.querySelector('.tooltip');
  expect(tooltip).toBeNull(); // Проверяем, что элемент с классом 'tooltip' отсутствует в DOM
});
