import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


export default function TimelineModify() {
    const [mode, setMode ] = useState(0)
    const [value, setValue ] = useState(0)
    const today = new Date()
    return(<>
    {mode == 0 ?<>
    <Button variant="text" onClick={()=> setMode(1)}>수정 하기</Button>
    <Button variant="text">삭제 하기</Button></>
     : <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1},
        }}
        noValidate
        autoComplete="off">
        <LocalizationProvider dateAdapter={AdapterDateFns} sx={{width: '20ch' }}>
            <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            value={today}
            onChange={(newValue) => {
                setValue(newValue);
            }}
            />
        </LocalizationProvider>
        
        <FormControl sx={{width: '15ch' }}>
            <InputLabel id="weather-select-label">날씨</InputLabel>
            <Select
            labelId="weather-select-label"
            id="weather-select"
            // value={value}
            label="weather"
            // onChange={handleChange}
            >
            <MenuItem value={'맑음'}>맑음</MenuItem>
            <MenuItem value={'구름 많음'}>구름 많음</MenuItem>
            <MenuItem value={'흐림'}>흐림</MenuItem>
            <MenuItem value={'비'}>비</MenuItem>
            <MenuItem value={'비/눈'}>비/눈</MenuItem>
            <MenuItem value={'눈'}>눈</MenuItem>
            <MenuItem value={'소나기'}>소나기</MenuItem>
            <MenuItem value={'데이터 없음'}>모르겠음!</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{width: '15ch' }}>
            <InputLabel id="category-select-label">카테고리</InputLabel>
            <Select
            labelId="category-select-label"
            id="category-select"
            // value={value}
            label="category"
            // onChange={handleChange}
            >
            <MenuItem value={'visit'}>방문</MenuItem>
            <MenuItem value={'payment'}>결제 내역</MenuItem>  
            </Select>
        </FormControl>
        <TextField id="outlined-basic" label="장소" variant="outlined" sx={{ width: '20ch' }} placeholder="어떤 장소"/>
        <TextField id="outlined-basic" label="주소" variant="outlined" sx={{ width: '20ch' }} placeholder="상세 주소"/>
        <br/>
        <TextField id="outlined-basic" label="내용" variant="outlined" sx={{ width: '100.5ch' }} placeholder="무엇을 했다!"/>
        <br/>
        <Button variant="text" onClick={()=> setMode(0)}>수정 완료</Button>
        <Button variant="text">삭제 하기</Button>
        </Box>}
    </>)
}