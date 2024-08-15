'use client'
import React from 'react'
import {Stack, Rating, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup} from '@mui/material'
import {useState} from 'react'

const ratingPage = () => {
  const [star, setStar] = useState('')
  const [newStar, setNewStar] = useState(null)
  const handleNewStar = (e) => {
    setNewStar(e.target.value)
  }
  const handleStar = (e) => {
    setStar(e.target.value)
  }
  return (
    <div> 
    <h1>ratingPage</h1>
    <br />
    <Stack spacing={2}>
        <p>the following is readOnly rating by setting up prop value and readOnly</p>
        <Rating value={3} readOnly />
        <Rating value={2} readOnly />
        <Rating value={5} readOnly />
        <Rating value={4} readOnly />
        <Rating value={1} readOnly />
    </Stack>
    <br />
    <Stack spacing={2} bgcolor={'slategray'}>
        <p>the following star control by a form</p>
        <Rating value={star} readOnly />
        <FormControl value = {star} onChange={handleStar}
        >
            <FormLabel>Please Select the Rating for this Page</FormLabel>
            <RadioGroup defaultValue={5}>
                <FormControlLabel value={1} control={<Radio />} label='1 Star'/>
                <FormControlLabel value={2} control={<Radio />} label='2 Star'/>
                <FormControlLabel value={3} control={<Radio />} label='3 Star'/>
                <FormControlLabel value={4} control={<Radio />} label='4 Star'/>
                <FormControlLabel value={5} control={<Radio />} label='5 Star'/>
            </RadioGroup>
        </FormControl>

    </Stack>

    <br />
    <Stack spacing={2} bgcolor={'slategray'}>
        <p>the following star control by rating itself</p>
        {/* precision can be set as 1 or 0.5 to select half star */}
        <Rating value={newStar} onChange={handleNewStar} precision={0.5} size='large'/>
    </Stack>
    </div>
  )
}

export default ratingPage