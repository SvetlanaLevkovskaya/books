# Books app - Search and Display Books Using Google Books API

The "Books" project is a web application developed using modern technologies and tools to help you easily find and explore books.

## Functionality Overview

The navigation bar comprises three key features: "Book Search," "Category Filtering," and "Sorting."

### Book Search
On the nav-bar of the application, you'll find a text input field for entering your query and a search button. 

### Category Filtering
There is a dropdown select box with categories, including "all", "art", "biography", "computers", "history", "medical", "poetry,".

### Sorting
Adjacent to the category select box, there is another select box for sorting options, including "relevance" (the default) and "newest."

### Displaying Found Books
Found books are displayed as cards, each containing the book cover image, title, category name, and author names. 

### Count of Found Books
Above the book cards, the number of books found for the query is displayed.

### Pagination
Pagination is implemented using the "load more" approach. Below the book card block, there is a "Load more" button. Clicking this button loads an additional 30 books to the ones already displayed.

### Book Detail Page
Clicking on a book card takes you to the book's detail page, where all available data about the book is presented, including the cover image, title, all categories, all authors, and a description.

## Technology Stack
 - React
 - Redux Toolkit
 - Webpack
 - ESLint
 - SCSS


## Installation and Running
 1 - Clone the repository to your local machine.

 2 - Install dependencies by running npm install.

 3 - Start the application with npm start.
