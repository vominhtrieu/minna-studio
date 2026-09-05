import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson23 = defineLesson(23, {
  words: `
聞きます|ききます|hỏi; nghe|Động từ · Nhóm I|道がわからないとき、警察に聞きます。|Khi không biết đường, tôi hỏi cảnh sát.
回します|まわします|xoay, vặn|Động từ · Nhóm I|このつまみを右へ回すと、音が大きくなります。|Vặn núm này sang phải thì âm thanh to lên.
引きます|ひきます|kéo|Động từ · Nhóm I|このドアは引くと、開きます。|Cửa này kéo thì mở.
変えます|かえます|thay đổi|Động từ · Nhóm II|サイズを変えると、値段も変わります。|Khi đổi kích cỡ, giá cũng thay đổi.
触ります|さわります|chạm vào|Động từ · Nhóm I|危ない機械に触らないでください。|Xin đừng chạm vào máy nguy hiểm.
出ます|でます|đi ra, xuất hiện|Động từ · Nhóm II|角を右へ曲がると、駅が見えます。|Rẽ phải ở góc đường thì thấy ga.
動きます|うごきます|chuyển động, chạy|Động từ · Nhóm I|このボタンを押すと、機械が動きます。|Bấm nút này thì máy chạy.
歩きます|あるきます|đi bộ|Động từ · Nhóm I|天気がいいとき、公園を歩きます。|Khi trời đẹp, tôi đi bộ trong công viên.
渡ります|わたります|băng qua|Động từ · Nhóm I|信号が青のとき、道を渡ります。|Khi đèn xanh, tôi qua đường.
曲がります|まがります|rẽ|Động từ · Nhóm I|次の角を左へ曲がってください。|Hãy rẽ trái ở góc tiếp theo.
気をつけます|きをつけます|chú ý, cẩn thận|Cụm động từ|道を渡るとき、車に気をつけます。|Khi qua đường, tôi chú ý xe cộ.
引越しします|ひっこしします|chuyển nhà|Động từ · Nhóm III|引越しするとき、友達に手伝ってもらいました。|Khi chuyển nhà, tôi đã nhờ bạn giúp.
電気屋|でんきや|cửa hàng điện máy|Danh từ|駅を出ると、右に電気屋があります。|Ra khỏi ga thì bên phải có cửa hàng điện máy.
故障|こしょう|hỏng hóc|Danh từ|機械が動かないとき、故障を調べます。|Khi máy không chạy, tôi kiểm tra hỏng hóc.
サイズ|サイズ|kích cỡ|Danh từ|サイズが大きいと、重くなります。|Kích cỡ lớn thì trở nên nặng.
音|おと|âm thanh|Danh từ|つまみを回すと、音が小さくなります。|Vặn núm thì âm thanh nhỏ đi.
機械|きかい|máy móc|Danh từ|この機械の使い方を教えてください。|Hãy chỉ tôi cách dùng máy này.
つまみ|つまみ|núm vặn|Danh từ|右のつまみを回してください。|Hãy vặn núm bên phải.
角|かど|góc đường|Danh từ|二つ目の角を右へ曲がります。|Tôi rẽ phải ở góc thứ hai.
橋|はし|cầu|Danh từ|この橋を渡ると、学校があります。|Qua cây cầu này thì có trường học.
駐車場|ちゅうしゃじょう|bãi đỗ xe|Danh từ|銀行を出ると、前に駐車場があります。|Ra khỏi ngân hàng thì phía trước có bãi đỗ xe.
お正月|おしょうがつ|Tết Nhật|Danh từ|お正月のとき、家族と神社へ行きます。|Vào dịp Tết, tôi đi đền với gia đình.
ごちそうさまでした|ごちそうさまでした|cảm ơn vì bữa ăn|Cụm hội thoại|食事が終わったとき、ごちそうさまでしたと言います。|Khi ăn xong, người Nhật nói cảm ơn vì bữa ăn.
～目|～め|thứ..., chỉ thứ tự|Hậu tố|二つ目の信号を左へ曲がってください。|Hãy rẽ trái ở đèn giao thông thứ hai.
建物|たてもの|tòa nhà|Danh từ|橋を渡ると、白い建物が見えます。|Qua cầu thì thấy tòa nhà màu trắng.
外国人登録証|がいこくじんとうろくしょう|thẻ đăng ký người nước ngoài|Danh từ|住所が変わったとき、登録証を直しました。|Khi đổi địa chỉ, tôi đã sửa thông tin trên thẻ đăng ký.
道|みち|đường|Danh từ|この道をまっすぐ歩いてください。|Hãy đi thẳng theo đường này.
交差点|こうさてん|ngã tư, giao lộ|Danh từ|交差点を右へ曲がると、病院があります。|Rẽ phải tại ngã tư thì có bệnh viện.
信号|しんごう|đèn giao thông|Danh từ|信号が赤のとき、止まります。|Khi đèn đỏ, tôi dừng lại.
`,
  grammar: grammarRows(`
Khi một việc xảy ra|Vる・Vない・Vた / Aい / Aなな / Nの + とき|とき đặt một tình huống làm mốc cho hành động chính. Động từ và tính từ trước とき dùng thể thông thường.|日本へ行くとき、かばんを買いました。|Khi đi Nhật, tôi đã mua một chiếc cặp.|Tính từ な giữ な; danh từ nối bằng の trước とき.
Trước hay sau mốc とき|Vるとき và Vたとき|Vるとき thường là lúc hành động V chưa hoàn tất; Vたとき là lúc V đã hoàn tất. Sự khác biệt quyết định địa điểm hoặc trạng thái.|日本へ行くとき、かばんを買いました。日本へ行ったとき、時計を買いました。|Khi chuẩn bị đi Nhật tôi mua cặp. Khi đã sang Nhật tôi mua đồng hồ.|Không chọn theo thì của câu chính; chọn theo quan hệ thời gian.
Kết quả tất yếu|V thể từ điển + と、～|Diễn tả kết quả tự nhiên, thao tác máy hoặc đường đi cứ làm V thì kết quả xảy ra.|このボタンを押すと、機械が動きます。|Bấm nút này thì máy chạy.|Không dùng と cho mệnh lệnh, lời nhờ hay ý chí của người nói ở vế sau.
Mốc với tính từ và danh từ|Aいとき / Aななとき / Nのとき|Tính từ い giữ nguyên; tính từ な thêm な; danh từ thêm の.|暇なとき、本を読みます。|Khi rảnh tôi đọc sách.|Phân biệt 暇なとき với 休みのとき.
Đi xuyên qua một không gian|N địa điểm を + động từ di chuyển|を đánh dấu nơi người hoặc vật đi xuyên qua hay rời khỏi với 歩きます, 渡ります, 出ます.|公園を歩きます。|Tôi đi bộ trong công viên.|Không phải mọi địa điểm hoạt động đều dùng を; nơi diễn ra hoạt động thường dùng で.
`),
  choices: choiceRows(`
日本へ（　）とき、かばんを買いました。〔mua trước khi đi〕|行く~行った~行って~行きます|0|Vるとき|Khi mua cặp, hành động đi Nhật chưa hoàn tất nên dùng 行くとき.
日本へ（　）とき、時計を買いました。〔mua tại Nhật〕|行く~行った~行き~行って|1|Vたとき|Khi mua đồng hồ, đã đến Nhật nên dùng 行ったとき.
暇（　）とき、本を読みます。|の~に~な~で|2|Aなとき|Tính từ な 暇 cần な trước とき.
子ども（　）とき、よく川で泳ぎました。|な~の~に~で|1|Nのとき|Danh từ 子ども nối với とき bằng の.
このボタンを押す（　）、機械が動きます。|と~ときに~から~まで|0|Điều kiện と|Vると diễn tả kết quả máy móc tự động.
右へ曲がると、駅（　）見えます。|を~に~が~で|2|Kết quả|駅 là chủ thể của 見えます nên dùng が.
この道（　）まっすぐ歩いてください。|で~に~へ~を|3|Nを di chuyển|Con đường được đi xuyên theo nên dùng を.
橋（　）渡ると、学校があります。|で~を~に~が|1|Qua cầu|Nơi đi qua với 渡ります dùng を.
駅（　）出ると、右に銀行があります。|を~で~に~が|0|Rời nơi chốn|Địa điểm rời khỏi với 出ます dùng を.
天気が（　）とき、公園を歩きます。|いい~よく~いいな~いいの|0|Aいとき|Tính từ い đặt nguyên dạng trước とき.
道が（　）とき、警察に聞きます。|わからない~わからなくて~わかりません~わからないな|0|Vないとき|Động từ phủ định thông thường đứng trước とき.
道を渡るとき、車（　）気をつけます。|を~が~に~で|2|気をつける|Đối tượng cần chú ý đi với に: 車に気をつけます.
`),
  translations: translationRows(`
日本へ行くとき、かばんを買いました。|にほんへいくとき、かばんをかいました。|Khi chuẩn bị đi Nhật, tôi đã mua một chiếc cặp.|Vるとき|Lúc mua cặp, việc đi Nhật chưa hoàn tất nên dùng 行く.
日本へ行ったとき、時計を買いました。|にほんへいったとき、とけいをかいました。|Khi đã sang Nhật, tôi đã mua một chiếc đồng hồ.|Vたとき|Lúc mua đồng hồ, người nói đã đến Nhật nên dùng 行った.
暇なとき、本を読みます。|ひまなとき、ほんをよみます。|Khi rảnh tôi đọc sách.|Aなとき|暇 là tính từ な nên giữ な trước とき.
子どものとき、よく川で泳ぎました。|こどものとき、よくかわでおよぎました。|Khi còn nhỏ tôi thường bơi ở sông.|Nのとき|Danh từ 子ども nối với とき bằng の.
このボタンを押すと、機械が動きます。|このボタンをおすと、きかいがうごきます。|Bấm nút này thì máy chạy.|Vると|Thao tác bấm nút dẫn đến kết quả tự động.
右へ曲がると、駅が見えます。|みぎへまがると、えきがみえます。|Rẽ phải thì sẽ thấy nhà ga.|Chỉ đường|Vると mô tả kết quả theo lộ trình.
この道をまっすぐ歩いてください。|このみちをまっすぐあるいてください。|Hãy đi thẳng theo con đường này.|Nを di chuyển|道を chỉ không gian được đi xuyên theo.
この橋を渡ると、学校があります。|このはしをわたると、がっこうがあります。|Qua cây cầu này thì có trường học.|Qua cầu|橋 là nơi đi qua nên dùng を.
駅を出ると、右に銀行があります。|えきをでると、みぎにぎんこうがあります。|Ra khỏi ga thì bên phải có ngân hàng.|Rời địa điểm|駅 là nơi rời khỏi nên dùng を.
天気がいいとき、公園を歩きます。|てんきがいいとき、こうえんをあるきます。|Khi trời đẹp, tôi đi bộ trong công viên.|Aいとき|いい đặt trực tiếp trước とき.
道がわからないとき、警察に聞きます。|みちがわからないとき、けいさつにききます。|Khi không biết đường, tôi hỏi cảnh sát.|Vないとき|わからない là thể phủ định thông thường trước とき.
道を渡るとき、車に気をつけます。|みちをわたるとき、くるまにきをつけます。|Khi qua đường, tôi chú ý xe cộ.|Vるとき|渡る mô tả hành động đang chuẩn bị thực hiện tại mốc とき.
`),
});
