import profilePic from '../assets/image/vijay1.webp';
import { useState, useEffect } from 'react'
function Home(){
    const [theme, setTheme] = useState(() =>{
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    })
 
      
    return(
        <>
        <div className="home-container">
            <img src={profilePic} className='user' alt="" />
            <h2>Hey Im Vijay</h2>
            <p>Joseph Vijay Chandrasekhar (born 22 June 1974), known professionally as Vijay, is an Indian actor and singer who works mainly in Tamil cinema.</p>
            <div className="connect-flex"> 
                <a href="" className={theme == 'light' ? 'connect-light' : 'connect-dark'}>My Resume</a>
                <a href="" className={theme == 'light' ? 'connect-light' : 'connect-dark'}>Follow Me</a>
                <a href="" className={theme == 'light' ? 'connect-light' : 'connect-dark'}>Lets Talk</a>
            </div>
        </div>
        </>
    )
}

export default Home