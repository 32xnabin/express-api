const db = require('../models');
const Myboscase = db.myboscases;

// Create and Save a new Case
exports.create = (req, res) => {
  const {
    case_type,
    added_date,
    due_date,
    priority,
    status,
    job_area,
    category,
    asset_category,
    asset,
    apartment,
    contacts,
    assigned_to,
    email_subject,
    email_description,
    notes,
    logged_by,
    images,
  } = req.body;
  // Create a Case
  const myboscase = new Myboscase({
    case_type,
    added_date,
    due_date,
    priority,
    status,
    job_area,
    category,
    asset_category,
    asset,
    apartment,
    contacts,
    assigned_to,
    email_subject,
    email_description,
    notes,
    logged_by,
    images,
  });

  // Save Case in the database
  myboscase
    .save(myboscase)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('----->>>>', err);
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Case.',
      });
    });
};

//Retrieve all Cases from the database.
exports.findAll = (req, res) => {
  Myboscase.find({})
    .sort({ updatedAt: -1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Cases.',
      });
    });
};

// Find a single Case with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Myboscase.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: 'Not found Case with id ' + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error retrieving Case with id=' + id });
    });
};

// Update a Case by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  Myboscase.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Case with id=${id}. Maybe Case was not found!`,
        });
      } else res.send({ message: 'Case was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Case with id=' + id,
      });
    });
};

// Delete a Case with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Myboscase.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Case with id=${id}. Maybe Case was not found!`,
        });
      } else {
        res.send({
          message: 'Case was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Case with id=' + id,
      });
    });
};

// Delete all Cases from the database.
exports.deleteAll = (req, res) => {
  Myboscase.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Cases were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Cases.',
      });
    });
};

// Find all published Cases
exports.findAllPublished = (req, res) => {
  Myboscase.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Cases.',
      });
    });
};
