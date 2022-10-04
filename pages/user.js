import React from 'react';

const user = ({users}) => {
    console.log(users);
    return (
        <div>
            <h1>User Data</h1>
        </div>
    );
};

export default user;

// External Data Fating 
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data);

    return {
        props: {
            users: data,
        }
    }
}