import { observer } from "mobx-react"
import { Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"

const Header = observer(props => {
  return <Paper sx={{display:"flex", flexDirection:"row", height:"8vh", width:"100%", position:"fixed", top:"0", zIndex:"100", alignItems:"center"}} className="topNavBar">
    <Box sx={{display:"flex", flexDirection:"row", padding:"1vh 0 1vh 1vw"}} className="navBarLogo">
    <img alt="Risk Oracle logo" style={{height: '39px'}} src={`/pythia.svg`}/>
    <Typography variant="h5">Risk Oracle</Typography>
      </Box>
  </Paper>
})

export default Header