export const getHumanReadableDate = (date, showHours = true) => {
    let newDate = new Date(date);
    var options = {};
    if (showHours) {
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: showHours,
      };
    } else {
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    }
    return (
      newDate.toLocaleDateString("es-MX", options).charAt(0).toUpperCase() +
      newDate.toLocaleDateString("es-MX", options).slice(1)
    );
  };
  export const getHours = (date) => {
    let newDate = new Date(date);
    var options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return newDate.toLocaleTimeString("es-MX", options);
  };
  