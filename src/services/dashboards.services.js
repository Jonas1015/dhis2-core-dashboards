export function get_dashboards() {
  return new Promise((resolve, reject) => {
    fetch('https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/dashboards.json')
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

export function get_dashboard_items(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/${id}.json`)
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