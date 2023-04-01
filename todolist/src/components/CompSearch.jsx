import { useState } from "react";
import todoData from "../list/data.json";

function CompSearch() {
  const [search] = useState("");
  const items = todoData?.filter((data) => {
    return data.task;
  });
}

export default CompSearch;