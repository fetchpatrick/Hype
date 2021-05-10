import React, {useState} from 'react'


function SearchBar({runSearch}) {

    const [formData, setFormData] = useState(0)

    const handleSearch = (e) => {
		e.preventDefault();
        // console.log(formData)
		runSearch(formData);
	};

    return (
        <>
            <form onSubmit={handleSearch}>
                <input type="text" onChange={(e)=>{ setFormData(e.target.value)}}/>
                <button>Search</button>
            </form>
        </>
    )
}

export default SearchBar
