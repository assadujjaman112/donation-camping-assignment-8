import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Donation = () => {

    const [donation, setDonation] = useState({});
    const {id} = useParams();
    const donations = useLoaderData();

    useEffect(()=>{
        const findDonation = donations?.find(donation => donation.id === id);
        
        setDonation(findDonation);
        console.log(findDonation)

    },[id,donations])

    
    return (
        <div>
            
        </div>
    );
};

export default Donation;