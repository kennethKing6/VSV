import { Avatar } from '@mui/material'
import React from 'react'

export default function CommonAvatar({ url = "http://localhost:1337/uploads/3q_YD_Ycg_Wr6z_Fd_F_Image_created_with_a_mobile_phone_433e3dc893.jpg",
    height = "100%",
    width = '100%',
    alt = "Remy Sharp",
    sx = {} }) {
    return (
        <div style={{ flex: 1 }}>
            <Avatar
                variant='square'
                alt={alt}
                src={url}
                sx={sx?sx:{ width: width, height: height, objectFit: 'contain' }}
            />
        </div>
    )
}
