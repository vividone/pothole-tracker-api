const db = require("../config/db");

// Create new Pot Hole Entry

exports.createPotHole = async (req, res) => {
  const { roadName, locationState, dangerLevel, locationLGA, numOfPotHoles, status } = req.body;
    const { rows } = await db.query(
        "INSERT INTO pothole (roadName, locationState, dangerLevel, locationLGA, numOfPotHoles, status ) VALUES ($1, $2, $3, $4, $5, $6)",
        [roadName, locationState, dangerLevel, locationLGA, numOfPotHoles, status]
      );
      res.status(201).send({
        message: "PotHole added successfully!",
        body: {
          pothole: { roadName, locationState, dangerLevel, locationLGA, numOfPotHoles, status }
        },
      });  
};

// List all potholes ordered by Danger Level

exports.getAllPotHole = async(req, res) => {
    const response = await db.query(
        "SELECT * FROM pothole ORDER BY potHoleID ASC"
        );
    res.status(200).send(response.rows);
};

// View a specific Pot Hole

exports.getPotHoleByID = async(req, res) => {
    const potHoleID = parseInt(req.params.id);
    const response = await db.query("SELECT * FROM pothole WHERE potholeID = $1", [potHoleID]);
    res.status(200).send(response.rows);
};

//Update Pot Hole Data
exports.updatePotHoleByID = async(req, res) =>{
    const potHoleID = parseInt(req.params.id);
    const { roadName, locationState, dangerLevel, locationLGA, numOfPotHoles, status} = req.body;
    const response = await db.query(
        "UPDATE pothole SET roadName = $1, locationState = $2, locationLGA = $3, numOfPotHoles = $4 , dangerLevel = $5, $status = $6 WHERE potholeID = $6", 
        [roadName, locationState, dangerLevel, locationLGA, numOfPotHoles, status, potHoleID]
        );
    res.status(200).send({message: "Pothole Updated successfully"});
};

// Delete PotHole Record

exports.deletePotHoleByID = async(req, res) => {
    const potHoleID = parseInt(req.params.id);
    const response = await db.query("DELETE FROM pothole WHERE potholeID = $1", [potHoleID]);
    res.status(200).send({message: "Pothole Deleted successfully"});
};