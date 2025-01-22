import "./PageBilleM3.css"
import NavRoot from "../components/NavRoot/NavRoot";
import BilleM3 from "../components/BilleM3/BilleM3";

function PageBilleM3() {
  return (
    <>
         <header className="headerBilleM3">
            <NavRoot />
         </header>

         <main className="mainBilleM3">
             <BilleM3 />
         </main>

         <footer className="footerBilleM3"/>
    </>
  );
}

export default PageBilleM3;