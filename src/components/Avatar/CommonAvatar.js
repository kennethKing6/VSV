import { Avatar } from '@mui/material'
import React from 'react'

export default function CommonAvatar({url = "http://localhost:1337/uploads/3q_YD_Ycg_Wr6z_Fd_F_Image_created_with_a_mobile_phone_433e3dc893.jpg",
                            height = "100%",alt = "Remy Sharp"}) {
    return (
        <Avatar
            variant='square'
            alt={alt}
            src={url}
            sx={{ width: "100%", height: height }}
        />
    )
}
