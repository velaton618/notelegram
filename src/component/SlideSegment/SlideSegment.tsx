import { FC, ReactNode, useEffect, useState } from "react"
import s from "./SlideSegment.module.sass"

interface IProps {
    children: ReactNode
    index:number
    active:number
    transform: string
}

const SlideSegment: FC<IProps> = ({children, index, active, transform}) => {

    const [left, setLeft] = useState<number>(index)
    const [segmentActive, setSegmentActive] = useState<boolean>(false)
    const [even, setEven] = useState<boolean>(false)

    useEffect(() => {
        if(active === index) setSegmentActive(true) 
        else setSegmentActive(false)
        setLeft(index)
    }, [index, active])

    useEffect(() => {
        if(index%2===0) return setEven(false)
        setEven(true)
    }, [index])

    return (
        <div className={`${s.SlideSegmentWrapper} ${segmentActive ? s.Active : s.Inactive}`} style={{
            position: 'absolute',
            //left: `${active===index+1 && even ? "-" : ""}${window.innerWidth}px`,
            left: `${transform}`,
            top: `${active===index+1 ? "-" : ""}${active===index+1 ? (window.innerHeight) : active === index ? 0 : (window.innerHeight*2)}px`
        }}> 
            <div className={s.SliderSegmentContent}>
                {children}
            </div>
        </div>
    )
}

export default SlideSegment