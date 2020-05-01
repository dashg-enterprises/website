import * as React from 'react'
import { useState } from 'react'
import { TextField, Grid, MenuItem } from '@material-ui/core';
import * as moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Section from '../reusableComponents/Section/Section';
import ChipsWithLabel from '../reusableComponents/FormComponents/ChipsWithLabel';
import SliderWithLabel from '../reusableComponents/FormComponents/SliderWithLabel';
import { DatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    textBox: {
        margin: '10px',
        width: '500px',
        textAlign: 'left',
    },
    container: {
        textAlign: 'left',
        width: `460px`,
        marginBottom: `10px`,
    },
    containerWithoutMargin: {
        textAlign: 'left',
        width: `460px`,
    },
    dropdownItem: {
        color: '#222222'
    },
    [`@media (max-width: 500px)`]: {
        textBox: {

            width: '80%',
        },
        container: {
            width: '80%',

        }, 
        containerWithoutMargin: {
            width: '80%',

        }
    }
}))

interface IJoin {

}

const Join = (props: IJoin) => {

    const classes = useStyles()

    const [name, setName] = useState('')
    const [nameValid, setNameValid] = useState(true)
    
    const validateName = (value) => {
        const isValid = !!value.length 
        setNameValid(isValid)
    }

    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(true)
    
    const validateEmail = (value) => {
        const isValid = !!value.length && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        setEmailValid(isValid)
    }
    
    const [iAmA, setIAmA] = useState('')
    const [iAmAValid, setIAmAValid] = useState(true)
    const amOptions = [
        {value: 'dev', label: 'Developer'},
        {value: 'qa', label: 'Quality Assurance Engineer'},
        {value: 'sm', label: 'Scrum Master'},
        {value: 'po', label: 'Product Owner/Manager'},
        {value: 'recruiter', label: 'Recruiter'},
        {value: 'student', label: 'Student'},
        {value: 'business', label: 'Business Owner/Manager'},
        {value: 'other', label: 'Other'},
    ]
    
    const validateIAmA = (value) => {
        const isValid = !!value.length
        setIAmAValid(isValid)
    }

    const [amEmployed, setAmEmployed] = useState('')
    const [amEmployedValid, setAmEmployedValid] = useState(true)
    const employedOptions = [
        {value: 'employed', label: 'Employed'},
        {value: 'umemployed', label: 'Unemployed'},
    ]
    
    const validateAmEmployed = (value) => {
        const isValid = !!value.length
        setJobTitle('')
        setAmEmployedValid(isValid)
    }

    const [jobTitle, setJobTitle] = useState('')
    const [jobTitleValid, setJobTitleValid] = useState(true)
    
    const validateJobTitle = (value) => {
        const isValid = !!value.length
        setJobTitleValid(isValid)
    }

    const [codeProficiency, setCodeProficiency] = useState(0)
    const proficiencyLevels = ['None', 'Novice', 'Intermediate', 'Advanced', 'Master']

    const [languages, setLanguages] = useState([])
    const languagesList = [ 
        'HTML', 'C', 'SQL', 'Python', 'C++', 'Java', 'Bash/Shell/Powershell', 
        'Visual Basic.NET', 'CSS', 'C#', 'Visual tools', 'JavaScript', 'Swift', 
        'PHP', 'Ruby', 'TypeScript', 'Kotlin', 'Objective C', 'Fortran', 'MATLAB', 'Go',
    ].sort()

    languagesList.push('Other')

    const addOrRemoveLanguagesFromList = (val) => {
        const langs = [...languages]

        if (langs.includes(val)) {
            const index = langs.indexOf(val);
            if (index > -1) {
                langs.splice(index, 1);
            }
        }
        else {
            langs.push(val)
        }
        setLanguages(langs)
    }

    const [tools, setTools] = useState([])
    const toolsList = [ 
        'Visual Studio Code','Postman','Visual Studio','Docker','Git','Sublime Text',
        'IntelliJ IDEA','Command Line','PhpStorm','Oh My Zsh','Slack','Chrome DevTools',
        'iTerm2','Atom','Android Studio','PyCharm','Unity','Azure','Trello','Xcode','Eclipse IDE','Jira',    
    ].sort()

    toolsList.push('Other')

    const addOrRemoveToolsFromList = (val) => {
        const toolsClone = [...tools]

        if (toolsClone.includes(val)) {
            const index = toolsClone.indexOf(val);
            if (index > -1) {
                toolsClone.splice(index, 1);
            }
        }
        else {
            toolsClone.push(val)
        }
        setTools(toolsClone)
    }


    const [selectedDate, handleDateChange] = useState(moment());


    // *******************************************

    const isTech =  iAmA !== 'recruiter' && iAmA !== 'business' && iAmA !== ''
    const isStudent =  iAmA === 'student'

    const setValue = (setter) => (event) => {
        setter(event.target.value)
    } 
    
    const validate = (validator) => (event) => {
        validator(event.target.value)
    }
    
    return (
        <div id='form-container'>
            <Section title={'Tell us about yourself!'}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                >
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
                {isTech && 
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
                {(amEmployed === 'employed' && isTech) && 
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
                {(isTech) &&
                    <div className={classes.container}>
                        <SliderWithLabel
                            id={'code proficiency slider'}
                            inputLabel={`Code Proficiency: ${proficiencyLevels[codeProficiency]}`}
                            step={1}
                            min={0}
                            max={4}
                            value={codeProficiency}
                            setValue={setCodeProficiency}
                        />
                    </div>
                }
                {isStudent && 
                    <DatePicker
                        autoOk                       
                        className={classes.textBox}
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        views={["year", "month"]}
                        label="Graduation Date"
                        helperText="Choose your approximation graduation month and year"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />

                }
                {codeProficiency > 0 && 
                    <>
                        <div className={classes.container}>
                            <ChipsWithLabel 
                                id='lang-chips-with-label'
                                inputLabel='Languages'
                                list={languagesList}
                                selectedList={languages}
                                addOrRemoveFromList={addOrRemoveLanguagesFromList}

                            />
                        </div>
                        <div className={classes.container}>
                            <ChipsWithLabel 
                                id='tool-chips-with-label'
                                inputLabel='Tools'
                                list={toolsList}
                                selectedList={tools}
                                addOrRemoveFromList={addOrRemoveToolsFromList}

                            />
                        </div>
                    </>
                }
                
                </Grid>
            </Section>
           

            <div>
            languages - chips choose many

            tools - chips choose many


            I recruit for - text input

            I - am looking for a candidate / want to stay in the loop - chips choose 1

            what skills are you looking for (reuse languages and tools)

            I graduate - mth dropdown, year dropdown

            My major is - text input


            I am - looking for a tech product / looking to add members to my team / interested in what you are doing = chips chose 1

            What kind of tech product / employee are you lookng for (chips, choose manu)

            provide more details about the product/employee you are looking for 
            
            </div>


        </div>
    )
}

export default Join
