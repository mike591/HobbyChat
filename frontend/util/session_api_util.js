export const currentUser = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/current_user"
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
