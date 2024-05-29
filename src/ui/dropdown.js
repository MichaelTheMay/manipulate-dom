/**
 * This module provides functions to create and manage the dropdown for displaying saved elements.
 * 
 * DOM Components:
 * - Dropdown Popup: `<div id="dropdownPopup" class="dropdown-popup hidden">`
 * - Dropdown Button: `<button id="dropdownButton" class="dropdown-button">`
 * - Dropdown Content: `<div id="dropdownContent" class="dropdown-content">`
 * - Element Table: `<table id="elementTable" class="element-table">`
 * - Table Headers: `<th class="element-table-header">`
 * - Close Button: `<button id="closePopupButton" class="close-popup-button">`
 * 
 * Selectors:
 * - Popup: `#dropdownPopup` or `.dropdown-popup`
 * - Button: `#dropdownButton` or `.dropdown-button`
 * - Content: `#dropdownContent` or `.dropdown-content`
 * - Table: `#elementTable` or `.element-table`
 * - Headers: `.element-table-header`
 * - Close Button: `#closePopupButton` or `.close-popup-button`
 */

export function createDropdown() {
  const dropdownPopup = document.createElement('div');
  dropdownPopup.id = 'dropdownPopup';
  dropdownPopup.classList.add('dropdown-popup', 'hidden'); // Hidden by default

  const closePopupButton = document.createElement('button');
  closePopupButton.id = 'closePopupButton';
  closePopupButton.textContent = 'X';
  closePopupButton.classList.add('close-popup-button');
  closePopupButton.addEventListener('click', hideDropdown);

  const dropdownButton = document.createElement('button');
  dropdownButton.id = 'dropdownButton';
  dropdownButton.textContent = 'Show Saved Elements';
  dropdownButton.classList.add('dropdown-button');

  const dropdownContent = document.createElement('div');
  dropdownContent.id = 'dropdownContent';
  dropdownContent.classList.add('dropdown-content');

  const elementTable = document.createElement('table');
  elementTable.id = 'elementTable';
  elementTable.classList.add('element-table');

  const headerRow = document.createElement('tr');
  const headers = ['Name', 'Element Type', 'Descendants', 'Depth', 'Dimensions'];
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.classList.add('element-table-header');
    headerRow.appendChild(th);
  });
  elementTable.appendChild(headerRow);

  dropdownContent.appendChild(elementTable);
  dropdownPopup.appendChild(closePopupButton);
  dropdownPopup.appendChild(dropdownContent);
  document.body.appendChild(dropdownPopup);

  dropdownButton.addEventListener('click', () => toggleDropdown(dropdownButton, dropdownContent));
}

function toggleDropdown(button, content) {
  const isHidden = content.style.display === 'none' || content.style.display === '';
  content.style.display = isHidden ? 'block' : 'none';
  button.textContent = isHidden ? 'Hide Saved Elements' : 'Show Saved Elements';
}

export function showDropdown() {
  const dropdownPopup = document.getElementById('dropdownPopup');
  if (dropdownPopup) {
    dropdownPopup.classList.remove('hidden');
    dropdownPopup.classList.add('visible');
    document.getElementById('contentContainer').classList.add('blurred-content');
  }
}

export function hideDropdown() {
  const dropdownPopup = document.getElementById('dropdownPopup');
  if (dropdownPopup) {
    dropdownPopup.classList.remove('visible');
    dropdownPopup.classList.add('hidden');
    document.getElementById('contentContainer').classList.remove('blurred-content');
  }
}
