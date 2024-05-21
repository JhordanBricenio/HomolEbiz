import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type DataInfoComponentType = {
  /** Style props */
//   infoFillIconDebugCommit?: CSSProperties["debugCommit"];
  valor1Display?: CSSProperties["display"];
  valor1MinWidth?: CSSProperties["minWidth"];
  valor1Padding?: CSSProperties["padding"];
  valor1Display1?: CSSProperties["display"];
  valor1MinWidth1?: CSSProperties["minWidth"];
  valor1Padding1?: CSSProperties["padding"];
  valor1Display2?: CSSProperties["display"];
  valor1MinWidth2?: CSSProperties["minWidth"];
  valor1Padding2?: CSSProperties["padding"];
  valor1Flex?: CSSProperties["flex"];
  valor1Height?: CSSProperties["height"];
  valor1Display3?: CSSProperties["display"];
  valor1MinWidth3?: CSSProperties["minWidth"];
  valor1Padding3?: CSSProperties["padding"];
  valor1Display4?: CSSProperties["display"];
  valor1MinWidth4?: CSSProperties["minWidth"];
  valor1Padding4?: CSSProperties["padding"];
};

const DataInfoComponent: FunctionComponent<DataInfoComponentType> = ({
//   infoFillIconDebugCommit,
  valor1Display,
  valor1MinWidth,
  valor1Padding,
  valor1Display1,
  valor1MinWidth1,
  valor1Padding1,
  valor1Display2,
  valor1MinWidth2,
  valor1Padding2,
  valor1Flex,
  valor1Height,
  valor1Display3,
  valor1MinWidth3,
  valor1Padding3,
  valor1Display4,
  valor1MinWidth4,
  valor1Padding4,
}) => {
//   const nestedContribuyenteHeaderStyle: CSSProperties = useMemo(() => {
//     return {
//       debugCommit: infoFillIconDebugCommit,
//     };
//   }, [infoFillIconDebugCommit]);

  const valor1Style: CSSProperties = useMemo(() => {
    return {
      display: valor1Display,
      minWidth: valor1MinWidth,
      padding: valor1Padding,
      flex: valor1Flex,
      height: valor1Height,
    };
  }, [valor1Display, valor1MinWidth, valor1Padding, valor1Flex, valor1Height]);

  const valor11Style: CSSProperties = useMemo(() => {
    return {
      display: valor1Display1,
      minWidth: valor1MinWidth1,
      padding: valor1Padding1,
    };
  }, [valor1Display1, valor1MinWidth1, valor1Padding1]);

  const valor12Style: CSSProperties = useMemo(() => {
    return {
      display: valor1Display2,
      minWidth: valor1MinWidth2,
      padding: valor1Padding2,
    };
  }, [valor1Display2, valor1MinWidth2, valor1Padding2]);

  const valor13Style: CSSProperties = useMemo(() => {
    return {
      display: valor1Display3,
      minWidth: valor1MinWidth3,
      padding: valor1Padding3,
    };
  }, [valor1Display3, valor1MinWidth3, valor1Padding3]);

  const valor14Style: CSSProperties = useMemo(() => {
    return {
      display: valor1Display4,
      minWidth: valor1MinWidth4,
      padding: valor1Padding4,
    };
  }, [valor1Display4, valor1MinWidth4, valor1Padding4]);

  return (
    <div
      className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6.7px] max-w-full text-left text-base text-black font-inter"
    //   style={nestedContribuyenteHeaderStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full mq1025:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] max-w-full mq1025:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
            <div className="relative z-[1]">
              Información Fiscal del Contribuyente
            </div>
          </div>
          <div className="w-[262.7px] flex flex-row items-start justify-start gap-[29.1px]">
            <img
              className="h-6 w-[26.8px] relative object-cover min-h-[24px] shrink-0 [debug_commit:bf4bc93] z-[1]"
              loading="lazy"
              alt=""
              src="/info-fill@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93] z-[1]"
                color="primary"
                placeholder="valor 1"
                variant="outlined"
                sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                style={valor1Style}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] max-w-full mq1025:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
            <div className="relative z-[1]">
              Información de Representantes Legales
            </div>
          </div>
          <div className="w-[262.7px] flex flex-row items-start justify-start gap-[29.1px]">
            <img
              className="h-6 w-[26.8px] relative object-cover min-h-[24px] shrink-0 [debug_commit:bf4bc93] z-[1]"
              loading="lazy"
              alt=""
              src="/info-fill@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93] z-[1]"
                variant="outlined"
                placeholder="valor 1"
                sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                style={valor11Style}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[6.7px] max-w-full mq1025:flex-wrap">
          <div className="flex-1 relative inline-block min-w-[306px] max-w-full z-[1]">
            Estado de Omisiones tributarias Remitidas a Centrales de Riesgo
          </div>
          <div className="w-[262.7px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[29.1px] mq450:flex-wrap">
              <img
                className="h-6 w-[26.8px] relative object-cover min-h-[24px] shrink-0 [debug_commit:bf4bc93] z-[1]"
                loading="lazy"
                alt=""
                src="/info-fill@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93] z-[1]"
                  variant="outlined"
                  placeholder="valor 1"
                  sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                  style={valor12Style}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[6.7px] max-w-full mq1025:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[306px] max-w-full">
            <div className="relative z-[1]">
              Estado de Deudas Coactivas Remitidas a Centrales de Riesgo
            </div>
          </div>
          <div className="w-[262.7px] flex flex-row items-start justify-start gap-[29.1px]">
            <img
              className="h-6 w-[26.8px] relative object-cover min-h-[24px] shrink-0 [debug_commit:bf4bc93] z-[1]"
              loading="lazy"
              alt=""
              src="/info-fill@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93] z-[1]"
                variant="outlined"
                placeholder="valor 1"
                sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                style={valor13Style}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[6.7px] max-w-full mq1025:flex-wrap">
          <div className="flex-1 relative inline-block min-w-[306px] max-w-full z-[1]">
            Sanciones aplicadas por el Instituto Nacional de Defensa de la
            Competencia y de la Protección de la Propiedad Intelectual
            (INDECOPI)
          </div>
          <div className="w-[262.7px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[29.1px] mq450:flex-wrap">
              <img
                className="h-6 w-[26.8px] relative object-cover min-h-[24px] shrink-0 [debug_commit:bf4bc93] z-[1]"
                loading="lazy"
                alt=""
                src="/info-fill@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[135px]">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[19px] relative shrink-0 [debug_commit:bf4bc93] z-[1]"
                  variant="outlined"
                  placeholder="valor 1"
                  sx={{ "& .MuiInputBase-root": { height: "19px" } }}
                  style={valor14Style}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[17px]">
        <div className="flex flex-col items-start justify-start gap-[11px]">
          <img
            className="w-[26.8px] h-6 relative z-[1]"
            loading="lazy"
            alt=""
            src="/paper-clip-light.svg"
          />
          <img
            className="w-[26.8px] h-6 relative z-[1]"
            loading="lazy"
            alt=""
            src="/paper-clip-light.svg"
          />
        </div>
        <img
          className="w-[26.8px] h-6 relative z-[1]"
          loading="lazy"
          alt=""
          src="/paper-clip-light.svg"
        />
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
          <img
            className="h-6 w-[26.8px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/paper-clip-light.svg"
          />
        </div>
        <img
          className="w-[26.8px] h-6 relative z-[1]"
          alt=""
          src="/paper-clip-light.svg"
        />
      </div>
    </div>
  );
};

export default DataInfoComponent;
