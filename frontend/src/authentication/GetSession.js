import UserPool from "./UserPool";

export const getSession = async () => {
  await new Promise((resolve, reject) => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.getSession((err, session) => {
        if (err) {
          reject(err);
        } else {
          resolve(session);
        }
      });
    } else {
      reject();
    }
  });
};
