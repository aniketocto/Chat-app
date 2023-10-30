const mongoose = require("mongoose");
const url = `mongodb+srv://chat_admin:admin1010@cluster0.5egnw7z.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error", e));
