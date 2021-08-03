import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  action = (
    <>
      <button
        onClick={() => {
          this.props.deleteStream(this.props.match.params.id);
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

  dismiss = () => {
    history.push("/");
  };

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          header="Delete a stream"
          content="Are you sure you want to delete this stream?"
          action={this.action}
          onDismiss={this.dismiss}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream, deleteStream })(StreamDelete);
