import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DataComponentType = {
  infoFill?: string;
  infoFill1?: string;
  infoFill2?: string;
  paperClipLight2?: string;

  /** Style props */
//   frameDivDebugCommit?: CSSProperties["debugCommit"];
};

const DataComponent: FunctionComponent<DataComponentType> = ({
  infoFill,
  infoFill1,
  infoFill2,
  paperClipLight2,
//   frameDivDebugCommit,
}) => {
  /* const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: frameDivDebugCommit,
    };
  }, [frameDivDebugCommit]); */

  return (
    <div
      className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6.7px] max-w-full text-left text-base text-black font-inter"
    //   style={frameDivStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full mq925:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] max-w-full mq925:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
            <div className="relative shrink-0 [debug_commit:bf4bc93]">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[262.7px] flex flex-row items-start justify-start gap-[29.1px] shrink-0 [debug_commit:bf4bc93]">
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative">valor 1</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] max-w-full mq925:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
            <div className="relative shrink-0 [debug_commit:bf4bc93]">
              Información de Representantes Legales
            </div>
          </div>
          <div className="w-[262.7px] flex flex-row items-start justify-start gap-[29.1px] shrink-0 [debug_commit:bf4bc93]">
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative">valor 1</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[6.7px] max-w-full mq925:flex-wrap">
          <div className="flex-1 relative inline-block min-w-[306px] shrink-0 [debug_commit:bf4bc93] max-w-full">
            Estado de Omisiones tributarias Remitidas a Centrales de Riesgo
          </div>
          <div className="w-[262.7px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[29.1px] shrink-0 [debug_commit:bf4bc93] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                <div className="self-stretch relative">valor 1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] max-w-full mq925:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
            <div className="relative shrink-0 [debug_commit:bf4bc93]">
              Estado de Deudas Coactivas Remitidas a Centrales de Riesgo
            </div>
          </div>
          <div className="w-[262.7px] flex flex-row items-start justify-start gap-[29.1px] shrink-0 [debug_commit:bf4bc93]">
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative">valor 1</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[6.7px] max-w-full mq925:flex-wrap">
          <div className="flex-1 relative inline-block min-w-[306px] shrink-0 [debug_commit:bf4bc93] max-w-full">
            Sanciones aplicadas por el Instituto Nacional de Defensa de la
            Competencia y de la Protección de la Propiedad Intelectual
            (INDECOPI)
          </div>
          <div className="w-[262.7px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[29.1px] shrink-0 [debug_commit:bf4bc93] mq450:flex-wrap">
              
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                <div className="self-stretch relative">valor 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[17px]">
        <div className="flex flex-col items-start justify-start gap-[11px]">
          <img
            className="w-[26.8px] h-6 relative"
            loading="lazy"
            alt=""
            src={paperClipLight2}
          />
          <img
            className="w-[26.8px] h-6 relative"
            loading="lazy"
            alt=""
            src={paperClipLight2}
          />
        </div>
        <img
          className="w-[26.8px] h-6 relative"
          loading="lazy"
          alt=""
          src={paperClipLight2}
        />
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
          <img
            className="h-6 w-[26.8px] relative"
            loading="lazy"
            alt=""
            src={paperClipLight2}
          />
        </div>
        <img
          className="w-[26.8px] h-6 relative"
          loading="lazy"
          alt=""
          src={paperClipLight2}
        />
      </div>
    </div>
  );
};

export default DataComponent;
