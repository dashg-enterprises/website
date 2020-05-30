import * as React from 'react'
import { DatePicker } from '@material-ui/pickers'
import { TextField } from '@material-ui/core'


const StudentQuestions = (props) => {
    const {isStudent, classes, selectedDate, handleDateChange, major, setValue, setMajor, validate, validateMajor, majorValid} = props
    return (
        <>
        {isStudent && 
            <>
                <DatePicker
                    autoOk                       
                    className={classes.textBox}
                    variant="inline"
                    inputVariant="outlined"
                    openTo="month"
                    views={["month", "year"]}
                    label="Graduation Date"
                    helperText="Choose your estimated graduation date"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                <TextField
                    id="major-helperText"
                    className={classes.textBox}
                    label="What is your major?"
                    value={major}
                    onChange={setValue(setMajor)}
                    onBlur={validate(validateMajor)}
                    helperText={majorValid ? "" : ""}
                    variant="outlined"
                    error={!majorValid}
                />
            </>
        }
        </>
    )
}

export default StudentQuestions
