import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson8 = defineLesson(8, {
  words: `
ハンサムな|ハンサムな|đẹp trai|Tính từ な|山田さんはハンサムです。|Anh Yamada đẹp trai.
きれいな|きれいな|đẹp, sạch|Tính từ な|京都はきれいな町です。|Kyoto là thành phố đẹp.
静かな|しずかな|yên tĩnh|Tính từ な|奈良は静かです。|Nara yên tĩnh.
にぎやかな|にぎやかな|nhộn nhịp|Tính từ な|大阪はにぎやかな町です。|Osaka là thành phố nhộn nhịp.
有名な|ゆうめいな|nổi tiếng|Tính từ な|富士山は有名な山です。|Phú Sĩ là ngọn núi nổi tiếng.
親切な|しんせつな|tốt bụng|Tính từ な|先生はとても親切です。|Giáo viên rất tốt bụng.
元気な|げんきな|khỏe mạnh|Tính từ な|母は元気です。|Mẹ tôi khỏe.
暇な|ひまな|rảnh rỗi|Tính từ な|日曜日は暇です。|Chủ nhật tôi rảnh.
便利な|べんりな|tiện lợi|Tính từ な|地下鉄は便利です。|Tàu điện ngầm tiện lợi.
大きい|おおきい|to, lớn|Tính từ い|東京は大きい町です。|Tokyo là thành phố lớn.
小さい|ちいさい|nhỏ|Tính từ い|これは小さいカメラです。|Đây là máy ảnh nhỏ.
新しい|あたらしい|mới|Tính từ い|このパソコンは新しいです。|Máy tính này mới.
古い|ふるい|cũ|Tính từ い|あの寺は古いです。|Ngôi chùa kia cổ.
いい|いい|tốt|Tính từ い|この辞書はいいです。|Từ điển này tốt.
悪い|わるい|xấu, tệ|Tính từ い|きょうは天気が悪いです。|Hôm nay thời tiết xấu.
暑い|あつい|nóng (thời tiết)|Tính từ い|ベトナムは暑いです。|Việt Nam nóng.
寒い|さむい|lạnh (thời tiết)|Tính từ い|北海道は寒いです。|Hokkaido lạnh.
難しい|むずかしい|khó|Tính từ い|日本語は難しいです。|Tiếng Nhật khó.
易しい|やさしい|dễ|Tính từ い|この問題は易しいです。|Câu hỏi này dễ.
高い|たかい|cao, đắt|Tính từ い|この時計は高いです。|Đồng hồ này đắt.
安い|やすい|rẻ|Tính từ い|この店は安いです。|Cửa hàng này rẻ.
おもしろい|おもしろい|thú vị|Tính từ い|この映画はおもしろいです。|Phim này thú vị.
おいしい|おいしい|ngon|Tính từ い|日本料理はおいしいです。|Món Nhật ngon.
白い|しろい|trắng|Tính từ い|白い靴を買いました。|Tôi đã mua giày trắng.
黒い|くろい|đen|Tính từ い|黒いかばんは私のです。|Chiếc cặp đen là của tôi.
桜|さくら|hoa anh đào|Danh từ|桜はとてもきれいです。|Hoa anh đào rất đẹp.
生活|せいかつ|cuộc sống|Danh từ|日本の生活はどうですか。|Cuộc sống ở Nhật thế nào?
どう|どう|như thế nào|Từ để hỏi|仕事はどうですか。|Công việc thế nào?
どんな|どんな|... như thế nào|Từ để hỏi|奈良はどんな町ですか。|Nara là thành phố như thế nào?
とても|とても|rất|Phó từ|富士山はとても高いです。|Núi Phú Sĩ rất cao.
あまり|あまり|không ... lắm|Phó từ|この町はあまりにぎやかじゃありません。|Thành phố này không nhộn nhịp lắm.
`,
  grammar: grammarRows(`
Hai nhóm tính từ|Aい / Aな|Tính từ い thường kết thúc bằng い; tính từ な cần な khi đứng trước danh từ. きれい và 有名 là tính từ な.|富士山は高いです。奈良は静かです。|Núi Phú Sĩ cao. Nara yên tĩnh.|Không phân nhóm chỉ bằng chữ cuối; きれい là tính từ な.
Tính từ làm vị ngữ|N は Aいです / Aなです|Tính từ い giữ い; tính từ な bỏ な trước です.|京都はきれいです。|Kyoto đẹp.|Không nói きれいなです.
Phủ định hiện tại|Aい bỏ い + くないです / Aなじゃありません|Tính từ い biến đổi đuôi; tính từ な đổi phần kết câu như danh từ.|この本はおもしろくないです。|Cuốn sách này không thú vị.|いい phủ định bất quy tắc là よくないです.
Tính từ bổ nghĩa danh từ|Aい + N / Aな + N|Tính từ い đứng trực tiếp trước danh từ; tính từ な thêm な.|これは新しい辞書です。|Đây là từ điển mới.|Không thêm の giữa tính từ và danh từ.
Mức độ|とても + khẳng định / あまり + phủ định|とても nghĩa là rất; あまり đi với phủ định để nói không lắm.|この町はあまり静かじゃありません。|Thành phố này không yên tĩnh lắm.|Không dùng あまり với khẳng định trong mẫu cơ bản.
Hỏi đặc điểm|Nはどうですか / どんなNですか|どう hỏi đánh giá chung; どんな đứng trước danh từ để hỏi loại hoặc đặc điểm.|奈良はどんな町ですか。|Nara là thành phố như thế nào?|どんな phải đi kèm danh từ; どう đứng độc lập.
`),
  choices: choiceRows(`
京都は（　）です。|きれいな~きれい~きれいの~きれいく|1|Aな vị ngữ|Tính từ な bỏ な trước です.
富士山は（　）山です。|高い~高いな~高く~高の|0|Aい bổ nghĩa|Tính từ い đặt trực tiếp trước danh từ.
奈良は（　）町です。|静か~静かな~静かの~静かい|1|Aな bổ nghĩa|Tính từ な cần な trước danh từ.
この本はおもしろ（　）です。〔không thú vị〕|いない~くない~じゃない~ではない|1|Aい phủ định|Bỏ い và thêm くないです.
この町はにぎやか（　）。〔không nhộn nhịp〕|くないです~じゃありません~ないです~なありません|1|Aな phủ định|Tính từ な dùng じゃありません.
この辞書は（　）です。〔không tốt〕|いくない~いいじゃありません~よくない~よいくない|2|いい phủ định|いい đổi gốc thành よくない.
富士山は（　）高いです。|あまり~とても~全然~まだ|1|とても|とても đi với khẳng định để nhấn mạnh rất cao.
この町はあまり静か（　）。|です~でした~じゃありません~になります|2|あまり|あまり đi với phủ định.
日本の生活は（　）ですか。|どんな~どう~どれ~何の|1|どう|どうですか hỏi đánh giá chung.
奈良は（　）町ですか。|どう~どれ~どんな~何|2|どんなN|どんな phải đứng trước danh từ 町.
これは（　）カメラです。|小さい~小さく~小さいな~小さの|0|AいN|小さい đứng trực tiếp trước カメラ.
大阪はにぎやか（　）、おもしろい町です。|です~な~の~く|1|AなN|にぎやかな bổ nghĩa cho 町 cùng với おもしろい.
`),
  translations: translationRows(`
京都はきれいです。|きょうとはきれいです。|Kyoto đẹp.|Aな vị ngữ|きれい là tính từ な nhưng bỏ な trước です.
富士山は高いです。|ふじさんはたかいです。|Núi Phú Sĩ cao.|Aい vị ngữ|高い giữ nguyên trước です.
奈良は静かな町です。|ならはしずかなまちです。|Nara là thành phố yên tĩnh.|AなN|静か thêm な trước 町.
これは新しい辞書です。|これはあたらしいじしょです。|Đây là từ điển mới.|AいN|新しい đứng trực tiếp trước 辞書.
この本はおもしろくないです。|このほんはおもしろくないです。|Cuốn sách này không thú vị.|Aい phủ định|おもしろい đổi thành おもしろくない.
この町はにぎやかじゃありません。|このまちはにぎやかじゃありません。|Thành phố này không nhộn nhịp.|Aな phủ định|Tính từ な phủ định bằng じゃありません.
この辞書はよくないです。|このじしょはよくないです。|Từ điển này không tốt.|いい phủ định|いい đổi bất quy tắc thành よくない.
富士山はとても高いです。|ふじさんはとてもたかいです。|Núi Phú Sĩ rất cao.|とても|とても bổ nghĩa mức độ cho 高い.
この町はあまり静かじゃありません。|このまちはあまりしずかじゃありません。|Thành phố này không yên tĩnh lắm.|あまり|あまり đi với phủ định.
日本の生活はどうですか。|にほんのせいかつはどうですか。|Cuộc sống ở Nhật thế nào?|どう|どうですか hỏi đánh giá.
奈良はどんな町ですか。|ならはどんなまちですか。|Nara là thành phố như thế nào?|どんな|どんな đứng trước 町.
日本料理はおいしいです。|にほんりょうりはおいしいです。|Món ăn Nhật ngon.|Aい|おいしい là tính từ い làm vị ngữ.
`),
});
