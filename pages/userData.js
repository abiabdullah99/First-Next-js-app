import React, { useEffect, useState } from 'react';

const userData = () => {

    const [userData, setData] = useState.React([])

    useEffect.React(() => {},[
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setData(data))
    ])

    console.log(userData);
    return (
        <div>
            
        </div>
    );
};

export default userData;