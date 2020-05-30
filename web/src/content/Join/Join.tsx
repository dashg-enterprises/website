import * as React from 'react'
import { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import * as moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../reusableComponents/Section/Section'
import CodeProficiency from './Questions/CodeProficiency'
import BusinessQuestions from './Questions/BusinessQuestions'
import RecruiterQuestions from './Questions/RecruiterQuestions'
import StudentQuestions from './Questions/StudentQuestions'
import EmploymentQuestions from './Questions/EmploymentQuestions'
import BasicQuestions from './Questions/BasicQuestions'

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

    buttonGrid: {
        marginTop: `20px`,
        width: '500px',
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

        },
        buttonGrid: {
            width: '80%',

        }
    }
}))

interface IJoin {
    submitJsonPayload: (payload: object) => void;
}

const Join = (props: IJoin) => {

    const classes = useStyles()
    const { submitJsonPayload } = props

    // **********************************************************************************************
    // BASIC QUESTION HOOKS    
    // **********************************************************************************************

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

    // **********************************************************************************************
    // EMPLOYMENT QUESTION HOOKS 
    // **********************************************************************************************

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


    // **********************************************************************************************
    // STUDENT QUESTIONS HOOKS    
    // **********************************************************************************************

    const [selectedDate, handleDateChange] = useState(moment());

    const [major, setMajor] = useState('')
    const [majorValid, setMajorValid] = useState(true)
    
    const validateMajor = (value) => {
        const isValid = !!value.length
        setMajorValid(isValid)
    }  
    
    // **********************************************************************************************
    // RECRUITER QUESTIONS HOOKS    
    // **********************************************************************************************

    const [recruitFor, setRecruitFor] = useState('')

    const candidateText = 'for (a) candidate(s)'
    const techProductText = 'for (a) tech product(s)'
    const teamMemberText = 'to add team members'


    const [recruitingFor, setRecruitingFor] = useState([])
    const recruitingForList = [ 
        candidateText, 'to stay in the loop',
    ]

    const recruitingForListCompany = [
        techProductText, teamMemberText,
    ]

    recruitingForList.push('something else')
    recruitingForListCompany.push('more information')

    const addOrRemoveRecruitingForFromList = (val) => {
        const reasons = [...recruitingFor]

        if (reasons.includes(val)) {
            const index = reasons.indexOf(val);
            if (index > -1) {
                reasons.splice(index, 1);
            }
        }
        else {
            reasons.push(val)
        }
        setRecruitingFor(reasons)
    }
    
    // **********************************************************************************************
    // BUSINESS QUESTIONS HOOKS    
    // **********************************************************************************************

    const [companyIs, setCompanyIs] = useState('')

    const [techNeed, setTechNeed] = useState([])
    const techNeeds = ['Website', 'Database', 'API Services', 'Mobile']

    techNeeds.push('Other')

    const addOrRemoveTechNeedsFromList = (val) => {
        const need = [...techNeed]

        if (need.includes(val)) {
            const index = need.indexOf(val);
            if (index > -1) {
                need.splice(index, 1);
            }
        }
        else {
            need.push(val)
        }
        setTechNeed(need)
    }


    const [moreCompanyDetails, setMoreCompanyDetails] = useState('')

    // **********************************************************************************************
    // CODE PROFICIENCY HOOKS
    // **********************************************************************************************


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

    // **********************************************************************************************
    // HELPERS
    // **********************************************************************************************


    const isTech =  iAmA !== 'recruiter' && iAmA !== 'business' && iAmA !== ''
    const isNotScrum =  iAmA !== 'sm' &&  iAmA !== 'po'
    const isStudent =  iAmA === 'student'
    const isRecruiter =  iAmA === 'recruiter'
    const isBusiness =  iAmA === 'business'

    let showButton = name && nameValid && email && emailValid && iAmA && iAmAValid

    // if (isStudent) showButton = showButton && major && majorValid
    if (isRecruiter) showButton = showButton && (recruitingFor.length > 0)
    if (isBusiness) showButton = showButton && (recruitingFor.length > 0)

    const setValue = (setter) => (event) => {
        setter(event.target.value)
    } 
    
    const validate = (validator) => (event) => {
        validator(event.target.value)
    }

    const jsonPayload = {
        name, 
        email,
        iAmA,
        amEmployed, 
        jobTitle,
        graduationDate: selectedDate,
        major,
        recruitFor,
        recruitingFor,
        companyIs,
        techNeed,
        moreCompanyDetails,
        codeProficiency,
        languages,
        tools,

    }
    
    return (
        <div id='join'>
            <Section title={'Tell us about yourself!'}>
                <Grid
                    id='question-container'
                    container
                    direction="column"
                    alignItems="center"
                >
                    <>
                        <BasicQuestions
                            classes={classes}
                            setValue={setValue}
                            setName={setName}
                            name={name}
                            validate={validate}
                            validateName={validateName}
                            nameValid={nameValid}
                            email={email}
                            setEmail={setEmail}
                            validateEmail={validateEmail}
                            emailValid={emailValid}
                            iAmA={iAmA}
                            setIAmA={setIAmA}
                            validateIAmA={validateIAmA}
                            iAmAValid={iAmAValid}
                            amOptions={amOptions}
                        />
                        <EmploymentQuestions
                            isTech={isTech}
                            isNotScrum={isNotScrum}
                            isStudent={isStudent}
                            classes={classes}
                            amEmployed={amEmployed}
                            setValue={setValue}
                            setAmEmployed={setAmEmployed}
                            validate={validate}
                            validateAmEmployed={validateAmEmployed}
                            amEmployedValid={amEmployedValid}
                            employedOptions={employedOptions}
                            jobTitle={jobTitle}
                            setJobTitle={setJobTitle}
                            validateJobTitle={validateJobTitle}
                            jobTitleValid={jobTitleValid}
                        />
                        <StudentQuestions
                            isStudent={isStudent}
                            classes={classes}
                            selectedDate={selectedDate}
                            handleDateChange={handleDateChange}
                            major={major}
                            setValue={setValue}
                            setMajor={setMajor}
                            validate={validate}
                            validateMajor={validateMajor}
                            majorValid={majorValid}
                        />
                        <RecruiterQuestions 
                            classes={classes}
                            isRecruiter={isRecruiter}
                            recruitFor={recruitFor}
                            setValue={setValue}
                            setRecruitFor={setRecruitFor}
                            recruitingFor={recruitingFor}
                            recruitingForList={recruitingForList}
                            addOrRemoveRecruitingForFromList={addOrRemoveRecruitingForFromList}
                        />
                        <BusinessQuestions
                            isBusiness={isBusiness}
                            classes={classes}
                            companyIs={companyIs}
                            setCompanyIs={setCompanyIs}
                            setValue={setValue}
                            recruitingForListCompany={recruitingForListCompany}
                            recruitingFor={recruitingFor}
                            addOrRemoveRecruitingForFromList={addOrRemoveRecruitingForFromList}
                            techProductText={techProductText}
                            techNeed={techNeed}
                            techNeeds={techNeeds}
                            addOrRemoveTechNeedsFromList={addOrRemoveTechNeedsFromList}
                            teamMemberText={teamMemberText}
                            moreCompanyDetails={moreCompanyDetails}
                            setMoreCompanyDetails={setMoreCompanyDetails}
                        />
                        <CodeProficiency
                            isTech={isTech && !isBusiness}
                            isRecruiter={isRecruiter && recruitingFor.includes(candidateText)}
                            classes={classes}
                            proficiencyLevels={proficiencyLevels}
                            codeProficiency={codeProficiency}
                            setCodeProficiency={setCodeProficiency}
                            languages={languages}
                            languagesList={languagesList}
                            addOrRemoveLanguagesFromList={addOrRemoveLanguagesFromList}
                            tools={tools}
                            toolsList={toolsList}
                            addOrRemoveToolsFromList={addOrRemoveToolsFromList}
                        />
                    </>
                    {showButton && <Grid
                        className={classes.buttonGrid}
                    >

                        <Button
                            variant="contained" 
                            color="primary"
                            size="large"
                            fullWidth={true}
                            onClick={() => submitJsonPayload(jsonPayload)}
                        >
                            Submit

                        </Button>
                    </Grid>}

                </Grid>
            </Section>
            <div>
        </div>
    </div>)
}

export default Join