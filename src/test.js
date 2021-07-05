import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Grid,
  Button,
  FormHelperText
} from "@material-ui/core";

const styles = {
  root: {
    "&>div": {
      "&:hover": {
        borderBottom: "1px solid red"
      }
    }
  },
  formControl: {
    width: "100%",
    "& label span": {
      color: "red"
    }
  },
  searchForm_submit_button: {
    background: "#e40000",
    borderRadius: 0,
    color: "#FFF",
    fontSize: 20,
    fontWeight: 100,
    "&:hover": {
      background: "#a30000",
      borderColor: "#a30000"
    }
  }
};
const SearchForm = props => {
  const style = { color: "red" };

  const {
    form: { searchValue, circle, searchCriteria },
    handleInput,
    classes
  } = props;
  return (
    <div>
      <Grid item sm={6}>
        <form className="" noValidate autoComplete="off">
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="circle">Circle</InputLabel>
            <Select
              value={circle}
              onChange={event => handleInput(event, "circle")}
              input={<Input name="circle" id="circle" />}
            >
              <MenuItem value="" disabled>
                <em>select the value</em>
              </MenuItem>

              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel
              style={{ disableAnimation: false }}
              disableAnimation={false}
              htmlFor="searchCriteria"
            >
              SEARCH CRITERIA *
            </InputLabel>
            <Select
              value={searchCriteria}
              onChange={event => handleInput(event, "searchCriteria")}
              input={<Input name="searchCriteria" id="searchCriteria" />}
            >
              <MenuItem selected disabled value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField
              required
              id="name"
              classes={{
                root: classes.root,
                hover: classes.hover
              }}
              label="bbb"
              InputLabelProps={{
                shrink: true
              }}
              value={searchValue}
              disableUnderline={true} //here
              onChange={event => handleInput(event, "searchValue")}
              helperText="Some important text"
              margin="normal"
            />
          </FormControl>
          <Button
            variant="contained"
            className={classes.searchForm_submit_button}
          >
            Submit
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(SearchForm);
