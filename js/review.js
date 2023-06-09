// Lắng nghe sự kiện submit của form
document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn form gửi đi
    // Lấy giá trị từ các trường input và textarea
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    // Tạo phần tử li để hiển thị đánh giá
    var li = document.createElement("li");
    li.innerHTML = "<strong>" + name + ":</strong> " + comment;

    // Thêm li vào danh sách đánh giá
    document.getElementById("reviewList").appendChild(li);

    // Xóa nội dung trong các trường input và textarea
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});
