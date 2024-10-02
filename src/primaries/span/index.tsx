import { ISpanProps } from "./props";

export const Span: React.FC<ISpanProps> = ({ children, ...attrs }) => <span {...attrs}>{children}</span>