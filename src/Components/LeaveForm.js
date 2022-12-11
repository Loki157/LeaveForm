import React from "react";
import "../Styles/Leave.css";
import {
  Input,
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Formik, useFormik, Form } from "formik";
import { Button, Grid } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";

function LeaveForm() {
  const leaveValues = ["Earned leave", "Casual Leave", "Sick Leave"];
  return (
    <React.Fragment>
      <div className="leave">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            employeeId: "",
            email: "",
            startDate: moment().format("L"),
            endDate: moment().format("l"),
            no: Number,
            select: "",
            textArea: "",
          }}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({ setFieldValue, values, handleChange, handleSubmit }) => (
            <Grid container>
              <Form>
                <Grid container>
                  <Grid item md={6}>
                    <TextField
                      variant="outlined"
                      name="firstName"
                      value={values.firstName}
                      label="FirstName"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      variant="outlined"
                      name="lastName"
                      value={values.lastName}
                      label="LastName"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    value={values.employeeId}
                    name="employeeId"
                    onChange={handleChange}
                    label="EmployeeId"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    label="Email"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    type="number"
                    value={values.no}
                    name="no"
                    onChange={handleChange}
                    label="PhoneNumber"
                  />
                </Grid>
                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                      label="Start-Date"
                      //ampm={false}
                      inputFormat="MM/DD/YYYY"
                      value={values.startDate}
                      onChange={(value) => {
                        const t = new Date(value).toLocaleDateString();

                        console.log(t);

                        const first = setFieldValue("startDate", t, true);
                        console.log(first);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} name="startDate" />
                      )}
                    />
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                      label="End-Date"
                      //ampm={false}
                      inputFormat="DD/MM/YYYY"
                      value={values.endDate}
                      onChange={(value) => {
                        const t = new Date(value).toLocaleDateString();

                        console.log(t);

                        const first = setFieldValue("endDate", t, true);
                        console.log(first);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} name="endDate" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item>
                  <FormControl
                    variant="outlined"
                    size="medium"
                    sx={{ width: "50%" }}
                  >
                    {/* <InputLabel id="selectLabel"> Select Leave Type</InputLabel> */}
                    <Select
                      id="selectLabel"
                      defaultValue={10}
                      name="select"
                      onChange={handleChange}
                    >
                      <MenuItem value={10} disabled>
                        <em> Select Leave Type</em>
                      </MenuItem>
                      {leaveValues.map((value) => {
                        return (
                          <MenuItem value={value} key={value}>
                            {value}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <TextField
                    multiline
                    rows={6}
                    label="Detailed Reason"
                    name="textArea"
                    variant="outlined"
                    value={values.textArea}
                    onChange={handleChange}
                  ></TextField>
                </Grid>

                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
              </Form>
            </Grid>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
}
export default LeaveForm;
