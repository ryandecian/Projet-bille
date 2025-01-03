import { Link } from "react-router-dom"
import "./NavPC.css"

function NavPC() {

    return (
        <nav className="NavPC">
            <Link to="/billeM7" className="LinkPC">
                 Model 7
            </Link>
            <Link to="/billeM5" className="LinkPC">
                 Model 5
            </Link>
            <Link to="/billeM3" className="LinkPC">
                 Model 3
            </Link>
            <Link to="/billeM2" className="LinkPC">
                 Model 2
            </Link>
        </nav>
    )
}

export default NavPC