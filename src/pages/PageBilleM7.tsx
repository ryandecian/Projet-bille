import "./PageBilleM7.css"
import NavRoot from "../components/NavRoot/NavRoot";
import BilleM7 from "../components/BilleM7/BilleM7";
import { Helmet } from "react-helmet-async";

function PageBilleM7() {
   const SEO = {
     title: "Portfolio - Ryan DECIAN - Développeur Web Full Stack",
     autor: "Ryan DECIAN",
     description: "",
     url: "https://projet-bille.netlify.app/", /*URL de la page*/
     img: "",
     twitterUrlImg: "", /*Lien URL de l'image*/
     twitterCompte: "", /*@MonCompteTwitter*/ /*Permet d'identifier le compte officiel*/
     keywords: {
       1: "Ryan DECIAN", /* 1 mot clés */
       2: "Page BilleM7", /* 2 mots clés */
       3: "Développeur Web Full Stack", /* 3 mots clés */
       4: "Demo web - BilleM7", /* 4 mots clés */
       5: "", /* 5 mots clés */
       6: "", /* 6 mots clés */
       7: "", /* 7 mots clés */
       8: "", /* 8 mots clés */
       9: "", /* 9 mots clés */
       10: "", /* 10 mots clés */
       11: "", /* 11 mots clés */
       12: "", /* 12 mots clés */
       13: "", /* 13 mots clés */
       14: "", /* 14 mots clés */
       15: "", /* 15 mots clés */
     }, /* 10 a 15 mots max */
     type : {
       website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
       article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
       video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
       music: "music.song", /*Pour les pages dédiées à la musique.*/
       profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
     }
   }
   // Filtrer les mots-clés non vides
     const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

  return (
    <>
         <Helmet>
           {/* Balises SEO */}
             {/* Balise pour indexation général */}
               <title>{SEO.title}</title>
               <meta name="description" content={SEO.description}/>
               <meta name="author" content={SEO.autor} />
               {filterKeywords && <meta name="keywords" content={filterKeywords} />}

             {/* Balises OpenGraph - Facebook, Linkedin, WhatsApp, Instagram*/}
               <meta property="og:title" content={SEO.title} />
               <meta property="og:description" content={SEO.description} />
               <meta property="og:image" content="" />
               <meta property="og:url" content={SEO.url} />
               <meta property="og:type" content="website" />
               <meta property="og:locale" content="fr_FR" />

             {/* Balises Twitter Cards */}
               <meta name="twitter:title" content={SEO.title} />
               <meta name="twitter:description" content={SEO.description} />
               <meta name="twitter:card" content="summary_large_image" />
               <meta name="twitter:image" content={SEO.twitterUrlImg} />
               <meta name="twitter:site" content={SEO.twitterCompte} />

             {/* Balises SEO pour Google */}
               <meta name="robots" content="index, follow" />
               <meta name="googlebot" content="index, follow" />
               <meta name="bingbot" content="index, follow" />

             {/* Canonical URL (évite le contenu dupliqué pour les moteurs de recherche) */}
               <link rel="canonical" href={SEO.url} />
         </Helmet>

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

export default PageBilleM7;