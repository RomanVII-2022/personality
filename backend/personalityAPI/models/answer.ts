"use strict";

import { Model } from "sequelize";

type AnswerAttributesType = {
  id: number;
  answer: string;
  questionId: number;
  category: string;
};

module.exports = (sequelize: any, DataTypes: any) => {
  class Answer extends Model<AnswerAttributesType> {
    declare id: number;
    declare answer: string;
    declare questionId: number;
    declare category: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.belongsTo(models.Question, {
        foreignKey: "questionId",
        as: "question",
      });
    }
  }
  Answer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key: "id",
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: "answers",
      modelName: "Answer",
    }
  );
  return Answer;
};
