module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        origin: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        observations: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        id_size: {
            type: dataTypes.INT,
            allowNull: false
        },
        id_color: {
            type: dataTypes.INT,
            allowNull: false
        },
        id_category: {
            type: dataTypes.INT,
            allowNull: false
        },
        id_brand: {
            type: dataTypes.INT,
            allowNull: false
        }
    };
    let config = {
        tableName: 'products',
        timestamps: true,
    }
    const Product = sequelize.define(alias,cols,config);

   

    return Product
};