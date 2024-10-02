import React from "react"
import { ITagProps } from "./props"
import { Div, Icon, Span } from "../../../primaries"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const Tag: React.FC<ITagProps> = ({ icon, name, elements, ...attrs }) => {

    Div.prototype = elements?.wrapper?.props
    const Wrapper = elements?.wrapper?.children || Div

    const Figure = elements?.icon?.children || FontAwesomeIcon
    Icon.prototype = elements?.icon?.props

    const Name = elements?.span?.children || Span
    Span.prototype = elements?.span?.props

    return (
        <Wrapper className="overflow-hidden bg-background-positive-lightest rounded-tight gap-xsmall-10 flex items-center p-xsmall-20" {...attrs} {...elements?.wrapper?.props}>
            <Figure icon={icon} className="text-content-primary" {...elements?.icon.props} />
            <Name className="font-system leading-normal text-200 font-regular">{name}</Name>
        </Wrapper>)
} 