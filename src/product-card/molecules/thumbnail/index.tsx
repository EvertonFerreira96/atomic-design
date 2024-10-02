import React from "react"
import { IThumbnailProps } from "./props"
import { Div, Img } from "../../../primaries"



export const Thumbnail: React.FC<IThumbnailProps> = ({ source, elements, ...attrs }) => {

    const Wrapper = elements?.wrapper?.children || Div
    Div.prototype = attrs

    const Image = elements?.image?.children || Img
    Img.prototype = elements?.image?.props

    return (
        <Wrapper>
            {elements?.wrapper?.props?.children}
            <Image className="w-full h-full object-cover" src={source} {...elements?.image?.props} />
        </Wrapper>)
} 