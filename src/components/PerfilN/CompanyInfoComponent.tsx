import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const CompanyInfo: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-end justify-start gap-[20px] max-w-full text-left text-5xl text-dimgray font-inter lg:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start gap-[39px] min-w-[496px] max-w-full mq1050:min-w-full mq450:gap-[19px]">
        <div className="flex flex-row items-start justify-start gap-[23px] max-w-full mq1050:flex-wrap">
          <div className="h-[154px] w-[150px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <div className="self-stretch flex-1 relative bg-black z-[1]" />
          </div>
          <div className="flex flex-col items-start justify-start gap-[25px] max-w-full">
            <div className="w-52 flex flex-row items-start justify-start gap-[23px]">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[94px] z-[1] mq450:text-lgi">
                  Mi Perfil
                </h3>
              </div>
              <Button
                className="h-10 flex-1 z-[1]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#2299e4",
                  borderRadius: "4px",
                  "&:hover": { background: "#2299e4" },
                  height: 40,
                }}
              >
                Editar
              </Button>
            </div>
            <div className="relative text-sm text-black z-[1]">
              <p className="m-0">
                Completa todos los datos para mejorar nuestro servicio contigo
              </p>
              <p className="m-0">
                Los campos marcados con * son obligatorios para usar B2M
              </p>
              <p className="m-0">
                Los logotipos indican requisito de homologación previa para
                algunos compradores
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full text-sm text-white mq1050:flex-wrap">
          <div className="w-[357px] flex flex-col items-start justify-start min-w-[357px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="w-[313.3px] flex flex-row items-start justify-start py-0 px-6 box-border">
              <div className="flex-1 rounded bg-darkslateblue flex flex-row items-start justify-start pt-[11px] px-[19px] pb-3 whitespace-nowrap z-[2]">
                <div className="h-10 w-[265.3px] relative rounded bg-darkslateblue hidden" />
                <div className="flex-1 relative z-[1]">
                  Breve descripción de la empresa
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border flex flex-row items-start justify-start pt-[45px] px-6 pb-[26px] max-w-full z-[1] mt-[-20px] text-base text-black border-[0.5px] border-solid border-gray">
              <div className="h-[213px] w-[257px] relative shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gray" />
              <div className="flex-1 relative z-[1]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[251px] max-w-full">
            <div className="w-[343px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
              <div className="flex-1 rounded bg-darkslateblue flex flex-row items-start justify-start pt-[11px] pb-3 pr-5 pl-[22px] whitespace-nowrap z-[2]">
                <div className="h-10 w-[283px] relative rounded bg-darkslateblue hidden" />
                <div className="relative z-[1]">
                  Categorías CIIU en las que participa
                </div>
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border flex flex-row flex-wrap items-end justify-start pt-[49px] pb-[29px] pr-6 pl-[27px] gap-[6px] max-w-full z-[1] mt-[-20px] text-base text-black border-[0.5px] border-solid border-gray mq450:flex-wrap">
              <div className="h-[219px] w-[386px] relative shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gray" />
              <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0 gap-[11px] text-cornflowerblue">
                <div className="relative [text-decoration:underline] inline-block min-w-[89.5px] z-[1]">
                  Categoría 4
                </div>
                <div className="relative [text-decoration:underline] inline-block min-w-[89.5px] z-[1]">
                  Categoría 2
                </div>
                <div className="relative [text-decoration:underline] inline-block min-w-[89.5px] z-[1]">
                  Categoría 1
                </div>
                <div className="relative [text-decoration:underline] inline-block min-w-[89.5px] z-[1]">
                  Categoría 7
                </div>
                <div className="relative [text-decoration:underline] inline-block min-w-[89.5px] z-[1]">
                  Categoría 2
                </div>
              </div>
              <div className="w-[10.9px] flex flex-col items-start justify-end pt-0 pb-1 pr-[5px] pl-0 box-border">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[5.4px] flex flex-row items-start justify-start z-[1]">
                    <img
                      className="h-2.5 w-[5px] relative"
                      loading="lazy"
                      alt=""
                      src="/polygon-2.svg"
                    />
                  </div>
                  <div className="w-[5.4px] flex flex-row items-start justify-start z-[1]">
                    <img
                      className="h-2.5 w-[5px] relative"
                      loading="lazy"
                      alt=""
                      src="/polygon-2.svg"
                    />
                  </div>
                  <div className="w-[5.4px] flex flex-row items-start justify-start z-[1]">
                    <img
                      className="h-2.5 w-[5px] relative"
                      loading="lazy"
                      alt=""
                      src="/polygon-2.svg"
                    />
                  </div>
                  <div className="w-[5.4px] flex flex-row items-start justify-start z-[1]">
                    <img
                      className="h-2.5 w-[5px] relative"
                      loading="lazy"
                      alt=""
                      src="/polygon-2.svg"
                    />
                  </div>
                  <div className="w-[5.4px] flex flex-row items-start justify-start z-[1]">
                    <img
                      className="h-2.5 w-[5px] relative"
                      loading="lazy"
                      alt=""
                      src="/polygon-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[78px]">
                <div className="w-[18.9px] relative flex items-center z-[1]">
                  ...
                </div>
                <div className="relative inline-block min-w-[120.4px] z-[1]">
                  Subcategoría 6
                </div>
                <div className="relative [text-decoration:underline] text-cornflowerblue inline-block min-w-[114.4px] z-[1]">
                  Subcategoría 1
                </div>
                <div className="w-[18.9px] relative flex items-center z-[1]">
                  ...
                </div>
                <div className="relative inline-block min-w-[120.4px] z-[1]">
                  Subcategoría 4
                </div>
              </div>
              <div className="h-[74px] w-[10.9px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                <div className="w-[5.4px] flex flex-row items-start justify-start z-[1]">
                  <img
                    className="h-2.5 w-[5px] relative"
                    loading="lazy"
                    alt=""
                    src="/polygon-2.svg"
                  />
                </div>
              </div>
              <div className="h-[79px] flex flex-col items-start justify-start">
                <div className="relative inline-block min-w-[72.6px] z-[1]">
                  Nested 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[157px] flex flex-col items-start justify-start pt-0 px-0 pb-12 box-border min-w-[357px] min-h-[239px] max-w-full text-sm text-white lg:flex-1 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="w-[133px] flex flex-row items-start justify-start py-0 px-[30px] box-border">
            <div className="flex-1 rounded bg-darkslateblue flex flex-row items-start justify-start pt-[11px] pb-3 pr-5 pl-[21px] z-[2]">
              <div className="h-10 w-[73px] relative rounded bg-darkslateblue hidden" />
              <div className="relative inline-block min-w-[32px] z-[1]">
                Tags
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border flex flex-row flex-wrap items-center justify-center pt-10 px-[30px] pb-[30px] gap-[14px] max-w-full z-[1] mt-[-20px] text-center text-base text-cornflowerblue border-[0.5px] border-solid border-gray">
            <div className="h-[171px] w-[157px] relative shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.25)] rounded bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gray" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] mq450:flex-wrap">
              <div className="flex-1 bg-whitesmoke flex flex-row items-start justify-start py-0.5 pr-0.5 pl-[3px] box-border min-w-[72px] max-w-[78px] z-[1]">
                <div className="h-[23px] w-[78px] relative bg-whitesmoke hidden" />
                <div className="flex-1 relative inline-block min-w-[72.6px] z-[1]">
                  Tag1Tag1
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke flex flex-row items-start justify-start py-0.5 pr-0.5 pl-[3px] box-border min-w-[72px] max-w-[78px] z-[1]">
                <div className="h-[23px] w-[78px] relative bg-whitesmoke hidden" />
                <div className="flex-1 relative inline-block min-w-[72.6px] z-[1]">
                  Tag1Tag1
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke flex flex-row items-start justify-start py-0.5 pr-0.5 pl-[3px] box-border min-w-[72px] max-w-[78px] z-[1]">
                <div className="h-[23px] w-[78px] relative bg-whitesmoke hidden" />
                <div className="flex-1 relative inline-block min-w-[72.6px] z-[1]">
                  Tag1Tag1
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke flex flex-row items-start justify-start py-0.5 pr-0.5 pl-[3px] box-border min-w-[72px] max-w-[78px] z-[1]">
                <div className="h-[23px] w-[78px] relative bg-whitesmoke hidden" />
                <div className="flex-1 relative inline-block min-w-[72.6px] z-[1]">
                  Tag1Tag1
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
