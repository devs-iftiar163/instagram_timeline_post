/**
 * Create Alert
 */
const createAlert = (message, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${message}
          <button class="btn-close" data-bs-dismiss="alert"></button>
      </p>`;
};

/**
 * Send Data To Local Storage
 */

const sendData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Get Data From Local Storage
 */

const getData = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
};

/**
 * Time Ago Fucntion
 */
const timeAgo = (date) => {
  const seconds = Math.floor((Date.now() - date) / 1000);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (seconds < 604800) {
    const days = Math.floor(seconds / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else {
    const weeks = Math.floor(seconds / 604800);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }
};
