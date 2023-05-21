import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, useTheme } from "@mui/material"
import FlexBetween from '@/components/FlexBetween'
import { Palette } from '@mui/icons-material'
import PixIcon from "@mui/icons-material/Pix"

interface Props {}

const Navbar = (props: Props) => {
  const { palette } = useTheme()
  const [selected, setSelected ] = useState("dashboard")
  // sx provides color in our component
  return ( 
    <div> 
      <FlexBetween 
        mb="0.25rem" 
        p=".5rem 0rem" 
        color={palette.grey[300]}
      >
        <FlexBetween gap="0.75rem">
          <PixIcon sx={{ fontSize: "28px"}} /> 
          <Typography variant="h4" fontSize="16px">
            Finanseer
          </Typography>
        </FlexBetween>
        <FlexBetween gap="2rem">
          <Box sx={{"&:hover": { color: palette.primary[100]}}}>
            <Link 
              to="/"
              onClick={() => setSelected("dashboard")} 
              style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit"
              }}
            >
              dashboard

            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link 
              to="/predictions"
              onClick={() => setSelected("predictions")} 
              style={{
                color: selected === "predictions" ? "inherit" : palette.grey[700],
                textDecoration: "inherit"
              }}
            >
              predictions
            </Link>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </div>
  )
}

export default Navbar
