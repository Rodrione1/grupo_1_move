module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
        }
       
    };
    let config = {
        tableName: 'brands',
        timestamps: false,
    }
    const Brand = sequelize.define(alias,cols,config);

    Brand.associate = function(models) {
        Brand.hasMany(models.Product, { //  Es el valor de alias en el modelo
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "id_brand"
        })
    }

    return Brand
};
