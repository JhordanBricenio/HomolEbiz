import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ContainerComponent from "./ContainerComponent";

const ProcesosEdicion: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[104px] px-[120px] pb-[132px] box-border tracking-[normal] leading-[normal] text-left text-base text-white font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border">
      <div className="w-[188px] flex flex-row items-start justify-start py-0 px-[30px] box-border">
        <div className="flex-1 rounded bg-darkslateblue flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] z-[1]">
          <div className="h-[60px] w-32 relative rounded bg-darkslateblue hidden" />
          <div className="relative inline-block min-w-[70px] z-[1]">
            Procesos
          </div>
        </div>
      </div>
      <main className="self-stretch rounded bg-white flex flex-col items-end justify-start pt-5 pb-[65px] pr-[34px] pl-[30px] box-border max-w-full mt-[-30px] mq1025:pb-[42px] mq1025:box-border mq450:pb-[27px] mq450:box-border">
        <div className="w-[1200px] h-[776px] relative rounded bg-white hidden max-w-full" />
        <Button
          className="w-[159px] h-10 z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#2299e4",
            borderRadius: "4px",
            "&:hover": { background: "#2299e4" },
            width: 159,
            height: 40,
          }}
        >
          Guardar Cambios
        </Button>
        <section className="self-stretch flex flex-row items-start justify-start max-w-full">
          <ContainerComponent />
        </section>
      </main>
    </div>
  );
};

export default ProcesosEdicion;
