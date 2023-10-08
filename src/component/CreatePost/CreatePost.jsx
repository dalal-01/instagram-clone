import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1D1D1D",
  border: "2px solid #1D1D1D",
  boxShadow: 24,
};

export default function CreatePost({open,handelclose}) {

  return (
    <div>
      <Modal
        open={open}
         onClose={handelclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalc">
          <Typography
            id="modal-modal-title"
            style={{
              fontFamily: " Poppins",
              fontSize: "10px",
              fontWeight: "400",
              textAlign: "center",
              margin:'5px'
            }}
          >
            Create new post
          </Typography>
          <Divider
            style={{ backgroundColor: "rgb(140,140,140)"}}
          ></Divider>

         
          <div className="modal-body">
            <Container maxWidth="sm">
              <div className="modalInputs">
                <h4
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "600",
                    margin: "0px",
                    color:"rgb(180,180,180)"
                  }}
                >
                  Title
                </h4>
                <input className="ModalInput"></input>
              </div>
              <div className="modalInputs">
                <h4
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "600",
                    margin: "0px",
                    //  marginTop:'25px'
                  }}
                >
                  Body
                </h4>
                <textarea className="ModalTextarea"></textarea>
              </div>
              <div className="modalInputs" style={{textAlign:'center'}}>
                <Button
                  sx={{
                    borderRadius: "18px",
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "700",
                    padding:"3px 25px",
                    backgroundColor:"rgb(33, 150, 243)"
                  }}
                  variant="contained"
                >
                  Choose Image
                </Button>
              </div>
              <div className="modalInputs" style={{textAlign:'center'}}>
                <Button
                  sx={{
                    borderRadius: "18px",
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "700",
                    padding:"3px 25px",
                    backgroundColor:"rgb(33, 150, 243)"

                  }}
                  variant="contained"
                >
                  Post
                </Button>
              </div>            </Container>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
