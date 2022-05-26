import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react"
import '../style/Menu.css'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className="menubar">
        <div className="menu-layout">
            <Breadcrumb separator={'>'}>
                <BreadcrumbItem>
                    <Link to='/'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to='/forecast'>Forecast</Link>
                </BreadcrumbItem>
                {/* <BreadcrumbItem>
                    <Link to='/airquality'>Air quality</Link>
                </BreadcrumbItem> */}
                <BreadcrumbItem>
                    <Link to='/map'>Weather map</Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
    </div>
  )
}

export default Menu
