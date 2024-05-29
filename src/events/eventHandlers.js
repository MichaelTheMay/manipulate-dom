import { isCaptureModeActive } from '../ui/toggleButton';
import { addElementDetail } from '../utils/domUtils';
import { addElementRow } from '../ui/elementTable';


export function initializeEventHandlers() {
  initializeElementSelection();
}
export function initializeElementSelection() {
  document.addEventListener('click', handleDocumentClick, true);
}


function handleDocumentClick(event) {
  if (!isCaptureModeActive()) return;
  if (event.target.closest('#dropdownPopup') || event.target.closest('#toggleButton')) return;

  processElementSelection(event);
}

function processElementSelection(event) {
  const target = event.target;
  const tagName = target.tagName.toLowerCase();
  const input = createInlineInput(target, tagName);

  addInputEventListeners(input, target);

  event.stopPropagation();
  event.preventDefault();
}

function createInlineInput(target, tagName) {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = tagName;
  input.setAttribute('aria-label', `Name for ${tagName}`);
  input.classList.add('inline-input');
  positionInlineInput(input, target);
  document.body.appendChild(input);
  input.focus();
  return input;
}

function positionInlineInput(input, target) {
  const rect = target.getBoundingClientRect();
  input.style.position = 'absolute';
  input.style.top = `${rect.top + window.scrollY}px`;
  input.style.left = `${rect.left + window.scrollX}px`;
  input.style.zIndex = '10002';
}

function addInputEventListeners(input, target) {
  let shouldRemove = false;

  input.addEventListener('blur', () => {
    shouldRemove = true;
    setTimeout(() => saveElementName(input, target, shouldRemove), 0);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      shouldRemove = false; // Cancel removal on Enter
      saveElementName(input, target, shouldRemove);
    }
  });
}

function saveElementName(input, target, shouldRemove) {
  const elementName = input.value.trim();
  if (shouldRemove && document.body.contains(input)) {
    removeInputElement(input);
  }

  if (elementName) {
    try {
      const elementDetails = addElementDetail(target, elementName);
      if (elementDetails) {
        const elementTable = document.getElementById('elementTable');
        addElementRow(elementDetails, elementTable, target);
        showTemporaryMessage(`Element "${elementName}" added successfully!`, 'success');
      } else {
        showTemporaryMessage('Element is already added.', 'warning');
      }
    } catch (error) {
      showTemporaryMessage(`Error adding element: ${error.message}`, 'error');
    }
  }
}

function removeInputElement(input) {
  if (document.body.contains(input)) {
    document.body.removeChild(input);
  }
}

function showTemporaryMessage(message, type) {
  const messageBox = document.createElement('div');
  messageBox.textContent = message;
  messageBox.classList.add('temporary-message', type);
  document.body.appendChild(messageBox);

  setTimeout(() => {
    if (document.body.contains(messageBox)) {
      document.body.removeChild(messageBox);
    }
  }, 3000);
}
