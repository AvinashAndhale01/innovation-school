import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastTypes = {
  success: toast.success,
  error: toast.error,
  warning: toast.warn,
  default: toast,
};

export const customToast = (type, message) => {
  const toastFunction = toastTypes[type] || toastTypes.default;
  toastFunction(message);
};
