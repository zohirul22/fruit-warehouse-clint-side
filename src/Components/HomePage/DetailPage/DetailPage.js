import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const { detailsId } = useParams();
    const [detailspage, setDetailsPage] = useState({})

    // useEffect(() => {
    //     const url = `Products.json/${detailsId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setDetailsPage(data))
    // }, [])

    return (
        <div>
            <h1> detailsId:{detailsId}</h1>
        </div>
    );
};

export default DetailPage;