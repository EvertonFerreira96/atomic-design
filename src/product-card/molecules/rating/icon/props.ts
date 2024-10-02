import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

interface IElementsProps {
    wrapper: {
        props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
        children: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
    }
    icon: {
        props: FontAwesomeIconProps
        children: React.FC<FontAwesomeIconProps>
    }
}



export interface IRatingProps  {
    elements?: Partial<IElementsProps>
    icon?: IconDefinition
    amount?: {
        active?: number
        total?: number
    },
    pallete?: {
        active?: React.HTMLAttributes<HTMLDivElement>['className']
        inactive?: React.HTMLAttributes<HTMLDivElement>['className']
    }
}
