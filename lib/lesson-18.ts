import { choiceRows, defineLesson, translationRows } from './lesson-builder.ts';
import { lesson18Grammar } from './lesson-18-grammar.ts';

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
  grammar: lesson18Grammar,
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
Chọn thể từ điển của 待ちます.|待ちる~待つ~待て~待った|1|Thể từ điển nhóm I|Nhóm I bỏ ます rồi đổi ち thành つ: 待ちます → 待つ.
Chọn thể từ điển của 泳ぎます.|泳ぎる~泳いで~泳ぐ~泳ごう|2|Thể từ điển nhóm I|Nhóm I đổi âm ぎ trước ます thành ぐ; thể từ điển là 泳ぐ.
Chọn thể từ điển của 話します.|話する~話して~話しる~話す|3|Nhận đúng nhóm|話します thuộc nhóm I: bỏ ます và đổi し thành す, không đổi します thành する.
Chọn thể từ điển của 借ります.|借る~借りる~借って~借りまする|1|Ngoại lệ nhóm II|借ります thuộc nhóm II dù có âm り trước ます: giữ 借り rồi thêm る.
Chọn cách đổi 来ます sang thể từ điển, gồm cả cách đọc.|来る（くる）~来る（きる）~来まする（きまする）~来て（きて）|0|Thể từ điển nhóm III|来ます đọc きます; thể từ điển là 来る, đọc くる.
妹はピアノ（　）できます。|を~に~が~で|2|Nができます|ピアノ là danh từ chỉ kỹ năng; nối bằng が trong mẫu Nができます.
私は日本語（　）話すことができます。|が~を~の~へ|1|Trợ từ bên trong hành động|を đánh dấu tân ngữ của 話す. が vẫn đứng sau こと; không đổi を thành が ở đây.
Không thể làm một việc: 読むことができます đổi thành câu nào?|読まないことができます~読むことができません~読むことがありません~読みますことができません|1|Phủ định khả năng|Đổi できます thành できません; giữ 読む ở thể từ điển.
この図書館では本を借りることができます。 Câu này nhấn mạnh điều gì?|Người nói đang mượn sách~Người nói muốn học đọc~Dịch vụ cho phép mượn sách ở đây~Người nói đã mượn sách hôm qua|2|Khả năng do điều kiện|Có thể thực hiện hành động vì thư viện có dịch vụ cho mượn sách, không phải đang kể về kỹ năng của người nói.
Sở thích là du lịch: 趣味は（　）。|旅行ことです~旅行です~旅行ができます~旅行前にです|1|Sở thích bằng danh từ|Danh từ 旅行 nối trực tiếp với です, không thêm こと.
昨日、日本へ（　）前に、家族に電話しました。|来た~来ます~来て~来る|3|前に trong câu quá khứ|Dù 電話しました ở quá khứ, động từ trước 前に vẫn là thể từ điển 来る.
Ghép ý “Chờ mãi mà xe buýt chưa đến”: バスがなかなか（　）。|来ません~来ます~来たいです~来ることです|0|なかなか và phủ định|Trong nghĩa mãi chưa có kết quả mong đợi, なかなか đi với phủ định 来ません.
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
