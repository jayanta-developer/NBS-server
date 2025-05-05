const Office = require("../../Module/Office");

// Create a new Office
exports.createOffice = async (req, res) => {
  try {
    const office = new Office(req.body);
    const savedOffice = await office.save();
    res.status(201).json(savedOffice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Office
exports.getAllOffice = async (req, res) => {
  try {
    const offices = await Office.find();
    res.status(200).json(offices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a Office by ID
exports.getOfficeById = async (req, res) => {
  try {
    const office = await Office.findById(req.params.id);
    if (!office) {
      return res.status(404).json({ message: "Office not found" });
    }
    res.status(200).json(office);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a office by ID
exports.updateOffice = async (req, res) => {
  try {
    const updatedoffice = await Office.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedoffice) {
      return res.status(404).json({ message: "Office not found" });
    }
    res.status(200).json(updatedoffice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a office by ID
exports.deleteOffice = async (req, res) => {
  try {
    const deletedOffice = await Office.findByIdAndDelete(req.params.id);

    if (!deletedOffice) {
      return res.status(404).json({ message: "Office not found" });
    }
    res.status(200).json({ message: "Office deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
