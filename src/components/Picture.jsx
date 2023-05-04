
const Picture = ({ mobile, desktop, alt }) => {
    return (
        <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <img className="w-full" src={mobile} alt={alt} />
        </picture>
    )
}
 
export { Picture }