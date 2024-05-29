const selectedElements = [];
const elementDetails = [];

export function addElementDetail(target, elementName) {
  if (isElementAlreadySelected(target)) {
    return null; // Return null if the element is already selected
  }

  const descendantsCount = target.getElementsByTagName('*').length;
  const depth = getDepth(target);
  const dimensions = `${target.offsetWidth}px x ${target.offsetHeight}px`;

  selectedElements.push(target);
  const details = {
    name: elementName,
    type: target.tagName.toLowerCase(),
    descendants: descendantsCount,
    depth: depth,
    dimensions: dimensions,
    outerHTML: target.outerHTML
  };
  elementDetails.push(details);

  return details; // Return the element details if added successfully
}

function getDepth(element) {
  let depth = 0;
  while (element.parentElement) {
    depth++;
    element = element.parentElement;
  }
  return depth;
}

function isElementAlreadySelected(element) {
  return selectedElements.includes(element);
}

export function highlightElement(element) {
  clearHighlights();
  element.classList.add('highlight');
}

function clearHighlights() {
  selectedElements.forEach(el => el.classList.remove('highlight'));
}
