import { n4LessonDetails } from './n4-lessons.ts';

type LessonDetails = {
  title: string;
  description: string;
  tipTitle: string;
  tip: string;
  grammarSource: string;
};

export const lessonDetails: Record<number, LessonDetails> = {
  ...n4LessonDetails,
  1: {
    title: 'Xin chào, tôi là…',
    description: 'Giới thiệu tên, nghề nghiệp, quốc tịch và làm quen.',
    tipTitle: 'は viết ha, đọc wa.',
    tip: 'Khi は làm trợ từ chủ đề, hãy đọc là わ: わたしは. Đừng gọi người đối diện là あなた khi đã biết tên.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-1',
  },
  2: {
    title: 'Cái này là gì?',
    description: 'Chỉ đồ vật, hỏi tên, nội dung, xuất xứ và chủ sở hữu.',
    tipTitle: 'これ đứng một mình.',
    tip: 'これ・それ・あれ đứng độc lập. この・その・あの phải có danh từ theo sau: この本.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-2',
  },
  3: {
    title: 'Ở đâu, tầng mấy?',
    description: 'Hỏi vị trí, phương hướng, tầng và giá tiền.',
    tipTitle: 'Địa điểm cũng dùng です.',
    tip: 'トイレは二階です nghĩa là nhà vệ sinh ở tầng hai. どちら lịch sự hơn どこ.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-3',
  },
  4: {
    title: 'Một ngày của tôi.',
    description: 'Nói giờ, lịch sinh hoạt và bốn dạng lịch sự cơ bản.',
    tipTitle: 'Mốc cụ thể mới có に.',
    tip: '六時に起きます nhưng 毎日起きます. 今日・明日・毎日 thường không đi với に.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-4',
  },
  5: {
    title: 'Đi đâu, bằng gì?',
    description: 'Nói đích đến, phương tiện, người đồng hành và thời điểm đi.',
    tipTitle: 'へ là đích, で là cách đi.',
    tip: '会社へ行きます: đi đến công ty. 電車で行きます: đi bằng tàu. Đi bộ nói 歩いて行きます.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-5',
  },
  6: {
    title: 'Hôm nay làm gì?',
    description: 'Nói hành động, đối tượng, nơi thực hiện và rủ nhau làm.',
    tipTitle: 'を là vật, で là nơi.',
    tip: '図書館で本を読みます: thư viện là nơi nên dùng で; sách là đối tượng nên dùng を.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-6',
  },
  7: {
    title: 'Cho, nhận và công cụ.',
    description:
      'Nói phương tiện thực hiện, người cho, người nhận và việc đã xong.',
    tipTitle: 'Góc nhìn quyết định động từ.',
    tip: 'あげます nhìn từ người cho; もらいます nhìn từ người nhận. Công cụ dùng で: はさみで切ります.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-7',
  },
  8: {
    title: 'Nơi này thế nào?',
    description: 'Miêu tả người, vật và nơi chốn bằng hai nhóm tính từ.',
    tipTitle: 'きれい là tính từ な.',
    tip: 'Đừng phân nhóm chỉ bằng chữ い cuối từ. Nói きれいです nhưng trước danh từ là きれいな町.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-8',
  },
  9: {
    title: 'Bạn thích điều gì?',
    description: 'Nói sở thích, năng lực, sở hữu, mức độ và lý do.',
    tipTitle: '好き dùng が.',
    tip: '音楽が好きです, 日本語が分かります. あまり và 全然 đi với dạng phủ định trong mẫu sơ cấp.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-9',
  },
  10: {
    title: 'Thế giới quanh mình.',
    description: 'Nói về sự tồn tại, con người và vị trí của đồ vật.',
    tipTitle: '',
    tip: '',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-10',
  },
  11: {
    title: 'Đếm những điều nhỏ.',
    description: 'Nói về số lượng, khoảng thời gian và tần suất.',
    tipTitle: '',
    tip: '',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-11',
  },
  12: {
    title: 'Kể lại và so sánh.',
    description:
      'Nói về cảm nhận đã qua, so sánh hơn và chọn điều mình thích nhất.',
    tipTitle: 'いい → よかった',
    tip: 'Tính từ いい đổi gốc thành よ khi chia: よかったです, よくなかったです. Không dùng いいでした.',
    grammarSource:
      'https://riki.edu.vn/minna-no-nihongo/tu-vung-ngu-phap-minna-bai-12',
  },
  13: {
    title: 'Bạn muốn làm gì?',
    description:
      'Nói điều muốn có, việc muốn làm và mục đích của một chuyến đi.',
    tipTitle: 'Muốn có, muốn làm.',
    tip: 'N がほしいです: muốn có một thứ. Vます bỏ ます + たいです: muốn làm một việc. Không đổi trợ từ chỉ nơi đến thành が.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-13',
  },
  14: {
    title: 'Nhờ một chút nhé.',
    description:
      'Làm quen thể て, nhờ vả, đề nghị giúp và nói việc đang diễn ra.',
    tipTitle: 'Nhớ nhóm, đổi đúng.',
    tip: 'まちます → まって; よびます → よんで; あけます → あけて. Ngoại lệ cần nhớ: いきます → いって.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-14',
  },
  15: {
    title: 'Có được làm không?',
    description:
      'Xin phép, nêu điều không được làm và nói về cuộc sống, công việc.',
    tipTitle: '知っています nghĩa là “biết”.',
    tip: 'しっています là biết. Khi không biết, đáp しりません. ています còn diễn tả trạng thái và công việc lâu dài, không chỉ việc đang diễn ra.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-15',
  },
  16: {
    title: 'Nối việc, tả người.',
    description: 'Kể các hành động theo thứ tự và nối nhiều đặc điểm.',
    tipTitle: 'てから = xong rồi mới.',
    tip: 'Vて nối các hành động theo thứ tự; Vてから nhấn mạnh hành động đầu phải hoàn tất. いい nối thành よくて.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-16',
  },
  17: {
    title: 'Đừng quên nhé.',
    description:
      'Dùng thể ない để nói điều cấm, nghĩa vụ và điều không cần làm.',
    tipTitle: 'ない, ba hướng dùng.',
    tip: 'Vないでください: đừng làm. Vなければなりません: phải làm. Vなくてもいいです: không cần làm.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-17',
  },
  18: {
    title: 'Điều mình có thể làm.',
    description: 'Nói về khả năng, sở thích và việc làm trước một mốc.',
    tipTitle: 'Động từ về dạng gốc.',
    tip: 'Trước こと và 前に, động từ dùng thể từ điển: 読むことができます, 寝る前に.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-18',
  },
  19: {
    title: 'Những điều từng trải.',
    description: 'Kể kinh nghiệm, liệt kê hoạt động và nói sự thay đổi.',
    tipTitle: 'た rồi thêm こと・り.',
    tip: 'Vたことがあります là đã từng. VたりVたりします chỉ nêu vài hoạt động tiêu biểu, không phải toàn bộ.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-19',
  },
  20: {
    title: 'Nói chuyện thân mật.',
    description: 'Chuyển giữa thể lịch sự và thể thông thường trong hội thoại.',
    tipTitle: 'Đúng người, đúng giọng.',
    tip: 'Thể thông thường hợp với bạn bè, gia đình. Với người mới gặp hoặc cấp trên, tiếp tục dùng ます・です.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-20',
  },
  21: {
    title: 'Bạn nghĩ thế nào?',
    description: 'Nêu ý kiến, trích lời nói, dự đoán và nói về sự kiện.',
    tipTitle: 'Trước と là thể thường.',
    tip: 'Động từ dùng thể thông thường trước と思います và と言います. Danh từ, tính từ な hiện tại khẳng định cần だ.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-21',
  },
  22: {
    title: 'Người đang đội mũ.',
    description: 'Dùng cả một mệnh đề để mô tả người, vật và nơi chốn.',
    tipTitle: 'Mệnh đề đứng sát danh từ.',
    tip: 'これは父が撮った写真です. Không chèn の sau 撮った; chủ thể bên trong mệnh đề thường dùng が.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-22',
  },
  23: {
    title: 'Khi nào, rồi điều gì?',
    description:
      'Dùng とき, kết quả tự nhiên với と và chỉ đường qua không gian.',
    tipTitle: '行くとき hay 行ったとき?',
    tip: 'Chọn theo việc đi đã hoàn tất chưa tại thời điểm hành động chính, không chọn theo thì của cả câu.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-23',
  },
  24: {
    title: 'Ai làm giúp ai?',
    description: 'Nói về cho, nhận và những hành động mang lại lợi ích.',
    tipTitle: 'Chọn góc nhìn trước.',
    tip: 'てあげる nhìn từ người làm, てもらう từ người nhận, てくれる từ phía người làm giúp mình.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-24',
  },
  25: {
    title: 'Nếu có cơ hội.',
    description: 'Nói điều kiện với たら và kết quả không đổi với ても.',
    tipTitle: 'Nếu khác với dù.',
    tip: 'もし thường đi với たら; いくら đi với ても. Khác と, sau たら có thể là lời mời hay yêu cầu.',
    grammarSource: 'https://riki.edu.vn/minna-no-nihongo/bai-25',
  },
};
