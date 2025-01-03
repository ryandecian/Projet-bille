import { Link } from "react-router-dom"
import "./NavPC.css"
import { useState } from "react";
import { useEffect } from "react";

function NavPC() {
     const [dimensions, setDimensions] = useState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      
        useEffect(() => {
          const handleResize = () => {
            setDimensions({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          };
      
          window.addEventListener("resize", handleResize);
      
          // Nettoyage pour éviter les fuites de mémoire
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []);

        const [screen, setScreen] = useState(dimensions.width * dimensions.height / 11203)
            useEffect(() => {
                setScreen(dimensions.width * dimensions.height / 11203);
              }, [dimensions]);
      
      

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