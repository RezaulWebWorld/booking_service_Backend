import bcryptjs from "bcryptjs";
const matchingPassword = async (
  plainPassword: string,
  hashingPassword: string
): Promise<boolean> => {
  const isMatching = await bcryptjs.compare(plainPassword, hashingPassword);
  return isMatching;
};

export default matchingPassword;
