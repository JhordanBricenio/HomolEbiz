import { Button } from "@mui/material";
import iconsmorevert from "../../../assets/images/evalaucion/iconsmore-vert-24px.svg";
import TableProv from "./TableProv";
import Nav from "../../Nav/Nav";
const ListProveedor = () => {
  return (
    <div className="flex flex-row">
      <div >
        <Nav />
      </div>
      <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[40px] px-[20px] pb-[102px] box-border tracking-[normal] leading-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[59px] mq750:pr-[59px] mq750:box-border">
        <div className="w-10 h-[30px] absolute !m-[0] top-[2px] left-[18px] z-[2]">
          <div className="absolute top-[0px] left-[6.6px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-white w-7 h-[29.4px]" />
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
        <main className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-sm text-white font-typography-body1">
          <div className="!m-[0] absolute top-[-24px] left-[13px] rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3.5 pb-[17px] pr-[39px] pl-10 whitespace-nowrap z-[1]">
            <div className="h-[47px] w-[209px] relative rounded-8xs bg-darkslateblue hidden" />
            <div className="relative z-[2]">Lista de proveedores</div>
          </div>
          <div className="!m-[0] absolute top-[-29px] right-[23px] rounded-8xs bg-cornflowerblue-100 flex flex-row items-start justify-start pt-[15px] px-[26px] pb-4 z-[1]">
            <div className="h-[47px] w-[165px] relative rounded-8xs bg-cornflowerblue-100 hidden" />
            <div className="relative inline-block min-w-[110px] z-[2]">
              CONFIGURACIÓN
            </div>
          </div>
          <section className="flex-1 rounded-8xs bg-white flex flex-row items-end justify-start pt-[74px] pb-[35px] pr-10 pl-[13px] box-border gap-[101px] max-w-full mq450:gap-[25px] mq450:pt-[31px] mq450:pb-5 mq450:box-border mq750:gap-[50px] mq1050:pt-12 mq1050:pb-[23px] mq1050:box-border">
            <div className="w-[1203px] h-[780px] relative rounded-8xs bg-white hidden max-w-full" />
            <form className="m-0 self-stretch w-full flex flex-col items-start justify-start gap-[65px] max-w-full mq750:gap-[16px] mq1150:gap-[32px]">
              <div className="w-[531px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
                <Button
                  className="h-[29px] w-[255px] z-[1]"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "10px",
                    background: "#2299e4",
                    borderRadius: "5px 0px 0px 5px",
                    "&:hover": { background: "#2299e4" },
                    width: 255,
                    height: 29,
                  }}
                >
                  Participación exclusiva de homologados
                </Button>
                <input
                  className="[outline:none] text-gray-900 bg-white h-[29px] flex-1 rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none box-border flex flex-row items-center justify-start py-3.5 px-4 min-w-[179px] z-[2] border-[1px] border-solid border-grey-dark"
                  type="text"
                />
              </div>
              <div className=" w-full flex flex-col items-center justify-start min-h-[242px] max-w-full">
                <TableProv />
              </div>
            </form>
            <div className="w-[50px] flex flex-row items-end justify-end py-0 px-2.5 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
                <Button
                  className="self-stretch h-12 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#1b3e85",
                    borderRadius: "5px",
                    "&:hover": { background: "#1b3e85" },
                    height: 48,
                  }}
                >
                  Notificación
                </Button>
                <Button
                  className="self-stretch h-12 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#1b3e85",
                    borderRadius: "5px",
                    "&:hover": { background: "#1b3e85" },
                    height: 48,
                  }}
                >
                  Notificación
                </Button>
                <Button
                  className="self-stretch h-12 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#1b3e85",
                    borderRadius: "5px",
                    "&:hover": { background: "#1b3e85" },
                    height: 48,
                  }}
                >
                  Notificación
                </Button>
                <Button
                  className="self-stretch h-12 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#1b3e85",
                    borderRadius: "5px",
                    "&:hover": { background: "#1b3e85" },
                    height: 48,
                  }}
                >
                  Notificación
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ListProveedor;
