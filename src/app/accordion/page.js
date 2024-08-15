'use client'
import {Accordion, AccordionSummary, AccordionDetails, Box, Link} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import React from 'react'

const AccordionPage = () => {
const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)}

  return (
    <div>
        <Link href='https://mui.com/material-ui/react-accordion/' target='_blank'>Link to Accordion Docs</Link>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
            >
                <h2>Accordion 1</h2>
            </AccordionSummary>
            <AccordionDetails>
                <p>Panel 1 content</p>
            </AccordionDetails>
        </Accordion>

        <p>The following is Accordion Group</p>
        <Box>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'
                >
                    <h2>Accordion 2</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Panel 2 content</p>
                </AccordionDetails>
            </Accordion >
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2b-content'
                    id='panel2b-header'
                >
                    <h2>Accordion 3</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Panel 3 content</p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2c-content'
                    id='panel2c-header'
                >
                    <h2>Accordion 4</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Panel 4 content</p>
                </AccordionDetails>
            </Accordion>
        </Box>
    
    </div>
  )
}

export default AccordionPage