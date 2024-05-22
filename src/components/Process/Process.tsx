import { FunctionComponent } from "react";
import YuraCard from "./YuraCard";
import GloriaCard from "./GloriaCard";
import Nav from "../Nav/Nav";

export type ProcessType = {
    className?: string;
};

const Process: FunctionComponent<ProcessType> = ({ className = "" }) => {
    return (
        <div className="flex flex-row">
            <div>
                <Nav />
            </div>
            <div
                className={`w-[1440px] bg-whitesmoke max-w-full overflow-hidden flex flex-row items-start justify-start py-[104px] px-[120px] box-border tracking-[normal] leading-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border ${className}`}
            >
                <main className="h-[834px] flex-1 rounded-3xs bg-white flex flex-col items-start justify-start pt-20 px-[30px] pb-60 box-border gap-[50px] max-w-full text-left text-base text-white font-inter mq450:h-auto mq750:gap-[25px] mq750:pt-[34px] mq750:pb-[101px] mq750:box-border mq1050:pt-[52px] mq1050:pb-[156px] mq1050:box-border">
                    <div className="w-[1200px] h-[834px] relative rounded-3xs bg-white hidden max-w-full" />
                    <div className="mt-[-110px] w-[143px] rounded-3xs bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-[20.5px] px-10 box-border shrink-0 z-[1]">
                        <div className="relative inline-block min-w-[62px]">Proceso</div>
                    </div>
                    <YuraCard />
                    <GloriaCard />
                </main>
            </div>
        </div>
    );
};

export default Process;
