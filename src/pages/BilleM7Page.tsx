import NavRoot from "../components/NavRoot/NavRoot";
import BilleM7 from "../components/BilleM7/BilleM7";

function BilleM7Page() {
  return (
    <>
         <header className="headerBilleM7">
            <NavRoot />
         </header>

         <main className="mainBilleM7">
             <BilleM7 />
         </main>

         <footer className="footerBilleM7"/>
    </>
  );
}

export default BilleM7Page;