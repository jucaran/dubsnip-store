const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Order = sequelize.define("order", {
    state: {
      type: DataTypes.ENUM(
        "cart",
        "created",
        "processing",
        "cancelled",
        "completed"
      ),
    },
    date: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shippingAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

  });
};
