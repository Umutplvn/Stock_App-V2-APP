import { Padding } from "@mui/icons-material";

export const btnStyle = {
    "&:hover": { color: "red", cursor: "pointer" },
  }
  

  export const modalStyle ={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const flex={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexWrap:"wrap",
  gap:"1rem"

}
  

export const paperStyle={
  width:"300px", 
  height:"130px", 
  display:"flex", 
  gap:"1.5rem", 
  alignItems:"center", 
  margin:"1rem",
  padding:"1rem"
}