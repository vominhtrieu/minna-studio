import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson9 = defineLesson(9, {
  words: `
分かります|わかります|hiểu|Động từ · Nhóm I|日本語が少し分かります。|Tôi hiểu một chút tiếng Nhật.
あります|あります|có, sở hữu|Động từ · Nhóm I|私は車があります。|Tôi có ô tô.
好きな|すきな|thích|Tính từ な|私は音楽が好きです。|Tôi thích âm nhạc.
嫌いな|きらいな|ghét, không thích|Tính từ な|妹は野菜が嫌いです。|Em gái tôi ghét rau.
上手な|じょうずな|giỏi|Tính từ な|山田さんは料理が上手です。|Anh Yamada nấu ăn giỏi.
下手な|へたな|kém|Tính từ な|私は歌が下手です。|Tôi hát kém.
料理|りょうり|món ăn; nấu ăn|Danh từ|母は料理がとても上手です。|Mẹ tôi nấu ăn rất giỏi.
飲み物|のみもの|đồ uống|Danh từ|どんな飲み物が好きですか。|Bạn thích đồ uống nào?
スポーツ|スポーツ|thể thao|Danh từ|私はスポーツが好きです。|Tôi thích thể thao.
野球|やきゅう|bóng chày|Danh từ|兄は野球が上手です。|Anh tôi chơi bóng chày giỏi.
ダンス|ダンス|khiêu vũ|Danh từ|マリアさんはダンスが上手です。|Maria khiêu vũ giỏi.
音楽|おんがく|âm nhạc|Danh từ|クラシック音楽が好きです。|Tôi thích nhạc cổ điển.
歌|うた|bài hát|Danh từ|日本の歌が少し分かります。|Tôi hiểu một chút bài hát Nhật.
コンサート|コンサート|buổi hòa nhạc|Danh từ|土曜日にコンサートがあります。|Thứ bảy có buổi hòa nhạc.
カラオケ|カラオケ|karaoke|Danh từ|カラオケがあまり好きじゃありません。|Tôi không thích karaoke lắm.
歌舞伎|かぶき|kịch Kabuki|Danh từ|歌舞伎が全然分かりません。|Tôi hoàn toàn không hiểu Kabuki.
絵|え|tranh|Danh từ|妹は絵が上手です。|Em gái tôi vẽ giỏi.
字|じ|chữ viết|Danh từ|田中さんは字がきれいです。|Chữ anh Tanaka đẹp.
漢字|かんじ|chữ Kanji|Danh từ|漢字があまり分かりません。|Tôi không hiểu Kanji lắm.
時間|じかん|thời gian|Danh từ|きょうは時間がありません。|Hôm nay tôi không có thời gian.
用事|ようじ|việc bận|Danh từ|日曜日は用事があります。|Chủ nhật tôi có việc.
約束|やくそく|cuộc hẹn|Danh từ|友達と約束があります。|Tôi có hẹn với bạn.
少し|すこし|một chút|Phó từ|英語が少し分かります。|Tôi hiểu một chút tiếng Anh.
よく|よく|rõ, tốt|Phó từ|日本語がよく分かります。|Tôi hiểu rõ tiếng Nhật.
だいたい|だいたい|đại khái, gần hết|Phó từ|ひらがながだいたい分かります。|Tôi hiểu gần hết Hiragana.
たくさん|たくさん|nhiều|Phó từ|お金がたくさんあります。|Tôi có nhiều tiền.
あまり|あまり|không ... lắm|Phó từ|英語があまり分かりません。|Tôi không hiểu tiếng Anh lắm.
全然|ぜんぜん|hoàn toàn không|Phó từ|中国語が全然分かりません。|Tôi hoàn toàn không hiểu tiếng Trung.
どうして|どうして|tại sao|Từ để hỏi|どうして映画を見ませんか。|Tại sao bạn không xem phim?
残念です|ざんねんです|thật đáng tiếc|Cụm hội thoại|時間がありません。残念ですね。|Không có thời gian. Tiếc thật nhỉ.
`,
  grammar: grammarRows(`
Đối tượng của hiểu và sở hữu|N が 分かります・あります|が đánh dấu điều được hiểu hoặc vật được sở hữu.|日本語が分かります。|Tôi hiểu tiếng Nhật.|Không dùng を với 分かります hoặc あります trong mẫu này.
Đối tượng của sở thích và năng lực|N が 好き・嫌い・上手・下手です|Bốn tính từ な này dùng が cho đối tượng được thích, ghét hoặc kỹ năng.|私は音楽が好きです。|Tôi thích âm nhạc.|Không nên tự nói mình 上手; cách đó dễ nghe thiếu khiêm tốn.
Hỏi loại yêu thích|どんな N が 好きですか|どんな đứng trước một phạm trù để hỏi cụ thể thích loại nào.|どんなスポーツが好きですか。|Bạn thích môn thể thao nào?|Trả lời bằng một thành viên cụ thể của phạm trù.
Mức độ khẳng định|よく・だいたい・少し / たくさん + V|Các phó từ cho biết mức hiểu hoặc số lượng có, đứng trước động từ.|日本語が少し分かります。|Tôi hiểu một chút tiếng Nhật.|たくさん thường chỉ số lượng; よく chỉ mức độ hiểu rõ.
Mức độ phủ định|あまり・全然 + Vません|あまり nghĩa là không lắm; 全然 nghĩa là hoàn toàn không, đều cần phủ định trong mẫu cơ bản.|英語が全然分かりません。|Tôi hoàn toàn không hiểu tiếng Anh.|Không kết hợp 全然 với khẳng định trong cách dùng sơ cấp này.
Nêu lý do|S1 から、S2 / どうして Sか|から đặt sau nguyên nhân; どうして hỏi tại sao. Câu trả lời có thể kết thúc bằng からです.|時間がありませんから、行きません。|Vì không có thời gian nên tôi không đi.|Trật tự là lý do trước, kết quả sau trong mẫu này.
`),
  choices: choiceRows(`
日本語（　）少し分かります。|を~が~で~へ|1|分かります|Đối tượng được hiểu đi với が.
私は車（　）あります。|を~に~が~で|2|Sở hữu|Vật sở hữu trong mẫu あります đi với が.
私は音楽（　）好きです。|を~で~が~に|2|Sở thích|Đối tượng thích đi với が.
山田さんは料理（　）上手です。|を~が~へ~で|1|Năng lực|Lĩnh vực giỏi đi với が.
どんなスポーツ（　）好きですか。|を~で~が~へ|2|Hỏi sở thích|Phạm trù được thích đi với が.
日本語が（　）分かります。〔hiểu rõ〕|たくさん~よく~全然~あまり|1|Mức độ|よく分かります nghĩa là hiểu rõ.
英語が（　）分かります。〔hiểu một chút〕|少し~全然~あまり~たくさんの|0|少し|少し đi với khẳng định để nói hiểu một chút.
中国語が全然（　）。|分かります~分かりました~分かりません~分かるです|2|全然|全然 trong mẫu cơ bản đi với phủ định.
英語があまり（　）。|分かります~分かりません~分かりました~分かる|1|あまり|あまり kết hợp phủ định để nói không hiểu lắm.
お金が（　）あります。〔có nhiều〕|よく~だいたい~たくさん~全然|2|Số lượng|たくさんあります nghĩa là có nhiều.
（　）行きませんか。— 時間がありませんから。|いつ~どこ~何~どうして|3|Hỏi lý do|どうして hỏi tại sao.
時間がありません（　）、映画を見ません。|まで~から~でも~しか|1|Lý do|から nối nguyên nhân với kết quả.
`),
  translations: translationRows(`
日本語が少し分かります。|にほんごがすこしわかります。|Tôi hiểu một chút tiếng Nhật.|分かります|Đối tượng được hiểu dùng が.
私は車があります。|わたしはくるまがあります。|Tôi có ô tô.|Sở hữu|Vật sở hữu đi với が.
私は音楽が好きです。|わたしはおんがくがすきです。|Tôi thích âm nhạc.|好き|Đối tượng thích đi với が.
妹は野菜が嫌いです。|いもうとはやさいがきらいです。|Em gái tôi ghét rau.|嫌い|Đối tượng không thích đi với が.
山田さんは料理が上手です。|やまださんはりょうりがじょうずです。|Anh Yamada nấu ăn giỏi.|上手|Lĩnh vực giỏi đi với が.
私は歌が下手です。|わたしはうたがへたです。|Tôi hát kém.|下手|Lĩnh vực kém đi với が.
どんなスポーツが好きですか。|どんなスポーツがすきですか。|Bạn thích môn thể thao nào?|どんな|どんな đứng trước phạm trù スポーツ.
日本語がよく分かります。|にほんごがよくわかります。|Tôi hiểu rõ tiếng Nhật.|よく|よく bổ nghĩa mức độ hiểu.
英語があまり分かりません。|えいごがあまりわかりません。|Tôi không hiểu tiếng Anh lắm.|あまり|あまり đi với phủ định.
中国語が全然分かりません。|ちゅうごくごがぜんぜんわかりません。|Tôi hoàn toàn không hiểu tiếng Trung.|全然|全然 đi với phủ định để nhấn mạnh hoàn toàn không.
時間がありませんから、行きません。|じかんがありませんから、いきません。|Vì không có thời gian nên tôi không đi.|から|Lý do đứng trước から, kết quả ở vế sau.
どうして映画を見ませんか。|どうしてえいがをみませんか。|Tại sao bạn không xem phim?|どうして|どうして hỏi nguyên nhân hoặc lý do.
`),
});
