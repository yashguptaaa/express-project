const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");
//@desc Get all contact
//@route Get /api/contacts
//@access public
const getContacts = asyncHandler(async(req,res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
});

//@desc Create all contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req,res) => {
    console.log("the request body is:", req.body);
    const {name,email,phone} = req.body;
    if(!name,!email,!phone){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }

    await Contact.remove();
    res.status(200).json(contact);
});

module.exports = { getContacts,createContact,getContact,updateContact,deleteContact };