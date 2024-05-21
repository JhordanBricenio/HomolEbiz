import { FunctionComponent } from "react";
import CompanyInfoComponent from "./CompanyInfoComponent";

const PerfilN: FunctionComponent = () => {
  return (
    <div className="w-[1440px] bg-whitesmoke max-w-full overflow-hidden flex flex-col items-start justify-start pt-[104px] px-[120px] pb-[60px] box-border tracking-[normal] leading-[normal] text-left text-base text-white font-inter lg:w-auto lg:[align-self:unset] mq750:pl-[60px] mq750:pr-[60px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="w-[175px] flex flex-row items-start justify-start py-0 px-[30px] box-border">
        <div className="flex-1 rounded bg-darkslateblue flex flex-row items-start justify-start pt-5 pb-[21px] pr-[26px] pl-[27px] whitespace-nowrap z-[1]">
          <div className="h-[60px] w-[115px] relative rounded bg-darkslateblue hidden" />
          <div className="relative inline-block min-w-[62px] z-[1]">
            Mi Perfil
          </div>
        </div>
      </div>
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
