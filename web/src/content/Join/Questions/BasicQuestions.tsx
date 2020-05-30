import * as React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
    

const BasicQuestions = (props) => {

    const {classes, setValue, setName, validate, validateName, 
        name, nameValid, email, setEmail, validateEmail, emailValid,  
        iAmA, setIAmA, validateIAmA, iAmAValid, amOptions, 
    } = props
    return (
        <>
             <TextField
                    id="name-helperText"
                    className={classes.textBox}
                    label="Name"
                    value={name}
                    onChange={setValue(setName)}
                    onBlur={validate(validateName)}
                    helperText={nameValid ? "" : "Name cannot be blank"}
                    variant="outlined"
                    error={!nameValid}
                    fullWidth={true}
                />
                <TextField
                    id="email-helperText"
                    className={classes.textBox}
                    label="Email"
                    value={email}
                    onChange={setValue(setEmail)}
                    onBlur={validate(validateEmail)}
                    helperText={emailValid ? "Your email is safe with us" : "Email must be valid"}
                    variant="outlined"
                    error={!emailValid}
                />
                <TextField
                    id="iAmA-helperText"
                    className={classes.textBox}
                    label={iAmA === 'other' ? "I am an" : "I am a"}
                    value={iAmA}
                    onChange={setValue(setIAmA)}
                    onBlur={validate(validateIAmA)}
                    helperText={iAmAValid ? "Choose the option that best describes you." : "An option must be selected"}
                    variant="outlined"
                    error={!iAmAValid}
                    select={true}
                >
                    {amOptions.map(option => 
                        <MenuItem key={option.value} value={option.value} className={classes.dropdownItem}>
                            {option.label}
                        </MenuItem>    
                    )}
                </TextField>
        </>
    )
}

export default BasicQuestions
