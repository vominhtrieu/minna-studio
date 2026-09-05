import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson17 = defineLesson(17, {
  words: `
覚えます|おぼえます|nhớ, ghi nhớ|Động từ · Nhóm II|新しい漢字を覚えなければなりません。|Tôi phải nhớ chữ Kanji mới.
忘れます|わすれます|quên|Động từ · Nhóm II|宿題を忘れないでください。|Xin đừng quên bài tập về nhà.
なくします|なくします|làm mất, đánh mất|Động từ · Nhóm I|このカードをなくさないでください。|Xin đừng làm mất thẻ này.
出します|だします|nộp, gửi|Động từ · Nhóm I|金曜日までにレポートを出します。|Tôi nộp báo cáo trước thứ sáu.
払います|はらいます|trả tiền, thanh toán|Động từ · Nhóm I|きょう家賃を払わなければなりません。|Hôm nay tôi phải trả tiền nhà.
返します|かえします|trả lại|Động từ · Nhóm I|本はあした返してもいいです。|Sách thì mai trả cũng được.
出かけます|でかけます|ra ngoài|Động từ · Nhóm II|熱がありますから、出かけないでください。|Vì bị sốt nên xin đừng ra ngoài.
脱ぎます|ぬぎます|cởi (quần áo, giày)|Động từ · Nhóm I|日本の家では靴を脱がなければなりません。|Ở nhà Nhật phải cởi giày.
持って行きます|もっていきます|mang đi|Cụm động từ|旅行に保険証を持って行きます。|Tôi mang thẻ bảo hiểm theo khi đi du lịch.
持って来ます|もってきます|mang đến|Cụm động từ|あした辞書を持って来てください。|Ngày mai hãy mang từ điển đến.
心配します|しんぱいします|lo lắng|Động từ · Nhóm III|大丈夫ですから、心配しなくてもいいです。|Tôi ổn nên bạn không cần lo.
残業します|ざんぎょうします|làm thêm giờ|Động từ · Nhóm III|きょうは残業しなければなりません。|Hôm nay tôi phải làm thêm giờ.
出張します|しゅっちょうします|đi công tác|Động từ · Nhóm III|来週、大阪へ出張します。|Tuần sau tôi đi công tác Osaka.
薬|くすり|thuốc|Danh từ|食事のあとで薬を飲んでください。|Hãy uống thuốc sau bữa ăn.
お風呂|おふろ|bồn tắm; việc tắm bồn|Danh từ|熱がありますから、お風呂に入らないでください。|Vì bị sốt nên đừng tắm bồn.
大切な|たいせつな|quan trọng, quý giá|Tính từ な|これは大切な資料です。|Đây là tài liệu quan trọng.
大丈夫な|だいじょうぶな|ổn, không sao|Tính từ な|もう大丈夫です。|Tôi ổn rồi.
危ない|あぶない|nguy hiểm|Tính từ い|危ないですから、触らないでください。|Vì nguy hiểm nên đừng chạm vào.
問題|もんだい|vấn đề; câu hỏi|Danh từ|この問題は難しいです。|Câu hỏi này khó.
答え|こたえ|câu trả lời, đáp án|Danh từ|答えをここに書いてください。|Hãy viết câu trả lời vào đây.
禁煙|きんえん|cấm hút thuốc|Danh từ|ここは禁煙です。|Ở đây cấm hút thuốc.
健康保険証|けんこうほけんしょう|thẻ bảo hiểm y tế|Danh từ|病院へ健康保険証を持って行きます。|Tôi mang thẻ bảo hiểm y tế đến bệnh viện.
風邪|かぜ|cảm lạnh|Danh từ|風邪ですから、会社を休みます。|Vì bị cảm nên tôi nghỉ làm.
熱|ねつ|sốt; nhiệt độ|Danh từ|きのうから熱があります。|Tôi bị sốt từ hôm qua.
病気|びょうき|bệnh|Danh từ|病気のとき、薬を飲みます。|Khi bị bệnh, tôi uống thuốc.
上着|うわぎ|áo khoác ngoài|Danh từ|ここで上着を脱いでもいいです。|Bạn có thể cởi áo khoác ở đây.
下着|したぎ|đồ lót|Danh từ|旅行に下着を持って行きます。|Tôi mang đồ lót theo chuyến đi.
先生|せんせい|bác sĩ (cách gọi trong bệnh viện)|Cách xưng hô|先生、薬を飲まなければなりませんか。|Bác sĩ, tôi có phải uống thuốc không?
二、三日|に、さんにち|hai, ba ngày|Cụm thời gian|二、三日休んでください。|Hãy nghỉ hai, ba ngày.
～までに|～までに|trước hạn, chậm nhất vào|Mốc thời hạn|金曜日までに本を返します。|Tôi trả sách chậm nhất vào thứ sáu.
`,
  grammar: grammarRows(`
Tạo thể ない|Nhóm I: hàng い → hàng あ + ない / Nhóm II: bỏ ます + ない / Nhóm III: しない・こない|Thể ない là dạng phủ định ngắn. Riêng âm い của nhóm I đổi thành わ: 買います → 買わない.|読みます → 読まない。食べます → 食べない。|読みます thành 読まない. 食べます thành 食べない.|Đừng nhầm あります: dạng phủ định là ない, không phải あらない.
Xin đừng làm|Vないでください|Dùng thể ない rồi thêm でください để yêu cầu hoặc khuyên người nghe đừng làm việc gì.|ここで写真を撮らないでください。|Xin đừng chụp ảnh ở đây.|Đây vẫn là lời yêu cầu; tránh dùng trực tiếp với người trên trong tình huống cần kính trọng.
Phải làm|Vなければなりません|Bỏ い cuối thể ない rồi thêm ければなりません để diễn tả nghĩa vụ phải làm.|薬を飲まなければなりません。|Tôi phải uống thuốc.|Mẫu nói nghĩa vụ, không phải dự định cá nhân.
Không cần làm|Vなくてもいいです|Đổi ない thành なくてもいいです để nói một hành động không cần thiết.|あしたは来なくてもいいです。|Ngày mai bạn không cần đến.|なくてもいい không có nghĩa là cấm; nó cho phép không làm.
Đưa đối tượng lên chủ đề|N は|Thay を bằng は khi muốn nêu đối tượng làm chủ đề hoặc tạo tương phản.|この薬は一日に三回飲んでください。|Thuốc này hãy uống ba lần một ngày.|Không dùng đồng thời を và は cho cùng một danh từ.
Nêu hạn chót|Thời điểm までに + V|までに chỉ hạn chót mà hành động phải hoàn tất. まで chỉ sự tiếp diễn đến một thời điểm.|金曜日までにレポートを出してください。|Hãy nộp báo cáo chậm nhất vào thứ sáu.|金曜日まで働きます là làm việc đến thứ sáu; 金曜日までに出します là nộp trước hoặc vào thứ sáu.
`),
  choices: choiceRows(`
Chọn thể ない của 書きます.|書きない~書かない~書こない~書けない|1|Thể ない nhóm I|Âm き thuộc hàng い đổi sang か rồi thêm ない.
Chọn thể ない của 買います.|買あない~買いない~買わない~買ない|2|Ngoại lệ âm い|Âm い của nhóm I đổi thành わ: 買わない.
Chọn thể ない của 食べます.|食べらない~食べない~食ばない~食べしない|1|Thể ない nhóm II|Nhóm II bỏ ます và thêm ない: 食べない.
ここで写真を撮ら（　）ください。|なくて~ないで~なければ~なくても|1|Xin đừng|Vないでください là xin đừng làm.
薬を飲ま（　）なりません。|ないで~なくても~なければ~ないとき|2|Nghĩa vụ|飲まなければなりません nghĩa là phải uống.
あしたは来（　）いいです。〔không cần đến〕|ないで~なくても~なければ~ないが|1|Không cần|来なくてもいいです cho phép không cần đến.
レポートは金曜日（　）出してください。|まで~までに~から~より|1|Hạn chót|までに cho biết hành động nộp phải hoàn tất trước hoặc vào thứ sáu.
この薬（　）食事のあとで飲んでください。|をは~では~には~は|3|Đưa lên chủ đề|Đối tượng 薬 được đưa lên chủ đề bằng は; không giữ を.
ここは禁煙ですから、たばこを（　）ください。|吸わないで~吸わなくても~吸わなければ~吸って|0|Cấm hút thuốc|Trong khu vực cấm hút thuốc, dùng 吸わないでください.
熱がありますから、お風呂に（　）ください。|入って~入らないで~入らなくても~入り|1|Lời khuyên phủ định|入ります nhóm I → 入らないでください.
宿題を忘れ（　）ください。|ないで~なくても~なければ~ませんで|0|Xin đừng quên|忘れます nhóm II → 忘れないでください.
日曜日は会社へ行か（　）いいです。|ないで~なくては~なくても~なければ|2|Không cần|行かなくてもいいです nghĩa là không cần đi.
`),
  translations: translationRows(`
ここで写真を撮らないでください。|ここでしゃしんをとらないでください。|Xin đừng chụp ảnh ở đây.|Vないでください|撮ります thuộc nhóm I: 撮らない rồi thêm でください.
宿題を忘れないでください。|しゅくだいをわすれないでください。|Xin đừng quên bài tập về nhà.|Vないでください|忘れます thuộc nhóm II nên bỏ ます và thêm ない.
このカードをなくさないでください。|このカードをなくさないでください。|Xin đừng làm mất thẻ này.|Vないでください|なくします nhóm I đổi し thành さ trước ない.
薬を飲まなければなりません。|くすりをのまなければなりません。|Tôi phải uống thuốc.|Nghĩa vụ|飲みます → 飲まない → 飲まなければなりません.
きょうは残業しなければなりません。|きょうはざんぎょうしなければなりません。|Hôm nay tôi phải làm thêm giờ.|Nghĩa vụ|します có thể ない là しない; từ đó tạo しなければなりません.
日本の家では靴を脱がなければなりません。|にほんのいえではくつをぬがなければなりません。|Ở nhà Nhật phải cởi giày.|Nghĩa vụ|脱ぎます nhóm I đổi ぎ thành が trước ない.
あしたは来なくてもいいです。|あしたはこなくてもいいです。|Ngày mai bạn không cần đến.|Không cần|来ます có thể ない là 来ない, đọc こない; đổi thành 来なくてもいい.
日曜日は会社へ行かなくてもいいです。|にちようびはかいしゃへいかなくてもいいです。|Chủ nhật không cần đến công ty.|Không cần|行きます → 行かない → 行かなくてもいいです.
心配しなくてもいいです。|しんぱいしなくてもいいです。|Bạn không cần lo lắng.|Không cần|心配します đổi thành 心配しなくてもいいです.
この薬は一日に三回飲んでください。|このくすりはいちにちにさんかいのんでください。|Thuốc này hãy uống ba lần một ngày.|Chủ đề đối tượng|薬 được đưa lên chủ đề bằng は; tần suất dùng に.
金曜日までにレポートを出してください。|きんようびまでにレポートをだしてください。|Hãy nộp báo cáo chậm nhất vào thứ sáu.|Hạn chót|までに nêu hạn hoàn tất, không phải sự tiếp diễn.
病院へ健康保険証を持って行きます。|びょういんへけんこうほけんしょうをもっていきます。|Tôi mang thẻ bảo hiểm y tế đến bệnh viện.|Mang đi|持って行きます diễn tả mang một vật rời khỏi vị trí hiện tại.
`),
});
