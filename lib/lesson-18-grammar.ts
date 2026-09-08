import type { Grammar } from './lessons.ts';

export const lesson18Grammar: Grammar[] = [
  {
    title: 'Thể từ điển — đổi theo ba nhóm',
    formula: 'Bỏ ます → đổi phần còn lại theo nhóm động từ',
    explanation:
      'Thể từ điển là dạng dùng để tra động từ, chẳng hạn 読む, 食べる và する. Đây không phải cách nói lịch sự kết thúc bằng ます. Trước khi đổi, cần biết động từ thuộc nhóm nào; không đoán nhóm chỉ từ một âm ở cuối.',
    details: [
      {
        title: 'Nhóm I — đổi âm ngay trước ます từ hàng い sang hàng う',
        explanation:
          'Tách ます, giữ phần đầu và đổi âm cuối còn lại theo bảng. Ví dụ かきます → かき → かく. Chú ý し đổi thành す, ち đổi thành つ; không viết しゅ hay ちゅ.',
        table: {
          caption:
            'Đủ chín cách đổi đuôi của nhóm I. しにます (chết) chỉ minh họa đuôi に.',
          headers: ['Âm đổi', 'Thể ます', 'Thể từ điển'],
          rows: [
            ['い → う', '買います', '買う'],
            ['き → く', '書きます', '書く'],
            ['ぎ → ぐ', '泳ぎます', '泳ぐ'],
            ['し → す', '話します', '話す'],
            ['ち → つ', '待ちます', '待つ'],
            ['に → ぬ', 'しにます', 'しぬ'],
            ['び → ぶ', '遊びます', '遊ぶ'],
            ['み → む', '読みます', '読む'],
            ['り → る', '帰ります', '帰る'],
          ],
        },
        examples: [
          '洗います → 洗う; 弾きます → 弾く; 入ります → 入る. Cả ba đều thuộc nhóm I.',
        ],
      },
      {
        title: 'Nhóm II — bỏ ます rồi thêm る',
        explanation:
          'Giữ nguyên phần trước ます. Nhiều từ có âm hàng え trước ます, nhưng một số từ có âm hàng い vẫn thuộc nhóm II. Học nhóm cùng với từ, chẳng hạn 見ます, 起きます, 借ります, 浴びます và できます.',
        table: {
          caption:
            'Các từ nhóm II vẫn giữ nguyên phần trước ます, dù có âm hàng え hay hàng い.',
          headers: ['Thể ます', 'Thể từ điển', 'Nghĩa'],
          rows: [
            ['食べます', '食べる', 'ăn'],
            ['集めます', '集める', 'sưu tầm'],
            ['見ます', '見る', 'xem'],
            ['起きます', '起きる', 'thức dậy'],
            ['借ります', '借りる', 'mượn'],
            ['浴びます', '浴びる', 'tắm (vòi sen)'],
            ['できます', 'できる', 'có thể'],
          ],
        },
        examples: [
          '帰ります → 帰る là nhóm I; 借ります → 借りる là nhóm II. Không áp dụng cùng một quy tắc chỉ vì đều có り trước ます.',
        ],
      },
      {
        title: 'Nhóm III — nhớ riêng する và 来る',
        explanation:
          'します đổi thành する; 来ます (きます) đổi thành 来る (くる). Với động từ hoạt động ghép cùng します, giữ phần danh từ rồi đổi します thành する.',
        table: {
          caption:
            '来ます đọc là きます; 来る đọc là くる. Cần nhớ cả dạng chữ và cách đọc.',
          headers: ['Thể ます', 'Thể từ điển'],
          rows: [
            ['します', 'する'],
            ['予約します', '予約する'],
            ['運転します', '運転する'],
            ['来ます（きます）', '来る（くる）'],
          ],
        },
        examples: [
          '話します → 話す là nhóm I, không đổi thành 話する. Không phải từ nào có chuỗi します ở cuối cũng thuộc nhóm III.',
        ],
      },
    ],
    example: '読みます → 読む。見ます → 見る。',
    translation:
      'Đọc: nhóm I đổi み thành む. Xem: nhóm II bỏ ます rồi thêm る.',
    caution:
      'Dùng thể từ điển trước こと và 前に trong các mẫu của bài này. Không dùng 読みますこと hoặc 寝ます前に. Nhóm II có âm hàng い trước ます không có nghĩa là từ đó phải kết thúc bằng chuỗi chữ います.',
  },
  {
    title: 'Nói khả năng với danh từ',
    formula: 'Người は N ができます / N ができません',
    explanation:
      'N là một kỹ năng hoặc hoạt động như ngoại ngữ, môn thể thao, nhạc cụ hay lái xe. が đánh dấu điều có thể làm. Không lấy một danh từ bất kỳ rồi thêm ができます để diễn tả biết sử dụng nó.',
    details: [
      {
        title: 'Khẳng định, phủ định và hỏi–đáp',
        explanation:
          'Hỏi bằng できますか. Khi trả lời ngắn, có thể lược phần kỹ năng đã rõ trong câu hỏi.',
        examples: [
          '私は日本語が少しできます。— Tôi biết một chút tiếng Nhật.',
          '私はスキーができません。— Tôi không biết trượt tuyết.',
          'ピアノができますか。— Bạn biết chơi piano không?',
          'はい、できます。／いいえ、できません。— Có, tôi biết. / Không, tôi không biết.',
        ],
      },
    ],
    example: '兄は運転ができます。',
    translation: 'Anh trai tôi biết lái xe.',
    caution:
      'Trong mẫu Nができます, dùng が, không thay bằng を. Muốn nêu động tác cụ thể, dùng V thể từ điển + ことができます ở mục tiếp theo.',
  },
  {
    title: 'Có thể làm một hành động',
    formula: 'V thể từ điển + ことができます / ことができません',
    explanation:
      'こと biến cả hành động đứng trước thành một cụm danh từ; が nối cụm đó với できます. Mẫu này nói cả năng lực của người thực hiện lẫn việc có thể thực hiện nhờ điều kiện, phương tiện hoặc dịch vụ sẵn có.',
    details: [
      {
        title: 'Năng lực cá nhân và điều kiện thực hiện',
        explanation:
          'Cùng dịch là “có thể”, nhưng không phải lúc nào cũng có nghĩa là đã học được một kỹ năng.',
        examples: [
          '姉は日本語の歌を歌うことができます。— Chị tôi có thể hát bài hát tiếng Nhật: năng lực cá nhân.',
          'この店ではカードで払うことができます。— Ở cửa hàng này có thể trả bằng thẻ: điều kiện thanh toán.',
          'ここで自転車を借りることができますか。— Có thể thuê xe đạp ở đây không?',
        ],
      },
      {
        title: 'Giữ đúng trợ từ của động từ bên trong',
        explanation:
          'が thuộc cụm ことができます. Các trợ từ を, に, で bên trong hành động vẫn theo động từ và ý nghĩa vốn có; không đổi tất cả thành が.',
        examples: [
          '日本語ができます。⇔ 日本語を話すことができます。— Biết tiếng Nhật / Có thể nói tiếng Nhật. を là tân ngữ của 話す.',
          '料理ができます。⇔ 料理をすることができます。— Biết nấu ăn / Có thể nấu ăn.',
          '馬に乗ることができます。— Có thể cưỡi ngựa. Giữ に của 馬に乗る.',
        ],
      },
      {
        title: 'Đổi できます, không đổi động từ trước こと',
        explanation:
          'Phủ định khả năng bằng できません. Nếu cần nói về khả năng trong quá khứ, dùng できました hoặc できませんでした; động từ trước こと vẫn ở thể từ điển.',
        examples: [
          '私は車を運転することができません。— Tôi không biết lái ô tô.',
          '去年は日本語を話すことができませんでした。— Năm ngoái tôi chưa thể nói tiếng Nhật.',
        ],
      },
    ],
    example: '漢字を読むことができます。',
    translation: 'Tôi có thể đọc Kanji.',
    caution:
      'Viết 読むことができます, không viết 読みますことができます. Mẫu này diễn tả khả năng; khi muốn hỏi xin phép, dùng てもいいですか đã học ở bài 15.',
  },
  {
    title: 'Nói sở thích bằng danh từ hoặc hành động',
    formula: '趣味は N です / 趣味は V thể từ điển + ことです',
    explanation:
      'Sau 趣味は có thể là tên một sở thích, hoặc một hành động được danh từ hóa bằng こと. Danh từ nối thẳng với です, không thêm こと. Hành động cụ thể giúp người nghe hiểu bạn thích làm gì.',
    details: [
      {
        title: 'Hai cách trả lời câu hỏi về sở thích',
        explanation:
          '趣味は何ですか nghĩa là “Sở thích của bạn là gì?”. Có thể bỏ 私の khi ngữ cảnh đã rõ là đang nói về bản thân.',
        examples: [
          '趣味は旅行です。— Sở thích của tôi là du lịch: dùng danh từ.',
          '趣味は切手を集めることです。— Sở thích của tôi là sưu tầm tem: nêu hành động.',
          '趣味はサッカーを見ることです。— Sở thích của tôi là xem bóng đá, không nhất thiết là chơi bóng đá.',
        ],
      },
    ],
    example: '私の趣味は写真を撮ることです。',
    translation: 'Sở thích của tôi là chụp ảnh.',
    caution:
      'Không viết 趣味は旅行ことです hoặc 趣味は写真を撮りますことです. Nối N + です hoặc V từ điển + ことです.',
  },
  {
    title: 'Trước khi làm một việc',
    formula: 'V1 thể từ điển + 前に、V2',
    explanation:
      'Làm V2 trước, rồi mới đến V1. Trong 寝る前に日記を書きます, việc viết nhật ký xảy ra trước việc ngủ. Thời của câu do động từ ở cuối câu thể hiện.',
    details: [
      {
        title: 'Câu quá khứ vẫn dùng thể từ điển trước 前に',
        explanation:
          'Không đổi động từ trước 前に sang thể た chỉ vì đang kể chuyện đã xảy ra.',
        examples: [
          '昨日、寝る前に本を読みました。— Hôm qua tôi đã đọc sách trước khi ngủ.',
          '明日、出かける前に部屋を掃除します。— Ngày mai tôi sẽ dọn phòng trước khi ra ngoài.',
        ],
      },
    ],
    example: '寝る前に日記を書きます。',
    translation: 'Tôi viết nhật ký trước khi ngủ.',
    caution:
      'V1 là việc diễn ra sau, dù được nói trước trong câu. Không dùng 寝た前に hay 寝ます前に cho mẫu đang học.',
  },
  {
    title: 'Trước một sự kiện hoặc hoạt động',
    formula: 'N chỉ sự kiện hoặc hoạt động + の前に、～',
    explanation:
      'Khi dùng danh từ như cuộc họp, bữa ăn hoặc chuyến đi làm mốc, cần thêm の trước 前に. Đây là mốc thời gian, không phải vị trí “ở phía trước” của một đồ vật.',
    details: [
      {
        title: 'Danh từ và động từ có cách nối khác nhau',
        explanation:
          'Cùng một ý có thể diễn tả bằng danh từ hoạt động hoặc động từ; chỉ dạng danh từ cần の.',
        examples: [
          '食事の前に手を洗います。— Tôi rửa tay trước bữa ăn.',
          'ご飯を食べる前に手を洗います。— Tôi rửa tay trước khi ăn cơm.',
        ],
      },
    ],
    example: '会議の前に資料を読みます。',
    translation: 'Tôi đọc tài liệu trước cuộc họp.',
    caution:
      'Phân biệt 食事の前に với 食べる前に: không bỏ の sau danh từ và không thêm の sau động từ trong mẫu này.',
  },
  {
    title: 'Cách đây một khoảng thời gian',
    formula: 'Khoảng thời gian + 前に、～',
    explanation:
      'Một khoảng thời gian nối trực tiếp với 前に, không có の. Khi kể một việc đã xảy ra, cụm này thường có nghĩa “cách đây …”, tính lùi từ hiện tại hoặc mốc đã rõ trong ngữ cảnh.',
    details: [
      {
        title: 'Giờ trên đồng hồ khác khoảng thời gian',
        explanation:
          '三時 là ba giờ trên đồng hồ; 三時間 là một khoảng kéo dài ba tiếng. Hai cách nói sau không cùng nghĩa.',
        examples: [
          '三時前に来ました。— Tôi đã đến trước ba giờ.',
          '三時間前に来ました。— Tôi đã đến cách đây ba tiếng.',
          '二年前に日本へ来ました。— Tôi đã đến Nhật cách đây hai năm.',
        ],
      },
    ],
    example: '一時間前にここへ来ました。',
    translation: 'Tôi đã đến đây cách đây một giờ.',
    caution:
      'Viết 一時間前に, không viết 一時間の前に. Giữ の cho danh từ sự kiện như 会議の前に.',
  },
  {
    title: 'なかなか～ません — mãi không, không dễ',
    formula: 'なかなか + V phủ định / なかなか + V từ điển + ことができません',
    explanation:
      'Diễn tả một việc không dễ thực hiện hoặc kết quả mong đợi mãi chưa xảy ra. Với khả năng, なかなか～ことができません có nghĩa là khó làm được hoặc khó có dịp làm, tùy ngữ cảnh.',
    details: [
      {
        title: 'Không dễ đạt được kết quả',
        explanation:
          'Không hiểu なかなか đơn thuần là “không bao giờ”. Câu thường hàm ý có mong muốn hoặc kỳ vọng nhưng việc đó khó xảy ra.',
        examples: [
          'この漢字はなかなか覚えることができません。— Tôi mãi vẫn chưa nhớ được chữ Kanji này.',
          'バスがなかなか来ません。— Chờ mãi mà xe buýt chưa đến.',
        ],
      },
    ],
    example: '日本ではなかなか馬に乗ることができません。',
    translation: 'Ở Nhật khó có dịp cưỡi ngựa.',
    caution:
      'Trong nghĩa đang học, なかなか đi với phủ định. なかなか còn có cách dùng khẳng định mang nghĩa “khá là”, nhưng đó là cách dùng khác; không thay lẫn hai nghĩa.',
  },
  {
    title: 'ぜひ — rất muốn, nhất định hãy',
    formula: 'ぜひ + Vたいです / ぜひ + Vてください',
    explanation:
      'Nhấn mạnh nguyện vọng của bản thân hoặc lời mời, lời đề nghị dành cho người khác. Cách dịch tùy câu: “rất muốn”, “nhất định muốn” hoặc “nhất định hãy”.',
    details: [
      {
        title: 'Mong muốn của mình và lời mời người khác',
        explanation:
          'Dùng たいです khi nói điều bản thân muốn làm; dùng てください khi mong người nghe làm một việc.',
        examples: [
          'ぜひ日本で働きたいです。— Tôi rất muốn làm việc ở Nhật.',
          'ぜひうちへ遊びに来てください。— Nhất định hãy đến nhà tôi chơi nhé.',
        ],
      },
    ],
    example: 'ぜひ京都へ行きたいです。',
    translation: 'Tôi rất muốn đến Kyoto.',
    caution:
      'ぜひ không phải lời khẳng định chắc chắn một sự việc sẽ xảy ra. Nó nhấn mạnh mong muốn hoặc lời mời, không thay cho cách nói “chắc chắn” trong mọi câu.',
  },
];
