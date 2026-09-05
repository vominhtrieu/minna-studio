import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson16 = defineLesson(16, {
  words: `
乗ります|のります|lên, đi bằng (tàu, xe)|Động từ · Nhóm I|大阪駅で電車に乗ります。|Tôi lên tàu ở ga Osaka.
降ります|おります|xuống (tàu, xe)|Động từ · Nhóm II|京都駅で電車を降ります。|Tôi xuống tàu ở ga Kyoto.
乗り換えます|のりかえます|chuyển, đổi tàu xe|Động từ · Nhóm II|梅田で地下鉄に乗り換えます。|Tôi đổi sang tàu điện ngầm ở Umeda.
浴びます|あびます|tắm, dội (vòi sen)|Động từ · Nhóm II|ジョギングをしてから、シャワーを浴びます。|Sau khi chạy bộ, tôi tắm vòi sen.
入れます|いれます|cho vào, bỏ vào|Động từ · Nhóm II|ここにカードを入れてください。|Hãy cho thẻ vào đây.
出します|だします|lấy ra; rút tiền|Động từ · Nhóm I|銀行でお金を出します。|Tôi rút tiền ở ngân hàng.
入ります|はいります|vào; nhập học|Động từ · Nhóm I|来年、大学に入ります。|Năm sau tôi vào đại học.
出ます|でます|ra; tốt nghiệp|Động từ · Nhóm II|大学を出てから、会社で働きます。|Sau khi tốt nghiệp đại học, tôi làm ở công ty.
やめます|やめます|nghỉ, bỏ, thôi|Động từ · Nhóm II|来月、会社をやめます。|Tháng sau tôi nghỉ công ty.
押します|おします|ấn, bấm|Động từ · Nhóm I|このボタンを押してください。|Hãy bấm nút này.
若い|わかい|trẻ|Tính từ い|田中さんは若くて、元気です。|Anh Tanaka trẻ và khỏe.
長い|ながい|dài|Tính từ い|マリアさんは髪が長いです。|Chị Maria có tóc dài.
短い|みじかい|ngắn|Tính từ い|この鉛筆は短くて、使いにくいです。|Cây bút chì này ngắn và khó dùng.
明るい|あかるい|sáng|Tính từ い|この部屋は明るくて、広いです。|Căn phòng này sáng và rộng.
暗い|くらい|tối|Tính từ い|廊下は暗いです。|Hành lang tối.
背が高い|せがたかい|cao (vóc dáng)|Cụm tính từ|兄は背が高いです。|Anh trai tôi cao.
頭がいい|あたまがいい|thông minh|Cụm tính từ|山田さんは頭がよくて、親切です。|Anh Yamada thông minh và tốt bụng.
体|からだ|cơ thể|Danh từ|運動は体にいいです。|Vận động tốt cho cơ thể.
頭|あたま|đầu|Danh từ|頭が痛いです。|Tôi đau đầu.
髪|かみ|tóc|Danh từ|あの人は髪が短いです。|Người kia tóc ngắn.
顔|かお|khuôn mặt|Danh từ|妹は顔が丸いです。|Em gái tôi có khuôn mặt tròn.
目|め|mắt|Danh từ|あの猫は目が大きいです。|Con mèo kia có mắt to.
耳|みみ|tai|Danh từ|うさぎは耳が長いです。|Thỏ có tai dài.
歯|は|răng|Danh từ|毎朝、歯を磨きます。|Mỗi sáng tôi đánh răng.
足|あし|chân|Danh từ|象は足が太いです。|Voi có chân to.
サービス|サービス|dịch vụ|Danh từ|このホテルはサービスがいいです。|Khách sạn này có dịch vụ tốt.
ジョギング|ジョギング|chạy bộ|Danh từ hoạt động|毎朝ジョギングをします。|Mỗi sáng tôi chạy bộ.
シャワー|シャワー|vòi sen; tắm vòi sen|Danh từ|寝る前にシャワーを浴びます。|Trước khi ngủ tôi tắm vòi sen.
緑|みどり|màu xanh lá; cây xanh|Danh từ|この町は緑が多いです。|Thành phố này có nhiều cây xanh.
寺|てら|chùa Phật giáo|Danh từ|京都で古い寺を見学しました。|Tôi đã tham quan ngôi chùa cổ ở Kyoto.
神社|じんじゃ|đền Thần đạo|Danh từ|駅の近くに神社があります。|Gần ga có một ngôi đền Thần đạo.
キャッシュカード|キャッシュカード|thẻ ngân hàng, thẻ ATM|Danh từ|キャッシュカードを機械に入れます。|Tôi cho thẻ ngân hàng vào máy.
暗証番号|あんしょうばんごう|mã PIN|Danh từ|暗証番号を押してください。|Hãy nhập mã PIN.
次に|つぎに|tiếp theo|Phó từ|次に、このボタンを押します。|Tiếp theo, bấm nút này.
どうやって|どうやって|bằng cách nào|Từ để hỏi|駅までどうやって行きますか。|Bạn đi đến ga bằng cách nào?
どの|どの|cái nào, người nào (đứng trước danh từ)|Từ chỉ định|どの人が田中さんですか。|Người nào là anh Tanaka?
`,
  grammar: grammarRows(`
Nối các hành động|V1て、V2て、V3|Nối nhiều hành động của cùng một chủ thể theo thứ tự xảy ra. Chỉ động từ cuối chia thời.|朝起きて、顔を洗って、朝ごはんを食べます。|Buổi sáng tôi thức dậy, rửa mặt rồi ăn sáng.|Nếu chủ thể thay đổi, nên tách câu hoặc nêu lại chủ thể.
Sau khi làm xong|V1てから、V2|Nhấn mạnh V2 chỉ diễn ra sau khi V1 đã hoàn tất. Mỗi câu thường chỉ dùng một lần てから.|お金を出してから、買い物に行きます。|Sau khi rút tiền, tôi đi mua sắm.|Đừng nhầm với から chỉ nguyên nhân; ở đây てから chỉ trình tự.
Nối tính từ い|Aい bỏ い + くて、～|Dùng くて để nối những đặc điểm cùng hướng của một người hoặc vật. いい đổi thành よくて.|この部屋は明るくて、広いです。|Căn phòng này sáng và rộng.|Khi hai ý tương phản rõ, dùng が thay vì くて.
Nối danh từ và tính từ な|N / Aな bỏ な + で、～|Danh từ và tính từ な nối bằng で. Phần sau tiếp tục miêu tả cùng chủ thể.|田中さんは親切で、元気です。|Anh Tanaka tốt bụng và khỏe.|Không dùng だで hoặc なで.
Nêu đặc điểm một bộ phận|N1 は N2 が Aです|N1 là chủ đề; N2 là bộ phận hoặc thuộc tính được miêu tả bằng tính từ.|マリアさんは髪が長いです。|Chị Maria có mái tóc dài.|Không đổi が thành の trong câu này.
Hỏi cách và chọn trong nhóm|どうやって / どの + N|どうやって hỏi phương pháp hoặc lộ trình. どの luôn đứng trước danh từ để chọn một đối tượng trong từ ba trở lên.|駅までどうやって行きますか。|Bạn đi đến ga bằng cách nào?|どれ đứng một mình; どの phải đi kèm danh từ.
`),
  choices: choiceRows(`
朝起きて、顔を（　）、朝ごはんを食べます。|洗います~洗って~洗う~洗った|1|Nối hành động|Trước dấu phẩy dùng thể て: 洗います → 洗って.
シャワーを浴びて（　）、寝ます。|まで~から~より~でも|1|Trình tự|Vてから nhấn mạnh hành động sau xảy ra khi hành động trước đã xong.
この部屋は明る（　）、広いです。|いで~くて~いて~なで|1|Nối tính từ い|明るい bỏ い rồi thêm くて.
田中さんは親切（　）、元気です。|くて~なで~で~に|2|Nối tính từ な|親切 là tính từ な nên nối bằng で.
兄は背（　）高いです。|を~に~で~が|3|Đặc điểm|Bộ phận hoặc thuộc tính đi với が: 背が高い.
大阪まで（　）行きますか。|どの~どれ~どうやって~どんな|2|Hỏi cách|どうやって hỏi cách hoặc lộ trình đi đến Osaka.
（　）人が山田さんですか。|どれ~どの~どこ~どう|1|Chọn người|どの phải đứng trước danh từ 人.
京都駅で電車（　）降ります。|に~を~が~へ|1|Xuống tàu|乗ります dùng に, nhưng 降ります dùng を cho phương tiện rời khỏi.
梅田で地下鉄（　）乗り換えます。|を~が~へ~に|3|Đổi tàu|Phương tiện đổi sang đi với に: 地下鉄に乗り換えます.
大学を出てから、会社（　）働きます。|で~に~を~が|0|Nơi làm việc|Hoạt động làm việc diễn ra ở công ty nên dùng で.
山田さんは頭が（　）、親切です。|いくて~よくて~いいで~よいで|1|Ngoại lệ いい|いい nối thành よくて.
ここにカードを（　）ください。|入れて~入って~入れって~入れます|0|Thể て|入れます thuộc nhóm II, đổi thành 入れて.
`),
  translations: translationRows(`
朝起きて、顔を洗って、朝ごはんを食べます。|あさおきて、かおをあらって、あさごはんをたべます。|Buổi sáng tôi thức dậy, rửa mặt rồi ăn sáng.|Nối hành động|Ba hành động cùng chủ thể được nối bằng thể て; động từ cuối chia lịch sự.
銀行でお金を出してから、買い物に行きます。|ぎんこうでおかねをだしてから、かいものにいきます。|Sau khi rút tiền ở ngân hàng, tôi đi mua sắm.|Vてから|出してから cho biết đi mua sắm sau khi rút tiền xong.
大阪駅で電車に乗ります。|おおさかえきででんしゃにのります。|Tôi lên tàu ở ga Osaka.|Lên tàu|で chỉ nơi lên; phương tiện đi với に trong 乗ります.
京都駅で電車を降ります。|きょうとえきででんしゃをおります。|Tôi xuống tàu ở ga Kyoto.|Xuống tàu|Phương tiện rời khỏi đi với を trong 降ります.
梅田で地下鉄に乗り換えます。|うめだでちかてつにのりかえます。|Tôi đổi sang tàu điện ngầm ở Umeda.|Đổi tàu|で chỉ nơi đổi; に chỉ phương tiện đổi sang.
この部屋は明るくて、広いです。|このへやはあかるくて、ひろいです。|Căn phòng này sáng và rộng.|Nối tính từ い|明るい đổi thành 明るくて để nối với 広いです.
田中さんは親切で、元気です。|たなかさんはしんせつで、げんきです。|Anh Tanaka tốt bụng và khỏe.|Nối tính từ な|親切 là tính từ な nên nối bằng で.
マリアさんは髪が長いです。|マリアさんはかみがながいです。|Chị Maria có mái tóc dài.|Đặc điểm|髪 là bộ phận được miêu tả, nên dùng が.
あの人は目が大きいです。|あのひとはめがおおきいです。|Người kia có đôi mắt to.|Đặc điểm|N1 は N2 が Aです dùng để nêu đặc điểm một bộ phận.
駅までどうやって行きますか。|えきまでどうやっていきますか。|Bạn đi đến ga bằng cách nào?|Hỏi cách|どうやって hỏi phương pháp hoặc lộ trình.
どの人が田中さんですか。|どのひとがたなかさんですか。|Người nào là anh Tanaka?|Chọn đối tượng|どの đứng trước 人 để chọn trong một nhóm người.
ここにカードを入れて、暗証番号を押してください。|ここにカードをいれて、あんしょうばんごうをおしてください。|Hãy cho thẻ vào đây rồi nhập mã PIN.|Hướng dẫn thao tác|Hai thao tác theo thứ tự; thao tác đầu dùng thể て.
`),
});
