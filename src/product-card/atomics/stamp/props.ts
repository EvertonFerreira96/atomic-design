interface IElementsProps {
    wrapper: {
        props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
        children: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
    }
    image: {
        props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
        children: React.FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>
    }
}



export interface IStampProps  {
    elements?: Partial<IElementsProps>
    source: HTMLImageElement['src']
}
