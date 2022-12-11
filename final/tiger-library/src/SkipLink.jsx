import "./SkipLink.css"

function SkipLink(){
    return(
        <a 
            href="#main"
            className="skiplink"
            aria-label="click to this page content"
        >
            Skip to content
        </a>
    );

}

export default SkipLink;