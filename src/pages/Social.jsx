import { useEffect, useState } from 'react'
function Social(){
    const [theme, setTheme] = useState(() =>{
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    })
    return(
        <>
        <div className="home-container">
            <h2>Connect With Me On Social Media</h2>
            <p>Joseph Vijay Chandrasekhar (born 22 June 1974), known professionally as Vijay, is an Indian actor and singer who works mainly in Tamil cinema.</p>
            <div className="connect-flex"> 
                <a href="https://www.instagram.com/actorvijay/?hl=en" target="_blank" className={theme == 'light' ? 'connect-light' : 'connect-dark'}>Instagram</a>
                <a href="https://twitter.com/actorvijay?lang=en" target="_blank" className={theme == 'light' ? 'connect-light' : 'connect-dark'}>Twitter</a>
                <a href="https://in.pinterest.com/wwwabishekwolves/vijay/" target="_blank" className={theme == 'light' ? 'connect-light' : 'connect-dark'}>Pinterest</a>
            </div>
        </div>
        </>
    )
}

export default Social;