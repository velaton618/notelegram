import { FC, ReactNode, useEffect, useState } from "react"
import s from "./SlideContainer.module.sass"
import { ISlide, ISlider } from "../../interface/ISlider"
import SlideSegment from "../SlideSegment/SlideSegment"
 

interface IProps {
    config: ISlider
    updateState: number
    setUpdateState: (e:any) => any
}

const SlideContainer: FC<IProps> = ({config, updateState, setUpdateState}) => {

    const [activeSlide, setActiveSlide] = useState<number>(0)
    const [scrollTimeout, setScrollTimeout] = useState<any>(null)

    const handleScroll = (e:any) => {
        if(Math.sign(e.deltaY) !== -1) {
            return setActiveSlide(prev => {
                setUpdateState(prev + 1 < config.childs.length ? prev+1 : prev)
                return prev + 1 < config.childs.length ? prev+1 : prev
            })
        }
        setActiveSlide(prev => {
            setUpdateState(prev - 1 >= 0 ? prev-1 : prev)
            return prev - 1 >= 0 ? prev-1 : prev
        })
      };
    
      useEffect(() => {
        
            const handleWheel = (e: WheelEvent) => {
                clearTimeout(scrollTimeout)
                const tid = setTimeout(() => {
                    handleScroll(e)
                }, 200)
                setScrollTimeout(tid)
            };
      
          window.addEventListener("wheel", handleWheel);
      
          return () => {
            window.removeEventListener("wheel", handleWheel);
          };
      }, [scrollTimeout]);

      useEffect(() => {
        setActiveSlide(updateState)
      }, [updateState])


    return (
        <div className={s.SlideContainer}>
            {
                config.childs.map((el:ISlide, index:number) => {
                    return <SlideSegment transform={el.transform} active={activeSlide} index={index} key={index}>{el.child}</SlideSegment>
                })
            }
            
        </div>
    )
}

export default SlideContainer