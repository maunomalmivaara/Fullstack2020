import React  from 'react';

const ManyCountries = (props) => {

    const fillFilter = (name) => {
        return () => props.setNewFilter(name)
    }

    return (
        <ul>
            {props.countriesToShow.map(c =>
                <li key={c.numericCode}>
                    {c.name}
                    <button onClick={fillFilter(c.name)}>
                        show
                    </button>
                </li>)
            }
        </ul>
    )
}

export default ManyCountries