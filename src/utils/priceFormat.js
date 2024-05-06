export const priceDot = (price) => {
  // Hàm priceDot nhận vào một giá trị số và trả về chuỗi đại diện cho giá trị số đó với dấu chấm ngăn cách hàng nghìn.
  let result2 = price.toString(); // Chuyển đổi giá trị số nhận được thành chuỗi, gán vào biến result2.
  let result3 = ""; // Khởi tạo một biến rỗng để lưu trữ kết quả cuối cùng.
  let count = 0; // Biến đếm số lượng chữ số đã được xử lý.

  // Vòng lặp đi ngược lại qua chuỗi số đã chuyển thành chuỗi
  for (let i = result2.length - 1; i >= 0; i--) {
    count++; // Tăng biến đếm lên 1 sau mỗi vòng lặp.
    result3 = result2[i] + result3; // Thêm ký tự hiện tại vào đầu chuỗi kết quả.

    // Kiểm tra nếu đã duyệt qua 3 chữ số và chưa đến đầu chuỗi
    if (count % 3 === 0 && i !== 0) result3 = "." + result3; // Thêm dấu chấm ngăn cách hàng nghìn vào chuỗi kết quả.
  }

  return result3; // Trả về chuỗi kết quả cuối cùng với dấu chấm ngăn cách hàng nghìn.
};
