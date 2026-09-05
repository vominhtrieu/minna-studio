import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson24 = defineLesson(24, {
  words: `
くれます|くれます|cho tôi, cho phía tôi|Động từ · Nhóm II|友達が私に本をくれました。|Bạn đã tặng tôi một cuốn sách.
あげます|あげます|cho, tặng|Động từ · Nhóm II|私は妹に花をあげました。|Tôi tặng em gái hoa.
もらいます|もらいます|nhận|Động từ · Nhóm I|私は先生に辞書をもらいました。|Tôi nhận từ điển từ giáo viên.
連れて行きます|つれていきます|dẫn, đưa ai đi|Cụm động từ|父は私を動物園へ連れて行ってくれました。|Bố đã đưa tôi đến sở thú.
連れて来ます|つれてきます|dẫn, đưa ai đến|Cụm động từ|友達が弟を家へ連れて来ました。|Bạn đã dẫn em trai đến nhà.
送ります|おくります|đưa tiễn; gửi|Động từ · Nhóm I|田中さんが駅まで送ってくれました。|Anh Tanaka đã tiễn tôi đến ga.
紹介します|しょうかいします|giới thiệu|Động từ · Nhóm III|先生がいい病院を紹介してくれました。|Giáo viên đã giới thiệu cho tôi một bệnh viện tốt.
案内します|あんないします|hướng dẫn, dẫn đi|Động từ · Nhóm III|私は友達に京都を案内してあげました。|Tôi đã dẫn bạn tham quan Kyoto.
説明します|せつめいします|giải thích|Động từ · Nhóm III|山田さんに使い方を説明してもらいました。|Tôi được anh Yamada giải thích cách dùng.
入れます|いれます|pha (cà phê, trà)|Động từ · Nhóm II|母がコーヒーを入れてくれました。|Mẹ đã pha cà phê cho tôi.
おじいさん|おじいさん|ông; cụ ông|Danh từ|おじいさんに道を教えてあげました。|Tôi đã chỉ đường cho một cụ ông.
おばあさん|おばあさん|bà; cụ bà|Danh từ|おばあさんが昔の話をしてくれました。|Bà đã kể cho tôi chuyện ngày xưa.
準備|じゅんび|sự chuẩn bị|Danh từ|友達が旅行の準備を手伝ってくれました。|Bạn đã giúp tôi chuẩn bị chuyến đi.
意味|いみ|ý nghĩa|Danh từ|先生にこの言葉の意味を教えてもらいました。|Tôi được giáo viên dạy nghĩa của từ này.
お菓子|おかし|bánh kẹo|Danh từ|妹にお菓子を買ってあげました。|Tôi đã mua bánh kẹo cho em gái.
全部|ぜんぶ|toàn bộ, tất cả|Phó từ / Danh từ|荷物を全部持ってくれました。|Ai đó đã mang toàn bộ hành lý giúp tôi.
手伝います|てつだいます|giúp đỡ|Động từ · Nhóm I|兄に宿題を手伝ってもらいました。|Tôi được anh trai giúp làm bài tập.
教えます|おしえます|chỉ, dạy|Động từ · Nhóm II|私は友達に日本語を教えてあげます。|Tôi sẽ dạy tiếng Nhật cho bạn.
荷物|にもつ|hành lý, đồ đạc|Danh từ|駅員が荷物を運んでくれました。|Nhân viên nhà ga đã mang hành lý giúp tôi.
使い方|つかいかた|cách sử dụng|Danh từ|店員に機械の使い方を説明してもらいました。|Tôi được nhân viên giải thích cách dùng máy.
`,
  grammar: grammarRows(`
Ai đó cho tôi một vật|Người cho が 私に Nを くれます|くれます diễn tả vật hoặc lợi ích đi từ người khác về phía người nói hay người thân của người nói.|友達が私に本をくれました。|Bạn đã tặng tôi một cuốn sách.|私に thường được lược bỏ khi ngữ cảnh đã rõ.
Làm giúp người khác|Người làm は Người nhận に Vてあげます|Người nói hoặc một người thực hiện hành động có lợi cho người khác.|私は妹に宿題を教えてあげました。|Tôi đã chỉ bài tập cho em gái.|Với người trên, nói てあげます trực tiếp có thể tạo cảm giác ban ơn; nên chọn cách lịch sự hơn.
Được ai làm giúp|Người nhận は Người làm に Vてもらいます|Nhìn từ phía người nhận sự giúp đỡ; chủ ngữ là người được hưởng lợi.|私は山田さんに写真を撮ってもらいました。|Tôi đã nhờ anh Yamada chụp ảnh cho.|Trợ từ に đánh dấu người thực hiện; với tổ chức có thể dùng から.
Ai làm giúp tôi|Người làm が 私に Vてくれます|Nhìn từ phía người làm một việc có lợi cho người nói hoặc phía người nói.|母がコーヒーを入れてくれました。|Mẹ đã pha cà phê cho tôi.|Không dùng てくれます cho hành động người nói làm giúp người khác.
Chọn góc nhìn phù hợp|てあげる ↔ てもらう ↔ てくれる|Cùng một sự việc có thể được kể từ góc người cho, người nhận hoặc người nhận biết ơn. Trợ từ và chủ ngữ thay đổi theo góc nhìn.|私は友達に京都を案内してあげました。友達は私に京都を案内してもらいました。|Tôi dẫn bạn tham quan Kyoto. Bạn được tôi dẫn tham quan Kyoto.|Xác định ai được lợi trước khi chọn mẫu.
`),
  choices: choiceRows(`
友達が私に本を（　）。|あげました~もらいました~くれました~しました|2|くれます|Vật đi từ bạn về phía người nói nên dùng くれました.
私は妹に花を（　）。|くれました~あげました~もらいました~くれられました|1|あげます|Người nói tặng hoa cho em gái nên dùng あげました.
私は先生に辞書を（　）。|あげました~くれました~もらいました~あげられました|2|もらいます|Chủ ngữ 私 nhận từ điển từ giáo viên nên dùng もらいました.
私は友達に京都を案内して（　）。|くれました~あげました~もらいました~いました|1|Vてあげる|Người nói làm việc có lợi cho bạn nên dùng てあげました.
私は山田さんに写真を撮って（　）。|あげました~くれました~もらいました~しました|2|Vてもらう|Người nói nhận sự giúp đỡ từ Yamada nên dùng てもらいました.
母がコーヒーを入れて（　）。|あげました~くれました~もらいました~いました|1|Vてくれる|Mẹ làm việc có lợi cho người nói nên dùng てくれました.
先生（　）いい病院を紹介してくれました。|は~を~が~に|2|Chủ thể cho lợi ích|Người thực hiện hành động với てくれる đi với が.
兄（　）宿題を手伝ってもらいました。|が~に~を~で|1|Người làm giúp|Người được nhờ làm trong てもらう đi với に.
おじいさん（　）道を教えてあげました。|を~が~に~で|2|Người nhận lợi ích|Người được chỉ đường trong てあげる đi với に.
父は私（　）動物園へ連れて行ってくれました。|が~を~に~で|1|Đưa ai đi|Người được dẫn đi là tân ngữ của 連れて行く nên dùng を.
田中さんが駅まで（　）くれました。|送って~送りて~送った~送るて|0|Thể て + くれる|送ります đổi thành 送って trước くれました.
店員に機械の使い方を説明して（　）。|あげました~もらいました~くれましたか~ありました|1|Nhận giúp đỡ|Chủ ngữ ẩn là người nói nhận lời giải thích từ nhân viên.
`),
  translations: translationRows(`
友達が私に本をくれました。|ともだちがわたしにほんをくれました。|Bạn đã tặng tôi một cuốn sách.|くれます|くれます diễn tả món quà đi về phía người nói.
私は妹に花をあげました。|わたしはいもうとにはなをあげました。|Tôi đã tặng em gái hoa.|あげます|Người nhận quà đi với に trong mẫu あげます.
私は先生に辞書をもらいました。|わたしはせんせいにじしょをもらいました。|Tôi đã nhận từ điển từ giáo viên.|もらいます|Người cho đi với に khi chủ ngữ là người nhận.
私は友達に京都を案内してあげました。|わたしはともだちにきょうとをあんないしてあげました。|Tôi đã dẫn bạn tham quan Kyoto.|Vてあげる|Người nói làm việc có lợi cho 友達.
私は山田さんに写真を撮ってもらいました。|わたしはやまださんにしゃしんをとってもらいました。|Tôi đã nhờ anh Yamada chụp ảnh cho.|Vてもらう|山田さん là người thực hiện hành động giúp người nói.
母がコーヒーを入れてくれました。|ははがコーヒーをいれてくれました。|Mẹ đã pha cà phê cho tôi.|Vてくれる|Câu nhìn từ phía người nói nhận sự giúp đỡ.
父は私を動物園へ連れて行ってくれました。|ちちはわたしをどうぶつえんへつれていってくれました。|Bố đã đưa tôi đến sở thú.|Vてくれる|父 là người làm giúp; 私 là người được đưa đi nên dùng を.
田中さんが駅まで送ってくれました。|たなかさんがえきまでおくってくれました。|Anh Tanaka đã tiễn tôi đến ga.|Vてくれる|Người nói được hưởng lợi từ hành động tiễn.
先生がいい病院を紹介してくれました。|せんせいがいいびょういんをしょうかいしてくれました。|Giáo viên đã giới thiệu cho tôi một bệnh viện tốt.|Vてくれる|Chủ thể giúp người nói đi với が.
兄に宿題を手伝ってもらいました。|あににしゅくだいをてつだってもらいました。|Tôi được anh trai giúp làm bài tập.|Vてもらう|兄 là người thực hiện hành động nên đi với に.
妹にお菓子を買ってあげました。|いもうとにおかしをかってあげました。|Tôi đã mua bánh kẹo cho em gái.|Vてあげる|Em gái là người nhận lợi ích nên đi với に.
店員に機械の使い方を説明してもらいました。|てんいんにきかいのつかいかたをせつめいしてもらいました。|Tôi được nhân viên giải thích cách dùng máy.|Vてもらう|店員 là người thực hiện việc giải thích.
`),
});
