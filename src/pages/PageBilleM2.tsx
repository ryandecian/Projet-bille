import "./PageBilleM2.css"
import NavRoot from "../components/NavRoot/NavRoot";
import BilleM2 from "../components/BilleM2/BilleM2";

function PageBilleM2() {
  return (
    <>
         <header className="headerBilleM2">
            <NavRoot />
         </header>

         <main className="mainBilleM2">
             <BilleM2 />
         </main>

         <footer className="footerBilleM2"/>
    </>
  );
}

export default PageBilleM2;