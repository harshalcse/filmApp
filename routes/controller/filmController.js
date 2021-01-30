const Film = require('../../models/filmModel.js').Films;

// Create and Save a new Note
exports.create = (req, res) => {
    const newEntry = req.body;
    Film.create(newEntry, (e,newEntry) => {
      if(e) {
        console.log(e);
        res.send({"status": 500, "errMsg": e.message});
      } else {
        res.status(200).send({"status": 200, "data": newEntry, "msg": "Film Created Successfully!"});
      }
    });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    let query = res.locals.query || {};
  
    Film.find(query, (e,result) => {
      if(e) {
        res.send({"status": 500, "errMsg": e.message});
        console.log(e.message);
      } else {
        res.status(200).send({"status": 200, "data": result});
      }
    });

};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    const { _id } = req.params.filmId;
  
    Film.findById(req.params.filmId, (e,result) => {
      if(e) {
        res.send({"status": 500, "errMsg": e.message});
        console.log(e.message);
      } else {
        res.status(200).send({"status": 200,"data": result});
      }
    });

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    const changedEntry = req.body;
    Film.update({ _id: req.params._id }, { $set: changedEntry }, (e) => {
      if (e)
        res.send({"status": 500, "errMsg": e.message});
      else
        res.status(200).send({"msg": "Film Data Updated SuccessFully!", "status": 200});
    });

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

    Collection.remove({ _id: req.params._id }, (e) => {
        if (e)
        res.send({"status": 500, "errMsg": e.message});
        else
          res.status(200).send({"msg": "Film Deleted Successfully!","status": 200});
      });
};