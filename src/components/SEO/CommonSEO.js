import React from 'react';
import { Helmet } from 'react-helmet';
import { OFFICE_ADDRESS } from '../../model/utils/OfficeAddress';

function CommonSEO(
    title = "ONG Vivre Sans Violence de femmes en Côte d'Ivoire soutenant l'entrepreneuriat féminin",
    description = "Notre ONG de femmes en Côte d'Ivoire soutient l'entrepreneuriat féminin en offrant des formations et des ressources pour aider les entrepreneures. Rejoignez notre communauté aujourd'hui!",
    image = "https://res.cloudinary.com/deh2quz8u/image/upload/v1681210981/logo-bg_c95urf.jpg",
    regionPrimary = "CI",
    regionSecondary = "FR",
    placementPrimary = "Côte d'Ivoire",
    placementSecondary = "France",
    keywords = "vivre sans violence, ONG, Côte d'Ivoire,femme,femme africaine, Ivory Coast, Woman,Forum Economique Feministe,Sakassou,FEF,Bouafle,Toumodi,Djebonoua,Didievi,Beoumi,Botro,Ferke,Facobly,Sipilou"
) {

 
  return (
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={window.location.href} />
        <meta name="geo.placename" content={placementPrimary} />
        <meta name="geo.placename" content={placementSecondary} />
        <meta name="geo.position" content={`${OFFICE_ADDRESS.latitude};${OFFICE_ADDRESS.longitude}`} />
        <meta name="geo.region" content={regionPrimary} />
        <meta name="geo.region" content={regionSecondary} />
        <meta name="country" content={placementPrimary} />
        <meta name="country" content={placementSecondary} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      
  );
}

export default CommonSEO;
