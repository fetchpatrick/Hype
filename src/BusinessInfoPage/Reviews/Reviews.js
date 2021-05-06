import React from 'react'
import {useQuery, gql} from '@apollo/client'



const GET_REVIEWS = gql`
    query getReviews{
        reviews{
            id
        }
}`;

function Reviews() {
    const { loading, error, data } = useQuery(GET_REVIEWS);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }

    return data.reviews.map((review) =>(
        console.log(review.name)
    ))
    // return (
    //     <div style={{ width:'100%', height:'100px', backgroundColor:'rgba(196, 196, 196, 0.3)', borderRadius:'5px'}}>
    //         <p style={{ fontFamily: 'Montserrat', fontweight:'600'}}>Review</p>
    //         <p>Review</p>
    //     </div> 
    // )
}

export default Reviews;
