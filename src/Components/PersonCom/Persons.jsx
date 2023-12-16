import React from 'react'
import persons from '../../data/person'
import Person from './Person'
import "./Person.css"

function Persons() {
  return (
    <div className='wrapper'>
        {
            persons.map((data) => {
                return <Person key={data.id} {...data} />
            })
        }
    </div>
  )
}

export default Persons