
import {
    Button
  } from "@mui/material";
  
  import iconsmorevert from "../../../assets/images/evalaucion/iconsmore-vert-24px.svg";
import TableCompra from "./TableCompra";
import Nav from "../../Nav/Nav";
const Aprobacion = () => {
  return (
   <div className="flex flex-row">
    <div>
      <Nav />

    </div>
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[40px] px-7 pb-[77px] box-border tracking-[normal] leading-[normal]">
    <div className="w-10 h-[30px] absolute !m-[0] top-[3px] left-[40px] z-[2]">
      <div className="absolute top-[0px] left-[6.6px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-white-color w-7 h-[29.4px]" />
      <div className="absolute top-[0px] left-[0px] h-full flex flex-col items-center justify-center py-0 px-0 box-border w-full z-[1]">
        <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center p-2">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src={iconsmorevert}
            />
          </div>
        </div>
      </div>
    </div>
    <main className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-sm text-white-color font-typography-caption">
      <div className="h-[47px] w-[262px] !m-[0] absolute top-[-24px] left-[40px] rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3.5 pb-[17px] pr-[30px] pl-[31px] box-border z-[1]">
        <div className="w-[262px] relative rounded-8xs bg-darkslateblue h-[47px] hidden" />
        <div className="h-4 w-[201px] relative inline-block z-[2]">
          Compra N° 12347: Proveedor 5
        </div>
      </div>
      <div className="!m-[0] absolute top-[-24px] right-[27px] rounded-8xs bg-cornflowerblue-100 flex flex-row items-start justify-start pt-[15px] px-[26px] pb-4 z-[1]">
        <div className="h-[47px] w-[165px] relative rounded-8xs bg-cornflowerblue-100 hidden" />
        <div className="relative inline-block min-w-[110px] z-[2]">
          CONFIGURACIÓN
        </div>
      </div>
      <section className="flex-1 rounded-8xs bg-white-color flex flex-col items-end justify-start pt-[51px] pb-[70px] pr-[33px] pl-8 box-border gap-[61px] max-w-full text-left text-sm text-text-primary font-typography-caption mq450:gap-[15px] mq725:gap-[30px] mq725:pt-[21px] mq725:pb-[29px] mq725:box-border mq1050:pt-[33px] mq1050:pb-[45px] mq1050:box-border">
        <div className="w-[1384px] h-[1074px] relative rounded-8xs bg-white-color hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="w-[189px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
              <Button
                className="h-[39px] flex-1 z-[2]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#1b3e85",
                  borderRadius: "5px",
                  "&:hover": { background: "#1b3e85" },
                  height: 39,
                }}
              >
                Aprovador 1
              </Button>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[39.5px] max-w-full z-[1] mt-[-19px] mq725:gap-[20px]">
              <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-row items-start justify-start pt-[26px] px-[22px] pb-[33px] max-w-full border-[1px] border-solid border-gray-200">
                <div className="h-[204px] w-[1319px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
                <div className="h-[239px] w-[1013px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[49px] box-border max-w-full z-[2] mq1000:h-auto">
                  <TableCompra />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border max-w-full text-white-color">
                <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                  <div className="!m-[0] absolute top-[-24px] left-[23px] rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-[11px] pb-3 pr-[21px] pl-[31px] whitespace-nowrap z-[2]">
                    <div className="h-[39px] w-[143px] relative rounded-8xs bg-darkslateblue hidden" />
                    <div className="relative font-semibold inline-block min-w-[93px] z-[1]">
                    Aprovador 2
                    </div>
                  </div>
                  <div className="h-[39px] w-[143px] !m-[0] bg-darkslateblue rounded-8xs absolute flex flex-row items-start justify-start top-[-24px] right-[15px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[2]" >
                  <div className="items-center relative font-semibold inline-block min-w-[93px] z-[1] py-2 px-5">
                     Sesión Iniciada
                    </div>
                  </div>
                  <div className="flex-1 shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-row flex-wrap items-start justify-start pt-[41px] pb-[66px] pr-[15px] pl-[22px] gap-[19px] max-w-full text-text-primary border-[1px] border-solid border-gray-200">
                    <div className="h-[252px] w-[1319px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
                    <div className="h-[239px] flex-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[49px] box-border max-w-full z-[2] mq1000:h-auto mq1000:min-w-full">
                     <TableCompra />
                    </div>
                  </div>
                </div>
              </div>
              <form className="m-0 self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="w-[195px] flex flex-row items-start justify-start py-0 px-[25px] box-border">
                  <Button
                    className="h-[39px] flex-1 z-[2]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#1b3e85",
                      borderRadius: "5px",
                      "&:hover": { background: "#1b3e85" },
                      height: 39,
                    }}
                  >
                    Aprovador 3
                  </Button>
                </div>
                <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-row items-start justify-start py-[27px] px-[25px] min-h-[250px] max-w-full mt-[-18px] border-[1px] border-solid border-gray-200">
                  <div className="h-[252px] w-[1319px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
                  <div className="h-[239px] w-[1012px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[49px] box-border max-w-full z-[2] mq1000:h-auto">
                    <TableCompra />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className="w-[1299px] flex flex-row flex-wrap items-end justify-start max-w-full [row-gap:20px]">
          <div className="h-5 w-[575.5px] relative bg-darkslateblue max-w-full z-[1]" />
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[30px] pl-0 box-border min-w-[393px] max-w-full mq725:min-w-full">
            <div className="self-stretch h-5 relative bg-white-color box-border z-[2] border-[1px] border-solid border-black" />
          </div>
          <Button
            className="h-[46px] w-[118px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#2299e4",
              borderRadius: "5px",
              "&:hover": { background: "#2299e4" },
              width: 118,
              height: 46,
            }}
          >
            Notificación
          </Button>
        </footer>
      </section>
    </main>
  </div>
   </div>

  )
}

export default Aprobacion