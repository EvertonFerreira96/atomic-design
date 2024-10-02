import React from "react"
import { IStampProps } from "./props"
import { Div, Img } from "../../../primaries"



export const Stamp: React.FC<IStampProps> = ({ source, elements, ...attrs }) => {

    Div.prototype = elements?.wrapper?.props
    const Wrapper = elements?.wrapper?.children || Div

    Img.prototype = elements?.image?.props
    const Image = elements?.image?.children || Img

    return (
        <Wrapper className="w-xlarge-20 h-xlarge-20 rounded-pill overflow-hidden" {...attrs} {...elements?.wrapper?.props}>
            <Image className="w-full h-full object-center" src={source}  {...elements?.image.props} />
        </Wrapper>)
} 