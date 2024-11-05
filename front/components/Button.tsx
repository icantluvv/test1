import { Button as MUIButton } from "@mui/material"
import { useRouter } from "next/navigation"
import React from "react"
import TextComponent from "./TextComponent"

interface ButtonProps {
  text: string
  type: string
  onClick?: () => void // Добавляем обработчик нажатия
}

const Button = ({ text, type, onClick }: ButtonProps) => {
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
            padding: "0rem 1.5rem",
            "@media (max-width: 1024px)": {
              padding: "0rem 1rem"
            },
            "@media (max-width: 768px)": {
              padding: "0em 0.8rem"
            },
            "&:hover": {
              backgroundColor: "#444"
            }
          }}
        >
          <TextComponent text={text} type="button" />
        </MUIButton>
      )
    case "submit":
      return (
        <MUIButton
          variant="contained"
          color="primary"
          onClick={onClick} // Используем переданный обработчик
          sx={{
            borderRadius: "10px",
            backgroundColor: "#2C2C2C",
            padding: "0rem 1rem",
            "@media (max-width: 1024px)": {
              padding: "0rem 0rem"
            },
            "@media (max-width: 768px)": {
              padding: "0em 0.4rem"
            },
            "&:hover": {
              backgroundColor: "#444"
            }
          }}
        >
          <TextComponent text={text} type="button" />
        </MUIButton>
      )

    default:
      return null
  }
}

export default Button
