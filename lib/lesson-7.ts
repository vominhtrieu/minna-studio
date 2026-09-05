import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson7 = defineLesson(7, {
  words: `
切ります|きります|cắt|Động từ · Nhóm I|はさみで紙を切ります。|Tôi cắt giấy bằng kéo.
送ります|おくります|gửi|Động từ · Nhóm I|家族に荷物を送ります。|Tôi gửi hành lý cho gia đình.
あげます|あげます|cho, tặng|Động từ · Nhóm II|妹に花をあげました。|Tôi đã tặng hoa cho em gái.
もらいます|もらいます|nhận|Động từ · Nhóm I|先生に辞書をもらいました。|Tôi đã nhận từ điển từ giáo viên.
貸します|かします|cho mượn|Động từ · Nhóm I|友達に本を貸します。|Tôi cho bạn mượn sách.
借ります|かります|mượn|Động từ · Nhóm II|図書館で本を借りました。|Tôi đã mượn sách ở thư viện.
教えます|おしえます|dạy, chỉ|Động từ · Nhóm II|先生は私たちに日本語を教えます。|Giáo viên dạy chúng tôi tiếng Nhật.
習います|ならいます|học từ ai|Động từ · Nhóm I|先生に日本語を習います。|Tôi học tiếng Nhật từ giáo viên.
電話をかけます|でんわをかけます|gọi điện thoại|Cụm động từ|母に電話をかけます。|Tôi gọi điện cho mẹ.
手|て|tay|Danh từ|手でごはんを食べます。|Tôi ăn cơm bằng tay.
箸|はし|đũa|Danh từ|箸でごはんを食べます。|Tôi ăn cơm bằng đũa.
スプーン|スプーン|thìa|Danh từ|スプーンでスープを飲みます。|Tôi uống súp bằng thìa.
ナイフ|ナイフ|dao|Danh từ|ナイフで肉を切ります。|Tôi cắt thịt bằng dao.
フォーク|フォーク|nĩa|Danh từ|フォークでパスタを食べます。|Tôi ăn mì Ý bằng nĩa.
はさみ|はさみ|kéo|Danh từ|はさみで紙を切ってください。|Hãy cắt giấy bằng kéo.
パソコン|パソコン|máy tính cá nhân|Danh từ|パソコンでレポートを書きます。|Tôi viết báo cáo bằng máy tính.
紙|かみ|giấy|Danh từ|この紙に名前を書きます。|Tôi viết tên lên tờ giấy này.
花|はな|hoa|Danh từ|母に花をあげます。|Tôi tặng hoa cho mẹ.
シャツ|シャツ|áo sơ mi|Danh từ|父にシャツをあげました。|Tôi đã tặng bố áo sơ mi.
プレゼント|プレゼント|quà tặng|Danh từ|誕生日にプレゼントをもらいました。|Tôi đã nhận quà vào sinh nhật.
荷物|にもつ|hành lý, bưu kiện|Danh từ|航空便で荷物を送ります。|Tôi gửi bưu kiện bằng đường hàng không.
お金|おかね|tiền|Danh từ|父にお金を借りました。|Tôi đã mượn tiền từ bố.
切符|きっぷ|vé|Danh từ|駅で切符を買います。|Tôi mua vé ở ga.
もう|もう|đã, rồi|Phó từ|もう昼ごはんを食べました。|Tôi đã ăn trưa rồi.
まだ|まだ|vẫn, chưa|Phó từ|いいえ、まだです。|Không, vẫn chưa.
`,
  grammar: grammarRows(`
Dùng công cụ hoặc ngôn ngữ|Công cụ・Ngôn ngữ で V|で đánh dấu phương tiện, công cụ hoặc ngôn ngữ dùng để thực hiện hành động.|箸でごはんを食べます。|Tôi ăn cơm bằng đũa.|Cùng là で nhưng cần phân biệt công cụ với địa điểm qua nghĩa câu.
Hỏi cách nói bằng ngôn ngữ khác|Từ は Ngôn ngữで何ですか|Dùng để hỏi một từ hoặc câu được nói thế nào trong ngôn ngữ khác.|ありがとうはベトナム語で何ですか。|ありがとう trong tiếng Việt là gì?|何 đọc なん trước です.
Cho hoặc làm hướng tới ai|Người に Nを あげます・貸します・教えます|に đánh dấu người nhận vật, người được cho mượn hoặc được dạy.|妹に花をあげます。|Tôi tặng hoa cho em gái.|Không dùng あげます khi người nhận là chính người nói.
Nhận hoặc học từ ai|Người に・から Nを もらいます・借ります・習います|に hoặc から đánh dấu nguồn cho cá nhân; tổ chức thường dùng から.|先生に辞書をもらいました。|Tôi nhận từ điển từ giáo viên.|Tránh dùng に với tổ chức khi muốn nhấn mạnh nguồn; dùng から rõ hơn.
Đã làm rồi|もう Vました|もう đi với quá khứ khẳng định để nói hành động đã hoàn tất.|もう昼ごはんを食べました。|Tôi đã ăn trưa rồi.|Không dùng もう với Vませんでした cho nghĩa chưa.
Vẫn chưa|まだです / まだ Vていません|Ở giai đoạn bài 7, まだです trả lời ngắn rằng việc chưa xong.|いいえ、まだです。|Không, vẫn chưa.|Mẫu đầy đủ まだVていません được học sau khi biết thể て.
`),
  choices: choiceRows(`
箸（　）ごはんを食べます。|に~を~で~へ|2|Công cụ|Đũa là công cụ nên dùng で.
日本語（　）手紙を書きます。|を~で~に~が|1|Ngôn ngữ|Ngôn ngữ dùng để viết đi với で.
妹（　）花をあげます。|を~で~に~から|2|Người nhận|Người nhận trong あげます đi với に.
先生（　）辞書をもらいました。|へ~に~を~が|1|Nguồn nhận|Người cho trong もらいます có thể đi với に.
銀行（　）お金を借りました。|に~から~を~へ|1|Nguồn tổ chức|Với tổ chức, から là cách rõ ràng để chỉ nguồn.
友達に本を（　）。〔cho mượn〕|借ります~貸します~もらいます~習います|1|Cho mượn|貸します là cho người khác mượn.
図書館で本を（　）。〔mượn〕|貸しました~借りました~あげました~教えました|1|Mượn|借ります là nhận vật để dùng tạm.
先生に日本語を（　）。|貸します~習います~送ります~切ります|1|Học từ ai|習います diễn tả học kỹ năng từ giáo viên.
もう昼ごはんを（　）。|食べます~食べました~食べません~食べましょう|1|もう|もう đi với quá khứ để nói đã hoàn tất.
もう宿題をしましたか。— いいえ、（　）。|もうです~まだです~しました~しませんでした|1|Chưa|まだです là câu trả lời ngắn vẫn chưa.
はさみで紙を（　）。|切ります~送ります~借ります~教えます|0|Cắt|Công cụ はさみ dùng với hành động 切ります.
母（　）電話をかけます。|を~で~に~から|2|Gọi cho ai|Người nhận cuộc gọi đi với に.
`),
  translations: translationRows(`
箸でごはんを食べます。|はしでごはんをたべます。|Tôi ăn cơm bằng đũa.|Công cụ|箸 là công cụ nên dùng で.
はさみで紙を切ります。|はさみでかみをきります。|Tôi cắt giấy bằng kéo.|Công cụ|はさみで chỉ công cụ; 紙を là tân ngữ.
日本語で手紙を書きます。|にほんごでてがみをかきます。|Tôi viết thư bằng tiếng Nhật.|Ngôn ngữ|Ngôn ngữ sử dụng đi với で.
妹に花をあげます。|いもうとにはなをあげます。|Tôi tặng hoa cho em gái.|あげます|Người nhận đi với に.
先生に辞書をもらいました。|せんせいにじしょをもらいました。|Tôi đã nhận từ điển từ giáo viên.|もらいます|Nguồn là người có thể đi với に.
銀行からお金を借りました。|ぎんこうからおかねをかりました。|Tôi đã vay tiền từ ngân hàng.|Nguồn tổ chức|から đánh dấu ngân hàng là nguồn.
友達に本を貸します。|ともだちにほんをかします。|Tôi cho bạn mượn sách.|貸します|Người mượn đi với に; vật đi với を.
先生に日本語を習います。|せんせいににほんごをならいます。|Tôi học tiếng Nhật từ giáo viên.|習います|先生 là người truyền dạy nên đi với に.
母に電話をかけます。|ははにでんわをかけます。|Tôi gọi điện cho mẹ.|Gọi điện|Người nhận cuộc gọi đi với に.
もう昼ごはんを食べました。|もうひるごはんをたべました。|Tôi đã ăn trưa rồi.|もう|もう kết hợp với Vました.
もう宿題をしましたか。|もうしゅくだいをしましたか。|Bạn đã làm bài tập về nhà chưa?|Hỏi hoàn tất|もう hỏi hành động đã hoàn tất hay chưa.
いいえ、まだです。|いいえ、まだです。|Không, vẫn chưa.|まだ|まだです trả lời ngắn rằng việc chưa hoàn tất.
`),
});
