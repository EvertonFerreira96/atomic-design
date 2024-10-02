import React from "react"
import { IHeadingProps } from "./props"
import { H1, H2, H3, H4, H5 } from "./hs"

const headings = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5
}

export const Heading: React.FC<IHeadingProps> = ({ children, type, elements, ...attrs }) => {

    const Heading = elements?.heading?.children || headings[type || 'h2']

    return (<Heading {...attrs}>{children}</Heading>)
} 