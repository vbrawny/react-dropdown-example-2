import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import SearchForm from "./test";
const styles = {
  searchUser__block: {
    background: "#f6f6f6",
    height: "calc(100% - 64px)",
    position: "relative",
    top: "64px"
  }
};

class Abc extends Component {
  state = {
    form: {
      searchValue: "",
      circle: "",
      searchCriteria: ""
    }
  };
  handleInputFieldChange = (event, name) => {
    const {target} =event;
    this.setState(preState => ({
      ...preState,
      form: {
        ...preState.form,
        [name]: target.value
      }
    }));
  };

  render() {
    const { classes } = this.props,
      { form } = this.state;
    return (
      <div className={classes.searchUser__block}>
        <SearchForm handleInput={this.handleInputFieldChange} form={form} />
      </div>
    );
  }
}

export default withStyles(styles)(Abc);
