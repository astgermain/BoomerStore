import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";

const LAMBDA_URL =
  "https://0b10e00zn8.execute-api.us-west-1.amazonaws.com/Production";
const required = "This field is required";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("Name");
  const [openName, setOpenName] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [openQ, setOpenQ] = useState(false);
  const handleOpenName = () => {setOpenName(!openName)};
  const handleOpenE = () => {setOpenE(!openE)};
  const handleOpenQ = () => {setOpenQ(!openQ)};
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const methods = useForm();
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log("hu");
    try {
      await fetch(LAMBDA_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setSubmitted(true);

      reset();
    } catch (error) {
      console.log("methods", methods);
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = (msg) => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="msg-confirm">
      <Alert onClose={() => {}} variant="outlined" severity="success">
        Your message was sent!
      </Alert>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSubmitted(false)}
        className="spacing-contact"
      >
        Send another message?
      </Button>
    </div>
  );

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <Grid item xs={12} className="spacing-contact">
        <label htmlFor="name">
          <TextField
            inputRef={register({ required })}
            id="name"
            type="text"
            name="name"
            label="Name"
            rowsMax={1}
            fullWidth
            size="small"
            variant="outlined"
            disabled={isSubmitting}
            error={errors.name}
          />

          {/*
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        */}
        </label>
      </Grid>
      <Grid item xs={12} className="spacing-contact">
        <label htmlFor="email">
          <TextField
            inputRef={register({ required })}
            type="email"
            name="email"
            id="email"
            label="E-Mail Address"
            rowsMax={1}
            fullWidth
            size="small"
            variant="outlined"
            disabled={isSubmitting}
            error={errors.email}
          />
        </label>
      </Grid>
      <Grid item xs={12} className="spacing-contact">
        <label htmlFor="question">
          <TextField
            inputRef={register({ required })}
            type="text"
            name="question"
            id="outlined-full-width"
            label="Your Message"
            multiline
            rows={4}
            fullWidth
            size="small"
            variant="outlined"
            disabled={isSubmitting}
            error={errors.question}
          />
        </label>
      </Grid>

      <div className="submit-wrapper">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setSubmitted(false)}
          className="spacing-contact"
          disabled={isSubmitting}
          type="submit"
        >
          Send
        </Button>
      </div>
    </form>
  );

  return (
    <div className="contact-page">
      {errors && errors.submit && (
        <Alert variant="outlined" severity="error" className="spacing-contact">
          Your message wasn't sent, there seems to be an issue!
        </Alert>
      )}
      <div className="text-side">
        <h2 className="align-left story-text">Contact Us</h2>
      </div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
  );
};

export default Contact;
