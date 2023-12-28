import { useEffect, useState } from 'react'
function Connect(){
    const [theme, setTheme] = useState(() =>{
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    })
    return(
        <>
        <div className="home-container">
       
            <h2>Have a Movie or an Idea? Let's Connect Over a Zoom Call!</h2>
            <p>Joseph Vijay Chandrasekhar (born 22 June 1974), known professionally as Vijay, is an Indian actor and singer who works mainly in Tamil cinema.</p>
            <ul>
                <li>Mention your idea | requirement</li>
                <li>Keep the content crisp</li>
                <li>What help you need from me</li>
                <li>Do you have any budget</li>
                <li>Any thing else I should know before we connect</li>
            </ul>
            <div className="connect-flex"> 
                <a href="" className={theme == 'light' ? 'connect-light' : 'connect-dark'}>Book a Live.</a>
            </div>
        </div>
        </>
    )
}

export default Connect;