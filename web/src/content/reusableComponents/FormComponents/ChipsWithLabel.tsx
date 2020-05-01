import * as React from 'react'
import { InputLabel, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inputLabel: {
        marginBottom: `10px`,
        marginLeft: `-15px`,
    },
    chip: {
        margin: '2px',
    },
    [`@media (max-width: 500px)`]: {
        inputLabel: {
            marginLeft: `-5px`,
        }
    },
}))

interface IChipsWithLabel {
    id: string;
    inputLabel: string;
    list: string[];
    selectedList: string[];
    addOrRemoveFromList: (val: string) => void;
}

const ChipsWithLabel = (props: IChipsWithLabel) => {
    const { id, inputLabel, list, selectedList, addOrRemoveFromList } = props
    const classes = useStyles()

    return (
        <>
        <InputLabel 
            className={classes.inputLabel}
            htmlFor={id} 
        >
            {inputLabel}
        </InputLabel>
        {list.map(val =>
            <Chip
                key={val}
                className={classes.chip}
                label={val} 
                clickable
                onClick={() => addOrRemoveFromList(val)}
                color={selectedList.includes(val) ? "primary" : 'default'} 
            />

        )}
        </>
    )
}

export default ChipsWithLabel