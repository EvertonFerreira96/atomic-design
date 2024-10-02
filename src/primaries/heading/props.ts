interface IElementsProps {
    heading?: {
        props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
        children?: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
    } 
}
export interface IHeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    type?: 'h1' | 'h2'| 'h3' | 'h4' | 'h5' 
    elements?: Partial<IElementsProps>
}