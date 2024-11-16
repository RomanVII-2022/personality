"use strict";
import { Model } from "sequelize";

type QuestionAttributesType = {
  id: number;
  question: string;
};

module.exports = (sequelize: any, DataTypes: any) => {
  class Question extends Model<QuestionAttributesType> {
    declare id: number;
    declare question: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.hasMany(models.Answer, { foreignKey: "questionId", as: "answers" });
    }
  }
  Question.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
