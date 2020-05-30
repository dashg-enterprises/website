import * as React from 'react'
import Logo from '../Logo/Logo'
import HamburgerMenu from '../reusableComponents/HamburgerMenu/HamburgerMenu'

interface ISmallHeader {
    animation: string;
}

const SmallHeader = (props: ISmallHeader) => {
    const { animation } = props
    return (
        <header id='small-header' className={animation}>
            {animation !== 'landing' && 
                <>
                    <Logo logoSize='s' type='name' />
                    <HamburgerMenu 
                        menuId={'header-button'} 
                        menuItems={[]}
                    />
                </>
            }
        </header>
    )
}

export default SmallHeader