import { FunctionComponent, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import DataInfoComponent from "./DataInfoComponent";

const ContainerComponent: FunctionComponent = () => {
    const onGloriaTextClick = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, []);

    return (
        <div className="w-[1030px] flex flex-col items-start justify-start gap-[23px] max-w-full text-left text-base text-black font-inter">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="w-[1030px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
                    <div className="self-stretch h-[294px] shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border overflow-y-auto shrink-0 flex flex-row items-start justify-between pt-[60px] pb-[30px] pr-[31px] pl-[29px] max-w-full gap-[20px] z-[1] border-[0.5px] border-solid border-gray mq1025:h-auto mq750:pt-5 mq750:box-border">
                        <div className="h-[294px] w-[1030px] relative shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gray" />
                        <div className="w-[773.6px] flex flex-col items-start justify-start gap-[11px] max-w-[calc(100%_-_101px)] shrink-0">
                            <DataInfoComponent />
                            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[11px] max-w-full">
                                <div className="self-stretch flex flex-row items-end justify-start gap-[6.7px] max-w-full mq1100:flex-wrap">
                                    <div className="w-[470.7px] relative flex items-center shrink-0 max-w-full z-[1]">
                                        Sanciones y multas aplicadas por la Superintendencia
                                        Nacional de Fiscalización Laboral (SUNAFIL)
                                    </div>
                                    <div className="w-[296.2px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[29.1px] mq450:flex-wrap">
                                            <img
                                                className="h-6 w-[26.8px] relative object-cover min-h-[24px] shrink-0 [debug_commit:bf4bc93] z-[1]"
                                                alt=""
                                                src="/info-fill@2x.png"
                                            />
                                            <div className="flex-1 flex flex-row items-start justify-start gap-[6.7px] min-w-[156px] shrink-0 [debug_commit:bf4bc93] mq450:flex-wrap">
                                                <TextField
                                                    className="[border:none] bg-[transparent] h-[21px] flex-1 font-inter text-base text-black min-w-[135px]"
                                                    variant="outlined"
                                                    placeholder="valor 1"
                                                    sx={{ "& .MuiInputBase-root": { height: "21px" } }}
                                                />
                                                <img
                                                    className="h-6 w-[26.8px] relative min-h-[24px] shrink-0 [debug_commit:bf4bc93] z-[1]"
                                                    alt=""
                                                    src="/paper-clip-light.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
                                    <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                                        <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                                            Estado de Inscripción en Registro Nacional de Proveedores
                                            de Bienes y Servicios
                                        </div>
                                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                                            <img
                                                className="w-[26.8px] h-6 relative object-cover"
                                                loading="lazy"
                                                alt=""
                                                src="/info-fill@2x.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                                            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                                                <TextField
                                                    className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93]"
                                                    variant="outlined"
                                                    placeholder="valor 1"
                                                    sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                                                />
                                            </div>
                                            <img
                                                className="h-6 w-[26.8px] relative min-h-[24px] shrink-0 [debug_commit:bf4bc93]"
                                                loading="lazy"
                                                alt=""
                                                src="/paper-clip-light.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[6.7px] max-w-full">
                                    <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full mq1025:min-w-full">
                                        <div className="self-stretch flex flex-row items-end justify-start gap-[29.1px] max-w-full mq1025:flex-wrap">
                                            <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] min-w-[328px] max-w-full mq750:flex-wrap">
                                                <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[306px] max-w-full">
                                                    <div className="self-stretch h-[38px] relative flex items-center">
                                                        Relación de proveedores sancionados por el Tribunal
                                                        de Contrataciones del Estado con sanción vigente
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
                                                            src="/info-fill@2x.png"
                                                        />
                                                        <img
                                                            className="w-[26.8px] h-6 relative object-cover"
                                                            alt=""
                                                            src="/info-fill@2x.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[206.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                                                <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                                                    <TextField
                                                        className="[border:none] bg-[transparent] self-stretch h-[19px] relative"
                                                        variant="outlined"
                                                        placeholder="valor 1"
                                                        sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                                                    />
                                                    <TextField
                                                        className="[border:none] bg-[transparent] self-stretch h-[19px] relative"
                                                        variant="outlined"
                                                        placeholder="valor 1"
                                                        sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                                            <div className="self-stretch flex flex-row items-end justify-start gap-[29.1px] max-w-full mq1025:flex-wrap">
                                                <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] shrink-0 [debug_commit:bf4bc93] max-w-full">
                                                    <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                                                        Información relacionada a actos de soborno cometidos
                                                        por la Empresa y/o Representantes Legales
                                                    </div>
                                                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                                                        <img
                                                            className="w-[26.8px] h-6 relative object-cover"
                                                            alt=""
                                                            src="/info-fill@2x.png"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-[206.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                                                    <TextField
                                                        className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93]"
                                                        variant="outlined"
                                                        placeholder="valor 1"
                                                        sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-row items-end justify-start gap-[29.1px] max-w-full mq1025:flex-wrap">
                                                <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] shrink-0 [debug_commit:bf4bc93] max-w-full">
                                                    <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                                                        Información relacionada a actos de violencia de
                                                        género cometidos por la Empresa y/o Representantes
                                                        Legales
                                                    </div>
                                                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                                                        <img
                                                            className="w-[26.8px] h-6 relative object-cover"
                                                            alt=""
                                                            src="/info-fill@2x.png"
                                                        />
                                                    </div>
                                                </div>
                                                <TextField
                                                    className="[border:none] bg-[transparent] h-7 w-[206.8px] font-inter text-base text-black"
                                                    variant="outlined"
                                                    placeholder="valor 1"
                                                    sx={{
                                                        "& .MuiInputBase-root": { height: "28px" },
                                                        width: "206.8px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-end justify-start gap-[29.1px] max-w-full mq1025:flex-wrap">
                                            <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] shrink-0 [debug_commit:bf4bc93] max-w-full">
                                                <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                                                    Información relacionada a actos de hostigamiento
                                                    sexual cometidos por la Empresa y/o Representantes
                                                    Legales
                                                </div>
                                                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                                                    <img
                                                        className="w-[26.8px] h-6 relative object-cover"
                                                        alt=""
                                                        src="/info-fill@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-[206.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                                                <TextField
                                                    className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93]"
                                                    variant="outlined"
                                                    placeholder="valor 1"
                                                    sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                                        <div className="flex flex-col items-start justify-start gap-[25px]">
                                            <img
                                                className="w-[26.8px] h-6 relative"
                                                alt=""
                                                src="/paper-clip-light.svg"
                                            />
                                            <img
                                                className="w-[26.8px] h-6 relative"
                                                alt=""
                                                src="/paper-clip-light.svg"
                                            />
                                            <img
                                                className="w-[26.8px] h-6 relative"
                                                alt=""
                                                src="/paper-clip-light.svg"
                                            />
                                            <img
                                                className="w-[26.8px] h-6 relative"
                                                alt=""
                                                src="/paper-clip-light.svg"
                                            />
                                            <img
                                                className="w-[26.8px] h-6 relative"
                                                alt=""
                                                src="/paper-clip-light.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29.1px] max-w-full">
                                    <div className="flex-1 flex flex-row items-end justify-start gap-[6.7px] max-w-full">
                                        <div className="h-[38px] w-[470.7px] relative flex items-center shrink-0 max-w-[calc(100%_-_33px)]">
                                            Información relacionada a actos de discriminación
                                            cometidos por la Empresa y/o Representantes Legales
                                        </div>
                                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                                            <img
                                                className="w-[26.8px] h-6 relative object-cover"
                                                alt=""
                                                src="/info-fill@2x.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[240.3px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                                        <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] mq450:flex-wrap">
                                            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                                                <TextField
                                                    className="[border:none] bg-[transparent] self-stretch h-[19px] relative min-w-[124px] shrink-0 [debug_commit:bf4bc93] p-0"
                                                    variant="outlined"
                                                    placeholder="valor 1"
                                                    sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                                                />
                                            </div>
                                            <img
                                                className="h-6 w-[26.8px] relative min-h-[24px] shrink-0 [debug_commit:bf4bc93]"
                                                alt=""
                                                src="/paper-clip-light.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[29.1px] max-w-full">
                                <div className="flex-1 flex flex-row items-start justify-start gap-[6.7px] min-w-[328px] max-w-full mq750:flex-wrap">
                                    <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
                                        <div className="self-stretch h-[19px] relative inline-block">
                                            Listado de Los Mejores Lugares Para Trabajar en Perú 2024
                                        </div>
                                    </div>
                                    <img
                                        className="h-6 w-[26.8px] relative object-cover"
                                        alt=""
                                        src="/info-fill@2x.png"
                                    />
                                </div>
                                <div className="w-[240.3px] flex flex-row items-start justify-start gap-[6.7px]">
                                    <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <TextField
                                            className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93]"
                                            variant="outlined"
                                            placeholder="valor 1"
                                            sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                                        />
                                    </div>
                                    <img
                                        className="h-6 w-[26.8px] relative min-h-[24px] shrink-0 [debug_commit:bf4bc93]"
                                        alt=""
                                        src="/paper-clip-light.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-[234px] w-[81.3px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                            <div className="self-stretch h-[642px] flex flex-col items-start justify-start gap-[32px]">
                                <div className="self-stretch h-[139px] flex flex-col items-start justify-start gap-[23px]">
                                    <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[15px_4.7px]">
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                    </div>
                                    <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[21px_4.7px]">
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                        <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                    </div>
                                </div>
                                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] gap-[6.7px]">
                                    <div className="h-5 w-[22.6px] relative rounded bg-limegreen z-[1]" />
                                    <div className="h-5 w-[22.6px] relative rounded bg-limegreen z-[1]" />
                                    <div className="h-5 w-[22.6px] relative rounded bg-limegreen z-[1]" />
                                </div>
                                <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[29px_4.7px]">
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
                </div>
                <div className="rounded bg-darkslateblue flex flex-row items-start justify-start pt-[11px] px-[19px] pb-3 z-[2] ml-[-1000.3px] text-sm text-white">
                    <div className="h-10 w-[81.2px] relative rounded bg-darkslateblue hidden" />
                    <div className="relative inline-block min-w-[41.6px] z-[1]">YURA</div>
                </div>
            </div>
            <div className="self-stretch h-[314px] relative max-w-full mq1025:h-auto mq1025:min-h-[314]">
                <div className="absolute top-[20px] left-[0px] shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border w-full h-[294px] overflow-y-auto flex flex-row items-start justify-between pt-[60px] pb-[30px] pr-[31px] pl-[29px] max-w-full gap-[20px] z-[1] border-[0.5px] border-solid border-gray mq1025:h-auto">
                    <div className="h-[294px] w-[1030px] relative shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gray" />
                    <div className="h-[431px] w-[773.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[171px] box-border gap-[11px] max-w-[calc(100%_-_101px)] mq1025:h-auto">
                        <DataInfoComponent
                            //   infoFillIconDebugCommit="unset"
                            valor1Display="unset"
                            valor1MinWidth="unset"
                            valor1Padding="unset"
                            valor1Display1="unset"
                            valor1MinWidth1="unset"
                            valor1Padding1="unset"
                            valor1Display2="unset"
                            valor1MinWidth2="unset"
                            valor1Padding2="unset"
                            valor1Flex="unset"
                            valor1Height="19px"
                            valor1Display3="unset"
                            valor1MinWidth3="unset"
                            valor1Padding3="unset"
                            valor1Display4="unset"
                            valor1MinWidth4="unset"
                            valor1Padding4="unset"
                        />
                    </div>
                    <div className="h-[234px] w-[81.3px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                        <div className="self-stretch h-[429px] flex flex-col items-start justify-start pt-0 px-0 pb-[238px] box-border gap-[23px]">
                            <div className="self-stretch h-[55px] flex flex-row flex-wrap items-start justify-start gap-[15px_4.7px] shrink-0 [debug_commit:bf4bc93]">
                                <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                                <div className="h-5 w-[22px] relative rounded bg-limegreen z-[1]" />
                            </div>
                            <div className="self-stretch h-[70px] flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[21px_4.7px] shrink-0 [debug_commit:bf4bc93]">
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
                            <div className="self-stretch h-[412px] flex flex-row flex-wrap items-start justify-start gap-[29px_4.7px] shrink-0 [debug_commit:bf4bc93]">
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
                        className="absolute top-[0px] left-[calc(50%_-_40.6px)] rounded bg-darkslateblue w-full h-full"
                        data-scroll-to="rectangle"
                    />
                    <div
                        className="absolute top-[11px] left-[calc(50%_-_21.3px)] flex items-center w-[41.6px] min-w-[41.6px] cursor-pointer z-[1]"
                        onClick={onGloriaTextClick}
                    >
                        Gloria
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerComponent;
