import React from 'react';
import { Helmet } from 'react-helmet';

function CommonSEO(
    title = "ONG Vivre Sans Violence de femmes en Côte d'Ivoire soutenant l'entrepreneuriat féminin",
    description = "Notre ONG de femmes en Côte d'Ivoire soutient l'entrepreneuriat féminin en offrant des formations et des ressources pour aider les entrepreneures. Rejoignez notre communauté aujourd'hui!",
    image = "https://res.cloudinary.com/deh2quz8u/image/upload/v1681210981/logo-bg_c95urf.jpg",
    url = "https://example.com/ong-femmes-entrepreneuriat",
    region = "CI-AB",
    placement = "Abidjan, Côte d'Ivoire"
) {

    console.log("URL ",window.location.href)

  return (
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={window.location.href} />
        <meta name="geo.placename" content={placement} />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="geo.region" content={region} />
      </Helmet>
      
  );
}

export default CommonSEO;
