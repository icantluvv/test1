import TextComponent from "@/components/TextComponent"
import React, { useState } from "react"
import styled from "styled-components"
import { Alert, TextField } from "@mui/material"
import Button from "@/components/Button"
import SendMessage from "@/services/SendMessage"

const ContactsPage = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: 1024px) {
    height: 100vh;
    padding-bottom: 7vh;
    padding-top: 8vh;
    padding-left: 5vw;
    padding-right: 5vw;
  }
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

  @media (max-width: 767px) {
    min-width: 70%;
    align-items: center;
    text-align: center;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 40%;
    align-items: center;
    text-align: center;
    padding-left: 2vw;
    padding-right: 2vw;
  }
`

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [responseText, setResponse] = useState("")
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit() {
    if (formData.email == "" || formData.message == "" || formData.name == "") {
      return <Alert severity="error">Fill in all fields</Alert>
    }
    const response = await SendMessage(formData.name)
    const result = await response
    setResponse(result.message)
    console.log(result.message)
    setIsSubmitted(true)
  }

  return (
    <>
      <ContactsPage>
        {!isSubmitted ? (
          <>
            <TextComponent text={"Only CTA on the page"} type={"h1"} />
            <Form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <TextField
                id="name"
                name="name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <label htmlFor="email">Email</label>
              <TextField
                id="email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="message">Message</label>
              <TextField
                id="message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={formData.message}
                onChange={handleChange}
              />
              <Button text={"Submit"} type={"submit"} onClick={handleSubmit} />{" "}
            </Form>
          </>
        ) : (
          <TextComponent text={responseText} type={"h1"} />
        )}
      </ContactsPage>
    </>
  )
}

export default Contacts
