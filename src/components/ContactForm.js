import Button from "./Button"
import React from "react"
import TextareaAutosize from "react-textarea-autosize"
import { navigate } from "gatsby"
import styled from "styled-components"
import { useForm } from "react-hook-form"

const StyledForm = styled.form`
  padding-top: 2rem;
  @media (min-width: 800px) {
    padding-top: 0rem;
  }
`

const Textarea = styled(TextareaAutosize)`
  border: none;
  outline: none;
  border-bottom: ${({ error }) =>
    error ? "2px solid var(--red)" : "2px solid var(--gold)"};
  background-color: var(--white);
  width: 100%;
  font-family: "Lato";
  font-size: 14px;
  resize: none;
  overflow: hidden;
`

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: ${({ error }) =>
    error ? "2px solid var(--red)" : "2px solid var(--gold)"};
  background-color: var(--white);
  width: 100%;
  font-family: "Lato";
  font-size: 14px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, var(--white) 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`

const Field = styled.div`
  margin: 2rem 0rem;
`

const Label = styled.div`
  margin-top: 0.25rem;
  font-family: "Lora";
  font-size: 24px;
`

const Error = styled.span`
  font-size: 12px;
  color: var(--red);
`

const Asterisk = () => <span style={{ color: "var(--red)" }}>*</span>

export default () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    try {
      fetch(
        "https://act4822wla.execute-api.us-east-1.amazonaws.com/Production",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then(() => {
        navigate("/submitted")
      })
    } catch (error) {
      // handle server errors
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: "1rem" }}>
        <Field>
          <Input
            name="name"
            spellCheck="false"
            ref={register({ required: true, maxLength: 64 })}
            error={errors.name}
          />
          <Label>Name{errors.name && <Asterisk />}</Label>
          {errors.name && errors.name.type === "required" && (
            <Error>Enter your name</Error>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <Error>
              Sorry, but the provided name must contain less than 64 characters.
            </Error>
          )}
        </Field>
        <Field>
          <Input
            name="email"
            spellCheck="false"
            ref={register({
              required: true,
              maxLength: 64,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email}
            message={errors.email && errors.email.message}
          />
          <Label>Email{errors.email && <Asterisk />}</Label>
          {errors.email && errors.email.type === "required" && (
            <Error>Enter your email</Error>
          )}
          {errors.email && errors.email.type === "maxLength" && (
            <Error>
              Sorry, but the provided email must contain less than 64
              characters.
            </Error>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <Error>Invalid email address</Error>
          )}
        </Field>
        <Field>
          <Textarea
            name="message"
            spellCheck="false"
            ref={register({ required: true, maxLength: 500 })}
            error={errors.message}
          />
          <Label>Message{errors.message && <Asterisk />}</Label>
          {errors.message && errors.message.type === "required" && (
            <Error>Enter your message</Error>
          )}
          {errors.message && errors.message.type === "maxLength" && (
            <Error>
              Sorry, but your message must contain less than 500 characters.
            </Error>
          )}
        </Field>
      </div>
      <Button type="submit">Send</Button>
    </StyledForm>
  )
}
