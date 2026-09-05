import { defineLesson } from './lesson-builder.ts';

export const lesson15 = defineLesson(15, {
  words: `
立ちます|たちます|đứng|Động từ · Nhóm I|ここに立ってください。|Hãy đứng ở đây.
座ります|すわります|ngồi|Động từ · Nhóm I|このいすに座ってもいいですか。|Tôi ngồi ghế này có được không?
使います|つかいます|sử dụng|Động từ · Nhóm I|このパソコンを使ってもいいですか。|Tôi dùng máy tính này có được không?
置きます|おきます|đặt, để|Động từ · Nhóm I|ここに荷物を置いてはいけません。|Không được để hành lý ở đây.
作ります|つくります|làm, tạo ra (món ăn, sản phẩm)|Động từ · Nhóm I|姉はケーキを作っています。|Chị tôi đang làm bánh.
造ります|つくります|chế tạo, xây (quy mô lớn)|Động từ · Nhóm I|この会社は船を造っています。|Công ty này đóng tàu.
売ります|うります|bán|Động từ · Nhóm I|あの店でカメラを売っています。|Cửa hàng kia có bán máy ảnh.
知ります|しります|biết được (trạng thái biết: 知っています)|Động từ · Nhóm I|この歌を知っていますか。|Bạn có biết bài hát này không?
住みます|すみます|sống, cư trú|Động từ · Nhóm I|姉は京都に住んでいます。|Chị tôi sống ở Kyoto.
研究します|けんきゅうします|nghiên cứu|Động từ · Nhóm III|大学で日本の経済を研究しています。|Tôi nghiên cứu kinh tế Nhật ở đại học.
知っています|しっています|biết (trạng thái hiện tại)|Cụm động từ|あの先生の名前を知っています。|Tôi biết tên thầy giáo kia.
住んでいます|すんでいます|đang sống, cư trú|Cụm động từ|駅の近くに住んでいます。|Tôi sống gần ga.
資料|しりょう|tài liệu, tư liệu|Danh từ|この資料をコピーしてもいいですか。|Tôi sao chụp tài liệu này có được không?
カタログ|カタログ|danh mục giới thiệu sản phẩm|Danh từ|このカタログをもらってもいいですか。|Tôi lấy cuốn danh mục này có được không?
時刻表|じこくひょう|bảng giờ tàu, xe|Danh từ|新しい時刻表を持っています。|Tôi có bảng giờ tàu mới.
服|ふく|quần áo|Danh từ|この店は子どもの服を売っています。|Cửa hàng này bán quần áo trẻ em.
製品|せいひん|sản phẩm|Danh từ|この会社の製品を使っています。|Tôi sử dụng sản phẩm của công ty này.
ソフト|ソフト|phần mềm|Danh từ|兄はソフトを作っています。|Anh tôi làm phần mềm.
専門|せんもん|chuyên ngành, chuyên môn|Danh từ|私の専門は美術です。|Chuyên ngành của tôi là mỹ thuật.
歯医者|はいしゃ|nha sĩ; phòng nha (tùy ngữ cảnh)|Danh từ|兄は歯医者です。|Anh trai tôi là nha sĩ.
床屋|とこや|tiệm cắt tóc nam|Danh từ|父は床屋で働いています。|Bố tôi làm việc ở tiệm cắt tóc.
プレイガイド|プレイガイド|quầy bán vé sự kiện|Danh từ|プレイガイドでチケットを売っています。|Quầy vé có bán vé sự kiện.
独身|どくしん|độc thân|Danh từ|私は独身です。|Tôi độc thân.
特に|とくに|đặc biệt là|Phó từ|日本の料理が好きです。特にすしが好きです。|Tôi thích món Nhật. Đặc biệt thích sushi.
思い出します|おもいだします|nhớ lại|Động từ · Nhóm I|この写真で旅行を思い出します。|Bức ảnh này khiến tôi nhớ lại chuyến du lịch.
ご家族|ごかぞく|gia đình của người khác (lịch sự)|Danh từ|ご家族はどちらにいらっしゃいますか。|Gia đình anh/chị đang ở đâu ạ?
いらっしゃいます|いらっしゃいます|ở, có mặt (kính ngữ của います trong bài này)|Động từ · Nhóm I|先生は教室にいらっしゃいます。|Thầy/cô đang ở trong lớp.
高校|こうこう|trường trung học phổ thông|Danh từ|妹は高校で勉強しています。|Em gái tôi đang học ở trường THPT.
日本橋|にっぽんばし|Nipponbashi (địa danh ở Osaka)|Tên riêng|日本橋で電気製品を売っています。|Ở Nipponbashi có bán đồ điện.
`,
  grammar: [
    {
      title: 'Được phép làm một việc',
      formula: 'Vて + もいいです',
      explanation:
        'Thêm もいいです sau thể て để nói việc nào đó được phép. Đây là sự cho phép, không phải khả năng làm được.',
      example: 'この部屋で食事してもいいです。',
      translation: 'Được phép dùng bữa trong phòng này.',
      caution:
        'Giữ nguyên で nếu thể て của động từ kết thúc bằng で: よんでもいいです.',
    },
    {
      title: 'Hỏi xin phép',
      formula: 'Vて + もいいですか',
      explanation:
        'Thêm か để hỏi mình có được phép làm không. Đồng ý có thể đáp はい、どうぞ. Từ chối nhẹ nhàng: すみません、ちょっと.',
      example: 'このいすに座ってもいいですか。',
      translation: 'Tôi ngồi ghế này có được không?',
      caution:
        'Xin phép khác với nhờ người khác làm: すわってもいいですか hỏi mình ngồi được không, すわってください mời người kia ngồi.',
    },
    {
      title: 'Không được phép',
      formula: 'Vて + はいけません',
      explanation:
        'Nêu quy định cấm một hành động. Mức độ khá mạnh; khi từ chối một lời xin phép cá nhân, có thể cần cách nói mềm hơn.',
      example: 'ここに車を止めてはいけません。',
      translation: 'Không được đỗ xe ở đây.',
      caution:
        'Vてはいけません có nghĩa cấm làm, không có nghĩa “không cần làm”.',
    },
    {
      title: 'Trạng thái tiếp diễn sau thay đổi',
      formula: 'Vて + います',
      explanation:
        'Ngoài việc đang diễn ra, ています còn chỉ trạng thái còn tồn tại: けっこんしています là đang có gia đình; もっています có thể là đang sở hữu.',
      example: '私はカメラを持っています。',
      translation: 'Tôi có một chiếc máy ảnh.',
      caution:
        'Không dịch mọi ています thành “đang làm”. けっこんしています không nhất thiết là đang tổ chức đám cưới.',
    },
    {
      title: 'Biết và không biết',
      formula: 'N を 知っています / N を 知りません',
      explanation:
        'Biết một thông tin hoặc biết một người là trạng thái, nên dùng 知っています. Câu phủ định thông thường trong mẫu này là 知りません.',
      example: 'ホテルの電話番号を知りません。',
      translation: 'Tôi không biết số điện thoại của khách sạn.',
      caution:
        'Trong bài này, trả lời không biết bằng しりません, không dùng しっていません hoặc しります.',
    },
    {
      title: 'Nơi cư trú, công việc và hoạt động lâu dài',
      formula: 'N に 住んでいます / N で 働いています',
      explanation:
        '住んでいます nói nơi cư trú hiện tại. 働いています, 研究しています hoặc 作っています có thể nói công việc, chuyên môn, hoạt động kinh doanh thường xuyên.',
      example: '兄は病院で働いています。',
      translation: 'Anh trai tôi làm việc ở bệnh viện.',
      caution:
        'Nơi cư trú dùng に; nơi làm việc, nghiên cứu dùng で. Dùng ngữ cảnh để hiểu đang làm ngay lúc này hay làm lâu dài.',
    },
  ],
  choices: [
    {
      prompt: '〔Xin phép sử dụng〕このペンを使って（　）ですか。',
      options: ['はだめ', 'はいけません', 'ください', 'もいい'],
      correct: 3,
      topic: 'Xin phép',
      explanation:
        '使ってもいいですか hỏi có được phép sử dụng cây bút này không.',
    },
    {
      prompt: 'ここで食べて（　）。〔Quy định cấm ăn〕',
      options: ['はいけません', 'もいいです', 'います', 'ください'],
      correct: 0,
      topic: 'Cấm đoán',
      explanation:
        'てはいけません nêu điều không được phép làm, ở đây là cấm ăn.',
    },
    {
      prompt: '〔Tôi sống ở Kyoto〕京都（　）住んでいます。',
      options: ['で', 'に', 'を', 'へ'],
      correct: 1,
      topic: 'Nơi cư trú',
      explanation: '住んでいます đi với に để chỉ nơi đang cư trú.',
    },
    {
      prompt: '兄は病院（　）働いています。',
      options: ['に', 'を', 'で', 'へ'],
      correct: 2,
      topic: 'Nơi làm việc',
      explanation:
        'で đánh dấu nơi diễn ra hoạt động làm việc: 病院で働いています.',
    },
    {
      prompt: 'この人を知っていますか。→ いいえ、（　）。',
      options: ['知ります', '知っています', '知りました', '知りません'],
      correct: 3,
      topic: 'Không biết',
      explanation:
        'Cách đáp thông thường khi không biết là いいえ、知りません.',
    },
    {
      prompt: 'Chọn câu “Tôi đã kết hôn (hiện có gia đình)”.',
      options: [
        '結婚しています。',
        '結婚したいです。',
        '結婚してください。',
        '結婚してもいいですか。',
      ],
      correct: 0,
      topic: 'Trạng thái',
      explanation:
        '結婚しています diễn tả trạng thái đã kết hôn còn tồn tại ở hiện tại.',
    },
    {
      prompt: '〔Có một chiếc máy ảnh〕カメラを（　）います。',
      options: ['持ち', '持って', '持つ', '持ちます'],
      correct: 1,
      topic: 'Sở hữu',
      explanation:
        '持ちます → 持って. 持っています có thể diễn tả sở hữu máy ảnh.',
    },
    {
      prompt: 'あの店は服を（　）います。',
      options: ['売り', '売る', '売って', '売ります'],
      correct: 2,
      topic: 'Hoạt động kinh doanh',
      explanation:
        '売ります có thể て là 売って. 売っています nói cửa hàng có bán quần áo.',
    },
    {
      prompt: 'このいすに座ってもいいですか。〔Đồng ý lịch sự〕',
      options: [
        'いいえ、だめです。',
        'いいえ、いけません。',
        'すみません、ちょっと。',
        'はい、どうぞ。',
      ],
      correct: 3,
      topic: 'Trả lời xin phép',
      explanation:
        'はい、どうぞ là cách đồng ý cho người kia ngồi. Ba câu khác đều từ chối.',
    },
    {
      prompt: 'ここに荷物を（　）はいけません。',
      options: ['置いて', '置きて', '置って', '置きます'],
      correct: 0,
      topic: 'Thể て: 置きます',
      explanation:
        '置きます (đặt) thuộc nhóm I: 置いて. Đừng nhầm với 起きます (thức dậy), nhóm II.',
    },
    {
      prompt: 'この資料を（　）もいいですか。',
      options: ['コピーし', 'コピーして', 'コピーします', 'コピーする'],
      correct: 1,
      topic: 'Nhóm III và xin phép',
      explanation: 'コピーします → コピーして, rồi thêm もいいですか.',
    },
    {
      prompt: '〔Hỏi có biết số điện thoại không〕電話番号を（　）か。',
      options: ['知ります', '知ってください', '知っています', '知りたいです'],
      correct: 2,
      topic: 'Trạng thái biết',
      explanation:
        '知っていますか hỏi người nghe có biết thông tin đó hay không.',
    },
  ],
  translations: [
    {
      jp: 'このいすに座ってもいいですか。',
      kana: 'このいすにすわってもいいですか。',
      vi: 'Tôi ngồi ghế này có được không?',
      viAlternatives: [
        'Tôi có thể ngồi ghế này không?',
        'Tôi được phép ngồi ghế này không?',
      ],
      topic: 'Xin phép',
      explanation: '座ります → 座って; thêm もいいですか để xin phép.',
    },
    {
      jp: 'このパソコンを使ってもいいですか。',
      kana: 'このパソコンをつかってもいいですか。',
      vi: 'Tôi dùng máy tính này có được không?',
      viAlternatives: [
        'Tôi có thể sử dụng máy tính này không?',
        'Tôi có được dùng máy tính này không?',
      ],
      topic: 'Xin phép',
      explanation:
        '使います → 使って. Câu này xin phép chứ không hỏi khả năng.',
    },
    {
      jp: 'この資料をコピーしてもいいですか。',
      kana: 'このしりょうをコピーしてもいいですか。',
      vi: 'Tôi sao chụp tài liệu này có được không?',
      viAlternatives: [
        'Tôi photocopy tài liệu này được không?',
        'Tôi có thể sao chụp tài liệu này không?',
      ],
      topic: 'Xin phép',
      explanation: 'コピーします thuộc nhóm III, đổi します thành して.',
    },
    {
      jp: 'ここに車を止めてはいけません。',
      kana: 'ここにくるまをとめてはいけません。',
      vi: 'Không được đỗ xe ở đây.',
      viAlternatives: ['Cấm đỗ xe ở đây.', 'Không được dừng xe ở đây.'],
      topic: 'Cấm đoán',
      explanation: 'てはいけません nêu quy định cấm; に chỉ vị trí đỗ xe.',
    },
    {
      jp: 'ここで食べてはいけません。',
      kana: 'ここでたべてはいけません。',
      vi: 'Không được ăn ở đây.',
      viAlternatives: ['Cấm ăn ở đây.'],
      topic: 'Cấm đoán',
      explanation:
        'で là nơi diễn ra việc ăn, 食べてはいけません là không được ăn.',
    },
    {
      jp: 'ここに荷物を置いてはいけません。',
      kana: 'ここににもつをおいてはいけません。',
      vi: 'Không được để hành lý ở đây.',
      viAlternatives: [
        'Cấm để hành lý ở đây.',
        'Không được đặt hành lý ở đây.',
      ],
      topic: 'Cấm đoán',
      explanation: '置きます thuộc nhóm I, thể て là 置いて.',
    },
    {
      jp: '私は結婚しています。',
      kana: 'わたしはけっこんしています。',
      vi: 'Tôi đã kết hôn.',
      viAlternatives: ['Tôi đã có gia đình.'],
      jpAlternatives: ['結婚しています。'],
      topic: 'Trạng thái',
      explanation:
        'ています ở đây diễn tả trạng thái đã kết hôn, không phải đang tổ chức lễ cưới.',
    },
    {
      jp: '私はカメラを持っています。',
      kana: 'わたしはカメラをもっています。',
      vi: 'Tôi có một chiếc máy ảnh.',
      viAlternatives: ['Tôi có máy ảnh.'],
      jpAlternatives: ['カメラを持っています。'],
      topic: 'Sở hữu',
      explanation: '持っています trong ngữ cảnh này là đang sở hữu máy ảnh.',
    },
    {
      jp: 'ホテルの電話番号を知りません。',
      kana: 'ホテルのでんわばんごうをしりません。',
      vi: 'Tôi không biết số điện thoại của khách sạn.',
      jpAlternatives: ['私はホテルの電話番号を知りません。'],
      topic: 'Không biết',
      explanation: 'Dạng phủ định thông thường của 知っています là 知りません.',
    },
    {
      jp: '姉は京都に住んでいます。',
      kana: 'あねはきょうとにすんでいます。',
      vi: 'Chị tôi sống ở Kyoto.',
      viAlternatives: [
        'Chị gái tôi đang sống ở Kyoto.',
        'Chị gái tôi sống ở Kyoto.',
      ],
      topic: 'Nơi cư trú',
      explanation: 'Dùng 姉 cho chị mình; nơi ở của 住んでいます đi với に.',
    },
    {
      jp: '兄は病院で働いています。',
      kana: 'あにはびょういんではたらいています。',
      vi: 'Anh trai tôi làm việc ở bệnh viện.',
      viAlternatives: ['Anh tôi đang làm việc ở bệnh viện.'],
      topic: 'Nghề nghiệp',
      explanation:
        'で đánh dấu nơi làm việc. ています có thể nói công việc lâu dài.',
    },
    {
      jp: 'あの店は子どもの服を売っています。',
      kana: 'あのみせはこどものふくをうっています。',
      vi: 'Cửa hàng kia bán quần áo trẻ em.',
      jpAlternatives: ['あの店で子どもの服を売っています。'],
      viAlternatives: ['Cửa hàng đó có bán quần áo trẻ em.'],
      topic: 'Hoạt động kinh doanh',
      explanation:
        '売っています chỉ hoạt động bán hàng thường xuyên của cửa hàng.',
    },
  ],
});
