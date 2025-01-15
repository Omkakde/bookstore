import { Model, DataTypes, Sequelize } from "sequelize";  
import { IBook } from "../interfaces/book.interface";

export default (sequelize: Sequelize) => {
  class Books extends Model<IBook> implements IBook {
    public id!: number;  
    public description!: string;
    public discount_price!: number;
    public book_image!: string;
    public admin_user_id!: number;
    public book_name!: string;
    public author!: string;
    public quantity!: number;
    public price!: number;
  }

  Books.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: { type: DataTypes.TEXT },
      discount_price: { type: DataTypes.DECIMAL(10, 2) },  
      book_image: { type: DataTypes.TEXT },
      admin_user_id: { type: DataTypes.INTEGER },
      book_name: { type: DataTypes.STRING },
      author: { type: DataTypes.STRING },
      quantity: { type: DataTypes.INTEGER },
      price: { type: DataTypes.DECIMAL(10, 2) }
    },
    {
      sequelize,
      modelName: 'Books',
      tableName: 'books',
    }
  );

  return Books;
};
