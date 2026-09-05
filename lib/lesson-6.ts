import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson6 = defineLesson(6, {
  words: `
食べます|たべます|ăn|Động từ · Nhóm II|食堂で昼ごはんを食べます。|Tôi ăn trưa ở nhà ăn.
飲みます|のみます|uống|Động từ · Nhóm I|毎朝コーヒーを飲みます。|Mỗi sáng tôi uống cà phê.
吸います|すいます|hút|Động từ · Nhóm I|父はたばこを吸いません。|Bố tôi không hút thuốc.
見ます|みます|xem, nhìn|Động từ · Nhóm II|うちで映画を見ます。|Tôi xem phim ở nhà.
聞きます|ききます|nghe|Động từ · Nhóm I|日本語の音楽を聞きます。|Tôi nghe nhạc Nhật.
読みます|よみます|đọc|Động từ · Nhóm I|図書館で本を読みます。|Tôi đọc sách ở thư viện.
書きます|かきます|viết, vẽ|Động từ · Nhóm I|日本語で手紙を書きます。|Tôi viết thư bằng tiếng Nhật.
買います|かいます|mua|Động từ · Nhóm I|デパートで靴を買いました。|Tôi đã mua giày ở cửa hàng bách hóa.
撮ります|とります|chụp|Động từ · Nhóm I|公園で写真を撮ります。|Tôi chụp ảnh ở công viên.
します|します|làm, chơi|Động từ · Nhóm III|日曜日にテニスをします。|Chủ nhật tôi chơi tennis.
会います|あいます|gặp|Động từ · Nhóm I|駅で友達に会います。|Tôi gặp bạn ở ga.
ごはん|ごはん|cơm, bữa ăn|Danh từ|毎日ごはんを食べます。|Mỗi ngày tôi ăn cơm.
朝ごはん|あさごはん|bữa sáng|Danh từ|七時に朝ごはんを食べます。|Tôi ăn sáng lúc bảy giờ.
昼ごはん|ひるごはん|bữa trưa|Danh từ|会社で昼ごはんを食べます。|Tôi ăn trưa ở công ty.
晩ごはん|ばんごはん|bữa tối|Danh từ|家族と晩ごはんを食べます。|Tôi ăn tối cùng gia đình.
パン|パン|bánh mì|Danh từ|朝パンを食べました。|Sáng tôi đã ăn bánh mì.
卵|たまご|trứng|Danh từ|スーパーで卵を買います。|Tôi mua trứng ở siêu thị.
肉|にく|thịt|Danh từ|肉を食べません。|Tôi không ăn thịt.
魚|さかな|cá|Danh từ|市場で魚を買います。|Tôi mua cá ở chợ.
野菜|やさい|rau|Danh từ|毎日野菜を食べます。|Mỗi ngày tôi ăn rau.
果物|くだもの|trái cây|Danh từ|果物をたくさん買いました。|Tôi đã mua nhiều trái cây.
水|みず|nước|Danh từ|水を飲みます。|Tôi uống nước.
お茶|おちゃ|trà|Danh từ|いっしょにお茶を飲みませんか。|Bạn cùng uống trà nhé?
映画|えいが|phim|Danh từ|土曜日に映画を見ました。|Thứ bảy tôi đã xem phim.
手紙|てがみ|thư|Danh từ|友達に手紙を書きます。|Tôi viết thư cho bạn.
写真|しゃしん|ảnh|Danh từ|京都で写真を撮りました。|Tôi đã chụp ảnh ở Kyoto.
店|みせ|cửa hàng|Danh từ|あの店でパンを買います。|Tôi mua bánh mì ở cửa hàng kia.
庭|にわ|vườn|Danh từ|庭で写真を撮りましょう。|Chúng ta cùng chụp ảnh ở vườn nhé.
`,
  grammar: grammarRows(`
Đối tượng hành động|N を V|を đánh dấu vật hoặc nội dung chịu tác động trực tiếp của động từ.|ごはんを食べます。|Tôi ăn cơm.|Trợ từ を đọc là お.
Danh từ hoạt động với します|N を します|N có thể là môn thể thao, trò chơi, công việc hoặc sự kiện.|テニスをします。|Tôi chơi tennis.|Không phải danh từ nào cũng kết hợp tự do với します.
Hỏi làm gì|何をしますか|何を đứng trước します để hỏi hành động hoặc nội dung sẽ làm.|日曜日に何をしますか。|Chủ nhật bạn làm gì?|何 đọc なに trước を.
Nơi diễn ra hành động|Địa điểm で V|で đánh dấu nơi một hành động xảy ra.|図書館で本を読みます。|Tôi đọc sách ở thư viện.|Phân biệt で nơi hành động với へ đích di chuyển.
Mời cùng làm|Vませんか|Dạng phủ định nghi vấn được dùng như lời mời lịch sự; chấp nhận thường đáp ええ、いいですね.|いっしょに映画を見ませんか。|Bạn cùng xem phim nhé?|Không hiểu theo nghĩa đơn thuần là không làm phải không trong ngữ cảnh lời mời.
Rủ hoặc đề nghị|Vましょう|Dùng để đề nghị cùng làm hoặc hưởng ứng một quyết định chung.|ちょっと休みましょう。|Chúng ta nghỉ một chút nhé.|Vましょう mạnh và chủ động hơn Vませんか.
`),
  choices: choiceRows(`
ごはん（　）食べます。|が~を~で~へ|1|Tân ngữ|を đánh dấu món được ăn.
図書館（　）本を読みます。|に~へ~で~を|2|Nơi hành động|Đọc sách diễn ra ở thư viện nên dùng で.
日曜日に何（　）しますか。|が~を~に~へ|1|Hỏi hành động|何をしますか hỏi làm gì.
毎朝コーヒーを（　）。|食べます~飲みます~見ます~読みます|1|Động từ|Đồ uống đi với 飲みます.
公園で写真を（　）。|書きます~撮ります~聞きます~会います|1|Chụp ảnh|写真を撮ります là chụp ảnh.
駅で友達（　）会います。|を~で~に~へ|2|Gặp ai|Người gặp đi với に trong 友達に会います.
いっしょに映画を見（　）か。|ます~ません~ました~ましょう|1|Lời mời|Vませんか là lời mời lịch sự.
ええ、いいですね。見（　）。|ません~ますか~ましょう~ました|2|Hưởng ứng|Vましょう đồng ý cùng thực hiện.
あの店（　）パンを買いました。|へ~を~で~に|2|Nơi mua|Hành động mua diễn ra ở cửa hàng nên dùng で.
父はたばこを（　）。〔không hút〕|吸います~吸いました~吸いません~吸うです|2|Phủ định|ません tạo phủ định lịch sự.
日本語の音楽を（　）。|聞きます~読みます~書きます~食べます|0|Nghe|Âm nhạc là nội dung được nghe.
ちょっと（　）ましょう。|休み~休む~休んで~休みます|0|Vましょう|Bỏ ます từ 休みます rồi thêm ましょう.
`),
  translations: translationRows(`
ごはんを食べます。|ごはんをたべます。|Tôi ăn cơm.|NをV|ごはん là đối tượng của 食べます nên dùng を.
毎朝コーヒーを飲みます。|まいあさコーヒーをのみます。|Mỗi sáng tôi uống cà phê.|NをV|Đồ uống là tân ngữ của 飲みます.
うちで映画を見ます。|うちでえいがをみます。|Tôi xem phim ở nhà.|Địa điểm で|で đánh dấu nơi xem phim.
図書館で本を読みます。|としょかんでほんをよみます。|Tôi đọc sách ở thư viện.|Địa điểm で|図書館 là nơi hành động đọc xảy ra.
デパートで靴を買いました。|デパートでくつをかいました。|Tôi đã mua giày ở cửa hàng bách hóa.|Quá khứ|で chỉ nơi mua; 買いました là quá khứ.
公園で写真を撮ります。|こうえんでしゃしんをとります。|Tôi chụp ảnh ở công viên.|Cụm động từ|写真を撮ります là chụp ảnh.
駅で友達に会います。|えきでともだちにあいます。|Tôi gặp bạn ở ga.|会います|Nơi gặp dùng で; người gặp dùng に.
日曜日にテニスをします。|にちようびにテニスをします。|Chủ nhật tôi chơi tennis.|Nをします|Tên môn thể thao đi với をします.
日曜日に何をしますか。|にちようびになにをしますか。|Chủ nhật bạn làm gì?|何を|何 đọc なに trước を.
いっしょに映画を見ませんか。|いっしょにえいがをみませんか。|Bạn cùng xem phim nhé?|Lời mời|Vませんか đưa ra lời mời nhẹ.
ええ、見ましょう。|ええ、みましょう。|Vâng, cùng xem nhé.|Hưởng ứng|Vましょう hưởng ứng cùng làm.
ちょっと休みましょう。|ちょっとやすみましょう。|Chúng ta nghỉ một chút nhé.|Đề nghị|休みます đổi thành 休みましょう.
`),
});
