import React, { FormEvent, FormEventHandler, SetStateAction } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import CustomTextField from "../../(DashboardLayout)/components/forms/theme-elements/CustomTextField";
interface values {
  phone: string;
  password: string;
}

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChangeForm: React.Dispatch<SetStateAction<values>>;
  formValue: values;
  disabled:boolean
}

const AuthLogin = ({
  title,
  subtitle,
  subtext,
  onSubmit,
  onChangeForm,
  formValue,
  disabled
}: loginType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <form onSubmit={onSubmit}>
      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            Phone Number
          </Typography>
          <CustomTextField
            required
            placeholder="01*********"
            InputProps={{ inputProps: { maxLength: 11, minLength: 11 } }}
            variant="outlined"
            fullWidth
            value={formValue.phone}
            onChange={(e: any) =>
              onChangeForm((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }
          />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Password
          </Typography>
          <CustomTextField
            required
            type="password"
            variant="outlined"
            fullWidth
            value={formValue.password}
            onChange={(e: any) =>
              onChangeForm((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remeber this Device"
            />
          </FormGroup>
          <Typography
            component={Link}
            href="/"
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button disabled={disabled}
          className="bg-blue-400"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Sign In
        </Button>
      </Box>
    </form>
    {subtitle}
  </>
);

export default AuthLogin;
