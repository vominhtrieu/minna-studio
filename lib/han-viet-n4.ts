/** Additional readings for I/II, reviewed against the base wordlist and Unihan.
 * Japanese shinjitai use the reading of their traditional counterpart.
 * These are Sino-Vietnamese sounds, not the Vietnamese meaning of the word.
 */
export const additionalHanViet: Record<string, string[]> = Object.fromEntries(
  `
韓:hàn 椅:ỷ 販:phiến 火:hỏa 発:phát 普:phổ 賀:hạ 状:trạng 閣:các 主:chủ 祇:kỳ 額:ngạch 郷:hương 放:phóng 才:tài 弁:biện
診:chẩn 財:tài 捜:sưu 授:thụ 拾:thập 盆:bồn 踊:dũng 平:bình 接:tiếp 片:phiến 燃:nhiên 横:hoành 瓶:bình 缶:phẫu 宇:vũ 宙:trụ 怖:bố
飼:tự 走:tẩu 声:thanh 波:ba 具:cụ 景:cảnh 形:hình 例:lệ 由:do 星:tinh 将:tương/tướng 偉:vĩ 容:dung 力:lực 給:cấp 組:tổ 息:tức 娘:nương 誘:dụ 飯:phạn
壊:hoại 割:cát 折:chiết 枝:chi 破:phá 汚:ô 落:lạc 掛:quải 替:thế 皿:mãnh 類:loại 原:nguyên 稿:cảo 側:trắc 席:tịch 辺:biên 網:võng 震:chấn 壁:bích 針:châm 指:chỉ 倒:đảo 西:tây
飾:sức 並:tịnh 植:thực 戻:lệ 決:quyết 復:phục 法:pháp 講:giảng 義:nghĩa 周:chu 隅:ngung 非:phi 常:thường 懐:hoài 灯:đăng 続:tục 申:thân 憩:khế 展:triển 覧:lãm 式:thức 葬:táng 支:chi 進:tiến 泉:tuyền 南:nam 冊:sách 村:thôn 卒:tốt/thốt
成:thành 功:công 敗:bại 格:cách 晴:tình 陽:dương 吹:xuy 胃:vị 宝:bảo 恋:luyến 愛:ái 石:thạch 逃:đào 騒:tao 投:đầu 守:thủ 規:quy 則:tắc 担:đảm 締:đế 徐:từ 募:mộ 反:phản 罰:phạt 助:trợ 悲:bi
質:chất 矢:thỉ 印:ấn 紺:cám 黄:hoàng 載:tải 苦:khổ 材:tài 個:cá 適:thích 煮:chử 描:miêu 咲:tiếu 向:hướng 歴:lịch 史:sử 許:hứa 可:khả 設:thiết 炊:xuy 器:khí 詳:tường 朱:chu 係:hệ 仲:trọng
遭:tao 貯:trữ 過:quá 慣:quán 腐:hủ 剣:kiếm 柔:nhu 避:tị 絶:tuyệt 対:đối 様:dạng 増:tăng 紀:kỷ 珍:trân 汽:khí 勢:thế 迷:mê 褒:bao 招:chiêu 頼:lại 踏:đạp 輸:thâu 米:mễ 油:du 翻:phiên 訳:dịch 麦:mạch 泥:nê 棒:bổng 官:quan
遺:di 輪:luân 彫:điêu 豪:hào 華:hoa 懸:huyền 命:mệnh 倉:thương 盗:đạo 退:thoái 源:nguyên 酔:túy 岸:ngạn 整:chỉnh 双:song 似:tự 性:tính 優:ưu 齢:linh 死:tử 離:ly 複:phức 魔:ma 硬:ngạnh 軟:nhuyễn 恥:sỉ 津:tân 雷:lôi
操:thao 代:đại 伺:tứ 途:đồ 洋:dương 化:hóa 的:đích 測:trắc 量:lượng 到:đáo 報:báo 裏:lý 傷:thương 寄:ký 譲:nhượng 以:dĩ 績:tích 件:kiện 爆:bộc 積:tích 犯:phạm 祝:chúc 玉:ngọc 孫:tôn 興:hưng/hứng 情:tình 猿:viên 幼:ấu 稚:trĩ 房:phòng 管:quản 宅:trạch 幸:hạnh 姫:cơ 陸:lục
包:bao 沸:phí 混:hỗn 算:toán 費:phí 護:hộ 律:luật 戦:chiến 争:tranh 論:luận 栓:xuyên 抜:bạt 詰:cật 査:tra 完:hoàn 減:giảm 謝:tạ 笑:tiếu 泣:khấp 滑:hoạt 濃:nồng 薄:bạc 厚:hậu 涙:lệ 倍:bội 順:thuận 序:tự 縁:duyên
収:thu 看:khán 板:bản 位:vị 悩:não 鳴:minh 届:giới 因:nhân 慌:hoảng 亡:vong 厳:nghiêm 科:khoa 救:cứu 賛:tán 演:diễn 粧:trang 塾:thục 徒:đồ 営:doanh 召:triệu 存:tồn 停:đình 胞:bào 技:kỹ 賞:thưởng 尊:tôn 敬:kính 拝:bái 再:tái 己:kỷ 緊:khẩn 応:ứng 援:viện 感:cảm 惑:hoặc
`
    .trim()
    .split(/\s+/u)
    .map((entry) => {
      const [kanji, reading] = entry.split(':');
      return [kanji, reading.split('/')];
    }),
);
