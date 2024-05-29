/**
 * This module provides functions to create and manage the element table.
 * 
 * DOM Components:
 * - Table Container: `<table id="elementTable" class="element-table">`
 * - Table Headers: `<th class="element-table-header">`
 * - Table Rows: `<tr class="element-row">`
 * 
 * Selectors:
 * - Table: `#elementTable` or `.element-table`
 * - Headers: `.element-table-header`
 * - Rows: `.element-row`
 */

import { highlightElement } from '../utils/domUtils';

/**
 * Creates an element table with predefined headers.
 * @returns {HTMLElement} The created table element.
 */
export function createElementTable() {
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

  return elementTable;
}

/**
 * Adds a new row to the element table.
 * @param {Object} elementDetails - The details of the element.
 * @param {HTMLElement} elementTable - The table element to add the row to.
 * @param {HTMLElement} target - The target element to be highlighted on row click.
 */
export function addElementRow(elementDetails, elementTable, target) {
  if (!elementTable) return;

  const row = document.createElement('tr');
  row.classList.add('element-row');
  row.innerHTML = `
    <td>${elementDetails.name}</td>
    <td>${elementDetails.type}</td>
    <td>${elementDetails.descendants}</td>
    <td>${elementDetails.depth}</td>
    <td>${elementDetails.dimensions}</td>
  `;

  row.addEventListener('click', () => highlightElement(target));
  elementTable.appendChild(row);
}
