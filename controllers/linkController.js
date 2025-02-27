const Link = require("../models/Link");

exports.createLink = async (req, res) => {
  try {
    const { title, url } = req.body;
    const link = new Link({ user: req.user.id, title, url });

    await link.save();
    res.status(201).json(link);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getUserLinks = async (req, res) => {
  try {
    const links = await Link.find({ user: req.user.id });
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
