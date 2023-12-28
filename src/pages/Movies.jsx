import leo from '../assets/image/leo.webp'
import beast from '../assets/image/beast.jpg'
function Movies(){
    return(
        <>
            <div className="home-container">
                <h2>My Recent Movies</h2>
                <p>Vijay was last seen in the Tamil film 'Beast' which was released in January this year. He is now awaiting the release of his next bilingual film 'Varisu' which is set to release in theatres</p>

                <div className="movie-flex">
                    <div className="card">
                        <img src={leo} alt="" />
                        <div className="m-flex">
                        <h4>Leo</h4>
                        <div className='share-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096"/>
                        </svg></div>
                        </div>
                        <p className="desc">The film stars Vijay in the titular role, alongside Sanjay Dutt, Arjun Sarja, Trisha, Gautham Vasudev Menon, Mysskin, Madonna Sebastian, George Maryan, Mansoor </p>
                    </div>
                    <div className="card">
                        <img src={beast} alt="" />
                        <div className="m-flex">
                        <h4>Beast</h4>
                        <div className='share-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096"/>
                        </svg></div>
                        </div>
                        <p className="desc">Beast is a 2022 Indian Tamil-language action drama film written and directed by Nelson Dilipkumar. The film stars Vijay, Pooja Hegde and Selvaraghavan</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies;