export const logout = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/signout"
    })
  );
};
