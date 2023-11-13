

export const toggleDrawer = (anchor, open, drawer) => (event) => {
  if (
    event.type === "keydown" &&
    (event.key === "Tab" || event.key === "Shift")
  ) {
    return;
  }
  console.log("drawer", drawer);
  drawer({ ...drawer, [anchor]: open });
};
