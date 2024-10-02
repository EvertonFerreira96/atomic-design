import { IImgProps } from "./props"

export const Img: React.FC<IImgProps> = ({ children, ...attrs }) => {
    return <img {...attrs} >{children}</img>
}