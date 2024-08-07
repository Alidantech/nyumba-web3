import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, sx, ...props }: any) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, ...sx }}
      {...props}
      disabled={pending}
    >
      {pending ? "submitting..." : children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

SubmitButton.defaultProps = {
  sx: {},
};

export default SubmitButton;
