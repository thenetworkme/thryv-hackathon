import bcrypt from "bcryptjs";

export const hashPassword = async (
  password: string
): Promise<string | null> => {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  } catch (error) {
    // TODO: Log error
    return null;
  }
};
