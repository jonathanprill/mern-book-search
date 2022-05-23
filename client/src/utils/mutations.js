import { gql } from '@apollo/client';

// Login In
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
            user {
              _id
              username
              email
              bookCount
              savedBooks {
                bookId
                title
                description
                authors
                link
                image
              }
         }
    }
  }
`;

// Sign Up
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            description
            authors
            image
            link
        }
    }
    }
  }
`;

// Save a Book
export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInputType!) {
    saveBook(book: $book) {
      username
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
      }
    }
  }
`;

// Remove a Book
export const REMOVE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
    }
  }
`;