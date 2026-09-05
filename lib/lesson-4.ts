import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson4 = defineLesson(4, {
  words: `
起きます|おきます|thức dậy|Động từ · Nhóm II|毎朝六時に起きます。|Mỗi sáng tôi thức dậy lúc sáu giờ.
寝ます|ねます|ngủ, đi ngủ|Động từ · Nhóm II|毎晩十一時に寝ます。|Mỗi tối tôi đi ngủ lúc mười một giờ.
働きます|はたらきます|làm việc|Động từ · Nhóm I|月曜日から金曜日まで働きます。|Tôi làm việc từ thứ hai đến thứ sáu.
休みます|やすみます|nghỉ|Động từ · Nhóm I|土曜日は会社を休みます。|Thứ bảy tôi nghỉ làm.
勉強します|べんきょうします|học|Động từ · Nhóm III|夜、日本語を勉強します。|Buổi tối tôi học tiếng Nhật.
終わります|おわります|kết thúc|Động từ · Nhóm I|仕事は五時に終わります。|Công việc kết thúc lúc năm giờ.
デパート|デパート|cửa hàng bách hóa|Danh từ|デパートは十時からです。|Cửa hàng bách hóa mở từ mười giờ.
銀行|ぎんこう|ngân hàng|Danh từ|銀行は三時までです。|Ngân hàng mở đến ba giờ.
郵便局|ゆうびんきょく|bưu điện|Danh từ|郵便局は九時から五時までです。|Bưu điện mở từ chín giờ đến năm giờ.
図書館|としょかん|thư viện|Danh từ|図書館は月曜日休みです。|Thư viện nghỉ thứ hai.
美術館|びじゅつかん|bảo tàng mỹ thuật|Danh từ|美術館は何時からですか。|Bảo tàng mỹ thuật mở từ mấy giờ?
電話番号|でんわばんごう|số điện thoại|Danh từ|図書館の電話番号は何番ですか。|Số điện thoại thư viện là số mấy?
今|いま|bây giờ|Danh từ thời gian|今七時半です。|Bây giờ là bảy giờ rưỡi.
何時|なんじ|mấy giờ|Từ để hỏi|今何時ですか。|Bây giờ là mấy giờ?
何分|なんぷん|mấy phút|Từ để hỏi|今何時何分ですか。|Bây giờ là mấy giờ mấy phút?
午前|ごぜん|buổi sáng, AM|Danh từ|午前九時に仕事を始めます。|Tôi bắt đầu làm việc lúc chín giờ sáng.
午後|ごご|buổi chiều, PM|Danh từ|午後五時に仕事が終わります。|Công việc kết thúc lúc năm giờ chiều.
朝|あさ|buổi sáng|Danh từ|朝六時に起きます。|Tôi thức dậy lúc sáu giờ sáng.
昼|ひる|buổi trưa|Danh từ|昼十二時から休みます。|Tôi nghỉ từ mười hai giờ trưa.
晩|ばん|buổi tối|Danh từ|晩は勉強しません。|Buổi tối tôi không học.
毎日|まいにち|hằng ngày|Danh từ thời gian|毎日八時から働きます。|Hằng ngày tôi làm việc từ tám giờ.
昨日|きのう|hôm qua|Danh từ thời gian|昨日勉強しました。|Hôm qua tôi đã học.
今日|きょう|hôm nay|Danh từ thời gian|今日は休みです。|Hôm nay là ngày nghỉ.
明日|あした|ngày mai|Danh từ thời gian|明日は働きません。|Ngày mai tôi không làm việc.
半|はん|rưỡi, một nửa|Hậu tố|七時半に起きます。|Tôi thức dậy lúc bảy giờ rưỡi.
`,
  grammar: grammarRows(`
Nói giờ hiện tại|今 Số時 Số分です|Đặt giờ trước 時, phút trước 分. 半 nghĩa là rưỡi.|今七時半です。|Bây giờ là bảy giờ rưỡi.|Bốn giờ đọc よじ, bảy giờ しちじ, chín giờ くじ.
Bốn dạng lịch sự của động từ|Vます / Vません / Vました / Vませんでした|Bốn dạng lần lượt là hiện tại khẳng định, hiện tại phủ định, quá khứ khẳng định và quá khứ phủ định.|きのう勉強しました。|Hôm qua tôi đã học.|Hiện tại trong tiếng Nhật còn dùng cho thói quen và tương lai.
Thời điểm hành động|Thời gian に V|に đánh dấu thời điểm cụ thể có số hoặc mốc rõ ràng.|六時に起きます。|Tôi thức dậy lúc sáu giờ.|Không dùng に với 今日, 明日, 毎日 hoặc các từ thời gian tương đối tương tự.
Từ mốc này đến mốc kia|N1 から N2 まで|から chỉ điểm bắt đầu; まで chỉ điểm kết thúc. Có thể dùng riêng từng trợ từ.|九時から五時まで働きます。|Tôi làm việc từ chín giờ đến năm giờ.|Mẫu dùng được cho cả thời gian và địa điểm.
Nối hai danh từ|N1 と N2|と liệt kê đầy đủ hai hoặc nhiều danh từ, mang nghĩa và.|休みは土曜日と日曜日です。|Ngày nghỉ là thứ bảy và chủ nhật.|Khác や, と hàm ý liệt kê trọn danh sách được nói đến.
Xác nhận nhẹ bằng ね|S ね|ね đặt cuối câu để tìm sự đồng tình hoặc chia sẻ cảm nhận.|毎日大変ですね。|Ngày nào cũng vất vả nhỉ.|Không dùng ね khi thông báo mạnh điều chỉ mình biết; khi đó よ phù hợp hơn.
`),
  choices: choiceRows(`
今七時（　）です。〔7 giờ 30〕|分~半~時~まで|1|Giờ rưỡi|半 sau giờ mang nghĩa ba mươi phút.
毎朝六時（　）起きます。|を~で~に~へ|2|Thời điểm|Giờ cụ thể đi với に.
きのう日本語を（　）。〔đã học〕|勉強します~勉強しました~勉強しません~勉強です|1|Quá khứ|ました là quá khứ khẳng định lịch sự.
あしたは（　）。〔không làm việc〕|働きます~働きました~働きません~働きませんでした|2|Tương lai phủ định|ません dùng cho hiện tại hoặc tương lai phủ định.
仕事は九時（　）五時までです。|と~から~に~を|1|からまで|から đánh dấu lúc bắt đầu.
銀行は三時（　）です。|から~に~で~まで|3|Giờ kết thúc|まで đánh dấu giới hạn kết thúc.
休みは土曜日（　）日曜日です。|や~も~と~から|2|Liệt kê|と nối danh sách đầy đủ hai ngày nghỉ.
今（　）ですか。— 八時です。|何歳~何階~何時~何人|2|Hỏi giờ|何時ですか hỏi mấy giờ.
毎日七時（　）寝ます。|が~に~を~と|1|Thời điểm|Mốc bảy giờ cụ thể dùng に.
（　）六時に起きました。〔hôm qua〕|毎日~昨日~明日~毎朝|1|Quá khứ|昨日 phù hợp với 起きました.
図書館は月曜日（　）です。|働き~休み~終わり~寝ます|1|Lịch hoạt động|N休みです nói N là ngày nghỉ.
毎日大変です（　）。|か~よ~ね~の|2|ね|ね tìm sự đồng cảm: vất vả nhỉ.
`),
  translations: translationRows(`
今七時半です。|いましちじはんです。|Bây giờ là bảy giờ rưỡi.|Nói giờ|七時半 là bảy giờ ba mươi.
今何時ですか。|いまなんじですか。|Bây giờ là mấy giờ?|Hỏi giờ|何時 đọc なんじ.
毎朝六時に起きます。|まいあさろくじにおきます。|Mỗi sáng tôi thức dậy lúc sáu giờ.|Thời điểm|Giờ cụ thể 六時 đi với に.
毎晩十一時に寝ます。|まいばんじゅういちじにねます。|Mỗi tối tôi đi ngủ lúc mười một giờ.|Thời điểm|毎晩 không cần に; 十一時 cần に.
月曜日から金曜日まで働きます。|げつようびからきんようびまではたらきます。|Tôi làm việc từ thứ hai đến thứ sáu.|からまで|から và まで đánh dấu hai đầu khoảng thời gian.
仕事は五時に終わります。|しごとはごじにおわります。|Công việc kết thúc lúc năm giờ.|Kết thúc|Mốc kết thúc cụ thể đi với に.
きのう日本語を勉強しました。|きのうにほんごをべんきょうしました。|Hôm qua tôi đã học tiếng Nhật.|Quá khứ|しました là quá khứ khẳng định.
あしたは働きません。|あしたははたらきません。|Ngày mai tôi không làm việc.|Tương lai phủ định|ません dùng cho tương lai phủ định.
きのうは勉強しませんでした。|きのうはべんきょうしませんでした。|Hôm qua tôi đã không học.|Quá khứ phủ định|ませんでした là quá khứ phủ định lịch sự.
銀行は九時から三時までです。|ぎんこうはくじからさんじまでです。|Ngân hàng mở từ chín giờ đến ba giờ.|Giờ hoạt động|Câu danh từ lược động từ mở cửa.
休みは土曜日と日曜日です。|やすみはどようびとにちようびです。|Ngày nghỉ là thứ bảy và chủ nhật.|と|と nối đầy đủ hai ngày nghỉ.
毎日大変ですね。|まいにちたいへんですね。|Ngày nào cũng vất vả nhỉ.|ね|ね chia sẻ và tìm sự đồng tình.
`),
});
