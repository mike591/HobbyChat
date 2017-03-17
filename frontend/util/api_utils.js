export const boards = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/boards/index"
    })
  );
};
