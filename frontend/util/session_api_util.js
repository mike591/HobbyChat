export const currentUser = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/show_current_user"
    })
  );
};

export const logout = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/signout"
    })
  );
};
