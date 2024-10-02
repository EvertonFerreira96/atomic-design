import { Product } from "../atomics"
import { faHeart } from '@fortawesome/pro-light-svg-icons'
import { Heading } from '../../primaries/heading'
import { faShieldCheck } from '@fortawesome/pro-regular-svg-icons'
import { Div, Img, Span } from '../../primaries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/pro-solid-svg-icons'
import { ISectionProps } from '../atomics/section/props'
import { IRatingProps } from '../molecules/rating/icon/props'
import { ISpanProps } from '@/primaries/span/props'
import { IHeadingProps } from '@/primaries/heading/props'
import { ITagProps } from '../atomics/tag/props'
import { IBadgeProps } from '../atomics/badge/props'


const ModeType = {
    horizontal: 'horizontal',
    vertical: 'vertical'
}

const modes = {
    horizontal: {
        maxWidht: 330,
        thumbnail: 'max-w-xlarge-50',
        layout: 'horizontal',
        direction: 'flex-row',
        order: 'flex-col-reverse gap-xsmall',
        rounded: '',
        border: ''
    },
    vertical: {
        maxWidht: 220,
        thumbnail: '',
        layout: 'vertical',
        order: 'flex-col',
        direction: 'flex-col',
        rounded: 'rounded-medium',
        border: ' border-border-minimum'
    }

}


const VideoPlayer: React.FC = () => <Div className='flex flex-1 justify-center items-center h-xlarge-60'> <FontAwesomeIcon icon={faPlayCircle} /> </Div>

interface ModuleInfoProductProps {
    elements?: {
        wrapper: ISectionProps
        heading: IHeadingProps
        rating: {
            wrapper: ISectionProps
            stars: IRatingProps
            amount: ISpanProps
        }
        tag: ITagProps,


    }
}

interface ModuleInfoPriceProps {

    previousPrice: string
    currentPrice: string
    discount: string

    elements?: {
        wrapper: ISectionProps

        price: {
            previous: {
                beforePrice: ISectionProps
                afterPrice: ISpanProps
                discount: IBadgeProps
            }
            currentPrice: ISpanProps
        }

    }
}

interface ProductCompositionComponentProps {
    info: ModuleInfoProductProps
    prices: ModuleInfoPriceProps[]
    actions: []
}

export const ProductCompositionComponent: React.FC<ProductCompositionComponentProps> = ({ prices, actions, info }: ProductCompositionComponentProps) => {

    const mode = modes[ModeType.vertical]

    const WrapperThumbail = mode === ModeType.vertical ? Product.Section : Product.Section

    return (
        <Product.Wrapper className={`overflow-hidden ${mode.rounded} bg-background-primary border-border-mini border-small relative ${mode.border} flex ${mode.direction}`} style={{ maxWidth: mode.maxWidht }}>

            <WrapperThumbail>
                <Product.Section className="absolute flex flex-1 justify-between w-full h-full" >
                    <Product.Section className='p-small flex flex-col gap-xsmall-10 h-full justify-between'>
                        <Product.Stamp source='https://brasil.orbia.ag/accrual/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fsatelital-resources%2Fselos%2F63%2F6330092024214943em-breve-selo-removebg-preview-12b0cd.png&w=1920&q=75' />
                        <Product.Stamp source='https://brasil.orbia.ag/accrual/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fsatelital-resources%2Fselos%2F63%2F6330092024214943em-breve-selo-removebg-preview-12b0cd.png&w=1920&q=75' />
                    </Product.Section>
                    <Product.Section className='p-small flex flex-col gap-xsmall-10'>
                        <Product.Action.Icon icon={faHeart} />
                        <Product.Action.Icon icon={faHeart} />
                    </Product.Section>
                </Product.Section>

                <Product.Section className={`border-b-small  ${mode.border} justify-center flex ${mode.thumbnail}`}>
                    <Product.Thumbnail source="https://static.orbia.ag/products/96415_0_9ac1a861-8063-42a6-af7a-0cd8ed7658ed_Big.webp" elements={{
                        image: { children: VideoPlayer },
                        wrapper: { props: { className: 'h-xlarge-60' } },
                    }} />
                </Product.Section>
            </WrapperThumbail>

            <Product.Section className="w-full flex-col p-small gap-xsmall-20 justify-start items-start flex flex-1">

                <Product.Section className={`flex ${mode.order}`}>
                    <Heading className="line-clamp-2 break-words leading-large text-300 font-system font-bold">Pneu 750/65R26 Optitrac 166A8 TL R1W Titan, 1x1un Optitrac 166A8 TL R</Heading>

                    <Product.Section className="flex w-full flex-row gap-xsmall-20 text-center items-center">
                        <Product.Rating amount={{ active: 3 }} />
                        <Product.Span className='break-words leading-normal text-100 font-system font-regular text-content-secondary'>97</Product.Span>
                    </Product.Section>
                    <Product.Tag name='Compra Segura' icon={faShieldCheck} />
                </Product.Section>




                {prices?.map(i =>

                    <Product.Section className='mt-xsmall-20'>
                        <Product.Section className="flex w-full flex-row gap-xsmall-20 text-center items-center">
                            <Product.Span className='break-words leading-normal text-200 font-system font-regular text-content-secondary'>De</Product.Span>
                            <Product.Span className='break-words leading-normal text-200 font-system font-regular text-content-secondary line-through'>R$ 90,95</Product.Span>
                            <Product.Badge name='-10%' />
                        </Product.Section>
                        <Product.Span className='font-bold font-system text-500 text-content-primary'>R$ 90,95</Product.Span>
                    </Product.Section>
                )}

            </Product.Section>
        </Product.Wrapper>

    )
}


