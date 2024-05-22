import { FunctionComponent } from "react";
import DataComponent from "./DataComponent";

const 
infoFill="../src/assets/images/info-fill.png";
const 
paperClipLight2="../src/assets/images/paper-clip.png"
const YuraComponent: FunctionComponent = () => {
  return (
    <section className="w-[1030px] flex flex-row items-start justify-start relative max-w-full text-left text-base text-black font-inter">
      <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch h-[294px] shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border overflow-y-auto shrink-0 flex flex-row items-start justify-between pt-[60px] px-[30px] pb-[30px] max-w-full gap-[20px] border-[0.5px] border-solid border-gray mq925:pt-[59px] mq925:box-border">
          <div className="h-[294px] w-[1030px] relative shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gray" />
          <div className="w-[773.6px] flex flex-col items-start justify-start gap-[11px] max-w-[calc(100%_-_101px)] shrink-0">
            <DataComponent
              infoFill={infoFill}
              infoFill1={infoFill}
              infoFill2={infoFill}
              paperClipLight2={paperClipLight2}
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[11px] max-w-full">
              <div className="self-stretch flex flex-row items-end justify-start gap-[6.7px] max-w-full mq925:flex-wrap">
                <div className="w-[470.7px] relative flex items-center shrink-0 [debug_commit:bf4bc93] max-w-full">
                  Sanciones y multas aplicadas por la Superintendencia Nacional
                  de Fiscalización Laboral (SUNAFIL)
                </div>
                <div className="w-[296.2px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[29.1px] shrink-0 [debug_commit:bf4bc93] mq450:flex-wrap">
                    <img
                      className="h-6 w-[26.8px] relative object-cover min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src={infoFill}
                    />
                    <div className="flex-1 flex flex-row items-start justify-start gap-[6.7px] min-w-[156px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                        <div className="self-stretch h-[19px] relative flex items-center">
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
              </div>
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
                      <div className="self-stretch h-[19px] relative flex items-center">
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
              <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[6.7px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full mq925:min-w-full">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[29.1px] max-w-full mq925:flex-wrap">
                    <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] min-w-[328px] max-w-full mq700:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[306px] max-w-full">
                        <div className="self-stretch h-[38px] relative flex items-center">
                          Relación de proveedores sancionados por el Tribunal de
                          Contrataciones del Estado con sanción vigente
                        </div>
                        <div className="self-stretch h-[38px] relative flex items-center">
                          Información relacionada a actos de corrupción
                          cometidos por la Empresa y/o Representantes Legales
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                        <div className="flex flex-col items-start justify-start gap-[25px]">
                          <img
                            className="w-[26.8px] h-6 relative object-cover"
                            alt=""
                            src={infoFill}
                          />
                          <img
                            className="w-[26.8px] h-6 relative object-cover"
                            alt=""
                            src={infoFill}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[206.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                        <div className="self-stretch h-[19px] relative flex items-center">
                          valor 1
                        </div>
                        <div className="self-stretch h-[19px] relative flex items-center">
                          valor 1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                    <div className="self-stretch flex flex-row items-end justify-start gap-[29.1px] max-w-full mq925:flex-wrap">
                      <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                        <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                          Información relacionada a actos de soborno cometidos
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
                      <div className="w-[206.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                        <div className="self-stretch h-[19px] relative flex items-center">
                          valor 1
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[29.1px] max-w-full mq925:flex-wrap">
                      <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                        <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                          Información relacionada a actos de violencia de género
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
                      <div className="w-[206.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                        <div className="self-stretch h-[19px] relative flex items-center">
                          valor 1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[29.1px] max-w-full mq925:flex-wrap">
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
                    <div className="w-[206.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                      <div className="self-stretch h-[19px] relative flex items-center">
                        valor 1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <div className="flex flex-col items-start justify-start gap-[25px]">
                    <img
                      className="w-[26.8px] h-6 relative"
                      alt=""
                      src={paperClipLight2}
                    />
                    <img
                      className="w-[26.8px] h-6 relative"
                      alt=""
                      src={paperClipLight2}
                    />
                    <img
                      className="w-[26.8px] h-6 relative"
                      alt=""
                      src={paperClipLight2}
                    />
                    <img
                      className="w-[26.8px] h-6 relative"
                      alt=""
                      src={paperClipLight2}
                    />
                    <img
                      className="w-[26.8px] h-6 relative"
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
                      <div className="self-stretch h-[19px] relative flex items-center">
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
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[29.1px] max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[6.7px] min-w-[328px] max-w-full mq700:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
                  <div className="self-stretch h-[19px] relative flex items-center">
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
                  <div className="self-stretch h-[19px] relative flex items-center">
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[23px]">
                <div className="self-stretch h-[55px] flex flex-row flex-wrap items-start justify-start relative gap-[15px_4.8px]">
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[0px] rounded bg-red" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[29.4px] rounded bg-red" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[58.7px] rounded bg-red" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[35px] left-[0px] rounded bg-red" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[35px] left-[29.4px] rounded bg-limegreen" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[35px] left-[58.7px] rounded bg-limegreen" />
                </div>
                <div className="self-stretch h-[61px] flex flex-row flex-wrap items-start justify-start relative gap-[21px_4.8px]">
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[0px] rounded bg-limegreen" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[29.4px] rounded bg-gold" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[58.7px] rounded bg-gold" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[41px] left-[0px] rounded bg-gold" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[41px] left-[29.4px] rounded bg-limegreen" />
                  <div className="h-5 w-[22.6px] absolute !m-[0] top-[41px] left-[58.7px] rounded bg-gold" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] gap-[6.7px]">
                <div className="h-5 w-[22.6px] relative rounded bg-gold" />
                <div className="h-5 w-[22.6px] relative rounded bg-gold" />
                <div className="h-5 w-[22.6px] relative rounded bg-red" />
              </div>
              <div className="self-stretch h-[412px] flex flex-row flex-wrap items-start justify-start relative gap-[29px_4.8px]">
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[0px] rounded bg-red" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[29.4px] rounded bg-red" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[0px] left-[58.7px] rounded bg-red" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[49px] left-[0px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[49px] left-[29.4px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[49px] left-[58.7px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[98px] left-[0px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[98px] left-[29.4px] rounded bg-gold" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[98px] left-[58.7px] rounded bg-gold" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[147px] left-[0px] rounded bg-gold" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[147px] left-[29.4px] rounded bg-gold" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[147px] left-[58.7px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[196px] left-[0px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[196px] left-[29.4px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[196px] left-[58.7px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[245px] left-[0px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[245px] left-[29.4px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[245px] left-[58.7px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[294px] left-[0px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[294px] left-[29.4px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[294px] left-[58.7px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[343px] left-[0px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[343px] left-[29.4px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[343px] left-[58.7px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[392px] left-[0px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[392px] left-[29.4px] rounded bg-limegreen" />
                <div className="h-5 w-[22.6px] absolute !m-[0] top-[392px] left-[58.7px] rounded bg-limegreen" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="!m-[0] absolute top-[0px] left-[29.7px] rounded bg-darkslateblue flex flex-row items-start justify-start pt-[11px] px-[19px] pb-3 z-[2] text-sm text-white hover:bg-darkslateblue-100">
        <div className="h-10 w-[81.2px] relative rounded bg-darkslateblue-200 hidden" />
        <div className="relative inline-block min-w-[41.6px] z-[1]">YURA</div>
      </div>
    </section>
  );
};

export default YuraComponent;
