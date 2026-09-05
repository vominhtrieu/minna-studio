import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson18 = defineLesson(18, {
  words: `
できます|できます|có thể; được hoàn thành|Động từ · Nhóm II|私は少しピアノができます。|Tôi có thể chơi piano một chút.
洗います|あらいます|rửa, giặt|Động từ · Nhóm I|食事の前に手を洗います。|Tôi rửa tay trước bữa ăn.
弾きます|ひきます|chơi nhạc cụ dây, phím|Động từ · Nhóm I|妹はピアノを弾くことができます。|Em gái tôi có thể chơi piano.
歌います|うたいます|hát|Động từ · Nhóm I|日本語の歌を歌うことが好きです。|Tôi thích hát nhạc Nhật.
集めます|あつめます|sưu tầm, thu thập|Động từ · Nhóm II|趣味は切手を集めることです。|Sở thích của tôi là sưu tầm tem.
捨てます|すてます|vứt, bỏ|Động từ · Nhóm II|古い新聞を捨てます。|Tôi vứt báo cũ.
換えます|かえます|đổi, thay|Động từ · Nhóm II|駅でお金を換えることができます。|Có thể đổi tiền ở ga.
運転します|うんてんします|lái xe|Động từ · Nhóm III|父は車を運転することができます。|Bố tôi có thể lái ô tô.
予約します|よやくします|đặt trước|Động từ · Nhóm III|旅行の前にホテルを予約します。|Tôi đặt khách sạn trước chuyến đi.
見学します|けんがくします|tham quan để học hỏi|Động từ · Nhóm III|来週、工場を見学します。|Tuần sau tôi tham quan nhà máy.
現金|げんきん|tiền mặt|Danh từ|現金で払うことができますか。|Tôi có thể trả bằng tiền mặt không?
趣味|しゅみ|sở thích|Danh từ|私の趣味は写真を撮ることです。|Sở thích của tôi là chụp ảnh.
日記|にっき|nhật ký|Danh từ|寝る前に日記を書きます。|Tôi viết nhật ký trước khi ngủ.
祈り|いのり|lời cầu nguyện; sự cầu nguyện|Danh từ|朝の祈りの前に静かに座ります。|Trước giờ cầu nguyện sáng, tôi ngồi yên lặng.
課長|かちょう|trưởng phòng|Danh từ|課長は中国語を話すことができます。|Trưởng phòng có thể nói tiếng Trung.
部長|ぶちょう|trưởng bộ phận|Danh từ|会議の前に部長に電話します。|Tôi gọi cho trưởng bộ phận trước cuộc họp.
社長|しゃちょう|giám đốc công ty|Danh từ|社長の趣味はゴルフです。|Sở thích của giám đốc là golf.
動物|どうぶつ|động vật|Danh từ|私は動物の写真を集めています。|Tôi đang sưu tầm ảnh động vật.
馬|うま|ngựa|Danh từ|あの牧場で馬に乗ることができます。|Có thể cưỡi ngựa ở trang trại kia.
ピアノ|ピアノ|đàn piano|Danh từ|姉はピアノができます。|Chị tôi biết chơi piano.
牧場|ぼくじょう|trang trại chăn nuôi|Danh từ|牧場を見学することができます。|Có thể tham quan trang trại.
国際|こくさい|quốc tế|Tiền tố|国際会議の前に資料を読みます。|Tôi đọc tài liệu trước hội nghị quốc tế.
本当ですか|ほんとうですか|thật vậy sao?|Cụm hội thoại|来月結婚します。本当ですか。|Tháng sau tôi kết hôn. Thật vậy sao?
ぜひ|ぜひ|nhất định, rất mong|Phó từ|ぜひ遊びに来てください。|Nhất định hãy đến chơi nhé.
なかなか|なかなか|mãi mà; khá là|Phó từ|日本ではなかなか馬に乗ることができません。|Ở Nhật khó có dịp cưỡi ngựa.
`,
  grammar: grammarRows(`
Thể từ điển|Nhóm I: âm hàng い → hàng う / Nhóm II: bỏ ます + る / Nhóm III: する・くる|Thể từ điển là dạng cơ bản của động từ, dùng trước nhiều mẫu ngữ pháp. 書きます thành 書く, 食べます thành 食べる.|読みます → 読む。見ます → 見る。|読みます thành 読む. 見ます thành 見る.|Một số động từ kết thúc bằng います thuộc nhóm II như 見ます; cần học theo nhóm.
Nói khả năng|N が / V thể từ điển + ことができます|Dùng できます với danh từ kỹ năng, hoặc biến hành động thành danh từ bằng こと để nói có thể làm.|漢字を読むことができます。|Tôi có thể đọc Kanji.|Đối tượng kỹ năng thường đi với が; trong hội thoại を đôi khi vẫn xuất hiện.
Nói sở thích|趣味は N / V thể từ điển + ことです|Dùng こと để biến một hành động thành nội dung của sở thích.|私の趣味は写真を撮ることです。|Sở thích của tôi là chụp ảnh.|Không chia động từ đứng trước こと ở thể ます.
Trước khi làm|V thể từ điển + 前に、～|Hành động sau diễn ra trước khi hành động V bắt đầu. Động từ trước 前に luôn ở thể từ điển.|寝る前に日記を書きます。|Tôi viết nhật ký trước khi ngủ.|Dù câu ở quá khứ, động từ trước 前に vẫn dùng thể từ điển.
Trước một mốc|N の / Khoảng thời gian + 前に、～|Danh từ cần の trước 前に; khoảng thời gian như 一時間前に không dùng の.|会議の前に資料を読みます。|Tôi đọc tài liệu trước cuộc họp.|Phân biệt 三時前に là trước ba giờ và 三時間前に là ba giờ trước.
Nhấn mạnh mong muốn|ぜひ + lời mời hoặc nguyện vọng|ぜひ thể hiện mong muốn mạnh và thường đi với たいです hoặc てください.|ぜひ京都へ行きたいです。|Tôi rất muốn đến Kyoto.|なかなか đi với phủ định để nói khó thực hiện hoặc mãi chưa đạt được.
`),
  choices: choiceRows(`
Chọn thể từ điển của 書きます.|書きる~書く~書き~書いた|1|Thể từ điển nhóm I|Âm き đổi về âm hàng う tương ứng là く.
Chọn thể từ điển của 食べます.|食べる~食ぶ~食べく~食べ|0|Thể từ điển nhóm II|Nhóm II bỏ ます rồi thêm る.
田中さんは漢字を読むこと（　）できます。|を~に~が~で|2|Khả năng|Mẫu Vることができます dùng が trước できます.
私の趣味は写真を（　）ことです。|撮ります~撮って~撮る~撮った|2|Sở thích|Động từ trước ことです dùng thể từ điển.
寝る（　）歯を磨きます。|あとで~まで~前に~から|2|Trước khi|Vる前に diễn tả hành động đánh răng trước khi ngủ.
会議（　）前に資料を読みます。|で~の~を~が|1|Nの前に|Danh từ 会議 nối với 前 bằng の.
一時間（　）ここへ来ました。|の前に~前に~までに~あとで|1|Khoảng thời gian|Khoảng thời gian + 前に không cần の.
父は車を運転することが（　）。|あります~います~できます~します|2|Khả năng|運転することができます nghĩa là có thể lái xe.
日本ではなかなか馬に（　）。|乗ります~乗ることができます~乗ることができません~乗りました|2|なかなか|なかなか thường đi với phủ định để nói khó có cơ hội thực hiện.
（　）北海道へ行きたいです。|ぜひ~まだ~もう~だけ|0|ぜひ|ぜひ nhấn mạnh mong muốn rất muốn đi.
食事の前に手を（　）。|洗います~洗う前に~洗ってから~洗いましたか|0|Nの前に|Hành động chính sau cụm 食事の前に chia theo câu: 洗います.
駅でお金を換えることが（　）か。|あります~できます~います~なります|1|Hỏi khả năng|できますか hỏi ở ga có thể đổi tiền không.
`),
  translations: translationRows(`
私は漢字を読むことができます。|わたしはかんじをよむことができます。|Tôi có thể đọc Kanji.|Khả năng|読む ở thể từ điển đứng trước ことができます.
妹はピアノを弾くことができます。|いもうとはピアノをひくことができます。|Em gái tôi có thể chơi piano.|Kỹ năng|弾きます đổi thành thể từ điển 弾く.
私の趣味は写真を撮ることです。|わたしのしゅみはしゃしんをとることです。|Sở thích của tôi là chụp ảnh.|Sở thích|撮ること biến hành động chụp ảnh thành một danh từ.
父の趣味は切手を集めることです。|ちちのしゅみはきってをあつめることです。|Sở thích của bố tôi là sưu tầm tem.|Sở thích|集める là thể từ điển của động từ nhóm II 集めます.
寝る前に日記を書きます。|ねるまえににっきをかきます。|Tôi viết nhật ký trước khi ngủ.|Vる前に|Động từ trước 前に dùng thể từ điển 寝る.
食事の前に手を洗います。|しょくじのまえにてをあらいます。|Tôi rửa tay trước bữa ăn.|Nの前に|Danh từ 食事 nối với 前 bằng の.
一時間前にここへ来ました。|いちじかんまえにここへきました。|Tôi đã đến đây một giờ trước.|Khoảng thời gian|一時間前に không cần trợ từ の.
旅行の前にホテルを予約します。|りょこうのまえにホテルをよやくします。|Tôi đặt khách sạn trước chuyến đi.|Chuẩn bị|旅行 là danh từ nên dùng 旅行の前に.
この店では現金で払うことができます。|このみせではげんきんではらうことができます。|Ở cửa hàng này có thể trả bằng tiền mặt.|Khả năng|現金で chỉ phương thức thanh toán; 払うことができます chỉ khả năng.
あの牧場で馬に乗ることができます。|あのぼくじょうでうまにのることができます。|Có thể cưỡi ngựa ở trang trại kia.|Khả năng|Địa điểm dùng で; 馬 đi với に trong 馬に乗る.
日本ではなかなか馬に乗ることができません。|にほんではなかなかうまにのることができません。|Ở Nhật khó có dịp cưỡi ngựa.|なかなか|なかなか kết hợp với phủ định できません.
ぜひ京都へ行きたいです。|ぜひきょうとへいきたいです。|Tôi rất muốn đến Kyoto.|ぜひ|ぜひ nhấn mạnh mong muốn trong 行きたいです.
`),
});
