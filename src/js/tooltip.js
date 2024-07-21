export class Tooltip {
    constructor() {
        this._tooltips = [];
    }

    showTooltip(title, message, element) {
        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');

        const titleElement = document.createElement('div');
        titleElement.classList.add('tooltip-title');
        titleElement.textContent = title;

        const messageElement = document.createElement('div');
        messageElement.classList.add('tooltip-message');
        messageElement.textContent = message;

        tooltipElement.appendChild(titleElement);
        tooltipElement.appendChild(messageElement);

        const rect = element.getBoundingClientRect();
        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
        tooltipElement.style.top = `${rect.top + window.scrollY - 10}px`;

        document.body.appendChild(tooltipElement);
        const tooltipRect = tooltipElement.getBoundingClientRect();
        tooltipElement.style.left = `${rect.left + window.scrollX + (rect.width - tooltipRect.width) / 2}px`;
        tooltipElement.style.top = `${rect.top + window.scrollY - tooltipRect.height - 10}px`;

        const id = performance.now();
        this._tooltips.push({
            id,
            element: tooltipElement
        });
        document.body.appendChild(tooltipElement);
        return id;
    }

    removeTooltip(id) {
        const tooltip = this._tooltips.find(t => t.id === id);
        if (tooltip) {
            tooltip.element.remove();
            this._tooltips = this._tooltips.filter(t => t.id !== id);
        }
    }
}
