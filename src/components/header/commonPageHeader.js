import React from 'react'
import { Colors } from '../../theme/colors'
import MediumSpacingLayout from '../layout/mediumSpacingLayout'
import PageNavigation from '../navigation/pageNavigation'

export default function CommonPageHeader() {
    return (
        <MediumSpacingLayout style={styles.container}>
            <PageNavigation />
        </MediumSpacingLayout>
    )
}

const styles = {
    container: {
        backgroundColor: Colors.primary_purple
    }
}
