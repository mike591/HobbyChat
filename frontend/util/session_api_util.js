export const login = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/auth/google_oauth2"
    })
  );
};

export const logout = () => {
  return (
    $.ajax({
      method: "DELETE",
      url: "/sessions/1"
    })
  );
};
