import { connect } from "mongoose";

const connectToDb = connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0', {
  dbName: 'test'
})
export default connectToDb