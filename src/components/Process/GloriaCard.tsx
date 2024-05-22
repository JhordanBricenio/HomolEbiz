import { FunctionComponent } from "react";

export type GloriaCardType = {
  className?: string;
};

const infoFill = "../src/assets/images/info-fill.png";
const clipFill = "../src/assets/images/paper-clip.png";

const GloriaCard: FunctionComponent<GloriaCardType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[232px] shadow-[0px_0px_4px_2px_rgba(126,_126,_126,_0.25)] rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-[50px] px-[29px] pb-[30px] gap-[30px] max-w-full shrink-0 z-[1] text-left text-base text-white font-inter border-[1px] border-solid border-gray mq450:h-auto ${className}`}
    >
      <div className="w-[1140px] h-[232px] relative shadow-[0px_0px_4px_2px_rgba(126,_126,_126,_0.25)] rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-gray" />
      <div className="mt-[-70px] self-stretch flex flex-row items-start justify-between gap-[20px] shrink-0 mq450:flex-wrap">
        <div className="rounded-8xs bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-[10.5px] px-[27px] z-[1]">
          <div className="relative inline-block min-w-[44px]">Gloria</div>
        </div>
        <button className="cursor-pointer [border:none] py-[10.5px] px-[26px] bg-cornflowerblue rounded-8xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-deepskyblue">
          <div className="relative text-base font-inter text-white text-left inline-block min-w-[47px]">
            Enviar
          </div>
        </button>
      </div>
      <div className="self-stretch h-[152px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border gap-[10px] max-w-full z-[1] text-black mq1050:flex-1 mq1225:flex-1">
        <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full mq1050:self-stretch mq1050:w-auto mq1225:self-stretch mq1225:w-auto">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[312px] max-w-full">
            <div className="self-stretch relative">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[387px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">Valor1</div>
          </div>
          <img className="h-6 w-6 relative" alt="" src={clipFill} />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
              <div className="h-5 w-5 relative bg-limegreen" />
              <div className="h-5 w-5 relative bg-gold" />
              <div className="h-5 w-5 relative bg-red" />
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src={infoFill}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[312px] max-w-full">
            <div className="self-stretch relative">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[387px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">Valor1</div>
          </div>
          <img className="h-6 w-6 relative" alt="" src={clipFill} />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
              <div className="h-5 w-5 relative bg-limegreen" />
              <div className="h-5 w-5 relative bg-gold" />
              <div className="h-5 w-5 relative bg-red" />
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src={infoFill}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[312px] max-w-full">
            <div className="self-stretch relative">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[387px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">Valor1</div>
          </div>
          <img className="h-6 w-6 relative" alt="" src={clipFill} />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
              <div className="h-5 w-5 relative bg-limegreen" />
              <div className="h-5 w-5 relative bg-gold" />
              <div className="h-5 w-5 relative bg-red" />
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src={infoFill}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[312px] max-w-full">
            <div className="self-stretch relative">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[387px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">Valor1</div>
          </div>
          <img className="h-6 w-6 relative" alt="" src={clipFill} />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
              <div className="h-5 w-5 relative bg-limegreen" />
              <div className="h-5 w-5 relative bg-gold" />
              <div className="h-5 w-5 relative bg-red" />
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src={infoFill}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[312px] max-w-full">
            <div className="self-stretch relative">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[387px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">Valor1</div>
          </div>
          <img className="h-6 w-6 relative" alt="" src={clipFill} />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
              <div className="h-5 w-5 relative bg-limegreen" />
              <div className="h-5 w-5 relative bg-gold" />
              <div className="h-5 w-5 relative bg-red" />
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src={infoFill}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[312px] max-w-full">
            <div className="self-stretch relative">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[387px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">Valor1</div>
          </div>
          <img className="h-6 w-6 relative" alt="" src={clipFill} />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
              <div className="h-5 w-5 relative bg-limegreen" />
              <div className="h-5 w-5 relative bg-gold" />
              <div className="h-5 w-5 relative bg-red" />
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src={infoFill}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[312px] max-w-full">
            <div className="self-stretch relative">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[387px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">Valor1</div>
          </div>
          <img className="h-6 w-6 relative" alt="" src={clipFill} />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
              <div className="h-5 w-5 relative bg-limegreen" />
              <div className="h-5 w-5 relative bg-gold" />
              <div className="h-5 w-5 relative bg-red" />
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src={infoFill}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[312px] max-w-full">
            <div className="self-stretch relative">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[387px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">Valor1</div>
          </div>
          <img className="h-6 w-6 relative" alt="" src={clipFill} />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
              <div className="h-5 w-5 relative bg-limegreen" />
              <div className="h-5 w-5 relative bg-gold" />
              <div className="h-5 w-5 relative bg-red" />
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src={infoFill}
          />
        </div>
      </div>
    </section>
  );
};

export default GloriaCard;
