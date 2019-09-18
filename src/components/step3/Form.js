import React from "react"
import { Form } from "semantic-ui-react"
import * as Buttons from "../Buttons"
import Preview from "./Preview"
import formatSelection from "./formatSelection"

const RDForm = ({ location }) => (
  <React.Fragment>
    <Form>
      <Form.Field>
        <input
          type="text"
          name="name"
          id="ih-nameBox"
          maxLength="50"
          required="required"
          placeholder="Name*"
        />
      </Form.Field>

      <Form.Field>
        <input
          id="ih-emailBox"
          maxLength="250"
          name="email"
          pattern="([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])"
          required="required"
          size="30"
          type="text"
          placeholder="Email*"
        />
      </Form.Field>

      <Form.Field>
        <input
          id="ih-phoneBox"
          maxLength="14"
          name="phone"
          pattern="([0-9]{3}[0-9]{3}[0-9]{4})"
          required="required"
          size="30"
          type="text"
          placeholder="Phone*"
        />
      </Form.Field>

      <Form.Field>
        <input
          id="ih-zipBox"
          maxLength="10"
          name="zip"
          pattern="(^[A-Z]d[A-Z][s-]?(d[A-Z]d)?$)|(^[0-9]{5}[s-]?([0-9]{4})?$)"
          required="required"
          size="30"
          type="text"
          placeholder="Zip/Postal*"
        />
      </Form.Field>

      <Form.Field>
        <textarea
          id="ih-comment"
          className="form-textarea"
          name="whatWouldYouLike"
          cols="35"
          rows="3"
          placeholder="Comments:"
        />
      </Form.Field>

      <Form.Field>
        <Preview location={location}>
          {(src, params) => (
            <input
              id="ih-interested"
              type="hidden"
              name="interestedIn"
              defaultValue={formatSelection(
                { preview: src, params },
                { prefixed: true }
              )}
            ></input>
          )}
        </Preview>
      </Form.Field>

      <Form.Field>
        <span
          style={{ fontWeight: 600, fontSize: "15px" }}
          id="ih-resultLbl"
        ></span>
        <Buttons.Green
          id="#btnSubmit"
          className="theme-btn btn-style-two"
          formMethod="POST"
          name="submit"
          type="submit"
          onClick={event => {
            event.preventDefault()
            window.runMyFunction()
          }}
        >
          GET STARTED TODAY
        </Buttons.Green>
      </Form.Field>
    </Form>
  </React.Fragment>
)

export default RDForm
