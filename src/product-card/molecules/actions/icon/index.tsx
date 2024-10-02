import React from "react"
import { IActionIconProps } from "./props"
import { Div, Icon } from "../../../../primaries"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ActionIcon: React.FC<IActionIconProps> = ({ icon, elements, ...attrs }) => {

    const Wrapper = elements?.wrapper?.children || Div
    Div.prototype = elements?.wrapper?.props

    const Figure = elements?.icon?.children || FontAwesomeIcon
    Icon.prototype = elements?.icon?.props



    return (
        <Wrapper className="w-xlarge-20 h-xlarge-20 rounded-pill overflow-hidden flex justify-center items-center shadow-raised-inverse bg-background-primary" {...attrs} {...elements?.wrapper?.props}>
            <Figure icon={icon} {...elements?.icon?.props} />
        </Wrapper>)
}


