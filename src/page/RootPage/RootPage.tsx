
import SlideContainer from "../../component/SlideContainer/SlideContainer"
import s from "../../component/SlideSegment/SlideSegment.module.sass"
import qr from "../../resource/qs.png"
import { useState } from "react"


const RootPage = () => {
    
    const [updateState, setUpdateState] = useState<number>(0)
    const [pnm, setPnm] = useState<string>("")

    return (
        <div> 
            <SlideContainer
                updateState={updateState}
                setUpdateState={setUpdateState}
                config={{
                    childs: [
                        {
                            child: <div className={s.SliderSegmentWIAContainer}>
                                <div className={s.WIAContent}>
                                    <div className={s.WiaPhys}>
                                        
                                        <h1>Log in to <span className="prim_c">NoTelegram</span> by QR Code</h1>
                                        <div className={s.WiaContext}>
                                            <span className={`${s.p1} ${s.p_main}`} style={{
                                    transform: `translateX(-${window.innerHeight}px)`,
                                            }}>1. Open Telegram on your phone</span>
                                            <span className={`${s.p2} ${s.p_main}`}style={{
                                    transform: `translateX(-${window.innerHeight}px)`,
                                            }}>2. Go to <b ><span className="prim_c"> Settings</span> {">"} <span className="prim_c">Devices</span> {">"} <span className="prim_c">Link Desktop Device</span></b> </span>
                                            <span className={`${s.p3} ${s.p_main}`}style={{
                                    transform: `translateX(-${window.innerHeight}px)`,
                                            }}>3. Point your phone at this screen to confirm login</span>
                                        </div>
                                        <button onClick={() => setUpdateState(1)} className={s.NextBtn} style={{
                                    transform: `translateX(-${window.innerHeight}px)`,
                                            }}>Log in by Phone Number →</button>
                                    </div>
                                </div>
                                <div className={s.ImgContainer}>
                                    <div className={s.ImageWrap}>
                                        <img src={qr} alt="" draggable="false" className={s.IMG}/>
                                    </div>
                                </div>
                            </div>,
                            transform: `-${window.innerWidth}px`
                        },
                        {
                            child: <div className={s.SliderSegmentWIIContainer}>
                                <h1 className={s.WIITitle}>
                                    <button onClick={() => setUpdateState(0)} className={s.NextBtn}>← Log in by QR Code</button>
                                    <span>Sign in to <span className="prim_c">NoTelegram</span></span>
                                </h1>
                                <p className={s.WIIPS}>
                                        <span className={s.W1} style={{
                                    transform: `translateX(${window.innerHeight}px)`,
                                            }}>Please confirm your country code</span>
                                        <span className={s.W2}style={{
                                    transform: `translateX(${window.innerHeight}px)`,
                                            }}>and enter your phone number.</span>
                                    </p>
    
                                <div className={s.WIIContent}>
                                    <p className={s.P1} style={{
                                        transform: `translateX(${window.innerHeight}px)`,
                                    }}>
                                        <div className="input_outline"><input className="input" onChange={(e) => setPnm(e.target.value)} placeholder="Phone Number"/></div>
                                    </p>
                                    <p className={s.P2} style={{
                                        transform: `translateX(${window.innerHeight}px)`,
                                    }}>
                                        <button onClick={() => setUpdateState(2)} className={s.NextBtn}>← Confirm login</button>
                                    </p>
                                </div>
                            </div>,
                            transform: `${window.innerWidth}px`
                        },
                        {
                            child: <div className={s.SliderSegmentWAPContainer}>
                                <div className={s.SliderSegmentWAPContent}>
                                    <div className={s.SliderSegmentS1} style={{
                                        transform: `translateX(-${window.innerHeight}px)`,
                                    }}>
                                        <div className={s.S1Promo}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#f0f01c" className={s.SliderSegmentIcon} viewBox="0 0 512 512">
                                                <g id="OTP">
                                                    <path d="M458.4741,112H265V62.41A31.3815,31.3815,0,0,0,233.5879,31H62.4077A31.3806,31.3806,0,0,0,31,62.41V449.59A31.4379,31.4379,0,0,0,62.4077,481h171.18A31.4388,31.4388,0,0,0,265,449.59V292H458.4771A22.5231,22.5231,0,0,0,481,269.4771V134.5259A22.5257,22.5257,0,0,0,458.4741,112ZM125.5,50.08h45a11.25,11.25,0,0,1,0,22.5h-45a11.25,11.25,0,0,1,0-22.5Zm44.9956,411.7651h-45a11.25,11.25,0,1,1,0-22.5h45a11.25,11.25,0,0,1,0,22.5ZM245.1982,420.25H50.7974V91.75H245.1982V112H125.3149A22.3149,22.3149,0,0,0,103,134.3149V269.6641A22.3357,22.3357,0,0,0,125.3359,292H166v36.1489a11.1221,11.1221,0,0,0,18.9868,7.8643L229,292h16.1982Zm-24.39-210.06a11.3086,11.3086,0,0,1,4.14,15.39,11.198,11.198,0,0,1-15.39,4.14L195.25,221.44V238a11.25,11.25,0,0,1-22.5,0V221.44L158.437,229.72a11.198,11.198,0,0,1-15.39-4.14,11.3164,11.3164,0,0,1,4.14-15.39L161.5,202l-14.313-8.28a11.2689,11.2689,0,0,1,11.25-19.5293L172.75,182.47V166a11.25,11.25,0,0,1,22.5,0v16.47l14.3086-8.2793a11.2689,11.2689,0,0,1,11.25,19.5293L206.5,202Zm108,0a11.3086,11.3086,0,0,1,4.14,15.39,11.198,11.198,0,0,1-15.39,4.14L303.25,221.44V238a11.25,11.25,0,0,1-22.5,0V221.44L266.437,229.72a11.198,11.198,0,0,1-15.39-4.14,11.3164,11.3164,0,0,1,4.14-15.39L269.5,202l-14.313-8.28a11.2689,11.2689,0,0,1,11.25-19.5293L280.75,182.47V166a11.25,11.25,0,0,1,22.5,0v16.47l14.3086-8.2793a11.2689,11.2689,0,0,1,11.25,19.5293L314.5,202Zm108,0a11.3086,11.3086,0,0,1,4.14,15.39,11.198,11.198,0,0,1-15.39,4.14L411.25,221.44V238a11.25,11.25,0,0,1-22.5,0V221.44L374.437,229.72a11.198,11.198,0,0,1-15.39-4.14,11.3164,11.3164,0,0,1,4.14-15.39L377.5,202l-14.313-8.28a11.2689,11.2689,0,0,1,11.25-19.5293L388.75,182.47V166a11.25,11.25,0,0,1,22.5,0v16.47l14.3086-8.2793a11.2689,11.2689,0,0,1,11.25,19.5293L422.5,202Z"/>
                                                </g>
                                            </svg>
                                            <span>
                                                {pnm}
                                            </span> 
                                        </div>
                                        <div className={s.S1Text}>
                                            We have sent you a message in Telegram
                                            <br/>
                                            with the code.
                                        </div>
                                    </div>
                                    <div className={s.SliderSegmentS2} style={{
                                        transform: `translateX(-${window.innerHeight}px)`,
                                    }}>
                                        <div className={s.S2GB}>
                                            <button onClick={() => setUpdateState(1)} className={s.NextBtn}>Go Back →</button>
                                        </div>
                                        <div className={s.S2Content}>
                                            <div className="input_outline"><input className="input" onChange={(e) => setPnm(e.target.value)} placeholder="Code"/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>,
                            transform: `-${window.innerWidth}px`
                        }
                    ]
                }}
            />
        </div>
    )
}

export default RootPage