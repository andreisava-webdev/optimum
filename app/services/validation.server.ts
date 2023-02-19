export const validateEmail = (email: string) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!emailRegex.test(email)) {
    return 'Invalid email';
  }
};

export const validatePassword = (password: string) => {
  // Password must be atleast 8 characters long and contain atleast one uppercase letter, one lowercase letter and one digit
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!passwordRegex.test(password)) {
    return 'Invalid password, must be atleast 8 characters with uppercase and lowercase letters and atleast a digit';
  }
};

export const validateName = (name: string) => {
  if (name.trim().length === 0) {
    return 'Name must not be empty';
  }
};

export const validateRole = (role: string) => {
  if (role !== 'Agent' && role !== 'Manager' && role !== 'Admin')
    return 'Invalid role selected';
};
