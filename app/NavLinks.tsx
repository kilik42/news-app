import React from 'react'
import { categories } from '../constants'
import NavLink from './NavLink'
const NavLinks = () => {
  return (
    <nav>
      {/* map function that runs through all the diff links */}
        {categories.map((category) => (
            <NavLink key={category} category={category}  isActive={true}/>

            
        ))}
    </nav>
  )
}

export default NavLinks
