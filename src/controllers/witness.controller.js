const db = require("../config/db");


exports.witnessPotHole = async (req, res) => {
    const potHoleID = parseInt(req.params.id);

    const { potholeid, name, phone_number, email, hide_identity} = req.body;
      const { rows } = await db.query(
          "INSERT INTO witness (potholeid, name, phone_number, email, hide_identity) VALUES ($1, $2, $3, $4, $5)",
          [potholeid, name, phone_number, email, hide_identity]
        );
        res.status(201).send({
          message: "Witness added successfully!",
          body: {
            pothole: { potholeid, name, phone_number, email, hide_identity }
          },
        });  
  };