import * as React from 'react'
import SliderWithLabel from '../../reusableComponents/FormComponents/SliderWithLabel'
import ChipsWithLabel from '../../reusableComponents/FormComponents/ChipsWithLabel'

const CodeProficiency = (props) => {
    const { isTech, classes,
        proficiencyLevels, codeProficiency, setCodeProficiency,
        languages, languagesList, addOrRemoveLanguagesFromList,
        tools, toolsList, addOrRemoveToolsFromList, isRecruiter
    } = props

    let proficiencyText = isTech ? `Code proficiency:` : `Code proficiency of candidate:`

    let langText = isRecruiter ? `Candidate must have this skillset` : `Known Languages`
    let toolText = isRecruiter ? `Candidate must have experience with these tools` : `Known Tools`

    return (
        <>
            {(isTech || isRecruiter) &&
                <div className={classes.container}>
                    <SliderWithLabel
                        id={'code proficiency slider'}
                        inputLabel={`${proficiencyText} ${proficiencyLevels[codeProficiency]}`}
                        step={1}
                        min={0}
                        max={4}
                        value={codeProficiency}
                        setValue={setCodeProficiency}
                    />
                </div>
            }
            {codeProficiency > 0 &&
                <>
                    <div className={classes.container}>
                        <ChipsWithLabel
                            id='lang-chips-with-label'
                            inputLabel={langText}
                            list={languagesList}
                            selectedList={languages}
                            addOrRemoveFromList={addOrRemoveLanguagesFromList}

                        />
                    </div>
                    <div className={classes.container}>
                        <ChipsWithLabel
                            id='tool-chips-with-label'
                            inputLabel={toolText}
                            list={toolsList}
                            selectedList={tools}
                            addOrRemoveFromList={addOrRemoveToolsFromList}

                        />
                    </div>
                </>
            }
        </>
    )
}

export default CodeProficiency