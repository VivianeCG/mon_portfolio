
function Card({src, alt, children}) {
    return(
            <>
                <article className="card-wrapper"> 
                    <figure className="card">
                    <img src={src} alt={alt} className="card-image"/>
                    {children}
                    </figure>
                </article>
            </>

    )
}

export default Card;