import './styles/main.scss'; // Import the main SCSS file

import { createDropdown } from './ui/dropdown';
import { createToggleButton } from './ui/toggleButton';
import { createElementTable } from './ui/elementTable';
import { initializeEventHandlers } from './events/eventHandlers';

function initializeApp() {
  // Create a container for the content that will be blurred
  const contentContainer = document.createElement('div');
  contentContainer.id = 'contentContainer';
  contentContainer.classList.add('content-container');

  // Collect all existing children of the body
  const existingContent = Array.from(document.body.children);

  // Append the contentContainer to the body
  document.body.appendChild(contentContainer);

  // Move existing children into the contentContainer, excluding the contentContainer itself
  existingContent.forEach(child => {
    if (child !== contentContainer) {
      contentContainer.appendChild(child);
    }
  });

  // Create and append the toggle button and dropdown components
  createToggleButton();
  createDropdown();

  // Create and append the element table
  document.getElementById('dropdownContent').appendChild(elementTable);

  // Initialize event handlers and element selection
  initializeEventHandlers();
}

initializeApp();
