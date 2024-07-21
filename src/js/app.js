import { Tooltip } from './tooltip';

const tooltipFactory = new Tooltip();

const button = document.querySelector('.btn');

let tooltipId = null;

button.addEventListener('click', () => {
    if (tooltipId !== null) {
        tooltipFactory.removeTooltip(tooltipId);
        tooltipId = null;
    } else {
        tooltipId = tooltipFactory.showTooltip('Popover title', `And here's some amazing content. It's very engaging. Right?`, button);
    }
});
