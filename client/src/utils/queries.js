// This file will store all of the GraphQL query requests.
import { gql } from '@apollo/client';

// retrieve all data related to the logged-in user
export const GET_ME = gql`
    { 
        me {
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