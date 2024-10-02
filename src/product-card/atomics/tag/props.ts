import { ISpanProps } from "@/primaries/span/props"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

interface IElementsProps {
    wrapper: {
        props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
        children: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
    }
    span: {
        props: ISpanProps
        children: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
    }
    icon: {
        props: FontAwesomeIconProps
        children: React.FC<FontAwesomeIconProps>
    }
}



export interface ITagProps  {
    elements?: Partial<IElementsProps>
    name: string
    icon: IconDefinition
}
