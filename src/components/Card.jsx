
function Card({src, alt, children}) {
    return(
            <>
                <article>
                    <figure>
                    <img src={src} alt={alt} />
                    {children}
                    </figure>
                </article>
            </>

    )
}

export default Card;