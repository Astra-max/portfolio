import Astra from "../model/user.js";

export const UserAuthenticated = async (req, res) => {
  try {
    const d = await Astra.create({ accesskey: "1234" });
    console.log(d);
  } catch (error) {
    console.log("Failed to insert", error);
  }
  return res.json({ message: "need auth token" });
};

export const HandleUpdateKey = async (req, res) => {
  return res.json({ message: "key updated" });
};

export const HandleRemoveKey = async (req, res) => {
  return res.json({ message: "access key removed" });
};
