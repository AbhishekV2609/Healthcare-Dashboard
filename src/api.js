import axios from "axios";

const API = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const fetchPatients = async () => {
  const res = await axios.get(API, {
    headers: {
      Authorization: "Basic " + btoa("coalition:skills-test")
    }
  });
  return res.data;
};