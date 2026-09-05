import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson2 = defineLesson(2, {
  words: `
これ|これ|cái này|Từ chỉ định|これは辞書です。|Đây là từ điển.
それ|それ|cái đó|Từ chỉ định|それは私の傘です。|Đó là ô của tôi.
あれ|あれ|cái kia|Từ chỉ định|あれは何ですか。|Kia là cái gì?
この|この|... này|Từ chỉ định|この本は日本語の本です。|Cuốn sách này là sách tiếng Nhật.
その|その|... đó|Từ chỉ định|その時計は田中さんのです。|Chiếc đồng hồ đó là của anh Tanaka.
あの|あの|... kia|Từ chỉ định|あのかばんは誰のですか。|Chiếc cặp kia là của ai?
本|ほん|sách|Danh từ|これは英語の本です。|Đây là sách tiếng Anh.
辞書|じしょ|từ điển|Danh từ|この辞書は私のです。|Từ điển này là của tôi.
雑誌|ざっし|tạp chí|Danh từ|それは車の雑誌です。|Đó là tạp chí ô tô.
新聞|しんぶん|báo|Danh từ|あれは日本の新聞です。|Kia là báo Nhật.
ノート|ノート|vở|Danh từ|このノートは新しいです。|Quyển vở này mới.
手帳|てちょう|sổ tay|Danh từ|それは先生の手帳です。|Đó là sổ tay của giáo viên.
名刺|めいし|danh thiếp|Danh từ|これは会社の名刺です。|Đây là danh thiếp công ty.
カード|カード|thẻ|Danh từ|このカードは誰のですか。|Thẻ này là của ai?
鉛筆|えんぴつ|bút chì|Danh từ|それは鉛筆ですか。|Đó là bút chì phải không?
時計|とけい|đồng hồ|Danh từ|あの時計はいくらですか。|Chiếc đồng hồ kia bao nhiêu tiền?
傘|かさ|ô, dù|Danh từ|これは私の傘じゃありません。|Đây không phải ô của tôi.
かばん|かばん|cặp, túi|Danh từ|そのかばんはベトナムのです。|Chiếc túi đó là hàng Việt Nam.
カメラ|カメラ|máy ảnh|Danh từ|これは日本のカメラです。|Đây là máy ảnh Nhật.
自動車|じどうしゃ|ô tô|Danh từ|あれは誰の自動車ですか。|Chiếc ô tô kia là của ai?
英語|えいご|tiếng Anh|Danh từ|これは英語の雑誌です。|Đây là tạp chí tiếng Anh.
何|なん|cái gì|Từ để hỏi|それは何の本ですか。|Đó là sách về gì?
違います|ちがいます|không đúng, khác|Động từ|いいえ、違います。|Không, không phải.
そうですか|そうですか|thế à, vậy sao|Cụm hội thoại|そうですか。ありがとうございます。|Thế à. Cảm ơn bạn.
どうぞ|どうぞ|xin mời|Cụm hội thoại|どうぞ。これはお土産です。|Xin mời. Đây là quà.
`,
  grammar: grammarRows(`
Chỉ đồ vật|これ / それ / あれ は Nです|これ gần người nói, それ gần người nghe, あれ xa cả hai. Các từ này đứng độc lập.|これは本です。|Đây là sách.|Không đặt danh từ ngay sau これ・それ・あれ.
Bổ nghĩa danh từ chỉ định|この / その / あの + N|この gần người nói, その gần người nghe, あの xa cả hai; luôn phải đi cùng danh từ.|この本は私のです。|Cuốn sách này là của tôi.|Không dùng この đứng một mình; khi không có danh từ dùng これ.
Hỏi và trả lời đồ vật|これは Nですか / 何ですか|Dùng 何ですか để hỏi vật là gì; câu hỏi xác nhận trả lời そうです hoặc 違います.|それは辞書ですか。|Đó là từ điển phải không?|いいえ、違います tự nhiên hơn いいえ、辞書じゃありません khi chỉ bác bỏ.
Chọn giữa hai loại|N1ですか、N2ですか|Đặt hai khả năng liên tiếp để hỏi chọn một; trả lời trực tiếp loại đúng.|これはペンですか、鉛筆ですか。|Đây là bút mực hay bút chì?|Không trả lời はい hoặc いいえ cho câu hỏi lựa chọn.
Nói nội dung hoặc xuất xứ|N1 の N2|の có thể chỉ nội dung, ngôn ngữ, nhà sản xuất hoặc quốc gia của đồ vật.|これは日本語の本です。|Đây là sách tiếng Nhật.|N1のN2 không phải lúc nào cũng chỉ sở hữu.
Lược danh từ đã biết|N1 のです / N1 のじゃありません|の thay cho danh từ đã rõ để nói của ai hoặc xuất xứ nào.|この傘は私のです。|Chiếc ô này là của tôi.|Không dùng の thay cho người; ở đây の thay cho đồ vật.
`),
  choices: choiceRows(`
（　）は辞書です。〔vật gần người nói〕|この~これ~それ~あの|1|これ|これ đứng độc lập để chỉ vật gần người nói.
（　）本は私のです。〔sách gần người nghe〕|それ~その~これ~あれ|1|そのN|その luôn đứng trước danh từ 本.
あれは（　）ですか。|誰~どこ~何~いつ|2|Hỏi đồ vật|何ですか hỏi đó là vật gì.
これはペンですか、鉛筆ですか。—（　）です。|はい~いいえ~鉛筆~そう|2|Câu hỏi lựa chọn|Trả lời trực tiếp một trong hai lựa chọn.
これは日本語（　）本です。|を~で~の~も|2|NのN|の nối ngôn ngữ với loại sách.
この傘は私（　）です。|が~を~の~に|2|Lược danh từ|私の thay cho 私の傘.
それは田中さんの名刺ですか。— いいえ、（　）。|そうです~違います~名刺です~田中さんです|1|Bác bỏ|違います dùng để nói phán đoán của người hỏi không đúng.
（　）かばんは誰のですか。〔cặp ở xa cả hai〕|この~その~あの~これ|2|あのN|あの đi với danh từ ở xa cả người nói và nghe.
これは（　）の雑誌ですか。— 車の雑誌です。|何~誰~どこ~どれ|0|Hỏi nội dung|何のN hỏi loại hoặc nội dung của danh từ.
その時計は日本（　）です。|に~の~で~から|1|Xuất xứ|日本の lược 時計, nghĩa là hàng Nhật.
これはあなたのカードですか。— はい、（　）。|違います~そうです~何です~カードじゃありません|1|Xác nhận|そうです xác nhận phán đoán đúng.
（　）はお土産です。どうぞ。|これ~この~その~あの|0|Chỉ vật|これ đứng độc lập làm chủ đề của câu.
`),
  translations: translationRows(`
これは辞書です。|これはじしょです。|Đây là từ điển.|これ|これ chỉ vật gần người nói.
それは私の傘です。|それはわたしのかさです。|Đó là ô của tôi.|それ|それ chỉ vật gần người nghe.
あれは何ですか。|あれはなんですか。|Kia là cái gì?|あれ|あれ chỉ vật xa cả hai; 何 hỏi là gì.
この本は日本語の本です。|このほんはにほんごのほんです。|Cuốn sách này là sách tiếng Nhật.|このN|この phải đứng trước 本.
その時計は田中さんのです。|そのとけいはたなかさんのです。|Chiếc đồng hồ đó là của anh Tanaka.|Lược danh từ|田中さんの thay cho 田中さんの時計.
あのかばんは誰のですか。|あのかばんはだれのですか。|Chiếc cặp kia là của ai?|誰の|誰のですか hỏi chủ sở hữu.
これは英語の本です。|これはえいごのほんです。|Đây là sách tiếng Anh.|NのN|英語の bổ nghĩa nội dung của 本.
これはペンですか、鉛筆ですか。|これはペンですか、えんぴつですか。|Đây là bút mực hay bút chì?|Lựa chọn|Hai khả năng được nối bằng hai câu hỏi ですか.
鉛筆です。|えんぴつです。|Là bút chì.|Trả lời lựa chọn|Trả lời trực tiếp lựa chọn đúng, không dùng はい.
いいえ、違います。|いいえ、ちがいます。|Không, không phải.|Bác bỏ|違います bác bỏ phán đoán trước.
この辞書は私のです。|このじしょはわたしのです。|Từ điển này là của tôi.|Sở hữu|私の thay cho 私の辞書.
これは日本のカメラです。|これはにほんのカメラです。|Đây là máy ảnh Nhật.|Xuất xứ|日本のカメラ chỉ máy ảnh của Nhật.
`),
});
