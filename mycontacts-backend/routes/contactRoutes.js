const express = require("express");
const router = express.Router();
const { 
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
 }  =  require("../controllers/contactController")

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).delete(deleteContact).put(updateContact);

module.exports = router;
