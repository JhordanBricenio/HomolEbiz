import {
  Box,
  Button,
  List,
  Modal,
} from "@mui/material";
import b2mining from "../../assets/images/b2mining.png";
import React from "react";
import { Outlet, Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  return (
    <div>
      <div className="w-[281px] bg-steelblue-100 flex flex-col items-start justify-start pt-0 px-0 pb-60 box-border gap-[55px] text-center text-base text-white font-roboto mq450:gap-[27px] mq450:pb-[157px] mq450:box-border mq825:pb-[242px] mq825:box-border">
        <div className="self-stretch h-[1024px] relative bg-steelblue-100 hidden" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch bg-steelblue-300 flex flex-row items-start justify-start pt-[11px] pb-[8.6px] pr-[13px] pl-7 gap-[29px] z-[1]">
            <div className="h-14 w-[281px] relative bg-steelblue-300 hidden" />
            <img
              className="h-[36.4px] w-[39px] relative object-contain min-h-[36px] z-[2]"
              loading="lazy"
              alt=""
              src={b2mining}
            />
            <Button
              className="h-[34px] flex-1 z-[2]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#fff",
                borderRadius: "5px",
                "&:hover": { background: "#fff" },
                height: 34,
              }}
            >
              PE7777777777
            </Button>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[31px]">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="h-9 w-9 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-steelblue-200 z-[1]" />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="relative font-light inline-block min-w-[67px] z-[1]">
                  Usuario 2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[33px]">
            <nav className="m-0 flex flex-col gap-[20px] text-base text-white font-roboto">
              <Link
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
                to="/editOrg"
              >
                Organización
              </Link>
              <Link
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
                to="/searchUsers"
              >
                U Usuarios
              </Link>
              <a
                href="#"
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
              >
                RQ Requerimiento
              </a>
              <a
                href="#"
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
              >
                CP Comprobante de pago
              </a>
              <a
                href="#"
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
              >
                OC Orden de compra
              </a>
              <a
                href="#"
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
              >
                SC Solicitud de cotización
              </a>
              <a
                href="#"
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
              >
                C Cotización
              </a>
              <a
                href="#"
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
              >
                E Evaluación
              </a>
              <a
                className="block py-2.5 px-4 w-full rounded transition duration-200 hover:bg-white hover:bg-opacity-10 text-left"
                onClick={handleOpen}
              >
                Homologación
              </a>
            </nav>
            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <div>
          <Modal open={open} onClose={handleClose}>
            <Box
              //Ubicar al costado del menu lateral o sea al costado de homologacion
              sx={{
                position: "absolute",
                top: "90%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                width: 300,
                bgcolor: "background.paper",
                background: "#fff",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <List>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
              </List>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Nav;
