import React from 'react';
import { Helmet } from 'react-helmet';
import { OFFICE_ADDRESS } from '../../model/utils/OfficeAddress';

function CommonSEO({
  title = "ONG Vivre Sans Violence creer par des femmes pour les femmes et les personnes vulnerable en Côte d'Ivoire soutenant l'entrepreneuriat féminin",
  description = "Notre ONG de femmes en Côte d'Ivoire soutient l'entrepreneuriat féminin en offrant des formations et des ressources pour augmenter la productivite et le revenu. Rejoignez notre communauté aujourd'hui!",
  image = "https://res.cloudinary.com/deh2quz8u/image/upload/v1681210981/logo-bg_c95urf.jpg",
  regionPrimary = "CI",
  regionSecondary = "CA",
  regionThird = "DE",
  placementPrimary = "Canada",
  placementSecondary = "Germany",
  placementThird = "Côte d'Ivoire",
  keywords = `vivre sans violence, ONG, Côte d'Ivoire,femme,femme africaine, Ivory Coast, Woman,Forum Economique Feministe,
  Sakassou,FEF,Bouafle,Toumodi,Djebonoua,Didievi,Beoumi,Botro,Ferke,Facobly,Sipilou,
  Autonomisation des femmes,Entrepreneuriat féminin,Femmes mariées,Femmes maltraitées,Éducation entrepreneuriale pour les femmes,Financement pour les femmes entrepreneurs,Plan d'affaires pour les femmes entrepreneurs,Investissement pour les femmes entrepreneurs,
  Subventions pour les femmes entrepreneurs,Prêts pour les femmes entrepreneurs,Commerce électronique pour les femmes entrepreneurs,Développement personnel pour les femmes entrepreneurs,
  Technologies de l'information pour les femmes entrepreneurs,Agriculture pour les femmes entrepreneurs,Pêche pour les femmes entrepreneurs,Artisanat pour les femmes entrepreneurs,Tourisme pour les femmes entrepreneurs,Coiffure pour les femmes entrepreneurs,
  Crowdfunding pour les femmes entrepreneurs,Levée de fonds pour les femmes entrepreneurs,Création d'emplois pour les femmes entrepreneurs,Recrutement pour les femmes entrepreneurs,Avantages sociaux pour les employés des femmes entrepreneurs,Gestion de projet pour les femmes entrepreneurs,
  Législation pour les femmes entrepreneurs,Réglementation pour les femmes entrepreneurs,Législation,Leadership pour les employés des femmes entrepreneurs,Gestion financière pour les femmes entrepreneurs,Gestion de la chaîne d'approvisionnement pour les femmes entrepreneurs,
  l'entrepreneuriat feminin en cote d'ivoire`,
  url = window.location.href
}) {


  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="geo.placename" content={placementPrimary} />
      <meta name="geo.placename" content={placementSecondary} />
      <meta name="geo.position" content={`${OFFICE_ADDRESS.latitude};${OFFICE_ADDRESS.longitude}`} />
      <meta name="geo.region" content={regionPrimary} />
      <meta name="geo.region" content={regionSecondary} />
      <meta name="geo.region" content={regionThird} />
      <meta name="country" content={placementSecondary} />
      <meta name="country" content={placementThird} />
      <meta name="country" content={placementPrimary} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
    </Helmet>

  );
}

export default CommonSEO;
