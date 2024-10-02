import { IIconProps } from "./props"

export const Icon: React.FC<IIconProps> = ({ ...attrs }) => {
    return <span {...attrs}></span>
}