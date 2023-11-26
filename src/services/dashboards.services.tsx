import { BASE_URL } from "../utils/dashboards.constants";

export function get_dashboards() {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/dashboards.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data); 
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function get_dashboard_items(id: string) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/${id}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data); 
      })
      .catch(error => {
        reject(error);
      });
  });
}