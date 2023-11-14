import { Modal } from "@mui/material";
import { FC } from "react";
import PixelButton from "./PixelButton";

type ModalProps = {
  version: string | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const HelpModal: FC<ModalProps> = ({
  setOpenModal,
  version,
  ...rest
}) => {
    const handleClose = () => {
        setOpenModal(false);
    };
    
    return (
        <Modal open={true} onClose={handleClose}>
            <div
                style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "800px",
                }}
            >
                <div
                style={{
                    width: "500px",
                    height: "500px",
                    borderRadius: "12px",
                    backgroundColor: "#E5D4FF",
                    display: "flex",
                    flexDirection: "column",
                    padding: "25px",
                }}
                >
                <div
                    style={{
                    textAlign: "center",
                    userSelect: "none"
                    }}
                >
                    <h1>How to play</h1>
                </div>
                <div
                    style={{
                    flex: "60%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                    lineHeight: "1.6",
                    userSelect: "none"
                    }}
                >
                    <p>
                    Two players take any number of matchsticks from one row alternately, the one who takes the last matchstick loses.
                    </p>
                </div>
                <div
                    style={{
                    flex: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                >
                <PixelButton onClick={handleClose} text="OK" color="#298D72"/>
                </div>
                </div>
            </div>
        </Modal>
  );
};

export default HelpModal;
