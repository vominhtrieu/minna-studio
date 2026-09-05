import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson5 = defineLesson(5, {
  words: `
行きます|いきます|đi|Động từ · Nhóm I|電車で学校へ行きます。|Tôi đi đến trường bằng tàu điện.
来ます|きます|đến|Động từ · Nhóm III|家族とベトナムへ来ました。|Tôi đã đến Việt Nam cùng gia đình.
帰ります|かえります|về|Động từ · Nhóm I|毎日六時に家へ帰ります。|Mỗi ngày tôi về nhà lúc sáu giờ.
学校|がっこう|trường học|Danh từ|自転車で学校へ行きます。|Tôi đi đến trường bằng xe đạp.
スーパー|スーパー|siêu thị|Danh từ|日曜日にスーパーへ行きます。|Chủ nhật tôi đi siêu thị.
駅|えき|ga|Danh từ|駅まで歩いて行きます。|Tôi đi bộ đến ga.
飛行機|ひこうき|máy bay|Danh từ|飛行機で北海道へ行きます。|Tôi đi Hokkaido bằng máy bay.
船|ふね|tàu thủy, thuyền|Danh từ|船で島へ行きました。|Tôi đã đi đến đảo bằng tàu.
電車|でんしゃ|tàu điện|Danh từ|電車で会社へ行きます。|Tôi đi làm bằng tàu điện.
地下鉄|ちかてつ|tàu điện ngầm|Danh từ|地下鉄で駅まで行きます。|Tôi đi đến ga bằng tàu điện ngầm.
新幹線|しんかんせん|tàu cao tốc Shinkansen|Danh từ|新幹線で東京へ行きます。|Tôi đi Tokyo bằng Shinkansen.
バス|バス|xe buýt|Danh từ|バスで大学へ行きます。|Tôi đi đại học bằng xe buýt.
タクシー|タクシー|taxi|Danh từ|タクシーでホテルへ帰りました。|Tôi đã về khách sạn bằng taxi.
自転車|じてんしゃ|xe đạp|Danh từ|自転車で公園へ行きます。|Tôi đi công viên bằng xe đạp.
歩いて|あるいて|đi bộ|Cụm động từ|駅から歩いて帰ります。|Tôi đi bộ từ ga về nhà.
人|ひと|người|Danh từ|あの人と日本へ来ました。|Tôi đã đến Nhật cùng người kia.
友達|ともだち|bạn bè|Danh từ|友達と京都へ行きます。|Tôi đi Kyoto cùng bạn.
彼|かれ|anh ấy; bạn trai|Đại từ|彼と映画館へ行きました。|Tôi đã đi rạp phim cùng anh ấy.
彼女|かのじょ|cô ấy; bạn gái|Đại từ|彼女は一人で来ました。|Cô ấy đã đến một mình.
家族|かぞく|gia đình|Danh từ|家族と旅行します。|Tôi đi du lịch cùng gia đình.
一人で|ひとりで|một mình|Cụm phó từ|一人で東京へ行きます。|Tôi đi Tokyo một mình.
先週|せんしゅう|tuần trước|Danh từ thời gian|先週大阪へ行きました。|Tuần trước tôi đã đi Osaka.
今週|こんしゅう|tuần này|Danh từ thời gian|今週はどこへも行きません。|Tuần này tôi không đi đâu cả.
来週|らいしゅう|tuần sau|Danh từ thời gian|来週京都へ行きます。|Tuần sau tôi đi Kyoto.
いつ|いつ|khi nào|Từ để hỏi|いつ日本へ来ましたか。|Bạn đến Nhật khi nào?
`,
  grammar: grammarRows(`
Đích đến của chuyển động|Địa điểm へ 行きます・来ます・帰ります|へ đánh dấu hướng hoặc đích đến với động từ di chuyển.|京都へ行きます。|Tôi đi Kyoto.|Trợ từ へ đọc là え; に cũng có thể đánh dấu đích đến.
Không đi đâu cả|どこへも Vません|Từ để hỏi + も đi với phủ định để phủ định toàn bộ phạm vi.|きょうはどこへも行きません。|Hôm nay tôi không đi đâu cả.|Không dùng どこもへ; trợ từ へ đứng trước も.
Phương tiện di chuyển|Phương tiện で 行きます・来ます・帰ります|で đánh dấu phương tiện dùng để di chuyển.|電車で会社へ行きます。|Tôi đi làm bằng tàu điện.|Đi bộ dùng 歩いて, không nói 歩いてで.
Đi cùng ai|Người と V / 一人で V|と đánh dấu người cùng thực hiện; 一人で nghĩa là làm một mình.|友達と京都へ行きます。|Tôi đi Kyoto cùng bạn.|で trong 一人で chỉ trạng thái tự mình, không phải phương tiện.
Hỏi thời điểm|いつ Vますか|いつ hỏi khi nào và không cần に. Có thể trả lời bằng ngày, tuần, tháng cụ thể.|いつ日本へ来ましたか。|Bạn đến Nhật khi nào?|Không nói いつに trong mẫu này.
Thông báo bằng よ|S よ|よ báo thông tin người nghe chưa biết hoặc nhấn mạnh lời khuyên, ý kiến.|この電車は大阪へ行きますよ。|Tàu này đi Osaka đấy.|Giọng quá mạnh có thể nghe áp đặt; dùng phù hợp ngữ cảnh.
`),
  choices: choiceRows(`
京都（　）行きます。|を~で~へ~と|2|Đích đến|へ đánh dấu đích của 行きます.
電車（　）会社へ行きます。|に~で~を~へ|1|Phương tiện|で đánh dấu tàu điện là phương tiện.
友達（　）京都へ行きます。|で~を~と~に|2|Đi cùng|Người đồng hành đi với と.
一人（　）東京へ行きます。|と~で~に~を|1|Một mình|一人で là một mình.
きょうはどこへ（　）行きません。|か~も~を~が|1|Phủ định toàn bộ|どこへも + phủ định nghĩa là không đi đâu cả.
駅まで（　）行きます。|歩いて~歩いてで~歩きで~歩くで|0|Đi bộ|歩いて行きます là đi bộ; không thêm で.
（　）日本へ来ましたか。|何時に~いつ~どこも~誰を|1|Hỏi khi nào|いつ không đi với に.
飛行機（　）北海道へ行きます。|へ~を~で~と|2|Phương tiện|Máy bay là phương tiện nên dùng で.
毎日六時に家（　）帰ります。|で~へ~を~と|1|Về nhà|Đích đến 家 đi với へ.
先週大阪へ（　）。|行きます~行きました~行きません~行くです|1|Quá khứ|先週 yêu cầu quá khứ 行きました.
家族（　）ベトナムへ来ました。|に~へ~と~で|2|Đồng hành|Gia đình là người cùng đi nên dùng と.
この電車は大阪へ行きます（　）。|か~ね~よ~の|2|よ|よ thông báo điều người nghe có thể chưa biết.
`),
  translations: translationRows(`
京都へ行きます。|きょうとへいきます。|Tôi đi Kyoto.|Đích đến|京都 là đích nên đi với へ.
電車で会社へ行きます。|でんしゃでかいしゃへいきます。|Tôi đi làm bằng tàu điện.|Phương tiện|電車で chỉ phương tiện; 会社へ chỉ đích.
友達と京都へ行きます。|ともだちときょうとへいきます。|Tôi đi Kyoto cùng bạn.|Đồng hành|友達 đi với と.
一人で東京へ行きます。|ひとりでとうきょうへいきます。|Tôi đi Tokyo một mình.|Một mình|一人で là cụm cố định diễn tả tự đi.
きょうはどこへも行きません。|きょうはどこへもいきません。|Hôm nay tôi không đi đâu cả.|Phủ định toàn bộ|どこへも kết hợp với 行きません.
駅まで歩いて行きます。|えきまであるいていきます。|Tôi đi bộ đến ga.|Đi bộ|歩いて đi trước động từ di chuyển, không dùng で.
いつ日本へ来ましたか。|いつにほんへきましたか。|Bạn đến Nhật khi nào?|いつ|いつ hỏi thời điểm và không dùng に.
先週大阪へ行きました。|せんしゅうおおさかへいきました。|Tuần trước tôi đã đi Osaka.|Quá khứ|先週 đi với 行きました.
来週京都へ行きます。|らいしゅうきょうとへいきます。|Tuần sau tôi đi Kyoto.|Tương lai|ます có thể diễn tả tương lai.
飛行機で北海道へ行きます。|ひこうきでほっかいどうへいきます。|Tôi đi Hokkaido bằng máy bay.|Phương tiện|飛行機 đi với で.
毎日六時に家へ帰ります。|まいにちろくじにうちへかえります。|Mỗi ngày tôi về nhà lúc sáu giờ.|Trợ từ|六時に là thời điểm; 家へ là đích.
この電車は大阪へ行きますよ。|このでんしゃはおおさかへいきますよ。|Tàu này đi Osaka đấy.|よ|よ nhấn mạnh thông tin mới cho người nghe.
`),
});
