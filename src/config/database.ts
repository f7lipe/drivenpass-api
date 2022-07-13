import "./envConfig.js"
import pg from "pg";

const {Pool} = pg 

const configDatabase = {
    connectionString: process.env.DATABASE_URL,
    ssl: {}
  };
  
  if(process.env.MODE === "PROD") {
    configDatabase.ssl = {
      rejectUnauthorized: false
    }
  }
  export const connection = new Pool(configDatabase);
  
  /* conexao db para teste local:-----------------
  const db = new Pool({
    host: process.env.HOST,
    port: process.env.SQL_PORT,
    user: 'postgres',
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  /---------------------------------------------*/ 
  
  
  