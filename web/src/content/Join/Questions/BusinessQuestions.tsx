import * as React from 'react'
import { TextField } from '@material-ui/core'
import ChipsWithLabel from '../../reusableComponents/FormComponents/ChipsWithLabel'

const BusinessQuestions = (props) => {
    const { isBusiness, classes, companyIs, setCompanyIs, setValue,
        recruitingForListCompany, recruitingFor, addOrRemoveRecruitingForFromList,
        techProductText, techNeed, techNeeds, addOrRemoveTechNeedsFromList, teamMemberText,
        moreCompanyDetails, setMoreCompanyDetails
    } = props

    return (
        <>
            {isBusiness && <>
                <TextField
                    id="companyis-helperText"
                    className={classes.textBox}
                    label="For which company do you work?"
                    value={companyIs}
                    onChange={setValue(setCompanyIs)}
                    variant="outlined"
                />
                <div className={classes.container}>

                    <ChipsWithLabel
                        id='recruitingFor-chips-with-label'
                        inputLabel='I am looking'
                        list={recruitingForListCompany}
                        selectedList={recruitingFor}
                        addOrRemoveFromList={addOrRemoveRecruitingForFromList}

                    />
                </div>
                {(recruitingFor.includes(techProductText) || recruitingFor.includes(teamMemberText)) && <>
                    <div className={classes.container}>

                        <ChipsWithLabel
                            id='techNeeds-chips-with-label'
                            inputLabel='What kind of tech/employee do you need?'
                            list={techNeeds}
                            selectedList={techNeed}
                            addOrRemoveFromList={addOrRemoveTechNeedsFromList}

                        />
                    </div>
                    <TextField
                        id="moreCompanyDetails-helperText"
                        className={classes.textBox}
                        label="Please provide more details on what you are looking for:"
                        value={moreCompanyDetails}
                        onChange={setValue(setMoreCompanyDetails)}
                        variant="outlined"
                        multiline
                        rows={3}
                        rowsMax={5}
                    />
                </>}
            </>}
        </>
    )
}

export default BusinessQuestions
