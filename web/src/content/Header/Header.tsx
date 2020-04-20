import * as React from 'react'
import Logo from '../Logo/Logo'
import HamburgerMenu from '../reusableComponents/HamburgerMenu/HamburgerMenu'

const Header = () => {
    return (
        <header>
            <Logo logoSize='s' />
            <HamburgerMenu 
                menuId={'header-button'} 
                menuItems={[]}
            />
        </header>
    )
}

export default Header