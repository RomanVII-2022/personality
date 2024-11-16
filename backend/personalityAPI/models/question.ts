"use strict";
import { Model } from "sequelize";

interface QuestionAttributes {
  uuid: string;
  question: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Question extends Model<QuestionAttributes> {
    declare uuid: string;
    declare question: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Question.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: "questions",
      modelName: "Question",
    }
  );
  return Question;
};
