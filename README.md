# Book List Manager

This is a simple web application that allows users to manage a list of books. Users can add new book titles, delete books from the list, and the application saves this data using the browser's `localStorage`, so the list persists between sessions.

## Features

- **Add Book**: Enter the title of a book and add it to the list.
- **Delete Book**: Remove any book from the list by clicking the "Delete" button next to it.
- **Persistent Data**: Book list is saved to `localStorage`, so even after refreshing the page, the data remains intact.

## Technologies Used

- **HTML**: Provides the structure of the web application.
- **CSS**: Adds basic styling for the user interface.
- **JavaScript**: Handles dynamic interactions such as adding, deleting, and storing books.
- **LocalStorage API**: Used for saving and retrieving the book list from the browser's storage.

## Usage
Add a Book:

Type the book title in the input field and click "Add Book".
The new book will appear in the list.
Delete a Book:

Click the "Delete" button next to a book to remove it from the list.
Persistent Data:

The book list is automatically saved in the browser's localStorage. When you refresh the page, the books you've added will still be there.

## Future Enhancements

Edit Functionality: Allow users to edit book titles.
Sorting: Add functionality to sort books alphabetically or by date added.
Mark as Read: Allow users to mark books as "read" or "unread."
