// import React from "react";
// import ReactDOM from "react-dom";

// // --- Formik  imports --- //
// import { Formik, Form } from "formik";

// // --- Material Ui Imports --- //
// import { Typography, Container, Button, Box } from "@material-ui/core";

// // --- Material Ui Picker Imports --- //
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// import DateFnsUtils from "@date-io/date-fns";

// // --- Yup Imports --- //
// import * as yup from "yup";

// // --- Custom Imports --- //
// import { DisplayFormikProps } from "./DisplayFormikProps";

// // --- Form Schema --- //
// var formSchema = {
//   date: null, // if date is defiend as '' yup will throw a invalid date error
// };

// // --- Validation Schema --- //
// var validationSchema = yup.object().shape({
//   date: yup.date().nullable(),
// });

// function App() {
//   return (
//     <Container>
//       <Typography variant="h5">
//         Materail Ui Picker, Yup, and Formik Example{" "}
//       </Typography>
//       <Typography paragraph>
//         This example show how to use Material Ui Picker with Formik and
//         validated with Yup
//       </Typography>

//       {/* Formik Mui Date Picker Example */}
//       <Formik
//         initialValues={formSchema}
//         onSubmit={(values) => {
//           // same shape as initial values
//           console.log(values);
//         }}
//         render={(props) => (
//           <Form>
//             <Box width="100%" mb={2}>
//               {/* Material Ui Date Picker */}
//               <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <KeyboardDatePicker
//                   id="date-picker-dialog"
//                   label="Date picker dialog"
//                   inputVariant="outlined"
//                   format="MM/dd/yyyy"
//                   value={props.values.date}
//                   onChange={(value) => props.setFieldValue("date", value)}
//                   KeyboardButtonProps={{
//                     "aria-label": "change date",
//                   }}
//                 />
//               </MuiPickersUtilsProvider>
//             </Box>
//             <Box width="100%" my={2}>
//               <Button type="submit" variant="contained" color="primary">
//                 Submit
//               </Button>
//             </Box>

//             {/* Displays Formik Props */}
//             <DisplayFormikProps {...props} />
//           </Form>
//         )}
//       />
//     </Container>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
