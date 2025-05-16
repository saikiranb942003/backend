
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.associate = (models) => {
        // User has many Orders (One-to-Many) with cascading deletion
        User.hasMany(models.Order, {
            foreignKey: 'userId',
            as: 'orders',
            onDelete: 'CASCADE',  // Cascade delete
            hooks: true,          // Enables cascading delete in Sequelize
        });
    };

    return User;
};

