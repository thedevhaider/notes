const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNotesInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.author = !isEmpty(data.author) ? data.author : "";

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = "Title must be 2 to 30 Characters long";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  if (!Validator.isLength(data.description, { min: 10, max: 500 })) {
    errors.description = "Description must be 10 to 500 Characters long";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = "Author is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
