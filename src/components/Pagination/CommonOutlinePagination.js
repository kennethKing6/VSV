import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CommonOutlinePagination({
    defaultPage = 1,
    count = 25,
    onSelectedPage=()=>{}

}) {
    return (
        <Stack spacing={2}>
            <Pagination  count={count} defaultPage={defaultPage} variant="outlined" color="secondary" onChange={(event,value)=>onSelectedPage(value)}/>
        </Stack>
    )
}
