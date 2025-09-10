import Breaks from './elements/Breaks'
import Counter from '.'

export function Home(){
    return(
        <div className="w-screen h-screen bg-[#2B2B2B] absolute ">
                <div className="font-[var(--font-islandMoments)] text-4xl mt-10 text-white text-7x1 text-center">PomoCode Timer</div>
                <div className="flex items-center justify-center">
                    <div className="w-200 h-100 bg-[#505050] rounded-2xl shadow-black flex justify-between">
                        <Breaks className="order-1" typeBreak = "Pomodoro"/>
                        <Breaks className="order-2" typeBreak = "Pausa Rapida"/>
                        <Breaks className="order-3" typeBreak = "Paula Longa"/>
                    </div>
                    <div>
                        <Counter/>
                    </div>
                
                </div>
        </div>
    )
}

