export const boards = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/boards/index"
    })
  );
};

export const getMessages = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: "/room/show",
      data: {id: id}
    })
  );
};

export const addMessage = (message) => {
  return (
    $.ajax({
      method: "POST",
      url: "/room/create",
      data: {message: message}
    })
  );
};
