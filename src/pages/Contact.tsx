import { Form } from "react-router-dom";
import { TextField } from "@mui/material";

export default function Contact() {
  return (
    <div>
      <Form action="edit">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    
        <button type="submit">Edit</button>
      </Form>
      <Form
        method="post"
        action="submit"
      >
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}