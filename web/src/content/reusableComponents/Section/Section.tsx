import * as React from 'react'
import { Typography } from '@material-ui/core'

interface ISection {
    title: string;
    children: React.ReactNode;
}

const Section = (props: ISection) => {
    const {title, children} = props
    return (
        <div>
            <Typography variant='h4'>{title}</Typography>
            {children}
        </div>
    )
}

export default Section