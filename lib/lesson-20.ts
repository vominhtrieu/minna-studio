import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson20 = defineLesson(20, {
  words: `
要ります|いります|cần|Động từ · Nhóm I|ビザが要る。|Cần thị thực.
調べます|しらべます|tra cứu, kiểm tra|Động từ · Nhóm II|この言葉を辞書で調べる。|Tra từ này bằng từ điển.
直します|なおします|sửa, chữa|Động từ · Nhóm I|間違いを直さないと。|Phải sửa lỗi thôi.
修理します|しゅうりします|sửa chữa máy móc|Động từ · Nhóm III|父が自転車を修理した。|Bố đã sửa xe đạp.
電話します|でんわします|gọi điện|Động từ · Nhóm III|あとで田中君に電話する。|Lát nữa tôi sẽ gọi cho Tanaka.
僕|ぼく|tôi, mình (nam giới)|Đại từ|僕は来週国へ帰る。|Tuần sau tôi về nước.
君|きみ|cậu, bạn|Đại từ|君もいっしょに行く。|Cậu cũng đi cùng chứ?
～君|～くん|bạn, em (hậu tố thân mật)|Hậu tố|田中君はきょう休みだ。|Hôm nay Tanaka nghỉ.
うん|うん|ừ, đúng|Cụm hội thoại|うん、わかった。|Ừ, hiểu rồi.
ううん|ううん|không, không phải|Cụm hội thoại|ううん、まだ食べていない。|Không, tôi vẫn chưa ăn.
サラリーマン|サラリーマン|nhân viên công ty|Danh từ|兄はサラリーマンだ。|Anh tôi là nhân viên công ty.
言葉|ことば|từ ngữ, ngôn từ|Danh từ|この言葉の意味を知っている。|Tôi biết nghĩa của từ này.
物価|ぶっか|vật giá|Danh từ|東京は物価が高い。|Vật giá ở Tokyo cao.
着物|きもの|kimono|Danh từ|姉は着物を持っている。|Chị tôi có kimono.
ビザ|ビザ|thị thực|Danh từ|旅行にビザが要る。|Chuyến đi cần thị thực.
初め|はじめ|lúc đầu, ban đầu|Danh từ|初めは日本語がわからなかった。|Lúc đầu tôi không hiểu tiếng Nhật.
終わり|おわり|kết thúc, cuối|Danh từ|仕事の終わりは六時だ。|Công việc kết thúc lúc sáu giờ.
こっち|こっち|phía này, chỗ này|Từ chỉ định thân mật|こっちのほうが安いよ。|Phía này rẻ hơn đấy.
そっち|そっち|phía đó, chỗ đó|Từ chỉ định thân mật|そっちは暑い。|Chỗ cậu nóng không?
あっち|あっち|phía kia, chỗ kia|Từ chỉ định thân mật|食堂はあっち。|Nhà ăn ở phía kia.
どっち|どっち|phía nào, cái nào|Từ để hỏi thân mật|赤と青とどっちが好き。|Cậu thích đỏ hay xanh?
この間|このあいだ|hôm nọ, dạo trước|Cụm thời gian|この間京都へ行った。|Hôm nọ tôi đã đi Kyoto.
みんなで|みんなで|cùng tất cả mọi người|Cụm phó từ|みんなで映画を見ない。|Mọi người cùng xem phim nhé?
～けど|～けど|nhưng; mà...|Liên từ hội thoại|日本料理は好きだけど、納豆は食べない。|Tôi thích món Nhật nhưng không ăn natto.
色々|いろいろ|nhiều thứ, đa dạng|Tính từ な / Phó từ|旅行で色々な所へ行った。|Trong chuyến đi tôi đã đến nhiều nơi.
よかったら|よかったら|nếu được, nếu bạn muốn|Cụm mời|よかったら、うちへ来ない。|Nếu được, cậu đến nhà mình nhé?
どうするの|どうするの|sẽ làm thế nào?|Cụm hội thoại|夏休みはどうするの。|Kỳ nghỉ hè cậu định làm gì?
どうしようかな|どうしようかな|nên làm gì nhỉ?|Cụm tự hỏi|晩ごはんはどうしようかな。|Bữa tối nên làm gì nhỉ?
`,
  grammar: grammarRows(`
Thể lịch sự và thể thông thường|ます・です ↔ thể ngắn|Thể thông thường dùng giữa bạn bè, người thân hoặc trong văn viết thân mật. Động từ dùng thể từ điển, ない, た, なかった.|あした東京へ行く。|Ngày mai tôi đi Tokyo.|Không dùng thể thân mật với người mới gặp hoặc cấp trên khi chưa được phép.
Động từ ở thể thông thường|Vる / Vない / Vた / Vなかった|Bốn dạng tương ứng hiện tại khẳng định, hiện tại phủ định, quá khứ khẳng định và quá khứ phủ định.|きのう映画を見なかった。|Hôm qua tôi đã không xem phim.|Không thêm です sau động từ thể thông thường.
Tính từ い ở thể thông thường|Aい / Aくない / Aかった / Aくなかった|Bỏ です khỏi câu lịch sự; các dạng phủ định và quá khứ giữ cách biến đổi của tính từ い.|この本はおもしろかった。|Cuốn sách này đã thú vị.|いい có các dạng よくない, よかった, よくなかった.
Danh từ và tính từ な|N・Aな + だ / じゃない / だった / じゃなかった|Ở hiện tại khẳng định dùng だ. Trong câu hỏi thân mật thường bỏ だ và dùng ngữ điệu lên.|きのうは暇だった。|Hôm qua tôi rảnh.|Không nói 暇だか; câu hỏi thân mật là 暇 hoặc 暇だった.
Nối ý trong hội thoại|Thể thông thường + けど、～|けど nối hai ý tương phản hoặc làm mềm lời mở đầu, đôi khi phần sau được lược bỏ.|日本料理は好きだけど、納豆は食べない。|Tôi thích món Nhật nhưng không ăn natto.|Sau danh từ hoặc tính từ な, dùng だけど ở hiện tại khẳng định.
`),
  choices: choiceRows(`
明日東京へ（　）。〔thể thân mật〕|行きます~行く~行って~行った|1|Động từ hiện tại|Thể thông thường hiện tại khẳng định là thể từ điển 行く.
きのう映画を（　）。〔đã không xem〕|見ない~見なかった~見ません~見なくて|1|Động từ quá khứ phủ định|Thể thông thường quá khứ phủ định là 見なかった.
この料理はあまり（　）。〔không ngon〕|おいしい~おいしかった~おいしくない~おいしいじゃない|2|Tính từ い phủ định|Tính từ い phủ định dùng くない.
旅行は（　）。〔đã vui〕|楽しい~楽しかった~楽しいだった~楽しくない|1|Tính từ い quá khứ|楽しい bỏ い rồi thêm かった.
きのうは（　）。〔đã rảnh〕|暇だ~暇だった~暇かった~暇でしただ|1|Tính từ な quá khứ|Thể thông thường quá khứ của 暇です là 暇だった.
田中君は学生（　）。〔không phải〕|ではありません~じゃない~くない~ないだ|1|Danh từ phủ định|Danh từ ở thể thông thường phủ định dùng じゃない.
日本料理は好き（　）、納豆は食べない。|けど~だけど~くて~ので|1|Nối Aな|好き là tính từ な; hiện tại khẳng định trước けど là 好きだけど.
この言葉を辞書で（　）。〔thể thân mật〕|調べます~調べる~調べたです~調べり|1|Động từ nhóm II|調べます chuyển sang thể từ điển 調べる.
ビザが（　）。〔không cần〕|要る~要らない~要りない~要った|1|Phủ định nhóm I|要ります thuộc nhóm I, thể ない là 要らない.
もう昼ごはんを食べた。— ううん、まだ（　）。|食べた~食べない~食べていない~食べる|2|Chưa làm|まだ食べていない nghĩa là vẫn chưa ăn.
赤と青と（　）が好き。|どれ~どの~どっち~どこ|2|Cách nói thân mật|どっち là cách nói thân mật của どちら khi chọn giữa hai thứ.
よかったら、うちへ（　）。〔lời mời thân mật〕|来ない~来なかった~来るない~来ません|0|Lời mời|Vない với ngữ điệu hỏi có thể dùng như lời mời thân mật.
`),
  translations: translationRows(`
あした東京へ行く。|あしたとうきょうへいく。|Ngày mai tôi đi Tokyo.|Thể thông thường|行きます đổi sang thể từ điển 行く.
きのう映画を見なかった。|きのうえいがをみなかった。|Hôm qua tôi đã không xem phim.|Quá khứ phủ định|見ませんでした đổi sang thể thông thường 見なかった.
この本はおもしろかった。|このほんはおもしろかった。|Cuốn sách này đã thú vị.|Tính từ い|Quá khứ thông thường của おもしろい là おもしろかった.
きのうは暇だった。|きのうはひまだった。|Hôm qua tôi rảnh.|Tính từ な|暇でした đổi thành 暇だった.
田中君は学生じゃない。|たなかくんはがくせいじゃない。|Tanaka không phải là sinh viên.|Danh từ phủ định|学生です phủ định thân mật là 学生じゃない.
日本料理は好きだけど、納豆は食べない。|にほんりょうりはすきだけど、なっとうはたべない。|Tôi thích món Nhật nhưng không ăn natto.|けど|好き là tính từ な nên dùng 好きだけど.
この言葉を辞書で調べる。|このことばをじしょでしらべる。|Tôi sẽ tra từ này bằng từ điển.|Thể từ điển|調べます đổi thành 調べる.
旅行にビザが要る。|りょこうにビザがいる。|Chuyến đi cần thị thực.|要る|要ります đổi thành thể từ điển 要る.
この間京都へ行った。|このあいだきょうとへいった。|Hôm nọ tôi đã đi Kyoto.|Thể た|行きました đổi thành thể thông thường 行った.
こっちのほうが安いよ。|こっちのほうがやすいよ。|Phía này rẻ hơn đấy.|Hội thoại|こっち là cách nói thân mật của こちら; よ truyền đạt thông tin.
赤と青とどっちが好き。|あかとあおとどっちがすき。|Cậu thích đỏ hay xanh?|Câu hỏi thân mật|Câu hỏi với tính từ な thường bỏ だ và か.
よかったら、うちへ来ない。|よかったら、うちへこない。|Nếu được, cậu đến nhà mình nhé?|Lời mời|Vない với ngữ điệu hỏi tạo lời mời thân mật.
`),
});
