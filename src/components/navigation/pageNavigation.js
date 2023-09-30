import { Grid, Avatar, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ASSETS } from '../../assets/assets'
// import { APP18n } from '../../i18n/i18n'
import { Colors } from '../../theme/colors'
// import { APPFONT } from '../../fonts/font'
import { useLocation, useNavigate, } from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function PageNavigation() {

    const [
        // actualPage
        , 
        setActualPage] = useState('/')
    const navigation = useNavigate()
    const location = useLocation();

    useEffect(() => {
        const pathName = location.pathname
        const search = location.search

        const queryParams = new URLSearchParams(search);
        const param1 = queryParams.get("page")

        if (param1 && process.env.NODE_ENV === 'production') {
            const page = param1.replace("/", "")
            navigation(`/${page}`)
            setActualPage(page)
        } else {
            setActualPage(pathName.replace("/", ""))
        }


    }, [location,navigation])



    return (
        <Grid container  >
            <Navbar expand="md" style={{ width: '100%' }}>
                <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => {
                    navigation("/")
                }}><Avatar sx={{ bgcolor: Colors.primary_yellow, width: 100, height: 50, }} variant="square" src={ASSETS.logo_svg} /></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto" >
                        <Nav.Link
                            onClick={() => {
                                navigation("/library")
                            }}
                            style={styles(actualPage, 'library')}>
                            {APP18n.translate(APP18n.getKeys().navigation_libraries)}
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigation("/video")
                            }}
                            style={styles(actualPage, 'video')}>
                            {APP18n.translate(APP18n.getKeys().navigation_video)}
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigation("/audio")
                            }}
                            style={styles(actualPage, 'audio')}>
                            {APP18n.translate(APP18n.getKeys().navigation_audio)}
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigation("/activity")
                            }}
                            style={styles(actualPage, 'activity')}>
                            {APP18n.translate(APP18n.getKeys().navigation_activities)}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Navbar>
        </Grid>
    )

}

// const styles = (selection, type) => {
//     if (selection === type) return {
//         color: Colors.primary_white,
//         fontFamily: APPFONT.getFontKeys().fontNameMontserrat,
//         opacity: 1
//     }
//     else return {
//         opacity: 0.6,
//         color: Colors.primary_white,
//         fontFamily: APPFONT.getFontKeys().fontNameMontserrat,
//     }

// }
