import { FunctionComponent } from "react";
import CompanyInfoComponent from "./CompanyInfoComponent";

const PerfilN: FunctionComponent = () => {
  return (
    <div className="w-full bg-whitesmoke max-w-full overflow-hidden flex flex-col items-start justify-startbox-border tracking-[normal] leading-[normal] text-left text-base text-white font-inter lg:w-auto lg:[align-self:unset] mq750:pl-[60px] mq750:pr-[60px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <main className="self-stretch rounded bg-white flex flex-col items-start justify-start pt-[61px] px-[30px] pb-[289px] box-border gap-[27px] max-w-full mt-[-30px] text-left text-[32px] text-darkslateblue font-inter mq1050:pb-[188px] mq1050:box-border mq450:pb-[122px] mq450:box-border">
        <div className="w-[1200px] h-[848px] relative rounded bg-white hidden max-w-full" />
        <div className="relative inline-block max-w-full z-[1] mq750:text-[26px] mq450:text-lgi">
          RAZON SOCIAL - 0123456789
        </div>
        <CompanyInfoComponent />
      </main>
    </div>
  );
};

export default PerfilN;
