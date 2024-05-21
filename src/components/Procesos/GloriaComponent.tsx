import { FunctionComponent, useCallback } from "react";
import DataComponent from "./DataComponent";

const 
infoFill="../src/assets/images/info-fill.png";
const 
paperClipLight2="../src/assets/images/paper-clip.png"

const GloriaComponent: FunctionComponent = () => {
  const onGloriaTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="w-[1030px] h-[314px] relative max-w-full text-left text-base text-black font-inter mq925:h-auto mq925:min-h-[314]">
      <div className="absolute top-[20px] left-[0px] shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border w-full h-[294px] overflow-y-auto flex flex-row items-start justify-between pt-[60px] px-[30px] pb-[3px] max-w-full gap-[20px] z-[1] border-[0.5px] border-solid border-gray">
        <div className="h-[294px] w-[1030px] relative shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gray" />
        <div className="h-[509px] w-[773.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[249px] box-border gap-[11px] max-w-[calc(100%_-_101px)] mq925:h-auto">
          <DataComponent
              infoFill="../src/assets/images/info-fill.png"
              infoFill1="../src/assets/images/info-fill.png"
              infoFill2="../src/assets/images/info-fill.png"
              paperClipLight2="../assets/images/paper-clip.png"
            // frameDivDebugCommit="unset"
          />
          <div className="flex flex-row items-end justify-start gap-[6.7px] shrink-0 [debug_commit:bf4bc93] max-w-full mq925:flex-wrap">
            <div className="w-[470.7px] relative flex items-center shrink-0 [debug_commit:bf4bc93] max-w-full z-[1]">
              Sanciones y multas aplicadas por la Superintendencia Nacional de
              Fiscalización Laboral (SUNAFIL)
            </div>
            <div className="w-[296.2px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[29.1px] shrink-0 [debug_commit:bf4bc93] mq450:flex-wrap">
                <img
                  className="h-6 w-[26.8px] relative object-cover min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src={infoFill}
                />
                <div className="flex-1 flex flex-row items-start justify-start gap-[6.7px] min-w-[156px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                    <div className="self-stretch h-[19px] relative inline-block z-[1]">
                      valor 1
                    </div>
                  </div>
                  <img
                    className="h-6 w-[26.8px] relative min-h-[24px] z-[1]"
                    alt=""
                    src={paperClipLight2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[11px] shrink-0 [debug_commit:bf4bc93] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                  Estado de Inscripción en Registro Nacional de Proveedores de
                  Bienes y Servicios
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <img
                    className="w-[26.8px] h-6 relative object-cover"
                    loading="lazy"
                    alt=""
                    src={infoFill}
                  />
                </div>
              </div>
              <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                    <div className="self-stretch h-[19px] relative inline-block">
                      valor 1
                    </div>
                  </div>
                  <img
                    className="h-6 w-[26.8px] relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src={paperClipLight2}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                  Relación de proveedores sancionados por el Tribunal de
                  Contrataciones del Estado con sanción vigente
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <img
                    className="w-[26.8px] h-6 relative object-cover"
                    loading="lazy"
                    alt=""
                    src={infoFill}
                  />
                </div>
              </div>
              <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                    <div className="self-stretch h-[19px] relative inline-block">
                      valor 1
                    </div>
                  </div>
                  <img
                    className="h-6 w-[26.8px] relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src={paperClipLight2}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                  Información relacionada a actos de corrupción cometidos por la
                  Empresa y/o Representantes Legales
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <img
                    className="w-[26.8px] h-6 relative object-cover"
                    loading="lazy"
                    alt=""
                    src={infoFill}
                  />
                </div>
              </div>
              <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                    <div className="self-stretch h-[19px] relative inline-block">
                      valor 1
                    </div>
                  </div>
                  <img
                    className="h-6 w-[26.8px] relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src={paperClipLight2}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                  Información relacionada a actos de soborno cometidos por la
                  Empresa y/o Representantes Legales
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <img
                    className="w-[26.8px] h-6 relative object-cover"
                    loading="lazy"
                    alt=""
                    src={infoFill}
                  />
                </div>
              </div>
              <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                    <div className="self-stretch h-[19px] relative inline-block">
                      valor 1
                    </div>
                  </div>
                  <img
                    className="h-6 w-[26.8px] relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src={paperClipLight2}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                  Información relacionada a actos de violencia de género
                  cometidos por la Empresa y/o Representantes Legales
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <img
                    className="w-[26.8px] h-6 relative object-cover"
                    loading="lazy"
                    alt=""
                    src={infoFill}
                  />
                </div>
              </div>
              <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                    <div className="self-stretch h-[19px] relative inline-block">
                      valor 1
                    </div>
                  </div>
                  <img
                    className="h-6 w-[26.8px] relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src={paperClipLight2}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                  Información relacionada a actos de hostigamiento sexual
                  cometidos por la Empresa y/o Representantes Legales
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <img
                    className="w-[26.8px] h-6 relative object-cover"
                    alt=""
                    src={infoFill}
                  />
                </div>
              </div>
              <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                    <div className="self-stretch h-[19px] relative inline-block">
                      valor 1
                    </div>
                  </div>
                  <img
                    className="h-6 w-[26.8px] relative min-h-[24px]"
                    alt=""
                    src={paperClipLight2}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                  Información relacionada a actos de discriminación cometidos
                  por la Empresa y/o Representantes Legales
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <img
                    className="w-[26.8px] h-6 relative object-cover"
                    alt=""
                    src={infoFill}
                  />
                </div>
              </div>
              <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                    <div className="self-stretch h-[19px] relative inline-block">
                      valor 1
                    </div>
                  </div>
                  <img
                    className="h-6 w-[26.8px] relative min-h-[24px]"
                    alt=""
                    src={paperClipLight2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[29.1px] shrink-0 [debug_commit:bf4bc93] max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[6.7px] min-w-[328px] max-w-full mq700:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
                <div className="self-stretch h-[19px] relative inline-block">
                  Listado de Los Mejores Lugares Para Trabajar en Perú 2024
                </div>
              </div>
              <img
                className="h-6 w-[26.8px] relative object-cover"
                alt=""
                src={infoFill}
              />
            </div>
            <div className="w-[240.3px] flex flex-row items-start justify-start gap-[6.7px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch h-[19px] relative inline-block">
                  valor 1
                </div>
              </div>
              <img
                className="h-6 w-[26.8px] relative min-h-[24px]"
                alt=""
                src={paperClipLight2}
              />
            </div>
          </div>
        </div>
        <div className="h-[234px] w-[81.3px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch h-[507px] flex flex-col items-start justify-start pt-0 px-0 pb-[316px] box-border gap-[23px]">
            <div className="self-stretch h-[55px] flex flex-row flex-wrap items-start justify-start gap-[15px_4.8px] shrink-0 [debug_commit:bf4bc93]">
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
            </div>
            <div className="self-stretch h-[70px] flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[21px_4.8px] shrink-0 [debug_commit:bf4bc93]">
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-4 gap-[6.7px] shrink-0 [debug_commit:bf4bc93]">
              <div className="h-5 w-[22.6px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22.6px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22.6px] relative rounded bg-limegreen z-[1]" />
            </div>
            <div className="self-stretch h-[412px] flex flex-row flex-wrap items-start justify-start gap-[29px_4.8px] shrink-0 [debug_commit:bf4bc93]">
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
              <div className="h-5 w-[22px] relative rounded bg-limegreen" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[29.7px] w-[81.2px] h-10 z-[2] text-sm text-white">
        <div
          className="absolute top-[0px] left-[calc(50%_-_40.6px)] rounded bg-darkslateblue-200 w-full h-full"
          data-scroll-to="rectangle"
        />
        <div
          className="absolute top-[11px] left-[calc(50%_-_21.3px)] flex items-center w-[41.6px] min-w-[41.6px] cursor-pointer z-[1]"
          onClick={onGloriaTextClick}
        >
          Gloria
        </div>
      </div>
    </section>
  );
};

export default GloriaComponent;
