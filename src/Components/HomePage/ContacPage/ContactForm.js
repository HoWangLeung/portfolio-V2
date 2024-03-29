import { Button, CircularProgress, Grid, Paper, Snackbar, TextField } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useFormControls } from "./ContactFormControls";
import { Alert, AlertTitle } from '@mui/material';

const inputFieldValues = [
    {
        name: "email",
        label: "Email",
        id: "my-name"
    },
    {
        name: "title",
        label: "Title",
        id: "my-email"
    },
    {
        name: "message",
        label: "Message",
        id: "my-message",
        multiline: true,
        rows: 10
    }
];

export const ContactForm = () => {

    const {
        sending,
        values,
        setValues,
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();

    const [ref, inView, entry] = useInView({ threshold: 0.1 });


    const handleClose = () => {
        setValues(state => ({ ...state, formSubmitted: false }))
    }

    return (
        <form as={motion.div} autoComplete="off" onSubmit={handleFormSubmit}

            ref={ref}
        // className={classes.multilineColor}
        >
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center">
                {inputFieldValues.map((inputFieldValue, index) => {
                    return (
                        <TextField
                            margin="normal"
                            variant="outlined"
                            key={index}
                            value={values[`${inputFieldValue.name}`]}
                            // initial="hidden"
                            // animate={inView?"visible":"hidden"}
                            variants={textFieldVariants}
                            component={motion.div}
                            onChange={handleInputValue}
                            onBlur={handleInputValue}
                            name={inputFieldValue.name}
                            label={inputFieldValue.label}
                            error={errors[inputFieldValue.name]}
                            multiline={inputFieldValue.multiline ?? false}
                            fullWidth
                            rows={inputFieldValue.rows ?? 1}
                            autoComplete="none"
                            {...(errors[inputFieldValue.name] && {
                                error: true,
                                helperText: errors[inputFieldValue.name]
                            })}
                        />
                    );
                })}

                <Button
                    size="large"
                    style={{ margin: "20px 0px" }}
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={false}
                    type="submit"
                    disabled={sending}
                >
                    {sending && <CircularProgress
                        size={18} style={{ marginRight: "10px", color: "white" }} />}
                    Send Message
                </Button>
            </Grid>
            <Snackbar open={values.formSubmitted} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    The message has been sent successfully !
                </Alert>
            </Snackbar>
        </form>
    );
};


const containerVariants = {
    hidden: {

        opacity: 0
    },
    visible: {

        opacity: 1,
        transition: { staggerChildren: .2 }
    }
}
const textFieldVariants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

