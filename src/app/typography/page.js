import React from 'react'
import { Typography } from '@mui/material'

const page = () => {
  return (
    <div>
      <Typography variant="h1">Typography Page</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      {/* the component can be adjusted to other for semantic reason */}
      <Typography variant="h6" component='h1'>Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
       {/* this gutterBottom will add additional margin to button */}
      <Typography variant="body2"  gutterBottom>Body 2</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="overline">Overline</Typography>
      <Typography variant="button">Button</Typography>
      <Typography variant="srOnly">Screen reader only</Typography>
    </div>

  )
}

export default page
