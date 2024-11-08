import TextComponent from "@/components/TextComponent"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { TextField } from "@mui/material"
import SendMessage from "@/services/SendMessage"
import Button from "@/components/Button"

const ContactsPage = styled.main`
  min-height: 92vh;
  box-sizing: border-box;
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
    padding-left: 5vw;
    padding-right: 5vw;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 40%;
    padding-left: 2vw;
    padding-right: 2vw;
  }
`

const FieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (
      formData.email === "" ||
      formData.message === "" ||
      formData.name === ""
    ) {
      return
    }

    const response = await SendMessage(formData.name)
    setResponse(response.message)
  }

  useEffect(() => {
    if (responseText) {
      console.log(responseText)
      setIsSubmitted(true)
    }
  }, [responseText])

  return (
    <>
      <ContactsPage>
        {!isSubmitted ? (
          <>
            <h1>Only CTA on the page</h1>
            <Form onSubmit={handleSubmit}>
              <FieldDiv>
                <label htmlFor="name">Name</label>
                <TextField
                  style={{ }}
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
              </FieldDiv>

              <FieldDiv>
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
              </FieldDiv>

              <FieldDiv>
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
              </FieldDiv>
              <Button type="submit" text="submit"></Button>
              {/* <Button variant="contained" color="primary" type="submit">
                Submit
              </Button> */}
            </Form>
          </>
        ) : (
          <p>{responseText}</p>
        )}
      </ContactsPage>
    </>
  )
}

export default Contacts
