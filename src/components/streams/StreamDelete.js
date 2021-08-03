import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { deleteStream } from "../../actions";

const StreamDelete = (props) => {
  const action = (
    <>
      <button
        onClick={() => {
          props.deleteStream(props.match.params.id);
          history.push("/");
        }}
        className="negative ui button"
      >
        Delete
      </button>
      <button onClick={() => history.push("/")} className="ui button">
        Cancel
      </button>
    </>
  );

  const dismiss = () => {
    history.push("/");
  };

  return (
    <div>
      StreamDelete
      <Modal
        header="Delete a stream"
        content="Are you sure you want to delete this stream?"
        action={action}
        onDismiss={dismiss}
      />
    </div>
  );
};

export default connect(null, { deleteStream })(StreamDelete);
