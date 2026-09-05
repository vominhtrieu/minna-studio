import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson3 = defineLesson(3, {
  words: `
ここ|ここ|ở đây|Từ chỉ định|ここは教室です。|Đây là phòng học.
そこ|そこ|ở đó|Từ chỉ định|そこは食堂です。|Đó là nhà ăn.
あそこ|あそこ|ở đằng kia|Từ chỉ định|あそこは受付です。|Đằng kia là quầy tiếp tân.
どこ|どこ|ở đâu|Từ để hỏi|トイレはどこですか。|Nhà vệ sinh ở đâu?
こちら|こちら|phía này, chỗ này|Từ lịch sự|エレベーターはこちらです。|Thang máy ở phía này.
そちら|そちら|phía đó, chỗ đó|Từ lịch sự|事務所はそちらです。|Văn phòng ở phía đó.
あちら|あちら|phía kia, chỗ kia|Từ lịch sự|会議室はあちらです。|Phòng họp ở phía kia.
どちら|どちら|phía nào, ở đâu|Từ để hỏi lịch sự|お国はどちらですか。|Bạn đến từ nước nào?
教室|きょうしつ|phòng học|Danh từ|三階は日本語の教室です。|Tầng ba là phòng học tiếng Nhật.
食堂|しょくどう|nhà ăn|Danh từ|食堂は地下です。|Nhà ăn ở tầng hầm.
事務所|じむしょ|văn phòng|Danh từ|会社の事務所は二階です。|Văn phòng công ty ở tầng hai.
会議室|かいぎしつ|phòng họp|Danh từ|会議室はここです。|Phòng họp ở đây.
受付|うけつけ|quầy tiếp tân|Danh từ|受付は一階です。|Quầy tiếp tân ở tầng một.
ロビー|ロビー|sảnh|Danh từ|ロビーはあそこです。|Sảnh ở đằng kia.
部屋|へや|phòng|Danh từ|私の部屋は四階です。|Phòng tôi ở tầng bốn.
トイレ|トイレ|nhà vệ sinh|Danh từ|トイレはエレベーターの隣です。|Nhà vệ sinh ở cạnh thang máy.
階段|かいだん|cầu thang bộ|Danh từ|階段はこちらです。|Cầu thang bộ ở phía này.
エレベーター|エレベーター|thang máy|Danh từ|エレベーターはどこですか。|Thang máy ở đâu?
エスカレーター|エスカレーター|thang cuốn|Danh từ|エスカレーターは二階です。|Thang cuốn ở tầng hai.
国|くに|đất nước, quê hương|Danh từ|お国はどちらですか。|Bạn đến từ nước nào?
会社|かいしゃ|công ty|Danh từ|会社は大阪です。|Công ty ở Osaka.
家|うち|nhà|Danh từ|家は駅の近くです。|Nhà tôi ở gần ga.
靴|くつ|giày|Danh từ|この靴は八千円です。|Đôi giày này giá tám nghìn yên.
ネクタイ|ネクタイ|cà vạt|Danh từ|そのネクタイはいくらですか。|Chiếc cà vạt đó bao nhiêu tiền?
売り場|うりば|quầy bán hàng|Danh từ|靴売り場は三階です。|Quầy giày ở tầng ba.
地下|ちか|tầng hầm|Danh từ|レストランは地下です。|Nhà hàng ở tầng hầm.
何階|なんがい|tầng mấy|Từ để hỏi|受付は何階ですか。|Quầy tiếp tân ở tầng mấy?
いくら|いくら|bao nhiêu tiền|Từ để hỏi|この時計はいくらですか。|Đồng hồ này bao nhiêu tiền?
円|えん|yên Nhật|Đơn vị tiền|この本は千円です。|Cuốn sách này giá một nghìn yên.
`,
  grammar: grammarRows(`
Chỉ địa điểm|ここ / そこ / あそこ は Nです|ここ gần người nói, そこ gần người nghe, あそこ xa cả hai.|ここは受付です。|Đây là quầy tiếp tân.|Các từ này chỉ nơi chốn, không dùng trực tiếp trước danh từ.
Cách nói lịch sự về phương hướng|こちら / そちら / あちら / どちら|Bốn từ này lịch sự hơn ここ・そこ・あそこ・どこ và cũng có thể chỉ người hoặc phương hướng.|エレベーターはこちらです。|Thang máy ở phía này.|Không dùng こちら để chỉ một đồ vật thông thường trong bài này.
Nói vị trí của người hoặc vật|N1 は N2 địa điểm です|Đặt chủ đề trước は và vị trí ở cuối trước です.|トイレは二階です。|Nhà vệ sinh ở tầng hai.|です ở đây mang nghĩa ở, không phải là theo nghĩa phân loại.
Hỏi ở đâu|N は どこ / どちらですか|どこ hỏi địa điểm; どちら lịch sự hơn và dùng hỏi công ty hoặc quốc gia.|お国はどちらですか。|Bạn đến từ nước nào?|お国は何ですか không tự nhiên khi hỏi quốc gia.
Nói xuất xứ sản phẩm|N1 は N2 の Nです|Tên nước hoặc công ty đứng trước の để nêu nơi sản xuất hoặc hãng.|この時計は日本の時計です。|Đồng hồ này là hàng Nhật.|Có thể lược danh từ sau の khi đã rõ: 日本のです.
Hỏi giá|N は いくらですか / Số + 円です|いくら hỏi giá; câu trả lời dùng số tiền trước 円です.|この靴はいくらですか。|Đôi giày này bao nhiêu tiền?|円 đọc えん; các số hàng trăm, nghìn có biến âm riêng.
`),
  choices: choiceRows(`
（　）は教室です。〔nơi gần người nói〕|これ~ここ~この~こちらの|1|ここ|ここ đứng độc lập để chỉ nơi gần người nói.
トイレは（　）ですか。|何~誰~どこ~いつ|2|Hỏi nơi|どこ dùng để hỏi địa điểm.
エレベーターは（　）です。〔lịch sự, phía này〕|こちら~この~これ~どちらか|0|こちら|こちら là cách nói lịch sự của ここ hoặc chỉ phía này.
受付は二階（　）。|ます~います~です~あります|2|Vị trí|Câu danh từ về vị trí kết thúc bằng です.
お国は（　）ですか。|どれ~どなた~どちら~どんな|2|Hỏi quốc gia|どちら được dùng lịch sự để hỏi nước nào.
この時計は日本（　）です。|で~から~の~へ|2|Xuất xứ|日本の lược danh từ 時計 đã rõ.
この靴は（　）ですか。— 八千円です。|どこ~いくら~何階~どちら|1|Hỏi giá|いくらですか hỏi bao nhiêu tiền.
食堂は（　）です。〔tầng hầm〕|地下~何階~会社~売り場|0|Tầng|地下 nghĩa là tầng hầm.
靴売り場は（　）ですか。— 三階です。|何歳~何時~何階~何円|2|Hỏi tầng|何階 đọc なんがい và hỏi tầng mấy.
会議室は（　）です。〔đằng kia, lịch sự〕|あれ~あの~あちら~どれ|2|あちら|あちら chỉ phía hoặc nơi xa một cách lịch sự.
会社は大阪（　）。|を~です~ます~の|1|Địa điểm|大阪です nói công ty ở Osaka.
この本は千（　）です。|時~階~人~円|3|Giá tiền|円 là đơn vị yên Nhật.
`),
  translations: translationRows(`
ここは教室です。|ここはきょうしつです。|Đây là phòng học.|ここ|ここ chỉ địa điểm gần người nói.
そこは食堂です。|そこはしょくどうです。|Đó là nhà ăn.|そこ|そこ chỉ nơi gần người nghe.
あそこは受付です。|あそこはうけつけです。|Đằng kia là quầy tiếp tân.|あそこ|あそこ chỉ nơi xa cả hai.
トイレはどこですか。|トイレはどこですか。|Nhà vệ sinh ở đâu?|どこ|Nはどこですか hỏi vị trí của N.
エレベーターはこちらです。|エレベーターはこちらです。|Thang máy ở phía này.|こちら|こちら là cách chỉ hướng lịch sự.
会議室はあちらです。|かいぎしつはあちらです。|Phòng họp ở phía kia.|あちら|あちら chỉ phía xa một cách lịch sự.
受付は一階です。|うけつけはいっかいです。|Quầy tiếp tân ở tầng một.|Tầng|一階 đọc いっかい.
食堂は地下です。|しょくどうはちかです。|Nhà ăn ở tầng hầm.|地下|地下です nói vị trí ở tầng hầm.
お国はどちらですか。|おくにはどちらですか。|Bạn đến từ nước nào?|Hỏi quốc gia|どちら là cách hỏi lịch sự.
この時計は日本のです。|このとけいはにほんのです。|Chiếc đồng hồ này là hàng Nhật.|Xuất xứ|日本の thay cho 日本の時計.
この靴はいくらですか。|このくつはいくらですか。|Đôi giày này bao nhiêu tiền?|Hỏi giá|いくらですか hỏi giá.
この本は千円です。|このほんはせんえんです。|Cuốn sách này giá một nghìn yên.|Giá tiền|Số tiền đặt trước 円です.
`),
});
