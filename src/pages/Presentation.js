import { Avatar, Grid, } from '@mui/material';
import { ASSETS } from '../assets/assets';
import CardParagraph from '../components/Card/CardParagraph';
import VVSFooter from '../components/Footer/VVSFooter';
import PageHeader from '../components/header/pageHeader';
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout';
import NoSpacingLayout from '../components/layout/NoSpacingLayout';
import SmallSpacingLayout from '../components/layout/smallSpacingLayout';
import UnderlineMediumTitle from '../components/Text/UnderlineMediumTitle';
import { APP18n } from '../i18n/i18n';
import { Colors } from '../theme/colors';
import LargeParagraph from '../components/Text/LargeParagraph';
import CommonSEO from '../components/SEO/CommonSEO';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function Presentation() {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const page = searchParams.get('page');

  useEffect(() => {
    findPage(page)
  }, [])

  const findPage = (page) => {
    if (page)
      navigate(page)
  }

  return (
    <>
      <CommonSEO />
      <PageHeader />
      <NoSpacingLayout>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Avatar variant='square' src={ASSETS.historique_img} sx={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SmallSpacingLayout>
              <MediumTopMarginLayout><UnderlineMediumTitle textTransform='capitalize' textAlign='center' text={APP18n.translate(APP18n.getKeys().presentation_brief_history)} textColor={Colors.primary_black} /></MediumTopMarginLayout>
              <MediumTopMarginLayout><LargeParagraph text={APP18n.translate(APP18n.getKeys().presentation_brief_history_p1)} /></MediumTopMarginLayout>
              <MediumTopMarginLayout><LargeParagraph text={APP18n.translate(APP18n.getKeys().presentation_brief_history_p2)} /></MediumTopMarginLayout>
              <MediumTopMarginLayout><LargeParagraph text={APP18n.translate(APP18n.getKeys().presentation_brief_history_p3)} /></MediumTopMarginLayout>
            </SmallSpacingLayout>
          </Grid>

        </Grid>

      </NoSpacingLayout>

      <NoSpacingLayout>
        <Grid container >
          <Grid item xs={12} md={6}>
            <SmallSpacingLayout>
              <CardParagraph
                title={APP18n.translate(APP18n.getKeys().presentation_vision_card_title)}

                paragraph={APP18n.translate(APP18n.getKeys().presentation_vision_card_p)}
                bgColor={Colors.primary_purple}
              />
            </SmallSpacingLayout>
          </Grid>

          <Grid item xs={12} md={6}>
            <SmallSpacingLayout>
              <CardParagraph
                title={APP18n.translate(APP18n.getKeys().presentation_mission_card_title)}
                paragraph={APP18n.translate(APP18n.getKeys().presentation_mission_card_p)}
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

export default Presentation;
