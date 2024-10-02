import React from "react"
import { IBadgeProps } from "./props"
import { Div, Span } from "../../../primaries"



export const Badge: React.FC<IBadgeProps> = ({ name, elements, ...attrs }) => {

    Div.prototype = elements?.wrapper?.props
    const Wrapper = elements?.wrapper?.children || Div

    const Name = elements?.span?.children || Span
    Span.prototype = elements?.span?.props

    return (
        <Wrapper className="overflow-hidden bg-background-brand-secondary-default rounded-tight gap-xsmall-10 flex items-center p-xsmall-20" {...attrs} {...elements?.wrapper?.props}>
            <Name className="text-content-primary-on-dark font-system leading-normal text-200 font-regular">{name}</Name>
        </Wrapper>)
} 