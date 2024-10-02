import { Heading } from "../../primaries/heading";
import { Action } from "../molecules/actions";
import { Rating } from "../molecules/rating/icon";
import { Section } from "./section";
import { Stamp } from "./stamp";
import { Thumbnail } from "../molecules/thumbnail";
import { Wrapper } from "./wrapper";
import * as Primaries from '../../primaries'
import { Tag } from "./tag";
import { Badge } from "./badge";


export const Product = {
    Wrapper,
    Thumbnail,
    Section,
    Stamp,
    Action,
    Rating,
    Heading,
    Tag,
    Badge,
    ...Primaries
}