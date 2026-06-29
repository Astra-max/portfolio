import Astra from "../model/user.js";

/**
 * Handles user authenticated
 */
export const UserAuthenticated = async (req, res) => {
  try {
    const d = await Astra.create({ accesskey: "1234" });
    console.log(d);
  } catch (error) {
    console.log("Failed to insert", error);
  }
  return res.json({ message: "need auth token" });
};

/**
 * Handles handle update key
 */
export const HandleUpdateKey = async (req, res) => {
  return res.json({ message: "key updated" });
};

/**
 * Handles handle remove key
 */
export const HandleRemoveKey = async (req, res) => {
  return res.json({ message: "access key removed" });
};
