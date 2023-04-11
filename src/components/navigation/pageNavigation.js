import { Grid, Avatar,  } from '@mui/material'
import React, {  } from 'react'
import { ASSETS } from '../../assets/assets'
import { APP18n } from '../../i18n/i18n'
import { Colors } from '../../theme/colors'
import { APPFONT } from '../../fonts/font'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

let  selection = null; 
export default function PageNavigation() {

    const navigation = useNavigate()

    return (
        <Grid container  >
            <Navbar expand="md" style={{ width: '100%' }}>
                <Navbar.Brand style={{cursor:'pointer'}} onClick={() => {
                    navigation("/")
                    selection = null
                }}><Avatar sx={{ bgcolor: Colors.primary_yellow, width: 100, height: 50, }} variant="square" src={ASSETS.logo_svg} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto" >
                        <Nav.Link
                            onClick={() => {
                                selection = 'library'
                                navigation("/library")
                            }}
                            style={styles(selection,'library')}>
                            {APP18n.translate(APP18n.getKeys().navigation_libraries)}
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                selection = 'video'
                                navigation("/video")
                            }}
                            style={styles(selection,'video')}>
                            {APP18n.translate(APP18n.getKeys().navigation_video)}
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                selection = 'audio'
                                navigation("/audio")
                            }}
                            style={styles(selection,'audio')}>
                            {APP18n.translate(APP18n.getKeys().navigation_audio)}
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                selection = 'activity'
                                navigation("/activity")
                            }}
                            style={styles(selection,'activity')}>
                            {APP18n.translate(APP18n.getKeys().navigation_activities)}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Grid>
    )

}

const styles = (selection,type)=>{
    
    if(selection === type) return  {
        color: Colors.primary_white,
        fontFamily: APPFONT.getFontKeys().fontNameMontserrat,
        opacity: 1
    }
    else return {
        opacity: 0.6,
        color: Colors.primary_white,
        fontFamily: APPFONT.getFontKeys().fontNameMontserrat,
    }
    
}
