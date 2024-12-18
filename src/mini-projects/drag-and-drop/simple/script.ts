// get all the draggable elements and containers
const draggables = document.querySelectorAll('.draggable') as NodeListOf<HTMLElement>;

// need to know where we can drop the draggable elements
const containers = document.querySelectorAll('.container') as NodeListOf<HTMLElement>;

// add event listeners to draggable elements
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    console.log('drag start');
    //add opacity to selected draggable element
    draggable.classList.add('dragging');
  })

  draggable.addEventListener('dragend', () => {
    console.log('drag end');
    //remove opacity to selected draggable element
    draggable.classList.remove('dragging');
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', (e: DragEvent) => {
    // prevent default to not show "do not allow" icon on cursor
    e.preventDefault();
    // get the element that is currently being hovered over
    const afterElement = getDragAfterElement(container, e.clientY);
    console.log(afterElement);

    //get current draggable element
    const draggable = document.querySelector('.dragging') as HTMLElement | null;
    if (draggable) {
      if (afterElement) {
        // if there is an element being hovered over, insert the draggable element before that element
        container.insertBefore(draggable, afterElement);
      } else {
        // if there is no element being hovered over, append the draggable element to bottom of the list element in the container
        container.appendChild(draggable);
      }
    }
  })
})

interface Closest {
  offset: number;
  element: Element | null;
}

function getDragAfterElement(container: Element, y: number) {
  // get all the draggable elements that are not being dragged
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce<Closest>((closest, child) => {
    const box = child.getBoundingClientRect();
    // console.log(box.top);    // Distance from the top of the viewport
    // console.log(box.left);   // Distance from the left of the viewport
    // console.log(box.width);  // Widht of the element
    // console.log(box.height); // Height of the element

    // get the distance from center of our box and our actual mouse position
    const offset = y - box.top - box.height / 2;

    // if the offset is less than 0 and greater than the closest offset
    // if offset is positive that means that we're no longer hovering over the element
    // and we are now below that element
    // Check if the current child is closer than the previous closest
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      // if the offset is not less than 0 and greater than the closest offset
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
} 
