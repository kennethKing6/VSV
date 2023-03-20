import { Avatar, Card, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ASSETS } from './assets/assets';
import CardParagraph from './components/Card/CardParagraph';
import VVSFooter from './components/Footer/VVSFooter';
import PageHeader from './components/header/pageHeader';
import MediumTopMarginLayout from './components/layout/mediumTopMarginLayout';
import NoSpacingLayout from './components/layout/NoSpacingLayout';
import SmallSpacingLayout from './components/layout/smallSpacingLayout';
import UnderlineMediumTitle from './components/Text/UnderlineMediumTitle';
import { Colors } from './theme/colors';

function App() {
  return (
    <>
      <PageHeader />
      <NoSpacingLayout>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Avatar variant='square' src={ASSETS.historique_img} sx={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SmallSpacingLayout>
              <MediumTopMarginLayout>
                <UnderlineMediumTitle textAlign='center' text={"BREF HISTORIQUE"} textColor={Colors.primary_black} />
              </MediumTopMarginLayout>
              <MediumTopMarginLayout>
                <Typography variant="h6" textAlign={"left"} lineHeight={2} style={{ width: '100%' }} gutterBottom>
                  Dans le souci de mettre à la disposition de la communauté et de l’Etat de Côte d’Ivoire, sa
                  riche expérience internationale, régionale et nationale dans les domaines du développement,
                  de la gouvernance, des droits humains, de la démocratie et de tous les secteurs connexes, de
                  fédérer au mieux les compétences et les dynamiques de transformation de la société, afin de
                  participer au développement, à l’état de droits, à la consolidation de la paix et à la prévention
                  des conflits, l’ONG VIVRE SANS VIOLENCE (VSV) a été officiellement crée en avril 2018 par
                  Mme KOUAKOU Y.N.Nathalie, Médiatrice, spécialiste du Plaidoyer, experte en Droits humains,
                  Genre et Diversité et Ex présidente de Amnesty International Côte d’Ivoire.
                </Typography>
              </MediumTopMarginLayout>
              <MediumTopMarginLayout>
                <Typography variant="h6" lineHeight={2} textAlign={"left"} style={{ width: '100%' }} gutterBottom>
                  L’objectif général de VSV est d’influencer la prise de décision sur toutes les questions de droits
                  humains, de gouvernance et de justice pour la pleine jouissance des droits par les populations
                  en général et en particulier les minorités et les personnes vulnérables.
                </Typography>
              </MediumTopMarginLayout>
              <MediumTopMarginLayout>
                <Typography variant="h6" lineHeight={1.8} textAlign={"left"} style={{ width: '100%' }} gutterBottom>
                  Sa mission consiste ainsi à promouvoir l’Etat de droit, la bonne gouvernance, les droits
                  humains et la démocratie participative.
                </Typography>
              </MediumTopMarginLayout>


            </SmallSpacingLayout>
          </Grid>

        </Grid>

      </NoSpacingLayout>

      <NoSpacingLayout>
        <Grid container >
          <Grid item xs={12} md={6}>
            <SmallSpacingLayout>
              <CardParagraph
                title={"Vision"}
                paragraph={` Sa mission consiste ainsi à promouvoir l’Etat de droit, la bonne gouvernance, les droits
                humains et la démocratie participative.`}
                bgColor={Colors.primary_purple}
              />
            </SmallSpacingLayout>
          </Grid>

          <Grid item xs={12} md={6}>
            <SmallSpacingLayout>
              <CardParagraph
                title={"Mission"}
                paragraph={` Sa mission consiste ainsi à promouvoir l’Etat de droit, la bonne gouvernance, les droits
                humains et la démocratie participative.`}
                bgColor={Colors.primary_yellow}

              />
            </SmallSpacingLayout>
          </Grid>
        </Grid>
      </NoSpacingLayout>
      <NoSpacingLayout><VVSFooter /></NoSpacingLayout>
    </>
  );
}

export default App;
