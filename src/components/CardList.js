import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
 return !robots.length ? 
    <h1>Robot Not Found</h1> : 
    ( <div > {
            robots.map((user, i) => {
                return <Card key = {
                    i
                }
                id = {
                    robots[i].id
                }
                name = {
                    robots[i].name
                }
                email = {
                    robots[i].email
                }
                />
            })
        } </div>
    );
}

export default CardList;
