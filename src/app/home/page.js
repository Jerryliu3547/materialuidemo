import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'

const page = () => {
  const links = [
    {name:'Typography', href: "/typography"},
    {name:'Default Theme', href: "/defaulttheme"},
    {name: 'Button', href: '/button'},
    {name: 'Toggle Button', href: '/togglebutton'},
    {name: 'TextField', href: '/textfield'},
    {name: 'select with TextField', href: '/select'},
    {name: 'Radio Button', href: '/radiobutton'},
    {name: 'Checkbox', href: '/checkbox'},
    {name: 'Switch', href: '/switch'},
    {name: 'Rating', href: '/rating'},
    {name: 'AutoComplete', href: '/autocomplete'},
    {name: 'Box', href: '/box'},
    {name: 'Grid', href: '/grid'},
    {name: 'drawer', href: '/drawer'},


    

  ]  
  return (
    <div>
      <Typography variant="h3">Next.js with Material-UI</Typography>
      <nav>
        <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
        </ul>
      </nav>

    </div>
  )
}

export default page
