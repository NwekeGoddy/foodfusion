import React from 'react';
import classes from './meals.module.scss';
import SearchBar from '@/components/mealsPage/SearchBar';


function index() {
  return (
    <div className={classes.meals__page}>
      <SearchBar/>
    </div>
  )
}

export default index
