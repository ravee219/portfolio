import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Social from './pages/Social'
import Connect from './pages/Connect'

function App() {
  const [theme, setTheme] = useState('light')
  function themeHandler(){
    if(theme == 'light'){
      setTheme('dark');
      localStorage.setItem('theme', 'dark')
    }
    else{
      setTheme('light');
      localStorage.setItem('theme', 'light')
    }

  }
useEffect(()=>{
  document.body.style.backgroundColor = theme == 'dark' ? '#333': 'white'
  document.body.style.color = theme == 'dark' ? '#eee': 'black'
  
}, [theme])

  return (
    <>
    <nav className='navbar'>
      <div className='nav-links'>
      <Link to='/' className={theme == 'light' ? 'nav-link' : 'navlink-dark'}>Home</Link>
      <Link to='/movies' className={theme == 'light' ? 'nav-link' : 'navlink-dark'}>Movies</Link>
      <Link to='/social' className={theme == 'light' ? 'nav-link' : 'navlink-dark'}>Social Links</Link>
      <Link to='/connect' className={theme == 'light' ? 'nav-link' : 'navlink-dark'}>Lets Talk</Link>
      </div>
      <button className={theme == 'light' ? 'theme':'theme-dark'} onClick={themeHandler}>{theme == 'light' ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"/>
</svg> }</button>
    </nav>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/movies' element={<Movies /> } />
      <Route path='/social' element={<Social /> } />
      <Route path='/connect' element={<Connect /> } />
    </Routes>
    </>
  )
}

export default App
