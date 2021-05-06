import React from 'react'
import { useQuery, gql} from '@apollo/client'

const GET_BUSINESSES = gql`{
    query getbusinesses{
        businesses {
            id
        }
    }
}`;
    

export default function BusinessInfoCard() {
    const { loading, error, data} = useQuery(GET_BUSINESSES)

    if(loading) return <p>Loading...</p>
    if (error) return `Error! ${error.message}`;
    
    return data.businesses.map(({id, name}) => (
        <div style={{ width:'100%', height:'100px', backgroundColor:'rgba(196, 196, 196, 0.3)', borderRadius:'5px'}}>
            <p style={{ fontFamily: 'Montserrat', fontweight:'600'}}>Review</p>
            <p>Review</p>
        </div> 
    ))
}


