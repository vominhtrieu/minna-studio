import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson1 = defineLesson(1, {
  words: `
私|わたし|tôi|Đại từ|私はベトナム人です。|Tôi là người Việt Nam.
私たち|わたしたち|chúng tôi, chúng ta|Đại từ|私たちは学生です。|Chúng tôi là sinh viên.
あなた|あなた|bạn, anh, chị|Đại từ|あなたは先生ですか。|Bạn là giáo viên phải không?
あの人|あのひと|người kia|Đại từ|あの人は会社員です。|Người kia là nhân viên công ty.
あの方|あのかた|vị kia, ngài kia|Đại từ lịch sự|あの方はどなたですか。|Vị kia là ai?
皆さん|みなさん|mọi người|Danh từ|皆さんは日本人ですか。|Mọi người là người Nhật phải không?
先生|せんせい|thầy, cô; người có chuyên môn|Danh từ|山田さんは日本語の先生です。|Anh Yamada là giáo viên tiếng Nhật.
教師|きょうし|nghề giáo viên|Danh từ|私は教師です。|Tôi là giáo viên.
学生|がくせい|học sinh, sinh viên|Danh từ|マリアさんも学生です。|Maria cũng là sinh viên.
会社員|かいしゃいん|nhân viên công ty|Danh từ|父は会社員です。|Bố tôi là nhân viên công ty.
銀行員|ぎんこういん|nhân viên ngân hàng|Danh từ|田中さんは銀行員じゃありません。|Anh Tanaka không phải nhân viên ngân hàng.
医者|いしゃ|bác sĩ|Danh từ|あの方は医者です。|Vị kia là bác sĩ.
研究者|けんきゅうしゃ|nhà nghiên cứu|Danh từ|姉は大学の研究者です。|Chị tôi là nhà nghiên cứu của trường đại học.
エンジニア|エンジニア|kỹ sư|Danh từ|私はエンジニアです。|Tôi là kỹ sư.
大学|だいがく|trường đại học|Danh từ|ミラーさんはさくら大学の学生です。|Anh Miller là sinh viên Đại học Sakura.
病院|びょういん|bệnh viện|Danh từ|母は病院の医者です。|Mẹ tôi là bác sĩ của bệnh viện.
誰|だれ|ai|Từ để hỏi|あの人は誰ですか。|Người kia là ai?
どなた|どなた|vị nào, ai|Từ để hỏi lịch sự|先生はどなたですか。|Vị nào là giáo viên?
何歳|なんさい|bao nhiêu tuổi|Từ để hỏi|妹は何歳ですか。|Em gái bạn bao nhiêu tuổi?
失礼ですが|しつれいですが|xin lỗi, cho phép tôi hỏi|Cụm hội thoại|失礼ですが、お名前は。|Xin lỗi, bạn tên là gì?
初めまして|はじめまして|rất vui lần đầu gặp|Cụm chào hỏi|初めまして。私はリンです。|Rất vui được gặp bạn. Tôi là Linh.
お願いします|おねがいします|xin nhờ, mong được giúp đỡ|Cụm hội thoại|どうぞよろしくお願いします。|Rất mong được bạn giúp đỡ.
来ました|きました|đã đến|Động từ|ベトナムから来ました。|Tôi đến từ Việt Nam.
`,
  grammar: grammarRows(`
Giới thiệu N1 là N2|N1 は N2 です|は đánh dấu chủ đề; です kết thúc câu danh từ lịch sự khẳng định.|私は学生です。|Tôi là sinh viên.|Trợ từ は trong câu này đọc là わ.
Phủ định danh từ|N1 は N2 じゃありません|Đổi です thành じゃありません để phủ định; ではありません trang trọng hơn.|私は医者じゃありません。|Tôi không phải bác sĩ.|Không nói じゃないです trong phạm vi thể lịch sự của bài đầu.
Câu hỏi xác nhận|N1 は N2 ですか|Thêm か cuối câu để hỏi. Trả lời bằng はい hoặc いいえ rồi nhắc lại vị ngữ.|ミラーさんは会社員ですか。|Anh Miller là nhân viên công ty phải không?|Không cần đảo trật tự câu như tiếng Việt.
Cũng là|N1 も N2 です|も thay は khi chủ đề có cùng thông tin với điều vừa nói.|マリアさんも学生です。|Maria cũng là sinh viên.|Không dùng はも cùng lúc cho một chủ đề.
Quan hệ sở thuộc|N1 の N2|の nối hai danh từ; N1 xác định tổ chức, quốc gia, chuyên môn hoặc sở hữu của N2.|私はIMCの社員です。|Tôi là nhân viên của IMC.|Trật tự ngược tiếng Việt: tổ chức đứng trước người thuộc tổ chức.
Hỏi tuổi và danh tính|何歳ですか / 誰ですか / どなたですか|何歳 hỏi tuổi; 誰 hỏi ai; どなた là cách hỏi ai lịch sự hơn.|あの方はどなたですか。|Vị kia là ai?|Với người lớn hoặc người cần kính trọng, có thể dùng おいくつですか để hỏi tuổi.
`),
  choices: choiceRows(`
私は学生（　）。|ます~です~います~あります|1|Câu danh từ|Câu khẳng định danh từ lịch sự kết thúc bằng です.
私は医者（　）。〔không phải〕|です~じゃありません~ません~ないです|1|Phủ định|Danh từ phủ định lịch sự dùng じゃありません.
ミラーさん（　）会社員ですか。|を~が~は~に|2|Chủ đề|は đánh dấu ミラーさん là chủ đề được hỏi.
マリアさん（　）学生です。〔cũng〕|は~も~の~か|1|も|も thay は để diễn tả cũng là sinh viên.
私はIMC（　）社員です。|を~で~の~も|2|NのN|の nối tên công ty với 社員.
あの方は（　）ですか。〔lịch sự〕|何~誰~どなた~どこ|2|Hỏi người|どなた là cách lịch sự để hỏi ai.
妹は（　）ですか。|何時~何歳~何人~何|1|Hỏi tuổi|何歳 đọc なんさい và dùng để hỏi tuổi.
田中さんは銀行員ですか。— いいえ、銀行員（　）。|です~じゃありません~もです~でした|1|Trả lời phủ định|Sau いいえ, dùng vị ngữ phủ định じゃありません.
私はベトナム（　）来ました。|へ~で~から~と|2|Xuất xứ|から chỉ điểm xuất phát hoặc nơi xuất thân.
山田さんは日本語（　）先生です。|が~を~の~で|2|Chuyên môn|日本語の先生 nghĩa là giáo viên tiếng Nhật.
（　）はじめまして。|どうぞ~どうも~もう~まだ|0|Chào hỏi|どうぞ có thể mở đầu cụm chào làm quen lịch sự.
失礼ですが、お名前（　）。|は~を~に~も|0|Hỏi tên|お名前は là cách lược lịch sự của お名前は何ですか.
`),
  translations: translationRows(`
私は学生です。|わたしはがくせいです。|Tôi là sinh viên.|NはNです|は đánh dấu chủ đề 私; 学生です là vị ngữ.
私は医者じゃありません。|わたしはいしゃじゃありません。|Tôi không phải là bác sĩ.|Phủ định|Danh từ phủ định lịch sự dùng じゃありません.
ミラーさんは会社員ですか。|ミラーさんはかいしゃいんですか。|Anh Miller là nhân viên công ty phải không?|Câu hỏi|か biến câu danh từ thành câu hỏi.
はい、会社員です。|はい、かいしゃいんです。|Vâng, tôi là nhân viên công ty.|Trả lời|Có thể lược chủ đề đã rõ và trả lời bằng vị ngữ.
マリアさんも学生です。|マリアさんもがくせいです。|Maria cũng là sinh viên.|も|も diễn tả thông tin giống chủ đề trước.
私はIMCの社員です。|わたしはIMCのしゃいんです。|Tôi là nhân viên của IMC.|NのN|の nối tổ chức IMC với 社員.
あの方はどなたですか。|あのかたはどなたですか。|Vị kia là ai?|Hỏi người|あの方 và どなた đều là cách nói lịch sự.
妹は何歳ですか。|いもうとはなんさいですか。|Em gái bạn bao nhiêu tuổi?|Hỏi tuổi|何歳 đọc là なんさい.
失礼ですが、お名前は。|しつれいですが、おなまえは。|Xin lỗi, bạn tên là gì?|Hội thoại|失礼ですが làm mềm câu hỏi riêng tư.
初めまして。私はリンです。|はじめまして。わたしはリンです。|Rất vui được gặp bạn. Tôi là Linh.|Giới thiệu|初めまして dùng trong lần gặp đầu tiên.
ベトナムから来ました。|ベトナムからきました。|Tôi đến từ Việt Nam.|Xuất xứ|Nから来ました nói đến từ quốc gia hoặc địa điểm nào.
どうぞよろしくお願いします。|どうぞよろしくおねがいします。|Rất mong được bạn giúp đỡ.|Chào hỏi|Cụm cố định kết thúc phần tự giới thiệu.
`),
});
