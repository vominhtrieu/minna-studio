import { lesson1 } from './lesson-1.ts';
import { lesson2 } from './lesson-2.ts';
import { lesson3 } from './lesson-3.ts';
import { lesson4 } from './lesson-4.ts';
import { lesson5 } from './lesson-5.ts';
import { lesson6 } from './lesson-6.ts';
import { lesson7 } from './lesson-7.ts';
import { lesson8 } from './lesson-8.ts';
import { lesson9 } from './lesson-9.ts';
import { lesson12 } from './lesson-12.ts';
import { lesson13 } from './lesson-13.ts';
import { lesson14 } from './lesson-14.ts';
import { lesson15 } from './lesson-15.ts';
import { lesson16 } from './lesson-16.ts';
import { lesson17 } from './lesson-17.ts';
import { lesson18 } from './lesson-18.ts';
import { lesson19 } from './lesson-19.ts';
import { lesson20 } from './lesson-20.ts';
import { lesson21 } from './lesson-21.ts';
import { lesson22 } from './lesson-22.ts';
import { lesson23 } from './lesson-23.ts';
import { lesson24 } from './lesson-24.ts';
import { lesson25 } from './lesson-25.ts';
import { expandLessonChoices } from './choice-expander.ts';
import { supplementalVocabulary } from './supplemental-vocabulary.ts';
import { n4Lessons } from './n4-lessons.ts';

export type Word = {
  id: string;
  jp: string;
  kana: string;
  vi: string;
  type: string;
  example: string;
  translation: string;
};
export type Grammar = {
  title: string;
  formula: string;
  explanation: string;
  example: string;
  translation: string;
  caution: string;
  details?: {
    title: string;
    explanation: string;
    examples: string[];
  }[];
};
export type ChoiceQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
  topic: string;
  /** A vocabulary quiz must use the headword's reading in its own lesson. */
  readingHints?: Record<string, string>;
};
export type Translation = {
  id: string;
  jp: string;
  kana: string;
  vi: string;
  jpAlternatives?: string[];
  viAlternatives?: string[];
  explanation: string;
  topic: string;
};
export type Lesson = {
  id: number;
  words: Word[];
  grammar: Grammar[];
  choices: ChoiceQuestion[];
  translations: Translation[];
};
function vocabulary(id: number, text: string): Word[] {
  return text
    .trim()
    .split('\n')
    .map((line, i) => {
      const [jp, kana, vi, type, example, translation] = line.split('|');
      return {
        id: `${id}-w${i + 1}`,
        jp,
        kana,
        vi,
        type,
        example,
        translation,
      };
    });
}
const words10 = vocabulary(
  10,
  `
あります|あります|có, tồn tại (đồ vật, cây cối)|Động từ · Nhóm I|庭に大きい木があります。|Trong vườn có cây to.
います|います|có, ở (người, động vật)|Động từ · Nhóm II|教室に先生がいます。|Trong lớp có giáo viên.
いろいろな|いろいろな|nhiều loại, đa dạng|Tính từ な|店にいろいろな本があります。|Trong cửa hàng có nhiều loại sách.
男の人|おとこのひと|người đàn ông|Danh từ|あそこに男の人がいます。|Ở đằng kia có người đàn ông.
女の人|おんなのひと|người phụ nữ|Danh từ|受付に女の人がいます。|Ở quầy lễ tân có người phụ nữ.
男の子|おとこのこ|bé trai|Danh từ|庭に男の子がいます。|Trong vườn có bé trai.
女の子|おんなのこ|bé gái|Danh từ|女の子は公園にいます。|Bé gái ở công viên.
犬|いぬ|con chó|Danh từ|犬は家の外にいます。|Con chó ở bên ngoài nhà.
猫|ねこ|con mèo|Danh từ|猫はベッドの下にいます。|Con mèo ở dưới giường.
木|き|cây; gỗ|Danh từ|学校の前に木があります。|Trước trường có cây.
物|もの|đồ vật|Danh từ|箱の中にいろいろな物があります。|Trong hộp có nhiều loại đồ vật.
フィルム|フィルム|phim chụp ảnh|Danh từ|フィルムはかばんの中にあります。|Phim chụp ảnh ở trong cặp.
電池|でんち|pin|Danh từ|電池は箱の中にあります。|Pin ở trong hộp.
箱|はこ|cái hộp|Danh từ|ベッドの下に箱があります。|Dưới giường có cái hộp.
スイッチ|スイッチ|công tắc|Danh từ|スイッチはドアの右にあります。|Công tắc ở bên phải cửa.
冷蔵庫|れいぞうこ|tủ lạnh|Danh từ|冷蔵庫の中に牛乳があります。|Trong tủ lạnh có sữa.
テーブル|テーブル|cái bàn|Danh từ|テーブルの上にりんごがあります。|Trên bàn có táo.
ベッド|ベッド|giường|Danh từ|ベッドは窓の近くにあります。|Giường ở gần cửa sổ.
棚|たな|kệ, giá để đồ|Danh từ|棚の上にラジオがあります。|Trên kệ có radio.
ドア|ドア|cửa ra vào|Danh từ|ドアの前に犬がいます。|Trước cửa có chó.
窓|まど|cửa sổ|Danh từ|窓の左に時計があります。|Bên trái cửa sổ có đồng hồ.
ポスト|ポスト|hòm thư|Danh từ|駅の前にポストがあります。|Trước ga có hòm thư.
ビル|ビル|tòa nhà|Danh từ|あのビルに銀行があります。|Trong tòa nhà kia có ngân hàng.
公園|こうえん|công viên|Danh từ|公園は学校の隣にあります。|Công viên ở cạnh trường.
喫茶店|きっさてん|quán cà phê|Danh từ|喫茶店は駅の近くにあります。|Quán cà phê ở gần ga.
本屋|ほんや|hiệu sách|Danh từ|本屋の前に友達がいます。|Trước hiệu sách có bạn tôi.
～屋|～や|cửa hàng, tiệm chuyên bán ~|Hậu tố|花屋はあそこです。|Tiệm hoa ở đằng kia.
乗り場|のりば|điểm lên xe, bến đón xe|Danh từ|タクシー乗り場は駅の前です。|Điểm đón taxi ở trước ga.
県|けん|tỉnh (đơn vị hành chính Nhật)|Danh từ|奈良県に友達がいます。|Tôi có bạn ở tỉnh Nara.
上|うえ|trên, phía trên|Danh từ chỉ vị trí|棚の上に箱があります。|Trên kệ có hộp.
下|した|dưới, phía dưới|Danh từ chỉ vị trí|いすの下にかばんがあります。|Dưới ghế có cặp.
前|まえ|trước, phía trước|Danh từ chỉ vị trí|銀行の前に車があります。|Trước ngân hàng có ô tô.
後ろ|うしろ|sau, phía sau|Danh từ chỉ vị trí|学校の後ろに公園があります。|Sau trường có công viên.
右|みぎ|phải, bên phải|Danh từ chỉ vị trí|ドアの右にスイッチがあります。|Bên phải cửa có công tắc.
左|ひだり|trái, bên trái|Danh từ chỉ vị trí|駅の左に本屋があります。|Bên trái ga có hiệu sách.
中|なか|bên trong|Danh từ chỉ vị trí|かばんの中に鍵があります。|Trong cặp có chìa khóa.
外|そと|bên ngoài|Danh từ chỉ vị trí|家の外に猫がいます。|Bên ngoài nhà có mèo.
隣|となり|bên cạnh, sát bên|Danh từ chỉ vị trí|銀行は本屋の隣にあります。|Ngân hàng ở cạnh hiệu sách.
近く|ちかく|gần, khu vực gần|Danh từ chỉ vị trí|家の近くに喫茶店があります。|Gần nhà có quán cà phê.
間|あいだ|giữa hai đối tượng|Danh từ chỉ vị trí|銀行は本屋と学校の間にあります。|Ngân hàng ở giữa hiệu sách và trường.
～や～など|～や～など|~ và ~, vân vân (liệt kê ví dụ)|Mẫu liệt kê|箱の中にペンや鍵などがあります。|Trong hộp có bút, chìa khóa, v.v.
一番|いちばん|nhất; vị trí đầu tiên|Phó từ|本は一番上にあります。|Sách ở trên cùng.
～段目|～だんめ|tầng, ngăn thứ ~ (của kệ)|Cách đếm thứ tự|カメラは二段目にあります。|Máy ảnh ở ngăn thứ hai.
奥|おく|phía sâu bên trong|Danh từ chỉ vị trí|トイレは店の奥にあります。|Nhà vệ sinh ở sâu bên trong cửa hàng.
チリソース|チリソース|tương ớt|Danh từ|チリソースは冷蔵庫の中にあります。|Tương ớt ở trong tủ lạnh.
スパイス・コーナー|スパイス・コーナー|khu bán gia vị|Danh từ|スパイス・コーナーはあそこです。|Khu bán gia vị ở đằng kia.
どうもすみません|どうもすみません|rất xin lỗi; cảm ơn vì đã làm phiền|Cụm giao tiếp|どうもすみません。|Rất cảm ơn anh/chị đã giúp. (Sau khi hỏi nhờ.)
`,
);
const words11 = vocabulary(
  11,
  `
一つ|ひとつ|một cái|Số đếm đồ vật|りんごを一つ食べます。|Tôi ăn một quả táo.
二つ|ふたつ|hai cái|Số đếm đồ vật|みかんを二つ買います。|Tôi mua hai quả quýt.
三つ|みっつ|ba cái|Số đếm đồ vật|箱が三つあります。|Có ba cái hộp.
四つ|よっつ|bốn cái|Số đếm đồ vật|りんごを四つください。|Cho tôi bốn quả táo.
五つ|いつつ|năm cái|Số đếm đồ vật|いすが五つあります。|Có năm cái ghế.
六つ|むっつ|sáu cái|Số đếm đồ vật|みかんが六つあります。|Có sáu quả quýt.
七つ|ななつ|bảy cái|Số đếm đồ vật|りんごを七つ買いました。|Tôi đã mua bảy quả táo.
八つ|やっつ|tám cái|Số đếm đồ vật|箱が八つあります。|Có tám cái hộp.
九つ|ここのつ|chín cái|Số đếm đồ vật|みかんが九つあります。|Có chín quả quýt.
十|とお|mười cái (cách đếm đồ vật)|Số đếm đồ vật|りんごを十ください。|Cho tôi mười quả táo.
いくつ|いくつ|bao nhiêu cái|Từ để hỏi|りんごをいくつ買いますか。|Bạn mua bao nhiêu quả táo?
一人|ひとり|một người|Số đếm người|教室に学生が一人います。|Trong lớp có một học sinh.
二人|ふたり|hai người|Số đếm người|子どもが二人います。|Tôi có hai con.
～人|～にん|~ người (4人 đọc よにん)|Lượng từ|学生が四人います。|Có bốn học sinh.
～台|～だい|~ chiếc (máy móc, xe cộ)|Lượng từ|車が二台あります。|Có hai chiếc ô tô.
～枚|～まい|~ tờ, tấm (vật mỏng, phẳng)|Lượng từ|切手を三枚ください。|Cho tôi ba con tem.
～回|～かい|~ lần|Lượng từ|一週間に二回泳ぎます。|Tôi bơi hai lần một tuần.
います|います|có (con cái, anh chị em)|Động từ · Nhóm II|妹が一人います。|Tôi có một em gái.
かかります|かかります|mất, tốn (thời gian, tiền)|Động từ · Nhóm I|駅まで十分かかります。|Đến ga mất mười phút.
休みます|やすみます|nghỉ (học, làm)|Động từ · Nhóm I|明日会社を休みます。|Ngày mai tôi nghỉ làm.
りんご|りんご|quả táo|Danh từ|りんごを三つ買いました。|Tôi đã mua ba quả táo.
みかん|みかん|quả quýt|Danh từ|みかんを一つ食べます。|Tôi ăn một quả quýt.
サンドイッチ|サンドイッチ|bánh mì kẹp|Danh từ|サンドイッチを二つください。|Cho tôi hai bánh mì kẹp.
カレーライス|カレーライス|cơm cà ri|Danh từ|カレーライスを一つください。|Cho tôi một phần cơm cà ri.
アイスクリーム|アイスクリーム|kem|Danh từ|アイスクリームを二つ買います。|Tôi mua hai phần kem.
切手|きって|tem thư|Danh từ|切手を五枚買いました。|Tôi đã mua năm con tem.
はがき|はがき|bưu thiếp|Danh từ|はがきを二枚書きました。|Tôi đã viết hai tấm bưu thiếp.
封筒|ふうとう|phong bì|Danh từ|封筒を十枚ください。|Cho tôi mười chiếc phong bì.
速達|そくたつ|chuyển phát nhanh|Danh từ|この手紙を速達でお願いします。|Xin gửi lá thư này bằng chuyển phát nhanh.
書留|かきとめ|thư bảo đảm|Danh từ|この手紙を書留でお願いします。|Xin gửi lá thư này theo hình thức bảo đảm.
両親|りょうしん|bố mẹ (của mình)|Danh từ|両親はハノイにいます。|Bố mẹ tôi ở Hà Nội.
兄弟|きょうだい|anh chị em|Danh từ|兄弟が三人います。|Tôi có ba anh chị em.
兄|あに|anh trai (của mình)|Danh từ|兄が一人います。|Tôi có một anh trai.
お兄さん|おにいさん|anh trai (của người khác)|Danh từ|お兄さんはどこにいますか。|Anh trai bạn đang ở đâu?
姉|あね|chị gái (của mình)|Danh từ|姉は大阪にいます。|Chị gái tôi ở Osaka.
お姉さん|おねえさん|chị gái (của người khác)|Danh từ|お姉さんは先生ですか。|Chị gái bạn là giáo viên phải không?
弟|おとうと|em trai (của mình)|Danh từ|弟が二人います。|Tôi có hai em trai.
弟さん|おとうとさん|em trai (của người khác)|Danh từ|弟さんは学生ですか。|Em trai bạn là sinh viên phải không?
妹|いもうと|em gái (của mình)|Danh từ|妹は大学生です。|Em gái tôi là sinh viên đại học.
妹さん|いもうとさん|em gái (của người khác)|Danh từ|妹さんはおいくつですか。|Em gái bạn bao nhiêu tuổi?
外国|がいこく|nước ngoài|Danh từ|外国に友達がいます。|Tôi có bạn ở nước ngoài.
留学生|りゅうがくせい|du học sinh|Danh từ|留学生が五人います。|Có năm du học sinh.
～時間|～じかん|~ tiếng, giờ (thời lượng)|Khoảng thời gian|毎日二時間勉強します。|Mỗi ngày tôi học hai tiếng.
～週間|～しゅうかん|~ tuần (thời lượng)|Khoảng thời gian|日本に三週間います。|Tôi ở Nhật ba tuần.
～か月|～かげつ|~ tháng (thời lượng)|Khoảng thời gian|日本語を六か月勉強しました。|Tôi đã học tiếng Nhật sáu tháng.
～年|～ねん|~ năm|Khoảng thời gian|日本に二年いました。|Tôi đã ở Nhật hai năm.
～ぐらい|～ぐらい|khoảng, xấp xỉ ~|Hậu tố|三十分ぐらいかかります。|Mất khoảng ba mươi phút.
どのぐらい|どのぐらい|bao lâu, khoảng bao nhiêu|Từ để hỏi|駅までどのぐらいかかりますか。|Đến ga mất bao lâu?
全部で|ぜんぶで|tổng cộng, tất cả là|Cụm từ|全部で千円です。|Tổng cộng là một nghìn yên.
みんな|みんな|tất cả (người hoặc vật)|Danh từ / Phó từ|みんなで映画を見ます。|Mọi người cùng xem phim.
～だけ|～だけ|chỉ ~|Trợ từ|りんごを一つだけ食べました。|Tôi chỉ ăn một quả táo.
いらっしゃいませ|いらっしゃいませ|xin kính chào quý khách|Cụm giao tiếp|いらっしゃいませ。|Kính chào quý khách. (Nhân viên chào khách.)
いい天気ですね|いいてんきですね|thời tiết đẹp nhỉ|Cụm giao tiếp|いい天気ですね。|Thời tiết đẹp nhỉ.
お出かけですか|おでかけですか|anh/chị đi ra ngoài đấy à|Cụm giao tiếp|お出かけですか。|Anh/chị đi ra ngoài đấy à?
ちょっと～まで|ちょっと～まで|tôi đi ra ~ một chút|Cụm giao tiếp|ちょっと郵便局まで。|Tôi ra bưu điện một chút.
行っていらっしゃい|いっていらっしゃい|đi nhé, đi rồi về nhé (người ở lại nói)|Cụm giao tiếp|行っていらっしゃい。|Đi nhé! (Nói với người rời nhà.)
行ってきます|いってきます|tôi đi đây, tôi sẽ về (người ra đi nói)|Cụm giao tiếp|行ってきます。|Tôi đi đây!
船便|ふなびん|gửi bằng đường biển|Danh từ|この荷物を船便でお願いします。|Xin gửi kiện hàng này bằng đường biển.
航空便|こうくうびん|gửi bằng đường hàng không|Danh từ|この荷物を航空便でお願いします。|Xin gửi kiện hàng này bằng đường hàng không.
お願いします|おねがいします|làm ơn, nhờ anh/chị|Cụm giao tiếp|これをお願いします。|Làm ơn cho tôi cái này.
`,
);
const grammar10: Grammar[] = [
  {
    title: 'Có ai, có gì?',
    formula: 'N が あります / います',
    explanation:
      'Dùng あります cho đồ vật, cây cối; います cho người và động vật. が đánh dấu đối tượng tồn tại.',
    example: '庭に鳥がいます。',
    translation: 'Trong vườn có chim.',
    caution:
      'Cây, hoa dùng あります, dù là sinh vật. Phủ định: ありません / いません.',
  },
  {
    title: 'Ở đâu có gì?',
    formula: 'Địa điểm に N が あります / います',
    explanation:
      'Đặt nơi chốn trước に, đối tượng trước が để giới thiệu điều hiện diện ở đó.',
    example: '玄関に靴があります。',
    translation: 'Ở lối vào nhà có giày.',
    caution:
      'に đánh dấu nơi tồn tại. で dùng cho nơi diễn ra hành động: 図書館で勉強します.',
  },
  {
    title: 'Đối tượng ấy ở đâu?',
    formula: 'N は Địa điểm に あります / います',
    explanation:
      'Khi đã biết đối tượng và muốn nói nó ở đâu, đưa đối tượng lên làm chủ đề với は.',
    example: '先生は図書館にいます。',
    translation: 'Giáo viên ở thư viện.',
    caution:
      'Phân biệt: 図書館に先生がいます giới thiệu có giáo viên; 先生は図書館にいます nói vị trí của giáo viên.',
  },
  {
    title: 'Trên, dưới và ở giữa',
    formula: 'N の Vị trí に … / A と B の 間',
    explanation:
      'Ghép mốc vị trí với の rồi thêm 上, 下, 前, 後ろ, 中, 外, 隣, 近く… Dùng A と B の間 khi ở giữa hai mốc.',
    example: '薬局は駅と銀行の間にあります。',
    translation: 'Hiệu thuốc ở giữa ga và ngân hàng.',
    caution: 'Trật tự khác tiếng Việt: 机の下 = dưới bàn, không phải 下の机.',
  },
  {
    title: 'Liệt kê một vài ví dụ',
    formula: 'N1 や N2（など）',
    explanation:
      'や liệt kê đại diện, ngụ ý còn những thứ khác. など làm ý “vân vân” rõ hơn; と thường liệt kê đầy đủ.',
    example: '袋の中にパンや果物などがあります。',
    translation: 'Trong túi có bánh mì, trái cây, v.v.',
    caution: 'Không đặt や sau danh từ cuối. など là tùy chọn.',
  },
  {
    title: 'Hỏi và trả lời sự tồn tại',
    formula: '何が / だれが …か。何も / だれも …ません',
    explanation:
      '何 hỏi đồ vật hoặc động vật; だれ hỏi người. Phủ định toàn bộ: 何もありません (không có gì), だれもいません (không có ai).',
    example: '教室にだれもいません。',
    translation: 'Trong lớp không có ai.',
    caution:
      '何もいません cũng có thể dùng khi nói không có con vật nào. Chọn động từ theo đối tượng.',
  },
  {
    title: 'Hỏi tìm đồ một cách lịch sự',
    formula: 'N は ありませんか / N ですか',
    explanation:
      'ありませんか có thể dùng khi hỏi tìm đồ. Lặp lại Nですか giúp xác nhận điều vừa nghe.',
    example: '電池はありませんか。— 電池ですか。棚の上にあります。',
    translation: 'Có pin không ạ? — Pin à? Có ở trên kệ.',
    caution:
      'Ở đây ありませんか là câu hỏi tìm đồ, không nhất thiết mang nghĩa khẳng định “không có”.',
  },
];
const grammar11: Grammar[] = [
  {
    title: 'Đếm đồ vật từ 1 đến 10',
    formula: 'N を / が + Số lượng + V',
    explanation:
      'Dãy đếm chung: ひとつ・ふたつ・みっつ・よっつ・いつつ・むっつ・ななつ・やっつ・ここのつ・とお. Hỏi bằng いくつ.',
    example: 'みかんを六つ買いました。',
    translation: 'Tôi đã mua sáu quả quýt.',
    caution:
      'Không chèn に giữa số lượng và động từ: 六つ買いました, không phải 六つに買いました.',
  },
  {
    title: 'Chọn đúng đơn vị đếm',
    formula: '人: người · 台: máy/xe · 枚: vật mỏng · 回: lần',
    explanation:
      'Một người: ひとり; hai người: ふたり; bốn người: よにん. 何人, 何台, 何枚, 何回 dùng để hỏi số lượng tương ứng.',
    example: '駐車場に車が五台あります。',
    translation: 'Trong bãi đỗ xe có năm chiếc ô tô.',
    caution:
      '四人 đọc よにん, không phải よんにん. Tem đếm bằng 枚, không dùng 台.',
  },
  {
    title: 'Làm trong bao lâu?',
    formula: 'Khoảng thời gian + V',
    explanation:
      '時間 chỉ số giờ; 週間 chỉ số tuần; か月 chỉ số tháng. Thời lượng thường đặt trước động từ, không thêm に.',
    example: '毎晩一時間半勉強します。',
    translation: 'Mỗi tối tôi học một tiếng rưỡi.',
    caution:
      '一時 = 1 giờ trên đồng hồ; 一時間 = khoảng thời gian 1 tiếng. Một ngày: いちにち, không phải ついたち.',
  },
  {
    title: 'Mất bao lâu, khoảng bao nhiêu?',
    formula: 'どのぐらい かかりますか / Số lượng ぐらい',
    explanation:
      'かかります diễn tả thời gian hoặc tiền cần dùng. どのぐらい hỏi thời lượng; ぐらい diễn tả ước lượng.',
    example: '家から駅まで十五分ぐらいかかります。',
    translation: 'Từ nhà đến ga mất khoảng mười lăm phút.',
    caution: 'Phương tiện đi với で. ～から～まで nêu điểm đầu và điểm cuối.',
  },
  {
    title: 'Một tuần mấy lần?',
    formula: 'Khoảng thời gian に Số lần 回 + V',
    explanation:
      'に ở đây biểu thị tần suất “trong mỗi…”. Đặt số lần với 回 để nói thói quen.',
    example: '一週間に四回日本語を勉強します。',
    translation: 'Tôi học tiếng Nhật bốn lần một tuần.',
    caution:
      '一週間勉強します = học trong một tuần; 一週間に四回勉強します = học bốn lần mỗi tuần.',
  },
  {
    title: 'Chỉ từng đó thôi',
    formula: 'N / Số lượng + だけ',
    explanation:
      'だけ giới hạn đối tượng hoặc số lượng. Đặt ngay sau thành phần muốn giới hạn.',
    example: '今日は三十分だけ勉強します。',
    translation: 'Hôm nay tôi chỉ học ba mươi phút.',
    caution: '一人だけいます là “chỉ có một người”, không phải “không có ai”.',
  },
  {
    title: 'Nói về gia đình',
    formula: 'Anh chị em / 子ども が Số người います',
    explanation:
      'います cũng dùng khi nói mình có con cái, anh chị em. Dùng 兄・姉・弟・妹 cho người nhà mình; thêm cách xưng hô lịch sự cho nhà người khác.',
    example: '姉が一人と弟が一人います。',
    translation: 'Tôi có một chị gái và một em trai.',
    caution:
      'お兄さん / お姉さん để nói về anh/chị người khác. Khi hỏi 兄弟は何人ですか, cần chú ý ngữ cảnh có tính cả bản thân hay không.',
  },
];
function choices(
  id: number,
  rows: [string, string[], number, string, string][],
): ChoiceQuestion[] {
  return rows.map(([prompt, options, correct, explanation, topic], i) => ({
    id: `${id}-c${i + 1}`,
    prompt,
    options,
    correct,
    explanation,
    topic,
  }));
}
const choices10 = choices(10, [
  [
    '庭に猫が（　）。',
    ['あります', 'います', 'です', 'します'],
    1,
    '猫 là động vật nên dùng います.',
    'あります / います',
  ],
  [
    '公園に大きい木が（　）。',
    ['います', 'いません', 'あります', 'します'],
    2,
    'Cây cối dùng あります dù có sự sống.',
    'あります / います',
  ],
  [
    '箱の中（　）鍵があります。',
    ['に', 'で', 'を', 'へ'],
    0,
    'に đánh dấu nơi tồn tại của chìa khóa.',
    'Nơi tồn tại',
  ],
  [
    '田中さん（　）事務所にいます。Chọn trợ từ đưa Tanaka làm chủ đề.',
    ['が', 'を', 'に', 'は'],
    3,
    'は đưa Tanaka thành chủ đề để nói người ấy ở đâu.',
    'は / が',
  ],
  [
    '「Dưới bàn」là cụm nào?',
    ['下の机', '机の下', '机に下', '下に机'],
    1,
    'Mốc + の + vị trí: 机の下.',
    'Vị trí',
  ],
  [
    'Để hỏi có ai trong phòng: 部屋に（　）がいますか。',
    ['何', 'どこ', 'だれ', 'いくつ'],
    2,
    'だれ hỏi người; 何 hỏi đồ vật hoặc động vật.',
    'Từ để hỏi',
  ],
  [
    'Trong phòng không có ai: 部屋にだれも（　）。',
    ['いません', 'あります', 'います', 'ありません'],
    0,
    'だれも kết hợp いません để nói không có ai.',
    'Phủ định',
  ],
  [
    '学校は銀行（　）郵便局の間にあります。',
    ['や', 'の', 'に', 'と'],
    3,
    'A と B の間 = giữa A và B; cần xác định cả hai mốc.',
    '間',
  ],
  [
    'Liệt kê vài ví dụ: かばんに本（　）ペンなどがあります。',
    ['を', 'に', 'や', 'は'],
    2,
    'や…など liệt kê đại diện, không phải danh sách đầy đủ.',
    'や / など',
  ],
  [
    'Chọn câu đúng: “Con chó ở trước cửa.”',
    [
      '犬はドアの前にいます。',
      '犬はドアの前でいます。',
      '犬はドアの前にあります。',
      '犬はドアを前にいます。',
    ],
    0,
    '犬 dùng います; nơi tồn tại dùng に; trước cửa là ドアの前.',
    'Tổng hợp',
  ],
  [
    '冷蔵庫の中に何も（　）。',
    ['いません', 'います', 'あります', 'ありません'],
    3,
    'Không có đồ vật/thức ăn nào: 何もありません.',
    'Phủ định',
  ],
  [
    'Bạn muốn tìm pin trong cửa hàng. Câu nào phù hợp nhất?',
    [
      '電池はいますか。',
      '電池はありませんか。',
      '電池をいませんか。',
      '電池でありますか。',
    ],
    1,
    '電池はありませんか là cách lịch sự hỏi cửa hàng có pin không.',
    'Hỏi tìm đồ',
  ],
]);
const choices11 = choices(11, [
  [
    'りんごを（　）ください。Điền “3 quả”.',
    ['さんにん', 'みっつ', 'さんまい', 'さんだい'],
    1,
    'Ba đồ vật theo dãy đếm chung là みっつ.',
    'Số đếm chung',
  ],
  [
    '教室に学生が（　）います。Điền “2 người”.',
    ['ににん', 'にまい', 'ふたり', 'ふたつ'],
    2,
    'Hai người có cách đọc đặc biệt ふたり.',
    'Đếm người',
  ],
  [
    '「四人」đọc thế nào?',
    ['よにん', 'よんにん', 'しにん', 'よっつ'],
    0,
    'Bốn người đọc よにん.',
    'Đếm người',
  ],
  [
    '切手を五（　）買いました。',
    ['台', '人', '回', '枚'],
    3,
    'Tem là vật mỏng, phẳng nên đếm bằng 枚.',
    'Lượng từ',
  ],
  [
    '駐車場に車が三（　）あります。',
    ['枚', '台', '回', '人'],
    1,
    'Ô tô, xe cộ và máy móc đếm bằng 台.',
    'Lượng từ',
  ],
  [
    '一週間（　）二回テニスをします。',
    ['を', 'で', 'に', 'が'],
    2,
    'Khoảng thời gian に số lần 回 diễn tả tần suất.',
    'Tần suất',
  ],
  [
    'Chọn cách nói “Tôi học trong hai tiếng”.',
    [
      '二時間勉強します。',
      '二時勉強します。',
      '二時間に勉強します。',
      '二時間を勉強します。',
    ],
    0,
    'Thời lượng 二時間 không thêm に hay を trước động từ.',
    'Thời lượng',
  ],
  [
    '駅まで（　）かかりますか。Hỏi thời gian đi đến ga.',
    ['何人', 'いくつ', '何枚', 'どのぐらい'],
    3,
    'どのぐらいかかりますか hỏi mất bao lâu.',
    'かかります',
  ],
  [
    '“Chỉ một người”: 学生が一人（　）います。',
    ['ぐらい', 'など', 'だけ', 'に'],
    2,
    'だけ giới hạn đúng một người; ぐらい là khoảng.',
    'だけ',
  ],
  [
    '“Khoảng ba mươi phút”: 三十分（　）かかります。',
    ['ぐらい', 'だけに', 'に', 'を'],
    0,
    'ぐらい đứng sau lượng thời gian để chỉ ước lượng.',
    'ぐらい',
  ],
  [
    '「十」trong dãy ひとつ…đọc là gì?',
    ['じゅっつ', 'じゅうつ', 'とおつ', 'とお'],
    3,
    'Dãy đếm chung kết thúc bằng とお, không có つ.',
    'Số đếm chung',
  ],
  [
    'Nói với người khác: “Tôi có một chị gái.”',
    [
      'お姉さんが一人います。',
      '姉が一人います。',
      '姉が一枚います。',
      '姉が一人あります。',
    ],
    1,
    'Nói về chị mình dùng 姉; một người là 一人; có người dùng います.',
    'Gia đình',
  ],
]);
function translations(
  id: number,
  rows: Omit<Translation, 'id'>[],
): Translation[] {
  return rows.map((row, i) => ({ ...row, id: `${id}-t${i + 1}` }));
}
const translations10 = translations(10, [
  {
    jp: '庭に犬がいます。',
    kana: 'にわにいぬがいます。',
    vi: 'Trong vườn có chó.',
    viAlternatives: [
      'Có chó trong vườn.',
      'Trong vườn có một con chó.',
      'Có một con chó trong vườn.',
    ],
    topic: 'Sự tồn tại',
    explanation:
      '庭に chỉ nơi chốn; 犬が là đối tượng tồn tại; động vật dùng います.',
  },
  {
    jp: '机の下に箱があります。',
    kana: 'つくえのしたにはこがあります。',
    vi: 'Dưới bàn có một cái hộp.',
    viAlternatives: [
      'Có một cái hộp dưới bàn.',
      'Dưới bàn có hộp.',
      'Dưới bàn có cái hộp.',
    ],
    topic: 'Vị trí',
    explanation: 'Dưới bàn = 机の下. Hộp là đồ vật nên dùng あります.',
  },
  {
    jp: '猫はベッドの下にいます。',
    kana: 'ねこはベッドのしたにいます。',
    vi: 'Con mèo ở dưới giường.',
    viAlternatives: ['Mèo ở dưới giường.', 'Con mèo ở bên dưới giường.'],
    jpAlternatives: ['猫はベッドの下です。'],
    topic: 'Chủ đề は',
    explanation: '猫は đưa con mèo lên làm chủ đề; ベッドの下に nêu nơi nó ở.',
  },
  {
    jp: '銀行は本屋の隣にあります。',
    kana: 'ぎんこうはほんやのとなりにあります。',
    vi: 'Ngân hàng ở cạnh hiệu sách.',
    viAlternatives: [
      'Ngân hàng nằm cạnh hiệu sách.',
      'Ngân hàng ở bên cạnh nhà sách.',
      'Ngân hàng ở bên cạnh hiệu sách.',
    ],
    jpAlternatives: ['銀行は本屋の隣です。'],
    topic: '隣',
    explanation: 'Cạnh hiệu sách = 本屋の隣. Ngân hàng dùng あります.',
  },
  {
    jp: '教室にだれもいません。',
    kana: 'きょうしつにだれもいません。',
    vi: 'Trong lớp không có ai.',
    viAlternatives: [
      'Không có ai trong lớp.',
      'Trong phòng học không có ai.',
      'Không có ai trong lớp học.',
    ],
    jpAlternatives: ['教室にはだれもいません。'],
    topic: 'Phủ định',
    explanation:
      'だれも + いません = không có ai; không dùng ありません cho người.',
  },
  {
    jp: '箱の中に何がありますか。',
    kana: 'はこのなかになにがありますか。',
    vi: 'Trong hộp có gì?',
    viAlternatives: ['Có gì trong hộp?', 'Trong cái hộp có gì?'],
    topic: 'Câu hỏi',
    explanation: '何が hỏi đồ vật. 箱の中に = trong hộp.',
  },
  {
    jp: '公園は学校の後ろにあります。',
    kana: 'こうえんはがっこうのうしろにあります。',
    vi: 'Công viên ở sau trường.',
    viAlternatives: [
      'Công viên ở phía sau trường.',
      'Công viên nằm sau trường học.',
      'Công viên ở sau trường học.',
    ],
    jpAlternatives: ['公園は学校の後ろです。'],
    topic: '後ろ',
    explanation: 'Sau trường = 学校の後ろ. Dùng の để nối mốc và vị trí.',
  },
  {
    jp: '先生はどこにいますか。',
    kana: 'せんせいはどこにいますか。',
    vi: 'Giáo viên đang ở đâu?',
    viAlternatives: [
      'Thầy giáo đang ở đâu?',
      'Cô giáo đang ở đâu?',
      'Giáo viên ở đâu?',
    ],
    jpAlternatives: ['先生はどこですか。'],
    topic: 'Hỏi vị trí',
    explanation:
      'どこ hỏi địa điểm. Người dùng います; どこですか cũng tự nhiên.',
  },
  {
    jp: '冷蔵庫の中に何もありません。',
    kana: 'れいぞうこのなかになにもありません。',
    vi: 'Trong tủ lạnh không có gì.',
    viAlternatives: [
      'Không có gì trong tủ lạnh.',
      'Trong tủ lạnh không có gì cả.',
    ],
    jpAlternatives: ['冷蔵庫の中には何もありません。'],
    topic: 'Phủ định',
    explanation: '何も + ありません phủ định toàn bộ đồ vật, thức ăn.',
  },
  {
    jp: '駅の近くに喫茶店があります。',
    kana: 'えきのちかくにきっさてんがあります。',
    vi: 'Gần ga có một quán cà phê.',
    viAlternatives: [
      'Gần nhà ga có quán cà phê.',
      'Có một quán cà phê gần ga.',
      'Gần ga có quán cà phê.',
    ],
    topic: '近く',
    explanation: '駅の近くに = ở gần ga. が giới thiệu quán cà phê.',
  },
  {
    jp: '銀行は学校と本屋の間にあります。',
    kana: 'ぎんこうはがっこうとほんやのあいだにあります。',
    vi: 'Ngân hàng ở giữa trường và hiệu sách.',
    viAlternatives: [
      'Ngân hàng nằm giữa trường và hiệu sách.',
      'Ngân hàng ở giữa trường học và nhà sách.',
    ],
    jpAlternatives: [
      '銀行は本屋と学校の間にあります。',
      '銀行は学校と本屋の間です。',
    ],
    topic: '間',
    explanation: 'A と B の間 = giữa A và B. Có thể đổi thứ tự hai mốc.',
  },
  {
    jp: 'かばんの中に本やペンなどがあります。',
    kana: 'かばんのなかにほんやペンなどがあります。',
    vi: 'Trong cặp có sách, bút, vân vân.',
    viAlternatives: [
      'Trong cặp có sách, bút và những thứ khác.',
      'Trong cặp có sách, bút, v.v.',
    ],
    jpAlternatives: ['かばんの中に本やペンがあります。'],
    topic: 'Liệt kê',
    explanation: 'や…など nêu một vài ví dụ; など có thể lược bỏ.',
  },
]);
const translations11 = translations(11, [
  {
    jp: 'りんごを三つ買いました。',
    kana: 'りんごをみっつかいました。',
    vi: 'Tôi đã mua ba quả táo.',
    viAlternatives: ['Tôi đã mua 3 quả táo.', 'Tôi mua ba quả táo rồi.'],
    jpAlternatives: ['私はりんごを三つ買いました。'],
    topic: 'Số lượng',
    explanation:
      '三つ = みっつ. を đánh dấu vật được mua; 買いました là quá khứ.',
  },
  {
    jp: '子どもが二人います。',
    kana: 'こどもがふたりいます。',
    vi: 'Tôi có hai con.',
    viAlternatives: [
      'Tôi có 2 con.',
      'Tôi có hai người con.',
      'Có hai đứa trẻ.',
    ],
    jpAlternatives: ['私は子どもが二人います。'],
    topic: 'Đếm người',
    explanation:
      '二人 đọc ふたり. Trong ngữ cảnh gia đình, 子どもがいます là có con; câu cũng có thể nói có trẻ em hiện diện.',
  },
  {
    jp: '切手を四枚ください。',
    kana: 'きってをよんまいください。',
    vi: 'Cho tôi bốn con tem.',
    viAlternatives: [
      'Cho tôi 4 con tem.',
      'Làm ơn cho tôi bốn con tem.',
      'Xin cho tôi bốn con tem.',
    ],
    topic: '枚',
    explanation:
      'Tem dùng 枚. 四枚 đọc よんまい. をください dùng khi yêu cầu món đồ.',
  },
  {
    jp: '毎日二時間日本語を勉強します。',
    kana: 'まいにちにじかんにほんごをべんきょうします。',
    vi: 'Mỗi ngày tôi học tiếng Nhật hai tiếng.',
    viAlternatives: [
      'Tôi học tiếng Nhật hai tiếng mỗi ngày.',
      'Mỗi ngày tôi học tiếng Nhật 2 tiếng.',
      'Mỗi ngày tôi học tiếng Nhật hai giờ.',
    ],
    jpAlternatives: [
      '毎日日本語を二時間勉強します。',
      '私は毎日二時間日本語を勉強します。',
    ],
    topic: 'Thời lượng',
    explanation:
      '二時間 là hai tiếng thời lượng, không thêm に. Có thể đổi vị trí thời lượng và 日本語を.',
  },
  {
    jp: '一週間に二回テニスをします。',
    kana: 'いっしゅうかんににかいテニスをします。',
    vi: 'Tôi chơi quần vợt hai lần một tuần.',
    viAlternatives: [
      'Một tuần tôi chơi tennis hai lần.',
      'Tôi chơi tennis hai lần một tuần.',
      'Tôi chơi quần vợt 2 lần một tuần.',
    ],
    jpAlternatives: ['私は一週間に二回テニスをします。'],
    topic: 'Tần suất',
    explanation:
      '一週間に = mỗi tuần; 二回 = hai lần; テニスをします = chơi quần vợt.',
  },
  {
    jp: '家から駅まで十五分かかります。',
    kana: 'うちからえきまでじゅうごふんかかります。',
    vi: 'Từ nhà đến ga mất mười lăm phút.',
    viAlternatives: [
      'Từ nhà đến ga mất 15 phút.',
      'Từ nhà tới nhà ga mất mười lăm phút.',
    ],
    jpAlternatives: ['いえからえきまでじゅうごふんかかります。'],
    topic: 'かかります',
    explanation:
      'から…まで xác định điểm đầu và cuối. 十五分かかります = mất 15 phút.',
  },
  {
    jp: 'りんごを一つだけ食べました。',
    kana: 'りんごをひとつだけたべました。',
    vi: 'Tôi chỉ ăn một quả táo.',
    viAlternatives: [
      'Tôi chỉ ăn 1 quả táo.',
      'Tôi đã ăn chỉ một quả táo.',
      'Tôi đã chỉ ăn một quả táo.',
    ],
    jpAlternatives: ['私はりんごを一つだけ食べました。'],
    topic: 'だけ',
    explanation:
      'だけ đặt sau 一つ để giới hạn số lượng. Dùng 食べました (đã ăn) trong bài này.',
  },
  {
    jp: '駐車場に車が三台あります。',
    kana: 'ちゅうしゃじょうにくるまがさんだいあります。',
    vi: 'Trong bãi đỗ xe có ba chiếc ô tô.',
    viAlternatives: [
      'Trong bãi đỗ xe có 3 chiếc ô tô.',
      'Có ba chiếc ô tô trong bãi đỗ xe.',
      'Trong bãi xe có ba chiếc ô tô.',
    ],
    topic: '台',
    explanation: 'Xe cộ dùng 台; ba xe là 三台. に đánh dấu nơi tồn tại.',
  },
  {
    jp: '日本語を六か月勉強しました。',
    kana: 'にほんごをろっかげつべんきょうしました。',
    vi: 'Tôi đã học tiếng Nhật sáu tháng.',
    viAlternatives: [
      'Tôi đã học tiếng Nhật 6 tháng.',
      'Tôi đã học tiếng Nhật trong sáu tháng.',
    ],
    jpAlternatives: [
      '私は日本語を六か月勉強しました。',
      '六か月日本語を勉強しました。',
    ],
    topic: 'か月',
    explanation: '六か月 đọc ろっかげつ. Khoảng thời gian không cần trợ từ に.',
  },
  {
    jp: '三十分ぐらいかかります。',
    kana: 'さんじゅっぷんぐらいかかります。',
    vi: 'Mất khoảng ba mươi phút.',
    viAlternatives: ['Mất khoảng 30 phút.', 'Tốn khoảng ba mươi phút.'],
    jpAlternatives: [
      'さんじっぷんぐらいかかります。',
      '三十分くらいかかります。',
    ],
    topic: 'ぐらい',
    explanation:
      'ぐらい / くらい = khoảng. 三十分 đọc さんじゅっぷん (cũng có さんじっぷん).',
  },
  {
    jp: '姉が一人います。',
    kana: 'あねがひとりいます。',
    vi: 'Tôi có một chị gái.',
    viAlternatives: ['Tôi có 1 chị gái.', 'Tôi có một người chị gái.'],
    jpAlternatives: ['私は姉が一人います。'],
    topic: 'Gia đình',
    explanation:
      '姉 dùng để nói về chị mình với người khác; một người là 一人 (ひとり).',
  },
  {
    jp: 'みかんをいくつ買いましたか。',
    kana: 'みかんをいくつかいましたか。',
    vi: 'Bạn đã mua bao nhiêu quả quýt?',
    viAlternatives: [
      'Bạn đã mua mấy quả quýt?',
      'Bạn mua bao nhiêu quả quýt rồi?',
    ],
    topic: 'Hỏi số lượng',
    explanation:
      'いくつ hỏi số lượng đồ vật. 買いましたか hỏi một việc mua đã diễn ra.',
  },
]);
const authoredLessons: Record<number, Lesson> = {
  1: lesson1,
  2: lesson2,
  3: lesson3,
  4: lesson4,
  5: lesson5,
  6: lesson6,
  7: lesson7,
  8: lesson8,
  9: lesson9,
  12: lesson12,
  13: lesson13,
  14: lesson14,
  15: lesson15,
  16: lesson16,
  17: lesson17,
  18: lesson18,
  19: lesson19,
  20: lesson20,
  21: lesson21,
  22: lesson22,
  23: lesson23,
  24: lesson24,
  25: lesson25,
  ...n4Lessons,
  10: {
    id: 10,
    words: words10,
    grammar: grammar10,
    choices: choices10,
    translations: translations10,
  },
  11: {
    id: 11,
    words: words11,
    grammar: grammar11,
    choices: choices11,
    translations: translations11,
  },
};

export const lessons: Record<number, Lesson> = Object.fromEntries(
  Object.entries(authoredLessons).map(([id, lesson]) => [
    Number(id),
    expandLessonChoices({
      ...lesson,
      words: [...lesson.words, ...(supplementalVocabulary[Number(id)] ?? [])],
    }),
  ]),
);

export const lessonIds = Object.keys(lessons)
  .map(Number)
  .sort((a, b) => a - b);
export const n5LessonIds = lessonIds.filter((id) => id <= 25);
export const n4LessonIds = lessonIds.filter((id) => id >= 26);
export function isLessonId(value: string): boolean {
  return lessonIds.some((id) => String(id) === value);
}
