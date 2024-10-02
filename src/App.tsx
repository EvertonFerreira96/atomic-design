import React from 'react'
import { ProductComponent } from './product-card/preset/preset-product-card'

export const App: React.FC = () => {

  return (
    <div className='bg-background-primary w-screen h-screen p-xlarge'>
      <div className="mx-auto max-w-5xl">
        <ProductComponent />
      </div>
    </div>)
}
