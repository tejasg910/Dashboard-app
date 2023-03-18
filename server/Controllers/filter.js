import { Product } from "../Models/Model.js";

export const getAllYears = async (req, res, next) => {
  try {
    // const data = await Product.find({}, { end_year: 1 });
    const d = await Product.distinct("end_year", {
      end_year: { $ne: null, $ne: "" },
    });
    const data = d.filter((year) => !!year);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllTopics = async (req, res, next) => {
  try {
    // const data = await Product.find({}, { end_year: 1 });
    const d = await Product.distinct("topic", {
      end_year: { $ne: null, $ne: "" },
    });
    const data = d.filter((year) => !!year);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllSector = async (req, res, next) => {
  try {
    // const data = await Product.find({}, { end_year: 1 });
    const d = await Product.distinct("sector", {
      end_year: { $ne: null, $ne: "" },
    });
    const data = d.filter((year) => !!year);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllRegion = async (req, res, next) => {
  try {
    // const data = await Product.find({}, { end_year: 1 });
    const d = await Product.distinct("region", {
      end_year: { $ne: null, $ne: "" },
    });
    const data = d.filter((year) => !!year);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllPestle = async (req, res, next) => {
  try {
    // const data = await Product.find({}, { end_year: 1 });
    const d = await Product.distinct("pestle", {
      end_year: { $ne: null, $ne: "" },
    });
    const data = d.filter((year) => !!year);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllSource = async (req, res, next) => {
  try {
    // const data = await Product.find({}, { end_year: 1 });
    const d = await Product.distinct("source", {
      end_year: { $ne: null, $ne: "" },
    });
    const data = d.filter((year) => !!year);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllCountries = async (req, res, next) => {
  try {
    // const data = await Product.find({}, { end_year: 1 });
    const d = await Product.distinct("country", {
      end_year: { $ne: null, $ne: "" },
    });
    const data = d.filter((year) => !!year);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllCity = async (req, res, next) => {
  try {
    // const data = await Product.find({}, { end_year: 1 });
    const d = await Product.distinct("city", {
      end_year: { $ne: null, $ne: "" },
    });
    const data = d.filter((year) => !!year);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
