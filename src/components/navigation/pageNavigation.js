import { Grid, Avatar, Link } from '@mui/material'
import React from 'react'
import { ASSETS } from '../../assets/assets'
import { APP18n } from '../../i18n/i18n'
import { Colors } from '../../theme/colors'
import { Button, Navbar, Nav } from 'react-bootstrap';
import { APPFONT } from '../../fonts/font'

export default function PageNavigation() {
    return (
        <Grid container  >
            <Navbar expand="md">
                <Navbar.Brand href="#"><Avatar sx={{ bgcolor: Colors.primary_yellow, width: 100, height: 50 }} variant="square" src={ASSETS.logo_svg} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{position:'relative',left:'70%'}}/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto" >
                        <Nav.Link  href="#home" style={styles.links}>{APP18n.translate(APP18n.getKeys().navigation_libraries)}</Nav.Link>
                        <Nav.Link href="#link" style={styles.links}>{APP18n.translate(APP18n.getKeys().navigation_video)}</Nav.Link>
                        <Nav.Link href="#link" style={styles.links}>{APP18n.translate(APP18n.getKeys().navigation_audio)}</Nav.Link>
                        <Nav.Link href="#link" style={styles.links}>{APP18n.translate(APP18n.getKeys().navigation_activities)}</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </Grid>
    )
}

const styles = {
    links: {
        color: Colors.primary_white,
        fontFamily:APPFONT.getFontKeys().fontNameSlabo
    },
    linkLayout: {

    }
}
