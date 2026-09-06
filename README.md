# Minna Studio

Ứng dụng React 19 + TypeScript, routing theo cấu trúc thư mục (Vinext / Next-compatible), giao diện tiếng Việt cho Minna no Nihongo bài 1 đến 25.

## Chạy trên máy

Node >= 22.13.0. Bộ kiểm thử dùng khả năng chạy TypeScript trực tiếp của Node; đã kiểm tra với Node 26.

```sh
npm install
npm run dev
```

Mở địa chỉ mà máy chủ in ra (mặc định http://localhost:3000).

## Nội dung

- Bài 1–9: mẫu câu nhập môn, chỉ thị từ, địa điểm, thời gian, di chuyển, ngoại động từ, cho–nhận, tính từ và sở thích/năng lực.
- Bài 10: 47 flashcard, 7 điểm ngữ pháp, 76 câu luyện tập.
- Bài 11: 60 flashcard, 7 điểm ngữ pháp, 76 câu luyện tập.
- Bài 12: 53 flashcard, 6 điểm ngữ pháp, 76 câu luyện tập — quá khứ tính từ/danh từ và so sánh.
- Bài 13: 40 flashcard, 6 điểm ngữ pháp, 76 câu luyện tập — mong muốn và mục đích di chuyển.
- Bài 14: 39 flashcard, 7 điểm ngữ pháp, 76 câu luyện tập — các nhóm động từ, thể て, nhờ vả và hành động đang diễn ra.
- Bài 15: 29 flashcard, 6 điểm ngữ pháp, 76 câu luyện tập — xin phép, cấm đoán, trạng thái và công việc lâu dài.
- Bài 16–17: nối hành động và đặc điểm; thể ない, nghĩa vụ và điều không cần làm.
- Bài 18–21: khả năng, sở thích, kinh nghiệm, thể thông thường, ý kiến và trích dẫn.
- Bài 22–25: mệnh đề bổ nghĩa, とき・と, cho nhận và điều kiện たら・ても.
- Tổng cộng: 785 flashcard, 147 điểm ngữ pháp và 1.900 câu luyện tập. Mở đủ bài 1–25.
- Mỗi bài: 40 trắc nghiệm, 12 ghép câu Việt → Nhật, 12 ghép câu Nhật → Việt và 12 câu nghe hiểu. Mỗi câu ghép có đủ từ của đáp án và thêm 4–6 từ gây nhiễu lấy từ nội dung cùng bài.
- Ba dạng ghép câu và nghe hiểu được chia ngân hàng câu riêng. App dùng tối đa câu khác nhau trước, tránh trùng nguyên văn với trắc nghiệm và chỉ tái sử dụng khi bài đó không còn đủ ví dụ phù hợp.
- Phần nghe dùng giọng tiếng Nhật có sẵn trên thiết bị, tự phát khi mỗi câu xuất hiện, phát chậm vừa cho trình độ N5 và cho nghe lại không giới hạn trước khi trả lời. Câu Nhật, cách đọc và giải thích chỉ hiện sau khi nộp đáp án.
- Flashcard có cách đọc, nghĩa, ví dụ, đảo chiều, trộn thẻ và đánh dấu nhớ/cần ôn. Từ đã nhớ mặc định được ẩn khỏi lượt học; công tắc “Hiện từ đã nhớ” có thể đưa chúng trở lại để ôn cả bộ.
- Furigana theo từ/cụm từ: rê chuột, chạm hoặc focus từ Kanji để xem; Esc hoặc chạm ra ngoài để đóng. Áp dụng trong ngữ pháp, flashcard, câu hỏi và lựa chọn trắc nghiệm, câu dịch/giải thích. Trong bài tập, cách đọc có sẵn trước khi nộp; đáp án đúng và giải thích vẫn ẩn. Chạm Kanji chỉ mở cách đọc, không chọn/nộp đáp án. Mặt trước flashcard không hiện sẵn dòng cách đọc; công tắc Cách đọc bật hoặc tắt khả năng xem Furigana khi tương tác với Kanji.
- Văn bản trộn Việt–Nhật được tách ngôn ngữ để tiếng Việt có dấu dùng đúng phông. Dữ liệu furigana được biên soạn cho 25 bài, không tự đoán cách đọc từ mới.
- Mọi câu dịch yêu cầu chọn và sắp xếp từ trước khi mở đáp án. Có giải thích, tổng kết và luyện lại các câu cần ôn.
- Trang luyện chuyên đề có 206 trường hợp số đếm trong 18 nhóm và 288 tổ hợp chia động từ: 18 dạng, đủ các đuôi nhóm I, nhóm II, する・来る và ngoại lệ 行く. Người học phải tự gõ đáp án; cách viết Kanji hoặc hiragana đều được chấp nhận khi chia động từ.

## Routing

Các trang vẫn được định tuyến bởi Vinext; liên kết dùng điều hướng tài liệu gốc (`<a>`) để tránh lỗi RSC client navigation trong bản production hiện tại. Chuyển mục sẽ tải trang mới, giữ hỗ trợ Back/Forward và mở tab mới. Tiến độ từ vựng lưu localStorage không bị mất.

- `/`: vào flashcard bài 1.
- `/lessons/{1…25}/vocabulary`.
- `/lessons/{1…25}/grammar`.
- `/lessons/{1…25}/practice`.
- `/drills`: luyện toàn bộ số đếm và chia động từ.
- Bài hoặc phân mục không hợp lệ trả về trang 404.

## Dữ liệu & giới hạn

Nội dung bài 1–9 và 12–25 được tách thành từng tệp `lib/lesson-{số bài}.ts`; bài 10–11 được giữ trong `lib/lessons.ts`. Bộ chọn bài và kiểm tra route lấy từ `lessonIds`, phần tiêu đề/ghi chú ở `lib/lesson-details.ts`. Chấm câu dịch ở `lib/grading.ts`, dùng chung bộ tách cách đọc với furigana để không đọc sai một phần từ ghép (ví dụ 電話しています). Dữ liệu và quy tắc luyện số đếm/chia động từ nằm ở `lib/drills.ts`.

Các ví dụ, giải thích và câu hỏi tự biên soạn. Không phải ứng dụng chính thức của nhà xuất bản. Phạm vi từ vựng có phần hội thoại và có thể khác giữa các ấn bản; nguồn đối chiếu Riki cho đúng số bài được dẫn ở cuối mỗi trang.

ID thẻ và khóa lưu của bài 10–11 được giữ nguyên. Các bài mới lưu riêng theo bài, không di chuyển hay xóa tiến độ đã có.

Phần dịch chấm thứ tự các thẻ từ theo câu mẫu đã biên soạn, có chuẩn hóa dấu câu và khoảng trắng. Đây **không phải** chấm ngữ nghĩa bằng AI.

Tiến độ từ vựng lưu bằng localStorage riêng từng bài; không cần đăng nhập, không gửi câu trả lời lên dịch vụ ngoài, không đồng bộ thiết bị. Khi trình duyệt không cho lưu, app cảnh báo và giữ tiến độ trong phiên hiện tại. Kết quả luyện tập chỉ nằm trong lượt đang mở và mất khi tải lại/rời trang.

## Kiểm tra

```sh
npm test
npm run typecheck
npm run lint:app
npm run build
```

`npm run lint` kiểm tra cả thư viện giao diện được bộ khởi tạo cung cấp; một số thành phần mẫu chưa dùng có lỗi lint sẵn. `lint:app` tập trung vào mã sản phẩm, không sửa hay tắt quy tắc cho thư viện được cung cấp.

Phần tích hợp WebMCP tùy chọn chỉ cho bắt đầu một lượt luyện đang hiển thị, không điền hoặc nộp đáp án thay người học. Trình duyệt không hỗ trợ sẽ bỏ qua. Chưa xác minh tương tác WebMCP trên trình duyệt hỗ trợ.

## Xuất bản

Ứng dụng đã cấu hình đầu ra Cloudflare qua Sites. Dịch vụ tạo Sites trả lỗi khi chuẩn bị bản này nên chưa có project_id hoặc URL triển khai. Không tự tạo lại Site trùng lặp. Bản chạy local không phụ thuộc dịch vụ xuất bản.
