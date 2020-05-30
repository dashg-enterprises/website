import * as React from 'react'
import { TextField } from '@material-ui/core'
import ChipsWithLabel from '../../reusableComponents/FormComponents/ChipsWithLabel'
    

const RecruiterQuestions = (props) => {

    const { classes, isRecruiter, recruitFor, setValue, setRecruitFor,
        recruitingFor, recruitingForList, addOrRemoveRecruitingForFromList
    } = props

    return (
        <>
            {isRecruiter && 
            
            <>
                <TextField
                    id="recruitFor-helperText"
                    className={classes.textBox}
                    label="For which company do you recruit?"
                    value={recruitFor}
                    onChange={setValue(setRecruitFor)}
                    variant="outlined"
                />
                <div className={classes.container}>
                    
                    <ChipsWithLabel
                        id='recruitingFor-chips-with-label'
                        inputLabel='I am looking'
                        list={recruitingForList}
                        selectedList={recruitingFor}
                        addOrRemoveFromList={addOrRemoveRecruitingForFromList}

                    />
                </div>
            </>}
        </>
    )
}


export default RecruiterQuestions