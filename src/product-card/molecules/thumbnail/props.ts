import { HtmlProperties } from "@/product-card/types";

  interface IElementsProps {
        wrapper: {
            props?:  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            children?: HtmlProperties;
        }
        image: {
            props?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
            children?: HtmlProperties;
        }
}


export interface IThumbnailProps {
    elements?: Partial<IElementsProps>
    source: HTMLImageElement['src']
}

