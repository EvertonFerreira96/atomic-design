import React from 'react';
import { ProductCompositionComponent } from '../compositions/product-card';
import { ValueOf } from '~/@types/global/ValueOf';

export const ProductType = {
    'merchandise': 'merchandise',
    'budget': 'budget',
    'service': 'service',
    'insurance': 'insurance',
    'combo': 'combo',
    'grouped': 'grouped',
    'personalized': 'personalized',
    'points': 'points',
}

interface ProductComponentProps {
    segment: 'OrbiaClube' | 'OrbiaCompra',
    type: ValueOf<typeof ProductType>
}

export const ProductComponent:
    React.FC<ProductComponentProps> = ({ type = ProductType.merchandise }) => {
        return <ProductCompositionComponent prices={
            type === ProductType.budget ? [] : [
                {
                    currentPrice: '23131231',
                    previousPrice: '1231231231',
                    discount: '123%'
                },
                {
                    currentPrice: '23131231',
                    previousPrice: '1231231231',
                    discount: '123%'
                }
            ]} actions={[]} info={{

            }} />
    }
