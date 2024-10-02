import React from "react"
import { IRatingProps } from "./props"
import { Div } from "../../../../primaries"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/pro-solid-svg-icons";


const defaults = {
    total: 5,
    pallete: {
        active: 'text-content-brand-primary-default',
        inactive: 'text-content-disabled'
    }
}


export const Rating: React.FC<IRatingProps> = ({ icon, elements, amount, pallete }) => {

    const theme = {
        active: `${pallete?.active} ${defaults.pallete.active}`,
        inactive: `${pallete?.inactive} ${defaults.pallete.inactive}`
    }
    const items = {
        total: amount?.total || defaults.total,
        active: (amount?.active - 1) || -1
    }



    Div.prototype = elements?.wrapper?.props
    const Wrapper = elements?.wrapper?.children || Div

    const Figure = elements?.icon?.children || FontAwesomeIcon
    Figure.prototype = elements?.icon?.props


    const setClassNameThroughIdx = (idx: number, attr: number, rule = (i: number, attr: number) => i <= attr) => rule(idx, attr) ? theme.active : theme.inactive

    return (
        <Wrapper className="flex items-center gap-[2px]"  {...elements?.wrapper?.props}>
            {Array.from({ length: items.total }).map((_, i) =>
                <FontAwesomeIcon icon={icon || faStar} className={setClassNameThroughIdx(i, items.active)} />)}
        </Wrapper>)
}


