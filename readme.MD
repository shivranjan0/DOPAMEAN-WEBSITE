DOPAMEAN Website Project

This repository contains the front-end code for the DOPAMEAN website. Based on the file structure, this appears to be a static e-commerce or product showcase website built with HTML, CSS, and JavaScript.

The site is structured to be responsive and uses custom fonts (Apercu and Satoshi) to create a unique brand feel.

How to View the Website

You do not need any special tools to run this project.

Make sure you have all the files and folders in the same directory.

Simply double-click on index.html to open the website's homepage in your default web browser.

File Structure Explained

Here is a complete breakdown of every file and folder in your project and its purpose:

DOPAMEAN/
│
├── .vscode/
│   └── settings.json
│       # This folder holds settings for the Visual Studio Code editor.
│       # It's not part of the website itself, but helps developers
│       # maintain consistent formatting.
│
├── assets/
│   └── (Empty or not shown)
│       # This folder should contain all your static media files,
│       # such as product images, logos, icons, and any videos.
│
├── css/
│   ├── assets.css
│   │   # This CSS file likely contains styles for small assets,
│   │   # such as CSS-based icons, background images, or other minor visuals.
│   │
│   ├── collection_page.css
│   │   # Contains all the styles that are *only* for the 'collection_page.html'.
│   │
│   ├── collection_page_responsive.css
│   │   # Contains the responsive styles (for mobile, tablet)
│   │   # specifically for the collection page.
│   │
│   ├── product_responsive.css
│   │   # Contains the responsive styles (for mobile, tablet)
│   │   # specifically for the 'products.html' page.
│   │
│   ├── products.css
│   │   # Contains all the styles that are *only* for the 'products.html' page.
│   │
│   ├── Responsive.css
│   │   # A general responsive stylesheet. This probably handles the
│   │   # header, footer, and other elements shared across all pages.
│   │
│   └── style.css
│       # This is the main, global stylesheet. It defines the site's
│       # core styles, such as fonts, colors, variables, and the
│       # layout of common elements (like the body, header, footer).
│
├── fonts/
│   ├── apercu... (multiple files)
│   ├── Satoshi... (multiple files)
│       # This folder holds all the custom font files (.woff, .woff2)
│       # that give your website its unique typography.
│
├── script/
│   └── script.js
│       # This is the main JavaScript file for the entire website.
│       # It likely handles user interactions like image sliders,
│       # a mobile navigation menu, "Add to Cart" buttons, or pop-ups.
│
├── collection_page.html
│   # The HTML file for showing a specific collection of products
│   # (e.g., "Summer Collection").
│
├── index.html
│   # This is the main homepage of your website. It's the first page
│   # users see.
│
├── products.html
│   # This HTML file is likely the main "shop" page, showing a
│   # list or grid of all available products.
│
└── readme.MD
    # This file! Its purpose is to explain what the project is
    # and how to use it.


Technologies Used

HTML5: The markup language for the website's structure.

CSS3: Used for all styling, layout, and responsive design.

JavaScript: Used for user interactivity and dynamic content.