# DOM Element Wizard

## Description

DOM Element Wizard is a JavaScript project built with Webpack and Node.js, utilizing SCSS for styling. This project allows users to save DOM elements and interact with them. While the project is currently a work-in-progress (WIP), future iterations will enable exporting and editing the saved elements. For now, users can clone the repository, build the project, and use the bundled script to interact with DOM elements in their browser.

NOTE: This is in very early stage development and is not yet a finished product

## Features

- Save DOM elements
- Interact with saved DOM elements
- WIP: Export and edit saved elements (coming soon)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**

    ```bash
    git clone https://github.com/MichaelTheMay/manipulate-dom.git
    cd manipulate-dom
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Build the project**

    ```bash
    npm run build
    ```

4. **Use the script in your browser**

    Copy the `bundle.js` file located in the `dist` folder and paste it into the DevTools console of your browser to interact with the DOM elements.

## Usage

1. Open your browser's DevTools (usually F12 or right-click and select "Inspect").
2. Navigate to the Console tab.
3. Copy the contents of the `bundle.js` file from the `dist` folder.
4. Paste the copied script into the Console and press Enter.

You should now be able to save and interact with DOM elements on the current web page.

## Development

To contribute to the project or modify it for your own needs:

1. Follow the installation steps above.
2. Make changes to the source code in the `src` folder.
3. Rebuild the project with `npm run build`.

## Future Plans

- Enable exporting saved DOM elements to a file.
- Allow editing of saved DOM elements.
- Improve the user interface and user experience.
- Publish on tampermonkey

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Webpack](https://webpack.js.org/)
- [Node.js](https://nodejs.org/)
- [SCSS](https://sass-lang.com/)
