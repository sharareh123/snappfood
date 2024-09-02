
export const findByHistory = (userData, historyId) => {
  if (!userData || !Array.isArray(userData.historyCart)) {
    console.error("Invalid userData or historyCart");
    return null;
  }
  console.log("UserData:", userData);
  console.log("HistoryId:", historyId);
  const cart = userData.historyCart.find(cart => cart.id === historyId);
  console.log("Found Cart:", cart); // بررسی نتیجه پیدا کردن
  return cart || {};
};