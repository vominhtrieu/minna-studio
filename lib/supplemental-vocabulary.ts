import type { Word } from './lessons.ts';

function supplementalRows(lessonId: number, text: string): Word[] {
  return text
    .trim()
    .split('\n')
    .map((line, index) => {
      const fields = line.trim().split('|');
      if (fields.length !== 6 || fields.some((field) => !field.trim())) {
        throw new Error(
          `Invalid supplemental vocabulary ${lessonId}:${index + 1}`,
        );
      }
      const [jp, kana, vi, type, example, translation] = fields;
      return {
        id: `${lessonId}-s${index + 1}`,
        jp,
        kana,
        vi,
        type,
        example,
        translation,
      };
    });
}

/**
 * Core second-edition vocabulary and useful classroom expressions missing from
 * the original lesson drafts. Fictitious company and character names are not
 * included because they do not add reusable N5 knowledge.
 */
export const supplementalVocabulary: Record<number, Word[]> = {
  1: supplementalRows(
    1,
    `
～さん|～さん|anh, chị, ông, bà (hậu tố lịch sự)|Hậu tố xưng hô|田中さんは先生です。|Anh Tanaka là giáo viên.
～ちゃん|～ちゃん|bé, em (hậu tố thân mật)|Hậu tố xưng hô|ミラーちゃんは五歳です。|Bé Mira năm tuổi.
～歳|～さい|~ tuổi|Hậu tố số đếm|マリアさんは十八歳です。|Chị Maria 18 tuổi.
はい|はい|vâng, có|Cụm giao tiếp|はい、学生です。|Vâng, tôi là sinh viên.
いいえ|いいえ|không, không phải|Cụm giao tiếp|いいえ、医者じゃありません。|Không, tôi không phải bác sĩ.
お名前は|おなまえは|bạn tên là gì|Cụm giao tiếp|失礼ですが、お名前は。|Xin lỗi, bạn tên là gì?
こちらは～さんです|こちらは～さんです|đây là anh hoặc chị ~|Mẫu giới thiệu|こちらは田中さんです。|Đây là anh Tanaka.
アメリカ|アメリカ|Hoa Kỳ|Tên quốc gia|アメリカから来ました。|Tôi đến từ Hoa Kỳ.
イギリス|イギリス|Vương quốc Anh|Tên quốc gia|イギリスから来ました。|Tôi đến từ Anh.
インド|インド|Ấn Độ|Tên quốc gia|インドから来ました。|Tôi đến từ Ấn Độ.
インドネシア|インドネシア|Indonesia|Tên quốc gia|インドネシアから来ました。|Tôi đến từ Indonesia.
韓国|かんこく|Hàn Quốc|Tên quốc gia|韓国から来ました。|Tôi đến từ Hàn Quốc.
タイ|タイ|Thái Lan|Tên quốc gia|タイから来ました。|Tôi đến từ Thái Lan.
中国|ちゅうごく|Trung Quốc|Tên quốc gia|中国から来ました。|Tôi đến từ Trung Quốc.
ドイツ|ドイツ|Đức|Tên quốc gia|ドイツから来ました。|Tôi đến từ Đức.
日本|にほん|Nhật Bản|Tên quốc gia|日本の会社員です。|Tôi là nhân viên công ty Nhật Bản.
ブラジル|ブラジル|Brazil|Tên quốc gia|ブラジルから来ました。|Tôi đến từ Brazil.
社員|しゃいん|nhân viên của một công ty cụ thể|Danh từ nghề nghiệp|私はIMCの社員です。|Tôi là nhân viên của công ty IMC.
～から来ました|～からきました|đến từ ~|Mẫu giới thiệu|ベトナムから来ました。|Tôi đến từ Việt Nam.
どうぞよろしくお願いします|どうぞよろしくおねがいします|rất mong được giúp đỡ, rất vui được làm quen|Cụm chào hỏi|はじめまして。どうぞよろしくお願いします。|Rất hân hạnh được làm quen.
`,
  ),
  2: supplementalRows(
    2,
    `
ボールペン|ボールペン|bút bi|Danh từ|これはボールペンです。|Đây là bút bi.
シャープペンシル|シャープペンシル|bút chì kim|Danh từ|そのシャープペンシルは私のです。|Cây bút chì kim đó là của tôi.
鍵|かぎ|chìa khóa|Danh từ|これは車の鍵です。|Đây là chìa khóa ô tô.
CD|シーディー|đĩa CD|Danh từ|これは日本語のCDです。|Đây là đĩa CD tiếng Nhật.
テレビ|テレビ|ti vi|Danh từ|あれはテレビです。|Kia là ti vi.
ラジオ|ラジオ|đài radio|Danh từ|これはラジオです。|Đây là đài radio.
コンピューター|コンピューター|máy tính|Danh từ|そのコンピューターは会社のです。|Máy tính đó là của công ty.
車|くるま|ô tô, xe|Danh từ|あの車は田中さんのです。|Chiếc xe kia là của anh Tanaka.
机|つくえ|bàn học, bàn làm việc|Danh từ|これは先生の机です。|Đây là bàn của giáo viên.
椅子|いす|cái ghế|Danh từ|その椅子は新しいです。|Chiếc ghế đó mới.
チョコレート|チョコレート|sô-cô-la|Danh từ|これは日本のチョコレートです。|Đây là sô-cô-la Nhật Bản.
コーヒー|コーヒー|cà phê|Danh từ|これはブラジルのコーヒーです。|Đây là cà phê Brazil.
お土産|おみやげ|quà lưu niệm, quà mang về|Danh từ|これは京都のお土産です。|Đây là quà lưu niệm từ Kyoto.
日本語|にほんご|tiếng Nhật|Danh từ|これは日本語の辞書です。|Đây là từ điển tiếng Nhật.
～語|～ご|tiếng ~, ngôn ngữ ~|Hậu tố|これは何語ですか。|Đây là tiếng gì?
あのう|あのう|ờ, xin hỏi|Thán từ|あのう、これは何ですか。|Xin hỏi, đây là gì?
えっ|えっ|hả, ồ (ngạc nhiên)|Thán từ|えっ、これですか。|Hả, cái này sao?
あっ|あっ|à, a (chợt nhận ra)|Thán từ|あっ、私の傘です。|À, đó là ô của tôi.
これからお世話になります|これからおせわになります|từ nay mong được bạn giúp đỡ|Cụm chào hỏi|これからお世話になります。|Từ nay mong được anh chị giúp đỡ.
こちらこそよろしくお願いします|こちらこそよろしくおねがいします|chính tôi cũng mong được giúp đỡ|Cụm đáp lời|こちらこそよろしくお願いします。|Chính tôi cũng rất mong được giúp đỡ.
`,
  ),
  3: supplementalRows(
    3,
    `
自動販売機|じどうはんばいき|máy bán hàng tự động|Danh từ|自動販売機は一階です。|Máy bán hàng tự động ở tầng một.
電話|でんわ|điện thoại, cuộc gọi|Danh từ|電話は事務所にあります。|Điện thoại ở văn phòng.
ワイン|ワイン|rượu vang|Danh từ|このワインはフランスのです。|Rượu vang này là của Pháp.
百|ひゃく|một trăm|Số|これは百円です。|Cái này giá 100 yên.
千|せん|một nghìn|Số|その時計は千円です。|Chiếc đồng hồ đó giá 1.000 yên.
万|まん|mười nghìn|Số|このかばんは一万円です。|Chiếc cặp này giá 10.000 yên.
どうも|どうも|cảm ơn, chào|Cụm giao tiếp|どうも、ありがとうございます。|Xin cảm ơn nhiều.
見せてください|みせてください|hãy cho tôi xem|Cụm giao tiếp|その時計を見せてください。|Hãy cho tôi xem chiếc đồng hồ đó.
じゃ|じゃ|vậy thì, thế thì|Liên từ hội thoại|じゃ、これをください。|Vậy thì cho tôi cái này.
イタリア|イタリア|Ý|Tên quốc gia|これはイタリアのワインです。|Đây là rượu vang Ý.
スイス|スイス|Thụy Sĩ|Tên quốc gia|この時計はスイスのです。|Chiếc đồng hồ này là của Thụy Sĩ.
フランス|フランス|Pháp|Tên quốc gia|フランスの会社です。|Đó là công ty Pháp.
～階|～かい|tầng ~|Hậu tố số đếm|食堂は三階です。|Nhà ăn ở tầng ba.
～円|～えん|~ yên|Hậu tố tiền tệ|この本は千円です。|Cuốn sách này giá 1.000 yên.
すみません|すみません|xin lỗi, làm phiền|Cụm giao tiếp|すみません、トイレはどこですか。|Xin lỗi, nhà vệ sinh ở đâu?
～をください|～をください|cho tôi ~|Mẫu mua hàng|この時計をください。|Cho tôi chiếc đồng hồ này.
`,
  ),
  4: supplementalRows(
    4,
    `
～分|～ふん|~ phút|Đơn vị thời gian|今、九時十分です。|Bây giờ là 9 giờ 10 phút.
おととい|おととい|hôm kia|Danh từ thời gian|おととい休みました。|Hôm kia tôi đã nghỉ.
あさって|あさって|ngày kia|Danh từ thời gian|あさって働きます。|Ngày kia tôi đi làm.
けさ|けさ|sáng nay|Danh từ thời gian|けさ六時に起きました。|Sáng nay tôi thức dậy lúc 6 giờ.
今晩|こんばん|tối nay|Danh từ thời gian|今晩勉強します。|Tối nay tôi học.
休み|やすみ|ngày nghỉ, sự nghỉ ngơi|Danh từ|日曜日は休みです。|Chủ nhật là ngày nghỉ.
昼休み|ひるやすみ|giờ nghỉ trưa|Danh từ|昼休みは十二時からです。|Giờ nghỉ trưa bắt đầu từ 12 giờ.
毎朝|まいあさ|mỗi sáng|Danh từ thời gian|毎朝七時に起きます。|Mỗi sáng tôi thức dậy lúc 7 giờ.
毎晩|まいばん|mỗi tối|Danh từ thời gian|毎晩日本語を勉強します。|Mỗi tối tôi học tiếng Nhật.
月曜日|げつようび|thứ Hai|Thứ trong tuần|月曜日に働きます。|Tôi làm việc vào thứ Hai.
火曜日|かようび|thứ Ba|Thứ trong tuần|火曜日は休みです。|Thứ Ba là ngày nghỉ.
水曜日|すいようび|thứ Tư|Thứ trong tuần|水曜日に会議があります。|Thứ Tư có cuộc họp.
木曜日|もくようび|thứ Năm|Thứ trong tuần|木曜日に勉強します。|Tôi học vào thứ Năm.
金曜日|きんようび|thứ Sáu|Thứ trong tuần|金曜日に映画を見ます。|Tôi xem phim vào thứ Sáu.
土曜日|どようび|thứ Bảy|Thứ trong tuần|土曜日は働きません。|Thứ Bảy tôi không làm việc.
日曜日|にちようび|Chủ nhật|Thứ trong tuần|日曜日は休みです。|Chủ nhật là ngày nghỉ.
何曜日|なんようび|thứ mấy|Từ để hỏi|今日は何曜日ですか。|Hôm nay là thứ mấy?
～から|～から|từ ~|Trợ từ thời gian|銀行は九時からです。|Ngân hàng mở cửa từ 9 giờ.
～まで|～まで|đến ~|Trợ từ thời gian|五時まで働きます。|Tôi làm việc đến 5 giờ.
～と～|～と～|~ và ~|Trợ từ nối danh từ|休みは土曜日と日曜日です。|Ngày nghỉ là thứ Bảy và Chủ nhật.
大変ですね|たいへんですね|vất vả nhỉ|Cụm giao tiếp|毎晩十時までですか。大変ですね。|Tối nào cũng đến 10 giờ sao? Vất vả nhỉ.
何番|なんばん|số mấy|Từ để hỏi|電話番号は何番ですか。|Số điện thoại là số mấy?
～時|～じ|~ giờ|Hậu tố thời gian|銀行は九時からです。|Ngân hàng mở cửa từ 9 giờ.
番号|ばんごう|số, số hiệu|Danh từ|電話番号を書いてください。|Hãy viết số điện thoại.
`,
  ),
  5: supplementalRows(
    5,
    `
先月|せんげつ|tháng trước|Danh từ thời gian|先月日本へ行きました。|Tháng trước tôi đã đi Nhật.
今月|こんげつ|tháng này|Danh từ thời gian|今月大阪へ行きます。|Tháng này tôi đi Osaka.
来月|らいげつ|tháng sau|Danh từ thời gian|来月国へ帰ります。|Tháng sau tôi về nước.
去年|きょねん|năm ngoái|Danh từ thời gian|去年日本へ来ました。|Năm ngoái tôi đã đến Nhật.
ことし|ことし|năm nay|Danh từ thời gian|ことし二十歳です。|Năm nay tôi 20 tuổi.
来年|らいねん|năm sau|Danh từ thời gian|来年大学へ行きます。|Năm sau tôi vào đại học.
何年|なんねん|năm nào, bao nhiêu năm|Từ để hỏi|何年に日本へ来ましたか。|Bạn đến Nhật vào năm nào?
～月|～がつ|tháng ~|Hậu tố thời gian|四月に日本へ来ました。|Tôi đến Nhật vào tháng Tư.
何月|なんがつ|tháng mấy|Từ để hỏi|誕生日は何月ですか。|Sinh nhật bạn vào tháng mấy?
一日|ついたち|ngày mùng một|Ngày trong tháng|一日に東京へ行きます。|Tôi đi Tokyo vào ngày mùng một.
二日|ふつか|ngày mùng hai, hai ngày|Ngày trong tháng|二日に帰ります。|Tôi về vào ngày mùng hai.
三日|みっか|ngày mùng ba, ba ngày|Ngày trong tháng|三日に大阪へ行きます。|Tôi đi Osaka vào ngày mùng ba.
四日|よっか|ngày mùng bốn, bốn ngày|Ngày trong tháng|四日に来ます。|Tôi đến vào ngày mùng bốn.
五日|いつか|ngày mùng năm, năm ngày|Ngày trong tháng|五日は休みです。|Ngày mùng năm là ngày nghỉ.
六日|むいか|ngày mùng sáu, sáu ngày|Ngày trong tháng|六日に帰ります。|Tôi về vào ngày mùng sáu.
七日|なのか|ngày mùng bảy, bảy ngày|Ngày trong tháng|七日に会います。|Chúng ta gặp nhau vào ngày mùng bảy.
九日|ここのか|ngày mùng chín, chín ngày|Ngày trong tháng|九日に行きます。|Tôi đi vào ngày mùng chín.
十日|とおか|ngày mùng mười, mười ngày|Ngày trong tháng|十日に来ます。|Tôi đến vào ngày mùng mười.
十四日|じゅうよっか|ngày mười bốn, mười bốn ngày|Ngày trong tháng|十四日に帰ります。|Tôi về vào ngày 14.
二十日|はつか|ngày hai mươi, hai mươi ngày|Ngày trong tháng|二十日は日曜日です。|Ngày 20 là Chủ nhật.
二十四日|にじゅうよっか|ngày hai mươi tư, hai mươi tư ngày|Ngày trong tháng|二十四日に出発します。|Tôi khởi hành vào ngày 24.
何日|なんにち|ngày mấy, bao nhiêu ngày|Từ để hỏi|今日は何日ですか。|Hôm nay là ngày mấy?
誕生日|たんじょうび|sinh nhật|Danh từ|誕生日は五月五日です。|Sinh nhật tôi là ngày 5 tháng 5.
ありがとうございました|ありがとうございました|xin cảm ơn (về việc đã qua)|Cụm giao tiếp|どうもありがとうございました。|Xin chân thành cảm ơn.
どういたしまして|どういたしまして|không có gì|Cụm giao tiếp|いいえ、どういたしまして。|Không có gì.
～番線|～ばんせん|sân ga số ~|Hậu tố|東京行きは三番線です。|Tàu đi Tokyo ở sân ga số 3.
次の|つぎの|tiếp theo|Từ chỉ định|次の電車で行きます。|Tôi đi chuyến tàu tiếp theo.
普通|ふつう|tàu thường|Danh từ|普通で大阪へ行きます。|Tôi đi Osaka bằng tàu thường.
急行|きゅうこう|tàu nhanh|Danh từ|急行に乗ります。|Tôi lên tàu nhanh.
特急|とっきゅう|tàu tốc hành đặc biệt|Danh từ|特急は速いです。|Tàu tốc hành đặc biệt rất nhanh.
八日|ようか|ngày mùng tám, tám ngày|Ngày trong tháng|八日に大阪へ行きます。|Tôi đi Osaka vào ngày mùng tám.
～日|～にち|ngày ~, ~ ngày|Hậu tố thời gian|旅行は三日です。|Chuyến đi kéo dài ba ngày.
`,
  ),
  6: supplementalRows(
    6,
    `
紅茶|こうちゃ|trà đen|Danh từ|紅茶を飲みます。|Tôi uống trà đen.
牛乳|ぎゅうにゅう|sữa bò|Danh từ|毎朝牛乳を飲みます。|Mỗi sáng tôi uống sữa.
ジュース|ジュース|nước trái cây|Danh từ|ジュースを買います。|Tôi mua nước trái cây.
ビール|ビール|bia|Danh từ|ビールを飲みません。|Tôi không uống bia.
お酒|おさけ|rượu, đồ uống có cồn|Danh từ|お酒を飲みますか。|Bạn có uống rượu không?
たばこ|たばこ|thuốc lá|Danh từ|ここでたばこを吸いません。|Tôi không hút thuốc ở đây.
レポート|レポート|báo cáo|Danh từ|レポートを書きます。|Tôi viết báo cáo.
ビデオ|ビデオ|video|Danh từ|家でビデオを見ます。|Tôi xem video ở nhà.
宿題|しゅくだい|bài tập về nhà|Danh từ|宿題をします。|Tôi làm bài tập về nhà.
テニス|テニス|quần vợt|Danh từ|日曜日にテニスをします。|Chủ nhật tôi chơi quần vợt.
サッカー|サッカー|bóng đá|Danh từ|友達とサッカーをします。|Tôi chơi bóng đá với bạn.
お花見|おはなみ|ngắm hoa anh đào|Danh từ hoạt động|四月にお花見をします。|Tháng Tư tôi đi ngắm hoa anh đào.
いっしょに|いっしょに|cùng nhau|Phó từ|いっしょに昼ごはんを食べませんか。|Chúng ta cùng ăn trưa nhé?
ちょっと|ちょっと|một chút|Phó từ|ちょっと休みます。|Tôi nghỉ một chút.
いつも|いつも|luôn luôn, thường xuyên|Phó từ|いつも図書館で勉強します。|Tôi luôn học ở thư viện.
時々|ときどき|thỉnh thoảng|Phó từ|時々映画を見ます。|Tôi thỉnh thoảng xem phim.
それから|それから|sau đó, rồi thì|Liên từ|ごはんを食べます。それから、勉強します。|Tôi ăn cơm. Sau đó tôi học.
ええ|ええ|vâng|Cụm giao tiếp|ええ、いいですね。|Vâng, hay đấy.
いいですね|いいですね|hay đấy, tốt nhỉ|Cụm giao tiếp|いっしょに行きませんか。いいですね。|Đi cùng nhau nhé? Hay đấy.
分かりました|わかりました|tôi hiểu rồi|Cụm giao tiếp|はい、分かりました。|Vâng, tôi hiểu rồi.
メキシコ|メキシコ|Mexico|Tên quốc gia|メキシコから来ました。|Tôi đến từ Mexico.
何ですか|なんですか|gì vậy, có chuyện gì|Cụm để hỏi|それは何ですか。|Cái đó là gì?
じゃ、また|じゃ、また|vậy nhé, hẹn gặp lại|Cụm tạm biệt|じゃ、またあした。|Vậy nhé, hẹn gặp lại ngày mai.
`,
  ),
  7: supplementalRows(
    7,
    `
ケータイ|ケータイ|điện thoại di động|Danh từ|ケータイで電話をかけます。|Tôi gọi điện bằng điện thoại di động.
メール|メール|thư điện tử|Danh từ|友達にメールを送ります。|Tôi gửi email cho bạn.
年賀状|ねんがじょう|thiệp chúc mừng năm mới|Danh từ|先生に年賀状を送ります。|Tôi gửi thiệp năm mới cho giáo viên.
パンチ|パンチ|dụng cụ bấm lỗ|Danh từ|パンチで紙に穴を開けます。|Tôi dùng dụng cụ bấm lỗ để đục giấy.
ホッチキス|ホッチキス|dập ghim|Danh từ|ホッチキスで紙を留めます。|Tôi dùng dập ghim để ghim giấy.
セロテープ|セロテープ|băng dính trong|Danh từ|セロテープで紙を貼ります。|Tôi dán giấy bằng băng dính.
消しゴム|けしゴム|cục tẩy|Danh từ|消しゴムで字を消します。|Tôi xóa chữ bằng cục tẩy.
クリスマス|クリスマス|Giáng sinh|Danh từ|クリスマスにプレゼントをあげます。|Tôi tặng quà vào Giáng sinh.
父|ちち|bố của tôi|Danh từ gia đình|父に時計をあげました。|Tôi đã tặng bố đồng hồ.
母|はは|mẹ của tôi|Danh từ gia đình|母に花をあげました。|Tôi đã tặng mẹ hoa.
お父さん|おとうさん|bố của người khác, bố|Danh từ gia đình|田中さんのお父さんは先生です。|Bố của anh Tanaka là giáo viên.
お母さん|おかあさん|mẹ của người khác, mẹ|Danh từ gia đình|山田さんのお母さんに会いました。|Tôi đã gặp mẹ của anh Yamada.
これから|これから|từ bây giờ, sắp tới|Phó từ|これから勉強します。|Bây giờ tôi sẽ học.
すてきですね|すてきですね|đẹp quá nhỉ|Cụm giao tiếp|その時計、すてきですね。|Chiếc đồng hồ đó đẹp quá nhỉ.
どうぞお上がりください|どうぞおあがりください|xin mời vào nhà|Cụm giao tiếp|どうぞお上がりください。|Xin mời vào nhà.
～はいかがですか|～はいかがですか|bạn dùng ~ nhé|Mẫu mời|コーヒーはいかがですか。|Bạn dùng cà phê nhé?
スペイン|スペイン|Tây Ban Nha|Tên quốc gia|スペインから来ました。|Tôi đến từ Tây Ban Nha.
失礼します|しつれいします|xin phép, xin thất lễ|Cụm giao tiếp|お先に失礼します。|Tôi xin phép về trước.
いらっしゃい|いらっしゃい|xin mời vào, chào mừng|Cụm đón khách|いらっしゃい。どうぞお上がりください。|Chào mừng. Xin mời vào nhà.
いただきます|いただきます|xin phép dùng bữa|Cụm trước bữa ăn|では、いただきます。|Vậy tôi xin phép dùng bữa.
ごちそうさまでした|ごちそうさまでした|cảm ơn vì bữa ăn|Cụm sau bữa ăn|ごちそうさまでした。おいしかったです。|Cảm ơn vì bữa ăn. Rất ngon.
`,
  ),
  8: supplementalRows(
    8,
    `
すてきな|すてきな|đẹp, tuyệt vời|Tính từ な|京都はすてきな町です。|Kyoto là một thành phố tuyệt vời.
冷たい|つめたい|lạnh khi chạm vào|Tính từ い|冷たい水を飲みます。|Tôi uống nước lạnh.
低い|ひくい|thấp|Tính từ い|この机は低いです。|Cái bàn này thấp.
忙しい|いそがしい|bận rộn|Tính từ い|今日は忙しいです。|Hôm nay tôi bận.
楽しい|たのしい|vui vẻ, thú vị|Tính từ い|日本語の勉強は楽しいです。|Việc học tiếng Nhật rất vui.
赤い|あかい|màu đỏ|Tính từ い|赤い車です。|Đó là chiếc xe màu đỏ.
青い|あおい|màu xanh lam|Tính từ い|海は青いです。|Biển xanh.
山|やま|núi|Danh từ|富士山は高い山です。|Núi Phú Sĩ là ngọn núi cao.
町|まち|thị trấn, thành phố|Danh từ|奈良は静かな町です。|Nara là một thành phố yên tĩnh.
食べ物|たべもの|đồ ăn|Danh từ|日本の食べ物はおいしいです。|Đồ ăn Nhật ngon.
所|ところ|nơi, chỗ|Danh từ|ここは静かな所です。|Đây là một nơi yên tĩnh.
レストラン|レストラン|nhà hàng|Danh từ|あのレストランは有名です。|Nhà hàng kia nổi tiếng.
お仕事|おしごと|công việc|Danh từ|お仕事はどうですか。|Công việc của bạn thế nào?
そして|そして|và, hơn nữa|Liên từ|この町は静かです。そして、きれいです。|Thành phố này yên tĩnh và đẹp.
～が、～|～が、～|~ nhưng ~|Mẫu nối câu|日本語は難しいですが、おもしろいです。|Tiếng Nhật khó nhưng thú vị.
もう一杯いかがですか|もういっぱい いかがですか|bạn dùng thêm một cốc nhé|Cụm giao tiếp|コーヒーをもう一杯いかがですか。|Bạn dùng thêm một cốc cà phê nhé?
けっこうです|けっこうです|thôi, tôi đủ rồi|Cụm giao tiếp|いいえ、けっこうです。|Không, tôi đủ rồi.
もう～ですね|もう～ですね|đã đến lúc ~ rồi nhỉ|Mẫu hội thoại|もう九時ですね。|Đã 9 giờ rồi nhỉ.
またいらっしゃってください|またいらっしゃってください|xin hãy lại đến chơi|Cụm giao tiếp|またいらっしゃってください。|Xin hãy lại đến chơi.
金閣寺|きんかくじ|chùa Kinkakuji|Tên địa danh|金閣寺は京都にあります。|Chùa Kinkakuji ở Kyoto.
寮|りょう|ký túc xá|Danh từ|学生の寮は駅の近くです。|Ký túc xá sinh viên ở gần ga.
お元気ですか|おげんきですか|bạn có khỏe không|Cụm hỏi thăm|田中さん、お元気ですか。|Anh Tanaka có khỏe không?
そろそろ失礼します|そろそろしつれいします|tôi xin phép về|Cụm kết thúc cuộc gặp|もう九時ですから、そろそろ失礼します。|Đã 9 giờ rồi nên tôi xin phép về.
`,
  ),
  9: supplementalRows(
    9,
    `
旅行|りょこう|du lịch, chuyến đi|Danh từ hoạt động|旅行が好きです。|Tôi thích du lịch.
クラシック|クラシック|nhạc cổ điển|Danh từ|クラシックが好きです。|Tôi thích nhạc cổ điển.
ジャズ|ジャズ|nhạc jazz|Danh từ|ジャズをよく聞きます。|Tôi thường nghe nhạc jazz.
ひらがな|ひらがな|chữ Hiragana|Danh từ|ひらがなが分かります。|Tôi hiểu chữ Hiragana.
かたかな|かたかな|chữ Katakana|Danh từ|かたかなを読みます。|Tôi đọc chữ Katakana.
ローマ字|ローマじ|chữ La-tinh|Danh từ|ローマ字で名前を書きます。|Tôi viết tên bằng chữ La-tinh.
チケット|チケット|vé|Danh từ|コンサートのチケットがあります。|Tôi có vé hòa nhạc.
ご主人|ごしゅじん|chồng của người khác|Danh từ gia đình|ご主人は会社員ですか。|Chồng chị là nhân viên công ty phải không?
夫|おっと|chồng của tôi|Danh từ gia đình|夫はスポーツが好きです。|Chồng tôi thích thể thao.
奥さん|おくさん|vợ của người khác|Danh từ gia đình|田中さんの奥さんは料理が上手です。|Vợ anh Tanaka nấu ăn giỏi.
妻|つま|vợ của tôi|Danh từ gia đình|妻は音楽が好きです。|Vợ tôi thích âm nhạc.
家内|かない|vợ của tôi|Danh từ gia đình|家内は日本語が分かります。|Vợ tôi hiểu tiếng Nhật.
子ども|こども|trẻ em, con cái|Danh từ|子どもが二人います。|Tôi có hai người con.
早く|はやく|sớm|Phó từ|毎朝早く起きます。|Mỗi sáng tôi dậy sớm.
速く|はやく|nhanh|Phó từ|速く歩きます。|Tôi đi bộ nhanh.
貸してください|かしてください|hãy cho tôi mượn|Cụm giao tiếp|辞書を貸してください。|Hãy cho tôi mượn từ điển.
ああ|ああ|à, ồ|Thán từ|ああ、分かりました。|À, tôi hiểu rồi.
いっしょにいかがですか|いっしょにいかがですか|bạn đi cùng nhé|Cụm mời|映画をいっしょにいかがですか。|Bạn đi xem phim cùng nhé?
だめですか|だめですか|không được sao|Cụm giao tiếp|土曜日はだめですか。|Thứ Bảy không được sao?
細かいお金|こまかいおかね|tiền lẻ|Cụm danh từ|細かいお金がありますか。|Bạn có tiền lẻ không?
また今度お願いします|またこんどおねがいします|hẹn dịp khác nhé|Cụm từ chối lịch sự|きょうはちょっと。また今度お願いします。|Hôm nay tôi hơi bận. Hẹn dịp khác nhé.
`,
  ),
  10: supplementalRows(
    10,
    `
パンダ|パンダ|gấu trúc|Danh từ|公園にパンダがいます。|Trong công viên có gấu trúc.
象|ぞう|con voi|Danh từ|動物園に象がいます。|Trong sở thú có voi.
ATM|エーティーエム|máy ATM|Danh từ|銀行の中にATMがあります。|Trong ngân hàng có máy ATM.
コンビニ|コンビニ|cửa hàng tiện lợi|Danh từ|駅の近くにコンビニがあります。|Gần ga có cửa hàng tiện lợi.
ナンプラー|ナンプラー|nước mắm Thái|Danh từ|ナンプラーは冷蔵庫の中です。|Nước mắm Thái ở trong tủ lạnh.
一番下|いちばんした|dưới cùng|Cụm vị trí|箱は一番下にあります。|Cái hộp ở dưới cùng.
すみません|すみません|xin lỗi, cảm ơn vì đã làm phiền|Cụm giao tiếp|すみません。お願いします。|Xin lỗi đã làm phiền. Nhờ bạn nhé.
`,
  ),
  11: supplementalRows(
    11,
    `
クラス|クラス|lớp học|Danh từ|クラスに学生が二十人います。|Trong lớp có 20 sinh viên.
かしこまりました|かしこまりました|vâng, tôi đã rõ|Cụm giao tiếp lịch sự|はい、かしこまりました。|Vâng, tôi đã rõ.
オーストラリア|オーストラリア|Úc|Tên quốc gia|オーストラリアまで航空便で送ります。|Tôi gửi đến Úc bằng đường hàng không.
どのくらい|どのくらい|bao lâu, bao nhiêu|Từ để hỏi|日本語をどのくらい勉強しましたか。|Bạn đã học tiếng Nhật bao lâu?
いいお天気ですね|いいおてんきですね|thời tiết đẹp nhỉ|Cụm giao tiếp|きょうはいいお天気ですね。|Hôm nay thời tiết đẹp nhỉ.
行ってらっしゃい|いってらっしゃい|đi nhé, đi rồi về nhé|Cụm tiễn người đi|行ってらっしゃい。気をつけて。|Đi nhé. Hãy cẩn thận.
`,
  ),
  12: supplementalRows(
    12,
    `
祇園祭|ぎおんまつり|lễ hội Gion|Tên lễ hội|祇園祭は有名です。|Lễ hội Gion nổi tiếng.
わあ、すごい人ですね|わあ、すごいひとですね|ồ, đông người thật|Cụm cảm thán|わあ、すごい人ですね。|Ồ, đông người thật.
`,
  ),
  13: supplementalRows(
    13,
    `
のどが渇きます|のどがかわきます|khát nước|Cụm động từ|暑いですから、のどが渇きました。|Vì trời nóng nên tôi khát nước.
おなかがすきます|おなかがすきます|đói bụng|Cụm động từ|昼ごはんの前におなかがすきました。|Trước bữa trưa tôi đã đói bụng.
～でございます|～でございます|là ~ (cách nói lịch sự của です)|Mẫu kính ngữ|こちらは受付でございます。|Đây là quầy lễ tân ạ.
`,
  ),
  14: supplementalRows(
    14,
    `
電気|でんき|điện, đèn điện|Danh từ|電気をつけてください。|Hãy bật đèn.
信号を右へ曲がってください|しんごうをみぎへまがってください|hãy rẽ phải ở đèn giao thông|Cụm chỉ đường|信号を右へ曲がってください。|Hãy rẽ phải ở đèn giao thông.
`,
  ),
  15: supplementalRows(
    15,
    `
電子辞書|でんしじしょ|từ điển điện tử|Danh từ|電子辞書を使ってもいいですか。|Tôi dùng từ điển điện tử được không?
`,
  ),
  16: supplementalRows(
    16,
    `
口|くち|miệng|Danh từ|口を開けてください。|Hãy mở miệng.
おなか|おなか|bụng|Danh từ|おなかが痛いです。|Tôi đau bụng.
背|せ|chiều cao, vóc dáng|Danh từ|兄は背が高いです。|Anh trai tôi cao.
どれ|どれ|cái nào trong từ ba cái trở lên|Từ để hỏi|あなたのかばんはどれですか。|Cặp của bạn là cái nào?
すごいですね|すごいですね|tuyệt thật, đáng nể thật|Cụm giao tiếp|日本語が上手ですね。すごいですね。|Bạn giỏi tiếng Nhật nhỉ. Tuyệt thật.
まだまだです|まだまだです|tôi vẫn còn phải cố gắng nhiều|Cụm giao tiếp|いいえ、まだまだです。|Không đâu, tôi vẫn còn phải cố gắng nhiều.
お引き出しですか|おひきだしですか|quý khách muốn rút tiền phải không|Cụm giao tiếp lịch sự|お引き出しですか。|Quý khách muốn rút tiền phải không?
まず|まず|trước hết|Phó từ|まず、カードを入れてください。|Trước hết, hãy cho thẻ vào.
金額|きんがく|số tiền|Danh từ|金額を確認してください。|Hãy xác nhận số tiền.
確認|かくにん|sự xác nhận, kiểm tra|Danh từ hoạt động|名前を確認します。|Tôi kiểm tra tên.
ボタン|ボタン|nút bấm|Danh từ|このボタンを押してください。|Hãy bấm nút này.
JR|ジェイアール|Đường sắt Nhật Bản JR|Danh từ riêng thông dụng|JRで京都へ行きます。|Tôi đi Kyoto bằng tàu JR.
雪祭り|ゆきまつり|lễ hội tuyết|Danh từ|雪祭りを見学しました。|Tôi đã tham quan lễ hội tuyết.
お寺|おてら|chùa|Danh từ|京都で古いお寺を見ました。|Tôi đã xem một ngôi chùa cổ ở Kyoto.
～番|～ばん|số thứ tự ~|Hậu tố số đếm|三番のバスに乗ります。|Tôi lên xe buýt số ba.
`,
  ),
  17: supplementalRows(
    17,
    `
二、三～|に、さん～|hai hoặc ba ~|Cụm số lượng|二、三日休んでください。|Hãy nghỉ hai hoặc ba ngày.
ですから|ですから|vì vậy, do đó|Liên từ|熱があります。ですから、休みます。|Tôi bị sốt. Vì vậy tôi nghỉ.
どうしましたか|どうしましたか|bạn bị sao vậy|Cụm giao tiếp|どうしましたか。おなかが痛いです。|Bạn bị sao vậy? Tôi đau bụng.
のど|のど|cổ họng|Danh từ|のどが痛いです。|Tôi đau họng.
お大事に|おだいじに|chúc mau khỏe, hãy giữ gìn sức khỏe|Cụm giao tiếp|どうぞお大事に。|Chúc bạn mau khỏe.
`,
  ),
  18: supplementalRows(
    18,
    `
～メートル|～メートル|~ mét|Đơn vị độ dài|百メートル泳ぐことができます。|Tôi có thể bơi 100 mét.
インターネット|インターネット|Internet|Danh từ|インターネットで予約します。|Tôi đặt chỗ qua Internet.
へえ|へえ|ồ, thật sao|Thán từ|へえ、それはおもしろいですね。|Ồ, chuyện đó thú vị nhỉ.
それはおもしろいですね|それはおもしろいですね|chuyện đó thú vị nhỉ|Cụm giao tiếp|そのニュースはおもしろいですね。|Tin đó thú vị nhỉ.
お祈り|おいのり|việc cầu nguyện|Danh từ|寝る前にお祈りをします。|Tôi cầu nguyện trước khi ngủ.
故郷|ふるさと|quê hương|Danh từ|私の故郷は静かな町です。|Quê tôi là một thị trấn yên tĩnh.
`,
  ),
  19: supplementalRows(
    19,
    `
練習|れんしゅう|sự luyện tập|Danh từ hoạt động|毎日日本語を練習します。|Mỗi ngày tôi luyện tiếng Nhật.
`,
  ),
  21: supplementalRows(
    21,
    `
うそ|うそ|lời nói dối|Danh từ|それはうそだと思います。|Tôi nghĩ đó là lời nói dối.
放送|ほうそう|phát sóng, chương trình phát thanh truyền hình|Danh từ|テレビで試合を放送します。|Trận đấu được phát trên ti vi.
アニメ|アニメ|phim hoạt hình Nhật Bản|Danh từ|日本のアニメはおもしろいです。|Anime Nhật Bản thú vị.
マンガ|マンガ|truyện tranh|Danh từ|このマンガを読みました。|Tôi đã đọc truyện tranh này.
夢|ゆめ|giấc mơ, ước mơ|Danh từ|私の夢は医者になることです。|Ước mơ của tôi là trở thành bác sĩ.
天才|てんさい|thiên tài|Danh từ|あの人は天才だと思います。|Tôi nghĩ người đó là thiên tài.
地球|ちきゅう|Trái Đất|Danh từ|地球は丸いです。|Trái Đất hình tròn.
月|つき|Mặt Trăng|Danh từ|月はきれいです。|Mặt Trăng đẹp.
久しぶりですね|ひさしぶりですね|lâu rồi không gặp|Cụm giao tiếp|久しぶりですね。お元気ですか。|Lâu rồi không gặp. Bạn khỏe không?
～でも飲みませんか|～でものみませんか|uống gì đó nhé|Mẫu rủ rê|コーヒーでも飲みませんか。|Chúng ta uống cà phê hay gì đó nhé?
もう帰らないと|もうかえらないと|tôi phải về rồi|Cụm hội thoại|もう帰らないと。|Tôi phải về rồi.
カンガルー|カンガルー|chuột túi|Danh từ|オーストラリアにカンガルーがいます。|Ở Úc có chuột túi.
本当|ほんとう|sự thật, thật|Danh từ · Phó từ|それは本当だと思います。|Tôi nghĩ điều đó là thật.
`,
  ),
  22: supplementalRows(
    22,
    `
ケーキ|ケーキ|bánh ngọt|Danh từ|これは母が作ったケーキです。|Đây là chiếc bánh mẹ tôi làm.
お弁当|おべんとう|cơm hộp|Danh từ|これは会社で食べるお弁当です。|Đây là cơm hộp tôi ăn ở công ty.
ロボット|ロボット|rô-bốt|Danh từ|これは日本で作ったロボットです。|Đây là rô-bốt được chế tạo ở Nhật.
都合|つごう|sự thuận tiện, tình hình sắp xếp|Danh từ|明日は都合がいいです。|Ngày mai tôi sắp xếp được.
えーと|えーと|ờ, để xem nào|Thán từ|えーと、田中さんはどの人ですか。|Ờ, anh Tanaka là người nào?
お探しですか|おさがしですか|bạn đang tìm gì phải không|Cụm giao tiếp lịch sự|どんな部屋をお探しですか。|Bạn đang tìm căn phòng như thế nào?
では|では|vậy thì|Liên từ hội thoại|では、この部屋はいかがですか。|Vậy thì căn phòng này thế nào?
`,
  ),
  23: supplementalRows(
    23,
    `
お湯|おゆ|nước nóng|Danh từ|このつまみを回すと、お湯が出ます。|Vặn núm này thì nước nóng chảy ra.
`,
  ),
  24: supplementalRows(
    24,
    `
引っ越し|ひっこし|việc chuyển nhà|Danh từ hoạt động|友達が引っ越しを手伝ってくれました。|Bạn đã giúp tôi chuyển nhà.
ホームステイ|ホームステイ|ở cùng gia đình bản xứ|Danh từ|日本でホームステイをしました。|Tôi đã ở cùng gia đình bản xứ tại Nhật.
自分で|じぶんで|tự mình|Cụm trạng ngữ|自分で料理を作りました。|Tôi đã tự nấu ăn.
ほかに|ほかに|ngoài ra, còn gì khác|Phó từ|ほかに何かありますか。|Ngoài ra còn gì khác không?
母の日|ははのひ|Ngày của Mẹ|Danh từ|母の日に花をあげました。|Tôi đã tặng hoa vào Ngày của Mẹ.
`,
  ),
  25: supplementalRows(
    25,
    `
もしもし|もしもし|a-lô|Cụm dùng khi gọi điện|もしもし、田中さんですか。|A-lô, có phải anh Tanaka không?
ベトナム|ベトナム|Việt Nam|Tên quốc gia|ベトナムへ留学したいです。|Tôi muốn du học ở Việt Nam.
暇|ひま|rảnh rỗi, thời gian rảnh|Tính từ な|暇だったら、遊びに来てください。|Nếu rảnh, hãy đến chơi.
`,
  ),
};
