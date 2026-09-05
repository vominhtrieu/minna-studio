import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson21 = defineLesson(21, {
  words: `
思います|おもいます|nghĩ|Động từ · Nhóm I|あした雨が降ると思います。|Tôi nghĩ ngày mai trời sẽ mưa.
言います|いいます|nói|Động từ · Nhóm I|先生は来週試験があると言いました。|Giáo viên nói tuần sau có thi.
足ります|たります|đủ|Động từ · Nhóm II|時間が足りないと思います。|Tôi nghĩ thời gian không đủ.
勝ちます|かちます|thắng|Động từ · Nhóm I|日本が勝つと思います。|Tôi nghĩ Nhật Bản sẽ thắng.
負けます|まけます|thua|Động từ · Nhóm II|この試合には負けないと思います。|Tôi nghĩ sẽ không thua trận này.
あります|あります|được tổ chức, xảy ra|Động từ · Nhóm I|日曜日に町で祭りがあります。|Chủ nhật có lễ hội ở thành phố.
役に立ちます|やくにたちます|có ích|Cụm động từ|この辞書は勉強に役に立つと思います。|Tôi nghĩ từ điển này có ích cho việc học.
無駄な|むだな|lãng phí, vô ích|Tính từ な|それは無駄だと思います。|Tôi nghĩ việc đó vô ích.
不便な|ふべんな|bất tiện|Tính từ な|この町は交通が不便だと思います。|Tôi nghĩ giao thông ở thành phố này bất tiện.
同じ|おなじ|giống, cùng|Tính từ đặc biệt|私も同じ意見です。|Tôi cũng có cùng ý kiến.
すごい|すごい|tuyệt vời; ghê gớm|Tính từ い|あの選手はすごいと思います。|Tôi nghĩ vận động viên kia rất tuyệt.
首相|しゅしょう|thủ tướng|Danh từ|首相は来月外国へ行くと言いました。|Thủ tướng nói tháng sau sẽ đi nước ngoài.
大統領|だいとうりょう|tổng thống|Danh từ|大統領のスピーチを聞きました。|Tôi đã nghe bài phát biểu của tổng thống.
政治|せいじ|chính trị|Danh từ|政治についてどう思いますか。|Bạn nghĩ sao về chính trị?
ニュース|ニュース|tin tức|Danh từ|ニュースで試合の結果を知りました。|Tôi biết kết quả trận đấu qua tin tức.
スピーチ|スピーチ|bài phát biểu|Danh từ|山田さんはスピーチが上手だと思います。|Tôi nghĩ anh Yamada phát biểu giỏi.
試合|しあい|trận đấu|Danh từ|日曜日にサッカーの試合があります。|Chủ nhật có trận bóng đá.
アルバイト|アルバイト|việc làm thêm|Danh từ|アルバイトは大変だと思います。|Tôi nghĩ việc làm thêm vất vả.
意見|いけん|ý kiến|Danh từ|私の意見は田中さんと同じです。|Ý kiến của tôi giống anh Tanaka.
話|はなし|câu chuyện, lời nói|Danh từ|先生の話は役に立ちました。|Câu chuyện của giáo viên rất hữu ích.
ユーモア|ユーモア|sự hài hước|Danh từ|あの人はユーモアがあると思います。|Tôi nghĩ người kia có khiếu hài hước.
デザイン|デザイン|thiết kế|Danh từ|この車のデザインはすごいです。|Thiết kế chiếc xe này rất tuyệt.
交通|こうつう|giao thông|Danh từ|この町は交通が便利です。|Giao thông thành phố này thuận tiện.
ラッシュ|ラッシュ|giờ cao điểm|Danh từ|朝のラッシュは大変だと思います。|Tôi nghĩ giờ cao điểm buổi sáng rất vất vả.
最近|さいきん|gần đây|Phó từ|最近忙しいです。|Gần đây tôi bận.
たぶん|たぶん|có lẽ|Phó từ|たぶん彼は来ないと思います。|Tôi nghĩ có lẽ anh ấy không đến.
きっと|きっと|chắc chắn|Phó từ|日本はきっと勝つと思います。|Tôi nghĩ Nhật Bản chắc chắn sẽ thắng.
本当に|ほんとうに|thật sự|Phó từ|本当にそう思いますか。|Bạn thực sự nghĩ vậy sao?
そんなに|そんなに|đến mức như vậy|Phó từ|この問題はそんなに難しくないと思います。|Tôi nghĩ bài này không khó đến vậy.
～について|～について|về, liên quan đến|Cụm trợ từ|日本の教育について話します。|Tôi nói về giáo dục Nhật Bản.
しかたがありません|しかたがありません|không còn cách nào|Cụm hội thoại|電車がありませんから、しかたがありません。|Không có tàu nên đành chịu.
もちろん|もちろん|tất nhiên|Phó từ|もちろん参加すると思います。|Tôi nghĩ tất nhiên sẽ tham gia.
`,
  grammar: grammarRows(`
Nêu ý kiến hoặc phỏng đoán|Thể thông thường + と思います|Nội dung suy nghĩ đứng trước と ở thể thông thường. Khi nói trực tiếp ý kiến của mình, thường dùng と思います thay vì わたしは.|あした雨が降ると思います。|Tôi nghĩ ngày mai trời sẽ mưa.|Danh từ và tính từ な hiện tại khẳng định cần だ: 便利だと思います.
Hỏi ý kiến|～についてどう思いますか|Dùng để hỏi người nghe nghĩ gì về một chủ đề. Trả lời bằng ～と思います.|日本の交通についてどう思いますか。|Bạn nghĩ sao về giao thông Nhật Bản?|Không trả lời chỉ bằng はい hoặc いいえ; cần nêu nội dung ý kiến.
Trích dẫn lời nói|Thể thông thường + と言います / と言いました|と đánh dấu nội dung được nói. Thì của lời trích dẫn và động từ 言います được xét riêng.|先生は来週試験があると言いました。|Giáo viên nói tuần sau có thi.|Trích dẫn trực tiếp có thể đặt nguyên câu trong dấu ngoặc 「」.
Xác nhận dự đoán|Thể thông thường + でしょう|Dùng khi người nói dự đoán với độ chắc tương đối hoặc hỏi người nghe xác nhận.|あしたは寒いでしょう。|Ngày mai chắc sẽ lạnh.|Danh từ và tính từ な không dùng だ trước でしょう.
Sự kiện diễn ra ở đâu|Địa điểm で N があります|Khi あります chỉ sự kiện được tổ chức, địa điểm dùng で thay vì に.|日曜日に町で祭りがあります。|Chủ nhật có lễ hội ở thành phố.|Vật tồn tại vẫn dùng địa điểm に: 机の上に本があります.
Đưa ra một gợi ý nhẹ|N でも Vませんか|でも nêu một ví dụ đại diện, tạo lời rủ rê không ép buộc.|コーヒーでも飲みませんか。|Mình uống cà phê hay gì đó nhé?|でも ở đây không mang nghĩa nhưng.
`),
  choices: choiceRows(`
あした雨が（　）と思います。|降ります~降る~降って~降ったです|1|と思います|Nội dung trước と思います dùng thể thông thường 降る.
この町は交通が便利（　）と思います。|な~に~だ~で|2|Aなと思います|Tính từ な hiện tại khẳng định cần だ trước と.
この問題は難しく（　）と思います。|ない~ありません~なくて~ないです|0|Phủ định trước と|Khó không ở thể thông thường là 難しくない.
先生は来週試験がある（　）言いました。|を~が~と~に|2|Trích dẫn|Nội dung lời nói được đánh dấu bằng と.
日本の交通（　）どう思いますか。|まで~について~しか~でも|1|Hỏi ý kiến|Nについて là về chủ đề N.
あしたは寒い（　）。|でしょう~だでしょう~ですだろう~でしょうだ|0|Dự đoán|Tính từ い đặt trực tiếp trước でしょう.
田中さんは学生（　）。|だでしょう~でしょう~なでしょう~にでしょう|1|Nでしょう|Danh từ không dùng だ trước でしょう.
日曜日に町（　）祭りがあります。|に~を~で~へ|2|Sự kiện|Lễ hội diễn ra tại thành phố nên địa điểm dùng で.
机の上（　）本があります。|で~に~を~へ|1|Vật tồn tại|Vật tồn tại tại một vị trí dùng に, khác với sự kiện dùng で.
コーヒー（　）飲みませんか。|だけ~しか~でも~まで|2|Gợi ý|Nでも đưa ra một lựa chọn ví dụ trong lời rủ.
日本はきっと（　）と思います。|勝ちます~勝つ~勝って~勝ったです|1|Phỏng đoán|勝ちます đổi thành thể thông thường 勝つ.
時間が足りないから、急が（　）。|ないと~なくても~ないで~なかった|0|Lược なければ|Vないと là cách nói ngắn của phải làm; 急がないと nghĩa là phải nhanh lên.
`),
  translations: translationRows(`
あした雨が降ると思います。|あしたあめがふるとおもいます。|Tôi nghĩ ngày mai trời sẽ mưa.|と思います|降ります đổi thành thể thông thường 降る trước と.
この町は交通が不便だと思います。|このまちはこうつうがふべんだとおもいます。|Tôi nghĩ giao thông ở thành phố này bất tiện.|Aなと思います|不便 là tính từ な nên cần だ trước と.
この問題はそんなに難しくないと思います。|このもんだいはそんなにむずかしくないとおもいます。|Tôi nghĩ bài này không khó đến vậy.|Phủ định|難しい đổi thành phủ định thông thường 難しくない.
日本の政治についてどう思いますか。|にほんのせいじについてどうおもいますか。|Bạn nghĩ sao về chính trị Nhật Bản?|Hỏi ý kiến|Nについて xác định chủ đề được hỏi ý kiến.
先生は来週試験があると言いました。|せんせいはらいしゅうしけんがあるといいました。|Giáo viên nói tuần sau có thi.|Trích dẫn|Nội dung 試験がある đứng trước trợ từ trích dẫn と.
首相は来月外国へ行くと言いました。|しゅしょうはらいげつがいこくへいくといいました。|Thủ tướng nói tháng sau sẽ đi nước ngoài.|Trích dẫn|行きます đổi sang thể thông thường 行く.
あしたは寒いでしょう。|あしたはさむいでしょう。|Ngày mai chắc sẽ lạnh.|でしょう|Tính từ い đặt trực tiếp trước でしょう.
田中さんは学生でしょう。|たなかさんはがくせいでしょう。|Anh Tanaka chắc là sinh viên.|Nでしょう|Danh từ không thêm だ trước でしょう.
日曜日に町で祭りがあります。|にちようびにまちでまつりがあります。|Chủ nhật có lễ hội ở thành phố.|Sự kiện|Sự kiện 祭り diễn ra ở 町 nên dùng で.
コーヒーでも飲みませんか。|コーヒーでものみませんか。|Mình uống cà phê hay gì đó nhé?|Gợi ý|でも nêu cà phê như một gợi ý nhẹ.
この辞書は勉強に役に立つと思います。|このじしょはべんきょうにやくにたつとおもいます。|Tôi nghĩ từ điển này có ích cho việc học.|Ý kiến|役に立ちます đổi thành 役に立つ trước と思います.
時間が足りないから、急がないと。|じかんがたりないから、いそがないと。|Vì không đủ thời gian nên phải nhanh lên.|ないと|ないと là cách nói lược của なければなりません trong hội thoại.
`),
});
