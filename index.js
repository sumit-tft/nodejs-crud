import express  from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js"
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json"  assert { type: "json" };

const PORT = 5000;
const app = express();


app.use(bodyParser.json())

app.use('/users', usersRoute)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, ()=> console.log(`Server running on port http://localhost:${PORT}`))