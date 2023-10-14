import React from 'react'

const CardList = ({ person: { name, height } }) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default CardList
