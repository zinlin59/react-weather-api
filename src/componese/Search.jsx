import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({ fetchData, data }) => {
    const [search, setSearch] = useState('')
    /* if (search !== data.name) {
         console.log("I am not fine")
     }*/
    return (
        <div className='w-100 gap-3 d-flex justify-content-center align-items-center flex-row'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='form-control  w-50' placeholder='Enter City Name...' />
            <BsSearch onClick={() => fetchData(search)} class=' fs-4 fw-bold ' />

        </div>
    )
}

export default Search