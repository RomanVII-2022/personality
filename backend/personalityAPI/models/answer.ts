"use strict";
import { Model } from "sequelize";

interface AnswerAttributes {
  uuid: string;
  answer: string;
  questionId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Answer extends Model<AnswerAttributes> {
    declare uuid: string;
    declare answer: string;
    declare questionId: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Answer.init(
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
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      questionId: {
        type: DataTypes.strict,
        allowNull: false,
        references: {
          model: "questions",
          key: "uuid",
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
