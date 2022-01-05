import React from 'react'

export default function SortBox({handleSort}) {
    
    return (
        <div className='sort-container'>
            <select className='sort' placeholder='Sort by Title' onChange={(event) => {handleSort(event.target.value)}}>
                <option value="Title_A-Z">Title_A-Z</option>
                <option value="Title_Z-A">Title_Z-A</option>
            </select>   
        </div>
    )
}
