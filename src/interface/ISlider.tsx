import { ReactNode } from "react";

export interface ISlide {
    child: ReactNode
    transform: string
}

export interface ISlider {
    childs: ISlide[]
}