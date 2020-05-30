import * as React from 'react'
import { Slider, InputLabel } from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inputLabel: {
        marginBottom: `10px`,
        marginLeft: `-15px`,

    },
    [`@media (max-width: 500px)`]: {
        inputLabel: {
            marginLeft: `-5px`,
        }
    },
}))

interface ISliderWithLabel {
    id: string;
    inputLabel: string;
    value: number;
    setValue: (value: number) => void;
    min: number,
    max: number,
    step: number,
}

const SliderWithLabel = (props: ISliderWithLabel) => {
    const { id, inputLabel, value, setValue, min, max, step } = props
    const classes = useStyles()
    return (
        <>
            <InputLabel   
                className={classes.inputLabel}
                htmlFor={id} 
             >
            {inputLabel}
            </InputLabel>
            <DashSlider
                id={id}
                valueLabelDisplay="on" 
                aria-label={id} 
                step={step}
                marks={true}
                min={min}
                max={max}
                value={value}
                onChange={(e, val) => setValue(val as number)}
            />
        </>
    )
}

export default SliderWithLabel


const DashSlider = withStyles((theme) => ({
    root: {
      marginTop: '40px',
      color: theme.palette.primary.main,
      height: 8,
      width: '450px',
      textAlign: 'center',
      marginBottom: '0px',
    },
    [`@media (max-width: 500px)`]: {
        root: {

            width: '80vw',
            margin: 'auto',
            marginTop: '30px',
        
        }
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: theme.palette.primary.main,
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.palette.primary.main,
      border: `1px #222222 solid`,

    },
    rail: {
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.palette.primary.light,

    },
    mark: {
        color: theme.palette.common.white,  
    }
  }))(Slider);
  