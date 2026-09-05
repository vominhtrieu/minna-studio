import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson25 = defineLesson(25, {
  words: `
考えます|かんがえます|suy nghĩ, cân nhắc|Động từ · Nhóm II|時間があったら、もう一度考えます。|Nếu có thời gian, tôi sẽ suy nghĩ lại.
着きます|つきます|đến nơi|Động từ · Nhóm I|駅に着いたら、電話してください。|Khi đến ga, hãy gọi điện.
留学します|りゅうがくします|du học|Động từ · Nhóm III|お金があったら、留学したいです。|Nếu có tiền, tôi muốn đi du học.
取ります|とります|lấy; thêm (tuổi)|Động từ · Nhóm I|年を取っても、働きたいです。|Dù có tuổi tôi vẫn muốn làm việc.
田舎|いなか|nông thôn, quê|Danh từ|田舎へ帰ったら、家族と暮らします。|Nếu về quê, tôi sẽ sống cùng gia đình.
大使館|たいしかん|đại sứ quán|Danh từ|道がわからなかったら、大使館に電話します。|Nếu không biết đường, tôi sẽ gọi đại sứ quán.
グループ|グループ|nhóm|Danh từ|人数が多かったら、二つのグループに分けます。|Nếu đông người, sẽ chia thành hai nhóm.
チャンス|チャンス|cơ hội|Danh từ|チャンスがあったら、ぜひ参加してください。|Nếu có cơ hội, nhất định hãy tham gia.
億|おく|một trăm triệu|Đơn vị số|一億円あったら、何をしたいですか。|Nếu có một trăm triệu yên, bạn muốn làm gì?
もし|もし|nếu như|Phó từ|もし雨が降ったら、出かけません。|Nếu trời mưa, tôi sẽ không ra ngoài.
いくら|いくら|dù bao nhiêu, dù thế nào|Phó từ|いくら高くても、必要なら買います。|Dù đắt đến đâu, nếu cần tôi vẫn mua.
転勤|てんきん|chuyển công tác|Danh từ|大阪へ転勤しても、日本語を勉強します。|Dù chuyển công tác đến Osaka, tôi vẫn học tiếng Nhật.
こと|こと|việc; chuyện|Danh từ|困ったことがあったら、相談してください。|Nếu có chuyện khó khăn, hãy trao đổi với tôi.
頑張ります|がんばります|cố gắng|Động từ · Nhóm I|難しくても、頑張ります。|Dù khó tôi vẫn cố gắng.
一杯飲みましょう|いっぱいのみましょう|cùng uống một ly nhé|Cụm hội thoại|仕事が終わったら、一杯飲みましょう。|Xong việc thì cùng uống một ly nhé.
どうぞお元気で|どうぞおげんきで|chúc bạn mạnh khỏe|Cụm tạm biệt|遠くへ行っても、どうぞお元気で。|Dù đi xa, chúc bạn mạnh khỏe.
お世話になりました|おせわになりました|cảm ơn đã giúp đỡ thời gian qua|Cụm cảm ơn|先生、お世話になりました。|Thưa thầy cô, cảm ơn vì đã giúp đỡ em thời gian qua.
相談します|そうだんします|trao đổi, xin tư vấn|Động từ · Nhóm III|問題があったら、先生に相談します。|Nếu có vấn đề, tôi sẽ trao đổi với giáo viên.
分けます|わけます|chia ra|Động từ · Nhóm II|人が多かったら、グループを分けます。|Nếu đông người, tôi sẽ chia nhóm.
暮らします|くらします|sinh sống|Động từ · Nhóm I|田舎へ帰っても、一人で暮らします。|Dù về quê, tôi vẫn sống một mình.
必要な|ひつような|cần thiết|Tính từ な|必要だったら、コピーしてください。|Nếu cần thì hãy sao chép.
遠く|とおく|nơi xa; xa|Danh từ / Phó từ|遠くへ行っても、連絡してください。|Dù đi xa, hãy liên lạc.
`,
  grammar: grammarRows(`
Điều kiện nếu, khi|Vた + ら、～|Thêm ら vào thể た để tạo điều kiện. Mẫu dùng cho giả định và cũng dùng khi hành động đầu hoàn tất rồi hành động sau mới xảy ra.|駅に着いたら、電話してください。|Khi đến ga, hãy gọi điện.|Khác と, vế sau của たら có thể là ý chí, lời mời hoặc yêu cầu.
Điều kiện với tính từ い|Aかったら、～|Đổi tính từ い sang quá khứ ngắn rồi thêm ら. Phủ định dùng Aくなかったら.|安かったら、買います。|Nếu rẻ tôi sẽ mua.|いい dùng よかったら; phủ định là よくなかったら.
Điều kiện với danh từ và tính từ な|N・Aな + だったら、～|Dùng dạng quá khứ thông thường だった rồi thêm ら. Phủ định dùng じゃなかったら.|暇だったら、手伝ってください。|Nếu rảnh, hãy giúp tôi.|Trong hội thoại đôi khi だった được rút thành なら, nhưng bài này luyện たら.
Nhượng bộ dù|Vても / Aくても / N・Aなでも、～|Nêu một điều kiện trái với kết quả ở vế sau: dù điều đó đúng, kết quả vẫn không đổi.|雨が降っても、出かけます。|Dù trời mưa tôi vẫn ra ngoài.|Danh từ và tính từ な dùng でも, không dùng くても.
Nhấn mạnh giả định và mức độ|もし～たら / いくら～ても|もし thường đi với たら để nhấn mạnh nếu như. いくら đi với ても để nói dù mức độ cao đến đâu.|もし一億円あったら、旅行したいです。|Nếu có một trăm triệu yên, tôi muốn đi du lịch.|Không ghép もし trực tiếp với ても trong cách dùng cơ bản này.
`),
  choices: choiceRows(`
駅に（　）、電話してください。|着くと~着いたら~着いても~着くならばです|1|Vたら|着きます có thể た là 着いた; thêm ら thành 着いたら.
時間が（　）、もう一度考えます。|あると~あったら~あっても~ありたら|1|Điều kiện|ある có thể た là あった, nên dùng あったら.
安（　）、買います。|いだったら~かったら~くても~いなら|1|Aかったら|安い đổi sang quá khứ 安かった rồi thêm ら.
天気が（　）、出かけません。〔nếu không tốt〕|よくなかったら~いいかったら~よくなくても~いいじゃなかったら|0|Phủ định Aい|いい phủ định quá khứ là よくなかった; thêm ら.
暇（　）、手伝ってください。|ならったら~だったら~くたら~でたら|1|Aなだったら|暇 là tính từ な nên dùng 暇だったら.
雨が降っ（　）、出かけます。|たら~ても~てから~たり|1|Vても|Dù mưa vẫn ra ngoài là quan hệ nhượng bộ Vても.
難しく（　）、頑張ります。|たら~ても~でも~だったら|1|Aくても|Tính từ い dùng Aくても: 難しくても.
日曜日（　）、働きます。〔dù là chủ nhật〕|くても~ても~でも~だったら|2|Nでも|Danh từ 日曜日 dùng でも cho nghĩa dù là.
元気（　）、無理をしないでください。〔dù khỏe〕|くても~でも~ても~だったら|1|Aなでも|Tính từ な 元気 dùng でも.
（　）一億円あったら、何をしたいですか。|いくら~もし~まだ~きっと|1|もし～たら|もし nhấn mạnh điều kiện giả định đi với たら.
（　）高くても、必要なら買います。|もし~たぶん~いくら~ぜひ|2|いくら～ても|いくら nhấn mạnh dù đắt đến mức nào.
仕事が終わっ（　）、一杯飲みましょう。|ても~たり~たら~ては|2|Trình tự たら|Lời mời có thể đứng sau たら: xong việc thì cùng uống.
`),
  translations: translationRows(`
駅に着いたら、電話してください。|えきについたら、でんわしてください。|Khi đến ga, hãy gọi điện.|Vたら|着きます có thể た là 着いた; thêm ら tạo điều kiện.
時間があったら、もう一度考えます。|じかんがあったら、もういちどかんがえます。|Nếu có thời gian, tôi sẽ suy nghĩ lại.|Vたら|あります đổi thành あったら.
安かったら、買います。|やすかったら、かいます。|Nếu rẻ tôi sẽ mua.|Aかったら|安い đổi sang 安かったら.
暇だったら、手伝ってください。|ひまだったら、てつだってください。|Nếu rảnh, hãy giúp tôi.|Aなだったら|暇 là tính từ な nên dùng 暇だったら.
もし雨が降ったら、出かけません。|もしあめがふったら、でかけません。|Nếu trời mưa, tôi sẽ không ra ngoài.|もし～たら|もし nhấn mạnh giả định; 降ったら tạo điều kiện.
雨が降っても、出かけます。|あめがふっても、でかけます。|Dù trời mưa tôi vẫn ra ngoài.|Vても|降っても nêu điều kiện trái với kết quả vẫn đi ra.
難しくても、頑張ります。|むずかしくても、がんばります。|Dù khó tôi vẫn cố gắng.|Aくても|難しい đổi thành 難しくても.
日曜日でも、働きます。|にちようびでも、はたらきます。|Dù là chủ nhật tôi vẫn làm việc.|Nでも|Danh từ dùng でも để diễn tả nhượng bộ.
いくら高くても、必要なら買います。|いくらたかくても、ひつようならかいます。|Dù đắt đến đâu, nếu cần tôi vẫn mua.|いくら～ても|いくら đi với 高くても để nhấn mạnh mức độ.
仕事が終わったら、一杯飲みましょう。|しごとがおわったら、いっぱいのみましょう。|Xong việc thì cùng uống một ly nhé.|Vたら|たら cho phép lời mời 飲みましょう ở vế sau.
お金があったら、留学したいです。|おかねがあったら、りゅうがくしたいです。|Nếu có tiền, tôi muốn đi du học.|Mong muốn|たら cho phép ý chí hoặc mong muốn ở vế sau.
年を取っても、働きたいです。|としをとっても、はたらきたいです。|Dù có tuổi tôi vẫn muốn làm việc.|Vても|取っても nêu hoàn cảnh không làm thay đổi mong muốn.
`),
});
