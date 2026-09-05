import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson19 = defineLesson(19, {
  words: `
登ります|のぼります|leo, trèo|Động từ · Nhóm I|富士山に登ったことがあります。|Tôi từng leo núi Phú Sĩ.
泊まります|とまります|trọ lại, ở lại|Động từ · Nhóm I|日本の旅館に泊まったことがあります。|Tôi từng trọ tại lữ quán Nhật.
掃除します|そうじします|dọn dẹp|Động từ · Nhóm III|日曜日は掃除したり、洗濯したりします。|Chủ nhật tôi dọn dẹp, giặt giũ và làm những việc khác.
洗濯します|せんたくします|giặt giũ|Động từ · Nhóm III|朝、洗濯してから仕事に行きます。|Buổi sáng tôi giặt đồ rồi đi làm.
練習します|れんしゅうします|luyện tập|Động từ · Nhóm III|毎日練習して、上手になりました。|Tôi luyện tập mỗi ngày và đã trở nên giỏi.
なります|なります|trở nên, trở thành|Động từ · Nhóm I|もうすぐ春になります。|Sắp sang xuân.
眠い|ねむい|buồn ngủ|Tính từ い|きのう遅く寝ましたから、眠いです。|Vì hôm qua ngủ muộn nên tôi buồn ngủ.
強い|つよい|mạnh|Tính từ い|兄は相撲が強いです。|Anh tôi đấu sumo giỏi.
弱い|よわい|yếu|Tính từ い|私はお酒に弱いです。|Tôi uống rượu kém.
調子|ちょうし|tình trạng, trạng thái|Danh từ|きょうは体の調子がいいです。|Hôm nay tình trạng cơ thể tốt.
調子がいい|ちょうしがいい|trong tình trạng tốt|Cụm tính từ|このパソコンは調子がいいです。|Máy tính này hoạt động tốt.
調子が悪い|ちょうしがわるい|trong tình trạng không tốt|Cụm tính từ|車の調子が悪くなりました。|Xe đã trở nên trục trặc.
お茶|おちゃ|trà; trà đạo|Danh từ|日本でお茶を習ったことがあります。|Tôi từng học trà đạo ở Nhật.
相撲|すもう|sumo|Danh từ|相撲を見たことがありますか。|Bạn từng xem sumo chưa?
ゴルフ|ゴルフ|golf|Danh từ|休みの日はゴルフをしたり、本を読んだりします。|Ngày nghỉ tôi chơi golf, đọc sách và làm những việc khác.
日|ひ|ngày|Danh từ|休みの日は家でゆっくりします。|Ngày nghỉ tôi thư giãn ở nhà.
もうすぐ|もうすぐ|sắp, chẳng bao lâu nữa|Phó từ|もうすぐ冬になります。|Sắp sang đông.
だんだん|だんだん|dần dần|Phó từ|日本語がだんだん上手になりました。|Tiếng Nhật của tôi dần khá hơn.
一度|いちど|một lần|Danh từ chỉ lần|北海道へ一度行ったことがあります。|Tôi từng đến Hokkaido một lần.
一度も|いちども|chưa lần nào|Cụm phó từ|外国へ一度も行ったことがありません。|Tôi chưa từng đi nước ngoài lần nào.
おかげさまで|おかげさまで|nhờ ơn bạn, may nhờ...|Cụm hội thoại|おかげさまで元気になりました。|Nhờ ơn bạn, tôi đã khỏe lại.
乾杯|かんぱい|cạn ly|Thán từ|みなさん、乾杯。|Mọi người, cạn ly!
実は|じつは|thật ra là|Cụm mở đầu|実は来月結婚します。|Thật ra tháng sau tôi kết hôn.
ダイエット|ダイエット|ăn kiêng, giảm cân|Danh từ hoạt động|ダイエットをして、少し細くなりました。|Tôi ăn kiêng và đã gầy đi một chút.
何回も|なんかいも|nhiều lần|Cụm số lượng|この映画を何回も見たことがあります。|Tôi đã xem phim này nhiều lần.
しかし|しかし|tuy nhiên|Liên từ|毎日練習しました。しかし、勝てませんでした。|Tôi luyện tập mỗi ngày, tuy nhiên đã không thắng.
無理な|むりな|quá sức, không thể|Tính từ な|無理なダイエットは体に悪いです。|Ăn kiêng quá sức có hại cho cơ thể.
体にいい|からだにいい|tốt cho sức khỏe|Cụm tính từ|毎日歩くことは体にいいです。|Đi bộ mỗi ngày tốt cho sức khỏe.
`,
  grammar: grammarRows(`
Thể た|Thể て đổi て→た、で→だ|Thể た là dạng quá khứ ngắn. 書いて thành 書いた, 読んで thành 読んだ; nhóm II bỏ ます thêm た.|行きます → 行った。食べます → 食べた。|行きます thành 行った. 食べます thành 食べた.|行きます có thể て đặc biệt là 行って, nên thể た là 行った.
Kinh nghiệm đã từng|Vた + ことがあります|Nói một trải nghiệm đã xảy ra ít nhất một lần. Phủ định là Vたことがありません.|富士山に登ったことがあります。|Tôi từng leo núi Phú Sĩ.|Không dùng mẫu này cho việc xảy ra hằng ngày hoặc thời điểm quá cụ thể gần đây.
Liệt kê hành động tiêu biểu|V1たり、V2たりします|Nêu một vài hành động đại diện, không nhất thiết theo thứ tự. Mỗi động từ dùng thể た rồi thêm り.|日曜日は掃除したり、洗濯したりします。|Chủ nhật tôi dọn dẹp, giặt giũ và làm những việc khác.|Động từ cuối vẫn là します, chia thời theo câu.
Tính từ い thay đổi|Aい bỏ い + くなります|Diễn tả trạng thái trở nên như tính từ い. いい trở thành よくなります.|寒くなりました。|Trời đã trở lạnh.|Không dùng いになります.
Danh từ và tính từ な thay đổi|N / Aな + になります|Diễn tả trở thành một danh từ hoặc trở nên mang tính chất của tính từ な.|元気になりました。|Tôi đã khỏe lại.|Bỏ な của tính từ trước に: きれいになります.
`),
  choices: choiceRows(`
Chọn thể た của 書きます.|書いた~書きた~書って~書んだ|0|Thể た|書いて đổi て thành た, được 書いた.
Chọn thể た của 飲みます.|飲みた~飲いた~飲んだ~飲った|2|Thể た|飲んで đổi で thành だ, được 飲んだ.
富士山に登ったことが（　）。|します~なります~あります~います|2|Kinh nghiệm|Vたことがあります nói đã từng làm.
外国へ一度も行ったことが（　）。|あります~ありません~できます~なりません|1|Chưa từng|一度も đi với phủ định ありません.
日曜日は掃除したり、洗濯したり（　）。|あります~します~なります~です|1|Liệt kê hành động|Mẫu kết thúc bằng たりします.
休みの日は本を読んだり、音楽を（　）します。|聞いたり~聞いて~聞くたり~聞きたり|0|Vたり|聞きます → 聞いて → 聞いた → 聞いたり.
だんだん寒（　）なりました。|いに~く~くて~なに|1|Aくなります|寒い bỏ い, thêm くなります.
日本語が上手（　）なりました。|な~で~く~に|3|Aなになります|上手 là tính từ な, dùng 上手になりました.
来年、医者（　）なります。|を~が~に~で|2|Nになります|Trở thành bác sĩ dùng 医者になります.
おかげさまで元気（　）なりました。|く~に~で~な|1|Thay đổi trạng thái|元気 là tính từ な nên dùng 元気になりました.
もうすぐ春（　）なります。|が~に~を~へ|1|Mùa thay đổi|Danh từ 春 đi với になります.
無理なダイエットで体の調子が（　）なりました。|悪い~悪く~悪に~悪くて|1|Aくなります|悪い đổi thành 悪く trước なりました.
`),
  translations: translationRows(`
富士山に登ったことがあります。|ふじさんにのぼったことがあります。|Tôi từng leo núi Phú Sĩ.|Kinh nghiệm|登ります có thể た là 登った.
日本の旅館に泊まったことがあります。|にほんのりょかんにとまったことがあります。|Tôi từng trọ tại lữ quán Nhật.|Kinh nghiệm|泊まったことがあります nói kinh nghiệm đã từng trọ.
相撲を見たことがありますか。|すもうをみたことがありますか。|Bạn đã từng xem sumo chưa?|Hỏi kinh nghiệm|Dùng Vたことがありますか để hỏi trải nghiệm.
外国へ一度も行ったことがありません。|がいこくへいちどもいったことがありません。|Tôi chưa từng đi nước ngoài lần nào.|Chưa từng|一度も kết hợp với ありません để phủ định toàn bộ.
日曜日は掃除したり、洗濯したりします。|にちようびはそうじしたり、せんたくしたりします。|Chủ nhật tôi dọn dẹp, giặt giũ và làm những việc khác.|Vたり|Hai việc được nêu như những hoạt động tiêu biểu.
休みの日は本を読んだり、音楽を聞いたりします。|やすみのひはほんをよんだり、おんがくをきいたりします。|Ngày nghỉ tôi đọc sách, nghe nhạc và làm những việc khác.|Vたり|読んだり và 聞いたり cùng kết thúc bằng します.
日本語がだんだん上手になりました。|にほんごがだんだんじょうずになりました。|Tiếng Nhật của tôi dần khá hơn.|Aなになります|上手 là tính từ な nên dùng 上手になりました.
もうすぐ春になります。|もうすぐはるになります。|Sắp sang xuân.|Nになります|春 là danh từ, dùng 春になります.
寒くなりました。|さむくなりました。|Trời đã trở lạnh.|Aくなります|寒い bỏ い và thêm くなりました.
髪が長くなりました。|かみがながくなりました。|Tóc đã dài ra.|Aくなります|長い chuyển thành 長くなりました.
おかげさまで元気になりました。|おかげさまでげんきになりました。|Nhờ ơn bạn, tôi đã khỏe lại.|Aなになります|元気 đi với に trong mẫu thay đổi trạng thái.
実は来月結婚します。|じつはらいげつけっこんします。|Thật ra tháng sau tôi kết hôn.|Hội thoại|実は dùng để mở đầu một thông tin người nghe chưa biết.
`),
});
