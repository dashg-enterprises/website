import * as React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
    

const EmploymentQuestions = (props) => {
    const { isTech, isNotScrum, isStudent, classes, amEmployed, setValue,
            setAmEmployed, validate, validateAmEmployed, amEmployedValid,
            employedOptions, jobTitle, setJobTitle, validateJobTitle, jobTitleValid
    } = props
    return (
        <>
             {isTech && !isStudent && 
                    <TextField
                        id="amEmployed-helperText"
                        className={classes.textBox}
                        label={"I am"}
                        value={amEmployed}
                        onChange={setValue(setAmEmployed)}
                        onBlur={validate(validateAmEmployed)}
                        helperText={amEmployedValid ? "" : "An option must be selected"}
                        variant="outlined"
                        error={!amEmployedValid}
                        select={true}
                    >
                        {employedOptions.map(option => 
                            <MenuItem key={option.value} value={option.value} className={classes.dropdownItem}>
                                {option.label}
                            </MenuItem>    
                        )}
                    </TextField>
                }
                {(amEmployed === 'employed' && isTech && !isStudent && isNotScrum) && 
                    <TextField
                        id="jobTitle-helperText"
                        className={classes.textBox}
                        label="What is your job title?"
                        value={jobTitle}
                        onChange={setValue(setJobTitle)}
                        onBlur={validate(validateJobTitle)}
                        helperText={jobTitleValid ? "" : ""}
                        variant="outlined"
                        error={!jobTitleValid}
                    />
                }
        </>
    )
}


export default EmploymentQuestions
