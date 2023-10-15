import React from 'react'

const CardList = ({ person: { name, height } }) => {
    return (
        <div className=' border-2 border-black rounded-sm w-24 h-24   '>
            <p>{name}</p>
        </div>
    )
}

export default CardList
