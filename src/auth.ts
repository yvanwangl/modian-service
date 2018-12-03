export const userLoginAuth = (ctx, next) => {
  try {
    return ctx.session.userInfo;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const userAdminLoginAuth = (ctx, next) => {
  try {
    return ctx.session.userInfo.admin;
  } catch (e) {
    console.log(e);
    return false;
  }
};