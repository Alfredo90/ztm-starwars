import React from 'react'

const CardList = ({ person: { name, height, hair_color, eye_color, gender } }) => {
    return (
        <div className='border-2 border-black rounded-sm w-48 h-44'>
            <p>Name: {name}</p>
            <p>Height: {height}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Gender: {gender}</p>


        </div>
    )
}

export default CardList
