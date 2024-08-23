import React from 'react'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const page = () => {
  return (
    <div className='p-10'>
      <TableContainer component={Paper} sx={{maxHeight:'200px'}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>25</TableCell>
              <TableCell>USA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>30</TableCell>
              <TableCell>Canada</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>25</TableCell>
              <TableCell>USA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>30</TableCell>
              <TableCell>Canada</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>30</TableCell>
              <TableCell>Canada</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>30</TableCell>
              <TableCell>Canada</TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>

        
    </div>
  )
}

export default page