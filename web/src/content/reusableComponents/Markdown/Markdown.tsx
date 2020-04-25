import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'

interface IMarkdown {
    markdown: string;
}

const Markdown = (props: IMarkdown) => {
    const { markdown } = props
    return (
        <ReactMarkdown
            source={markdown}
            escapeHtml={false}
        />
    )
}

export default Markdown