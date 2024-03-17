import React from 'react'
import PropTypes from 'prop-types'
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking'
import WantToCook from '../WantToCook/WantToCook'
WantToCook

const RecipesSidebar = props => {
  return (
    <div className='flex flex-col flex-1 border border-neutral-400 rounded-3xl'>
      <WantToCook/>
      <CurrentlyCooking/>
    </div>
  )
}

RecipesSidebar.propTypes = {}

export default RecipesSidebar