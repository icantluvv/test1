import { Button as MUIButton } from "@mui/material"
import { useRouter } from "next/navigation"
import React from "react"

interface ButtonProps {
  text: string
  type: string
  onClick?: () => void
}

const Button = ({ type, onClick }: ButtonProps) => {
  const router = useRouter()

  function goToContactPage() {
    router.push("/contacts")
  }

  switch (type) {
    case "contactUs":
      return (
        <MUIButton
          variant="contained"
          color="primary"
          onClick={goToContactPage}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#2C2C2C",
            padding: "0.5rem 1.5rem",
            fontSize: "1rem",

            "@media (max-width: 1024px)": {
              fontSize: "1.25rem",
              padding: "1rem 1rem"
            },
            "@media (max-width: 768px)": {
              fontSize: "0.8rem",
              padding: "0.5rem 0.8rem"
            },
            "&:hover": {
              backgroundColor: "#444"
            }
          }}
        >
          contact us
        </MUIButton>
      )
    case "submit":
      return (
        <MUIButton
          variant="contained"
          color="primary"
          onClick={onClick}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#2C2C2C",
            padding: "0rem 1rem",
            fontSize: "1rem",
            "@media (max-width: 1024px)": {
              padding: "0rem 0rem",
              width: "100%"
            },
            "@media (max-width: 768px)": {
              padding: "0em 0.4rem",
              width: "100%"
            },
            "&:hover": {
              backgroundColor: "#444"
            }
          }}
        >
          submit
        </MUIButton>
      )

    default:
      return null
  }
}

export default Button
