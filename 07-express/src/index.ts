import { app, port } from "./server";

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
