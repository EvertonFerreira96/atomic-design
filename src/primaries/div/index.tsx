import { IDivProps } from "./props"

export const Div: React.FC<IDivProps> = ({ children, ...attrs }) => {
    return <div {...attrs}>{children}</div>
}