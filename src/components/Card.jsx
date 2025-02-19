
function Card({src, alt, children, onClick}) {
    return(
            <>
                <article className="card-wrapper" onClick={onClick}> 
                    <figure className="card">
                    <img src={src} alt={alt} className="card-image"/>
                    {children}
                    </figure>
                </article>
            </>

    )
}

export default Card;