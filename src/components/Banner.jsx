
function Banner({src, children}) {
    return(
        <div className="banner-container">
            <figure>
                <img className="banner-photo" src={src} alt="littoral breton"></img>
                {children}
            </figure>

        </div>
    )
}

export default Banner;