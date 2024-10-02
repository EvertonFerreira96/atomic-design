import React from "react"
import { IWrapperProps } from "./props"
import { Div } from "../../../primaries"



export const Wrapper: React.FC<IWrapperProps> = ({ children, ...attrs }) => {
    return <Div x-dt-name="Wrapper" className="rounded-medium" {...attrs}>{children}</Div>
} 