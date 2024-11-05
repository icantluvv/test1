import TextComponent from "@/components/TextComponent"
import React, { useState } from "react"
import styled from "styled-components"
import { TextField } from "@mui/material"
import Button from "@/components/Button"

const ContactsPage = styled.main`
  min-height: 80vh;
  padding-top: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGray};
`

const Form = styled.form`
  background: white;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 3vh;
  padding-bottom: 3vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 20%;
`

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    console.log(formData)
    setIsSubmitted(true)
  }

  return (
    <ContactsPage>
      {!isSubmitted ? (
        <>
          <TextComponent text={"Only CTA on the page"} type={"h1"} />
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
            <Button text={"Submit"} type={"submit"} onClick={handleSubmit} />{" "}
            {/* Передача обработчика */}
          </Form>
        </>
      ) : (
        <TextComponent text={"Thank you for your message!"} type={"h2"} />
      )}
    </ContactsPage>
  )
}

export default Contacts
