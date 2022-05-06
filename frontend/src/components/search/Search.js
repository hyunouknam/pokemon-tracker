import React from 'react'

const Search = ({ handleSearch }) => {

  return (
    <input placeholder='Search Pokemon' onChange={handleSearch} />
  )
}

export default Search