const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      case_number: Number,
      case_type: String,
      added_date: Date,
      due_date: Date,
      priority: String,
      status: String,
      job_area: String,
      category: String,
      asset_category: String,
      asset: String,
      apartment: String,
      contacts: String,
      assigned_to: String,
      email_subject: String,
      email_description: String,
      notes: String,
      add_to_report: Boolean,
      duplicate_case: Boolean,
      logged_by: String,
      images: [String],
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(AutoIncrement, { inc_field: 'case_number' });
  const Myboscase = mongoose.model('myboscase', schema);
  return Myboscase;
};
