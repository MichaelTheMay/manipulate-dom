/**
 * This module provides functions to create and manage the toggle button for capture mode.
 * 
 * DOM Components:
 * - Toggle Button: `<div id="toggleButton" class="toggle-button">`
 *   - Active State: `capture-active`
 * - View Saved Button: `<button id="viewSavedButton" class="view-saved-button">`
 * 
 * Selectors:
 * - Button: `#toggleButton` or `.toggle-button`
 * - Active State: `.capture-active`
 * - View Saved Button: `#viewSavedButton` or `.view-saved-button`
 */

let captureModeActive = false;
import { showDropdown } from "./dropdown";
/**
 * Creates the toggle button for capture mode and the view saved elements button.
 */
export function createToggleButton() {
  const togglePane = document.createElement('div');
  togglePane.id = 'togglePane';
  togglePane.classList.add('toggle-pane');

  const toggleButton = document.createElement('div');
  toggleButton.id = 'toggleButton';
  toggleButton.classList.add('toggle-button');
  toggleButton.setAttribute('title', 'Toggle Capture Mode');

  toggleButton.addEventListener('click', () => {
    captureModeActive = !captureModeActive;
    updateToggleButton(toggleButton);
  });

  const viewSavedButton = document.createElement('button');
  viewSavedButton.id = 'viewSavedButton';
  viewSavedButton.textContent = 'View Saved';
  viewSavedButton.classList.add('view-saved-button');
  viewSavedButton.addEventListener('click', showDropdown);

  togglePane.appendChild(toggleButton);
  togglePane.appendChild(viewSavedButton);
  document.body.appendChild(togglePane);
  updateToggleButton(toggleButton); // Initialize button state
}

/**
 * Updates the toggle button state based on capture mode.
 * @param {HTMLElement} button - The toggle button element.
 */
function updateToggleButton(button) {
  if (captureModeActive) {
    button.style.backgroundColor = '#28a745'; // Green when active
  } else {
    button.style.backgroundColor = '#007BFF'; // Blue when inactive
  }
}

/**
 * Checks if capture mode is active.
 * @returns {boolean} - True if capture mode is active, false otherwise.
 */
export function isCaptureModeActive() {
  return captureModeActive;
}
