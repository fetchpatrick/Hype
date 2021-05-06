import {gql} from '@apollo/client';

export const LOAD_REVIEWS = gql`
    query MyQuery {
        reviews {
                id
                name
        }
    }
`