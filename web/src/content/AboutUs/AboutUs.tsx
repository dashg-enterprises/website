import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'

const AboutUs = () => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)

    const text1Container = useRef(null)
    const text2Container = useRef(null)
    const text3Container = useRef(null)
    const text4Container = useRef(null)
    const text5Container = useRef(null)


    const getScrollHeight = (container, setter) => {
        if (window.scrollY < 1) {
            // setShow1(false) 
            setShow2(false) 
            setShow3(false) 
            setShow4(false) 
            setShow5(false) 
        } 

        if (window.scrollY >= container.current.offsetTop - 700) {
            setter(true) 
        } 
        
       
    
    }

    useEffect(() => {

        addEventListener('scroll', () => {
            getScrollHeight(text1Container, setShow1)
            getScrollHeight(text2Container, setShow2)
            getScrollHeight(text3Container, setShow3)
            getScrollHeight(text4Container, setShow4)
            getScrollHeight(text5Container, setShow5)
        }),

        
        () => {
            removeEventListener('scroll', () => null)
        }
    }, [])

    return (
        <div id='about-us'>
            <Typography variant={'h4'}>
                Our mission is to enhance the network of individuals who are passionate about software development.
            </Typography>
            <Typography variant={'h6'} ref={text1Container} className={show1 ? 'about-text': 'hide-text'}>
                Follow us as we explore what this can be. As the network evolves, so can our capabilities. 
                Ultimately, we hope to understand development teams, demystify development for newcomers, 
                and lower the gates into and throughout the industry.
            </Typography>
            <Typography variant={'h6'} ref={text2Container} className={show2 ? 'about-text' : 'hide-text'}>
                We’d like to connect (and generate!) talent to suitable roles. This may involve establishing 
                certifications and encouraging best practices to better represent candidates for various positions 
                in a development  team for the benefit of the candidate, recruiter, and employer alike. It is our 
                dream to help establish these connections, as we understand the importance of the right candidate 
                for the right role.
            </Typography>
            <Typography variant={'h6'} ref={text3Container} className={show3 ? 'about-text' : 'hide-text'}>
                Between the two of us, it took seven years for us to get into the industry. We know how steep 
                the hill can be, and it’s even steeper for those who have yet to start their climb.
            </Typography>
            <Typography variant={'h6'} ref={text4Container} className={show4 ? 'about-text' : 'hide-text'}>
                We’d like to offer a helping hand. It takes a village, and it’s often more about who you 
                know than what you know. Let’s know both together.
            </Typography>
            <Typography variant={'h6'} ref={text5Container} className={show5 ? 'about-text' : 'hide-text'}>
                Still here? We’d like to learn more about you. So fill out the form below if you’re interested 
                in starting a dialogue, whether you’re just starting out or already on your way. 
                If you’re a recruiter looking for talent, we’re interested in connecting with you too!
            </Typography>
        </div>
    
    )
}

export default AboutUs