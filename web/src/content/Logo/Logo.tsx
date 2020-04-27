import * as React from 'react'

const nameLogo = './assets/images/nameLogo.png'
const boxLogo = './assets/images/boxLogo.png'

interface ILogoSize {
    type: 'name' |'box';
    logoSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
}


const Logo = (props: ILogoSize) => {
    const { logoSize, type } = props

    const logoClass = logoSize && `${type}-logo-${logoSize}`
    const logo = type === 'name' ? nameLogo : boxLogo

    return (
        <img
            src={logo}
            className={`${logoClass}`}
        />
    )
}

export default Logo