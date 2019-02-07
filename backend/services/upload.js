//================== Imports ========================================
import express from "express";
import fs from "fs";
import multiparty from "multiparty";
import handleExcelFile from "./handleexcel";

//================== Constants ======================================
const route = express.Router();

route.post("/postfile", (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, async (error, fields, files) => {
    if (error) throw new Error(error);
    try {
      const file = files.file[0];
      handleExcelFile.reciveFile(file, (data, err) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(data);
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  });
});

export default route;
