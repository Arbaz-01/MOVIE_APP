import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchmovies } from '../reduxx/actions';

 function Header () {
  const[search,setSearch]=useState('');
  const dispatch=useDispatch();

  const handlesearch=(e)=>{
    e.preventDefault();
    dispatch(searchmovies(search))
 };

  return (
    <header>
    <div className='inheader' >
     
    <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}   placeholder='Search for  Movie'></input>
    <button className='search' onClick={handlesearch} type='submit' >search <i className="fa fa-search"></i></button>
    <button className='loginbutton'>Log in <i className="fa fa-male"></i></button>

    
    </div>
    
    </header>
  );

}

export default Header;
