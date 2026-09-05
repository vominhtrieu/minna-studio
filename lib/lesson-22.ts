import {
  choiceRows,
  defineLesson,
  grammarRows,
  translationRows,
} from './lesson-builder.ts';

export const lesson22 = defineLesson(22, {
  words: `
着ます|きます|mặc (áo, đồ phần trên)|Động từ · Nhóm II|これは母が着る着物です。|Đây là kimono mẹ tôi mặc.
はきます|はきます|mặc, đi (quần, giày)|Động từ · Nhóm I|黒い靴をはいている人は田中さんです。|Người đang đi giày đen là anh Tanaka.
かぶります|かぶります|đội (mũ)|Động từ · Nhóm I|帽子をかぶっている人を知っています。|Tôi biết người đang đội mũ.
かけます|かけます|đeo (kính)|Động từ · Nhóm II|眼鏡をかけている人は父です。|Người đang đeo kính là bố tôi.
生まれます|うまれます|được sinh ra|Động từ · Nhóm II|私が生まれた町は静かです。|Thành phố nơi tôi sinh ra rất yên tĩnh.
コート|コート|áo khoác dài|Danh từ|これは姉が買ったコートです。|Đây là chiếc áo khoác chị tôi đã mua.
スーツ|スーツ|bộ com-lê|Danh từ|父が会社へ着て行くスーツです。|Đây là bộ com-lê bố mặc đến công ty.
セーター|セーター|áo len|Danh từ|母にもらったセーターは暖かいです。|Áo len mẹ tặng rất ấm.
帽子|ぼうし|mũ|Danh từ|旅行で買った帽子をかぶります。|Tôi đội chiếc mũ đã mua trong chuyến đi.
眼鏡|めがね|kính mắt|Danh từ|眼鏡をかけている人は山田先生です。|Người đeo kính là thầy Yamada.
よく|よく|thường; kỹ|Phó từ|私がよく行く店は駅の近くです。|Cửa hàng tôi thường đến ở gần ga.
おめでとうございます|おめでとうございます|xin chúc mừng|Cụm hội thoại|ご結婚おめでとうございます。|Chúc mừng lễ cưới của bạn.
こちら|こちら|vị này; phía này|Từ chỉ định lịch sự|こちらは私が働いている会社の部長です。|Vị này là trưởng bộ phận công ty nơi tôi làm việc.
家賃|やちん|tiền thuê nhà|Danh từ|私が借りる部屋は家賃が安いです。|Căn phòng tôi sẽ thuê có tiền thuê rẻ.
うーん|うーん|ừm, để xem|Thán từ|うーん、もう少し広い部屋がいいです。|Ừm, tôi muốn phòng rộng hơn một chút.
ダイニングキッチン|ダイニングキッチン|bếp kiêm phòng ăn|Danh từ|ダイニングキッチンがある部屋を探しています。|Tôi đang tìm phòng có bếp kiêm phòng ăn.
和室|わしつ|phòng kiểu Nhật|Danh từ|和室がある家に住みたいです。|Tôi muốn sống trong nhà có phòng kiểu Nhật.
押し入れ|おしいれ|tủ âm tường kiểu Nhật|Danh từ|布団を入れる押し入れがあります。|Có tủ âm tường để cất chăn đệm.
布団|ふとん|chăn đệm kiểu Nhật|Danh từ|これは旅館で使う布団です。|Đây là chăn đệm dùng tại lữ quán.
アパート|アパート|căn hộ cho thuê|Danh từ|駅に近いアパートを探しています。|Tôi đang tìm căn hộ gần ga.
家|いえ|nhà|Danh từ|これは祖父が建てた家です。|Đây là ngôi nhà ông tôi đã xây.
部屋|へや|căn phòng|Danh từ|友達が住んでいる部屋は三階です。|Phòng bạn tôi đang ở nằm tại tầng ba.
約束|やくそく|cuộc hẹn, lời hứa|Danh từ|友達と会う約束があります。|Tôi có hẹn gặp bạn.
用事|ようじ|việc cần làm|Danh từ|銀行へ行く用事があります。|Tôi có việc phải đến ngân hàng.
万里の長城|ばんりのちょうじょう|Vạn Lý Trường Thành|Danh từ riêng|これは万里の長城で撮った写真です。|Đây là ảnh chụp tại Vạn Lý Trường Thành.
`,
  grammar: grammarRows(`
Bổ nghĩa danh từ bằng câu|Mệnh đề thể thông thường + N|Đặt mệnh đề mô tả ngay trước danh từ, không dùng từ tương đương với mà hoặc cái. Chủ ngữ trong mệnh đề thường đi với が.|これは母が作った料理です。|Đây là món ăn mẹ tôi đã nấu.|Không đặt の giữa mệnh đề động từ và danh từ.
Mệnh đề ở nhiều thời|Vる・Vない・Vた・Vなかった + N|Động từ trong mệnh đề bổ nghĩa dùng thể thông thường và chia theo thời, khẳng định hoặc phủ định cần diễn đạt.|あした読む本を買いました。|Tôi đã mua cuốn sách sẽ đọc ngày mai.|Thì của mệnh đề phụ độc lập với thì của động từ chính.
Chủ ngữ trong mệnh đề|N が + mệnh đề bổ nghĩa + N|が đánh dấu chủ thể thực hiện hành động bổ nghĩa; は thường không dùng bên trong mệnh đề này.|これは父が撮った写真です。|Đây là bức ảnh bố tôi đã chụp.|Chủ đề của toàn câu vẫn có thể dùng は ở bên ngoài.
Mệnh đề làm thành phần câu|Mệnh đề + N は / を / が ～|Cả cụm danh từ đã được bổ nghĩa có thể làm chủ đề, tân ngữ hoặc chủ ngữ của câu chính.|私がよく行く店は安いです。|Cửa hàng tôi thường đến thì rẻ.|Xác định ranh giới cụm: 私がよく行く bổ nghĩa cho 店.
Việc, hẹn hoặc thời gian để làm|V thể từ điển + 時間・約束・用事|Dùng động từ thể từ điển để nói thời gian dành cho, cuộc hẹn hoặc việc cần thực hiện.|銀行へ行く用事があります。|Tôi có việc phải đến ngân hàng.|Không thêm こと giữa động từ và các danh từ này.
`),
  choices: choiceRows(`
これは母が（　）料理です。|作ります~作った~作って~作り|1|Mệnh đề bổ nghĩa|Hành động đã hoàn thành dùng thể た 作った trước 料理.
私があした（　）本はこれです。|読みます~読む~読んで~読んだです|1|Hành động tương lai|Thể từ điển 読む có thể mô tả cuốn sách sẽ đọc.
これは父（　）撮った写真です。|は~を~が~に|2|Chủ ngữ mệnh đề|Chủ thể 父 trong mệnh đề bổ nghĩa đi với が.
眼鏡をかけている（　）は山田先生です。|人~人が~の人~人の|0|Bổ nghĩa danh từ|Mệnh đề đặt trực tiếp trước danh từ 人.
私がよく行く店（　）駅の近くです。|を~が~は~で|2|Cụm làm chủ đề|Toàn cụm 私がよく行く店 được đưa lên chủ đề bằng は.
きのう買った靴（　）はきます。|が~を~に~で|1|Cụm làm tân ngữ|Cả cụm きのう買った靴 là vật được mang nên dùng を.
私が生まれた町は静か（　）。|です~を~が~あります|0|Câu chính|Mệnh đề 私が生まれた bổ nghĩa 町; 静かです là vị ngữ chính.
友達と会う（　）があります。|時間を~約束~ことを~約束を|1|Vる約束|会う約束 là cuộc hẹn gặp; cả cụm đi với があります.
銀行へ行く（　）があります。|用事~用事を~ことが~の用事|0|Vる用事|行く用事 nghĩa là việc phải đi; không thêm こと.
これは日本で（　）カメラです。〔đã mua〕|買う~買った~買って~買います|1|Quá khứ trong mệnh đề|Chiếc máy ảnh đã mua dùng 買ったカメラ.
私が住んでいる部屋は家賃（　）安いです。|を~に~が~で|2|Đặc điểm|家賃 là thuộc tính được miêu tả nên dùng が.
黒い帽子を（　）人を知っています。|かぶるいる~かぶっている~かぶりいる~かぶったいる|1|Trạng thái đang mặc|かぶっています đổi sang thể thông thường かぶっている.
`),
  translations: translationRows(`
これは母が作った料理です。|これはははがつくったりょうりです。|Đây là món ăn mẹ tôi đã nấu.|Bổ nghĩa danh từ|母が作った đặt trực tiếp trước 料理.
これは父が撮った写真です。|これはちちがとったしゃしんです。|Đây là bức ảnh bố tôi đã chụp.|Chủ ngữ mệnh đề|父 là chủ thể trong mệnh đề nên đi với が.
私があした読む本はこれです。|わたしがあしたよむほんはこれです。|Cuốn sách ngày mai tôi sẽ đọc là cuốn này.|VるN|読む ở thể từ điển mô tả hành động sẽ làm.
眼鏡をかけている人は山田先生です。|めがねをかけているひとはやまだせんせいです。|Người đang đeo kính là thầy Yamada.|VているN|Cả cụm 眼鏡をかけている bổ nghĩa cho 人.
私がよく行く店は駅の近くです。|わたしがよくいくみせはえきのちかくです。|Cửa hàng tôi thường đến ở gần ga.|Cụm làm chủ đề|私がよく行く店 là chủ đề của câu chính.
きのう買った靴をはきます。|きのうかったくつをはきます。|Tôi đi đôi giày đã mua hôm qua.|Cụm làm tân ngữ|きのう買った bổ nghĩa 靴; cả cụm đi với を.
私が生まれた町は静かです。|わたしがうまれたまちはしずかです。|Thành phố nơi tôi sinh ra rất yên tĩnh.|VたN|生まれた町 nghĩa là thành phố nơi đã sinh ra.
これは姉が買ったコートです。|これはあねがかったコートです。|Đây là chiếc áo khoác chị tôi đã mua.|VたN|姉が買った là mệnh đề bổ nghĩa cho コート.
駅に近いアパートを探しています。|えきにちかいアパートをさがしています。|Tôi đang tìm căn hộ gần ga.|AいN|Tính từ 近い đặt trực tiếp trước アパート.
和室がある家に住みたいです。|わしつがあるいえにすみたいです。|Tôi muốn sống trong ngôi nhà có phòng kiểu Nhật.|VるN|和室がある bổ nghĩa cho 家.
友達と会う約束があります。|ともだちとあうやくそくがあります。|Tôi có hẹn gặp bạn.|Vる約束|会う đặt trực tiếp trước 約束.
銀行へ行く用事があります。|ぎんこうへいくようじがあります。|Tôi có việc phải đến ngân hàng.|Vる用事|行く用事 là việc cần đi ngân hàng.
`),
});
