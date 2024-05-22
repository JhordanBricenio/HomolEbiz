import { FunctionComponent } from "react";
import YuraComponent from "./YuraComponent";
import GloriaComponent from "./GloriaComponent";
import Nav from "../Nav/Nav";

const Procesos: FunctionComponent = () => {
  return (
   <div className="flex flex-row">
    <div>
      <Nav />
    </div>
    <div className="w-[1440px] bg-whitesmoke max-w-full overflow-hidden flex flex-col items-start justify-start pt-[20px] px-[20px] pb-[84px] box-border tracking-[normal] leading-[normal] text-left text-base text-white font-inter">
      <div className="flex flex-row items-start justify-start py-0 px-[30px]">
        <div className="rounded bg-darkslateblue flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] z-[1] hover:bg-darkslateblue-100">
          <div className="h-[60px] w-32 relative rounded bg-darkslateblue hidden" />
          <div className="relative inline-block min-w-[70px] z-[1]">
            Procesos
          </div>
        </div>
      </div>
      <main className="self-stretch rounded bg-white flex flex-col items-start justify-start pt-[59px] px-[30px] pb-[191px] box-border gap-[20px] min-h-[898px] max-w-full mt-[-30px] mq925:pb-[124px] mq925:box-border mq450:pb-[81px] mq450:box-border">
        <div className="w-[1380px] h-[898px] relative rounded bg-gainsboro hidden max-w-full" />
        <YuraComponent />
        <GloriaComponent />
      </main>
    </div>
   </div>
  );
};

export default Procesos;
