export const setupHeaderResizer = (thElement: HTMLTableCellElement, triggerEl: HTMLElement) => {
    const onMouseDown = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const rect = thElement.getBoundingClientRect();

        const onMouseMove = (e: MouseEvent) => {
            const delta = e.clientX - mouseX;
            const newWidth = rect.width + delta;
            thElement.style.width = `${newWidth}px`;
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        };

        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    triggerEl.addEventListener('mousedown', onMouseDown);
    return () => triggerEl.removeEventListener('mousedown', onMouseDown);
};