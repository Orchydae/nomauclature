import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Form
        method="post"
        action="submit"
      >
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}