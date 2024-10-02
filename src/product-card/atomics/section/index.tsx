import React from "react"
import { ISectionProps } from "./props"
import { Div } from "../../../primaries"



export const Section: React.FC<ISectionProps> = ({ children, ...attrs }) => {
    return <Div className="relative" {...attrs}>{children}</Div>
} 