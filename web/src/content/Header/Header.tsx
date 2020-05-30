import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import SmallHeader from './SmallHeader'
import LandingHeader from './LandingHeader'

const Header = () => {

    const [header, setHeader] = useState('landing')
    const [hasScrolled, setHasScrolled] = useState(false)
    const imageContainer = useRef(null)

    useEffect(() => {

        addEventListener('scroll', () => {
            if (window.scrollY >= imageContainer.current.offsetTop + imageContainer.current.offsetHeight - 70) {
                setHeader('small')
                setHasScrolled(true)
            } 
            
            if (window.scrollY < imageContainer.current.offsetTop + imageContainer.current.offsetHeight - 70) {
                setHeader('landing')
            }
        }),

        
        () => {
            removeEventListener('scroll', () => null)
        }
    }, [])


    return (
        <>
            <LandingHeader hide={header === 'small'} imageContainer={imageContainer}/>
            {hasScrolled && <SmallHeader animation={header}/>}
        </>

    )
}

export default Header