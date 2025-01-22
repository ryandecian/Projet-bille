import "./PageBilleM5.css"
import NavRoot from "../components/NavRoot/NavRoot";
import BilleM5 from "../components/BilleM5/BilleM5";

function PageBilleM5() {
  return (
    <>
         <header className="headerBilleM5">
            <NavRoot />
         </header>

         <main className="mainBilleM5">
             <BilleM5 />
         </main>

         <footer className="footerBilleM5"/>
    </>
  );
}

export default PageBilleM5;